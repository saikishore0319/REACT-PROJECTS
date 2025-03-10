import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
import { Button, RTE, Input, Select } from "../index";
import { useSelector } from "react-redux";
import { service } from "../../appwrite/config";
import { useForm } from "react-hook-form";

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userdata = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ? service.uploadFile(data.image[0]) : null;

      if (file) {
        service.deleteFile(post.featuredImg);
      }

      const dbPost = await service.updatePost(post.$id, {
        ...data,
        featuredImg: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = data.image[0] ? service.uploadFile(data.image[0]) : null;
      if (file) {
        const fileId = file.$id;
        data.featuredImg = fileId;
        const dbPost = await service.createPost({
          ...data,
          userId: userdata.$id,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === 'string')
      return value.trim()
        .toLowerCase()
        .replace('', '-')

    return ''
  }, [])

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'title') {
        setValue('slug', slugTransform(value.title,{shouldValidate : true}))
      }
    }
    )
    return () => {
      subscription.unsubscribe()
    }
  }, [watch, slugTransform, setValue])


  return (
    <form onSubmit={handleSubmit(submit)} className="felx flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label='Title'
          placeHolder = "Title"
          className="mb-4"
          {...register("title",{
            required : true
          })}
        />
        <Input
        label="slug"
        placeHolder = "slug"
        className="mb-4"
        {...register("slug",{
          required : true
        })}
        onInput={(e)=>{
          setValue("slug",slugTransform(e.currentTarget.value),{shouldValidate : true})
        }}
        />
        <RTE
          label="content :"
          name= "content"
          control={control}
          defaultValue={getValues(content)}
        />
      </div>
      <div className="w-1/3 px-2 ">
        <Input
         type="file"
         label="Featured image"
         className="mb-4"
         accept = "image/png image/jpg image/jpeg image/gif"
         {...register("image",{required : !post})}
        />
        {post && (
          <div className="w-full mb-4">
            <img src={service.getFilePreview(post.featuredImg)}
             alt={post.title}
             className="rounded-lg"
             />
          </div>
        )}
        <Select
        options={["active","inactive"]}
        label="status"
        className="mb-4"
        {...register("status",{required : true})}
        />
        <Button
        className="w-full"
        type="submit"
        bgcolour={post?"bg-green-500" : undefined}
        >
          {post?"Update":"Create"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
