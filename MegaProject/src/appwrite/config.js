import conf from "../conf/conf";
import { ID, Databases, Client, Storage, Query } from 'appwrite'

export class Service {
    client = new Client()
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({ title, content, slug, featuredImg, status, userId }) {

        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log('Appwrite Serice :: createPost :: error', error);

        }

    }

    async updatePost(slug, { title, content, featuredImg, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    status,
                }
            )
        } catch (error) {
            console.log('Appwrite Serice :: updatePost :: error', error);

        }
    }

    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
            
        } catch (error) {
            console.log('Appwrite Serice :: deletePost :: error', error);
            return  false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log('Appwrite Serice :: getPost :: error', error);
            return false
        }
    }
    
    async listPosts(){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId
                [
                    Query.equal("status", "active")
                ]
            )
        }catch(error){
            console.log('Appwrite Serice :: listPosts :: error', error);
            return false
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.uploadFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log('Appwrite Serice :: uploadFile :: error', error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log('Appwrite Serice :: deleteFile :: error', error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}



const service = new Service
export default service