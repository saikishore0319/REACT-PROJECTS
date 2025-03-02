import React, { act } from 'react'
import { Container, LogoutBtn } from '../index'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

function Header() {

  const authStatus = useSelector((state) => { state.auth.status }) //get the authstatus from the authSlice.js
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: '/', //slugs are used to navigate to different urls using the useNavigate() hook
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus, //if authstaus is false render login
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus,
    },
    {
      name: 'All posts',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: 'Add post',
      slug: 'add-post',
      active: authStatus
    },
  ]
  return (
    <header className='py-3 bg-gray-500 shadow'>
      <Container>
        <nav className='flex'>
          <ul className='flex ml-auto'>
            {navItems.map((item) => (
              item.active ? (
                <li onClick={() => navigate(item.slug)}>
                  <button
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >{item.name}</button>
                </li>
              ) : null
            ))}
            {authStatus && ( //render logout button if authStatus is true(means that the user is loged in) else dont render it in the header
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header