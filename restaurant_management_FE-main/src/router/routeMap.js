import React from "react";

export const routeMap = [
  {
    label: 'Dashboard',
    icon: (
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16" width="18" height="16">
        <g fill="currentColor">
          <path d="M17.994 7.984a1.01 1.01 0 0 1-1 1.003h-1l.022 5.006c0 .084-.006.169-.016.253v.504A1.25 1.25 0 0 1 14.75 16h-.5c-.034 0-.069 0-.103-.003-.044.003-.087.003-.131.003H12.25A1.25 1.25 0 0 1 11 14.75V12a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2.75A1.25 1.25 0 0 1 5.75 16H4.003c-.047 0-.094-.003-.141-.006a1.4 1.4 0 0 1-.113.006h-.5a1.25 1.25 0 0 1-1.25-1.25v-3.5c0-.028 0-.059.003-.087V8.988H1c-.563 0-1-.438-1-1.003 0-.281.094-.531.313-.75L8.325.25c.219-.219.469-.25.688-.25s.469.063.656.219l7.981 7.016c.25.219.375.469.344.75z"/>
        </g>
      </svg>

    ),
    path: '/',
    routeActive: ['/'],
    permissions: [
      'home_page',
    ],
  },
  {
    label: 'Oder',
    icon: (
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" width="20" height="16">
        <g fill="currentColor">
          <path d="M4.5 5A2.5 2.5 0 1 1 4.499.001 2.5 2.5 0 0 1 4.5 5zM16 5a2.5 2.5 0 1 1-.001-4.999A2.5 2.5 0 0 1 16 5zM0 9.335A3.336 3.336 0 0 1 3.335 6H4.67c.498 0 .969.11 1.394.302a3.999 3.999 0 0 0 1.294 3.696H.666A.666.666 0 0 1 0 9.335zM12.666 10h-.021a3.992 3.992 0 0 0 1.294-3.696 3.287 3.287 0 0 1 1.394-.302h1.335a3.336 3.336 0 0 1 3.335 3.335c0 .369-.3.666-.666.666h-6.67zm.335-3A3 3 0 1 1 7 6.999 3 3 0 0 1 13 7zM4 15.166A4.168 4.168 0 0 1 8.166 11h3.669a4.168 4.168 0 0 1 4.166 4.166.834.834 0 0 1-.834.834H4.834A.834.834 0 0 1 4 15.166z"/>
        </g>
      </svg>
    ),
    path: '/oder',
    routeActive: ['/oder'],
    permissions: [
      'oder_page',
    ]
  },
  {
    label: 'Table Management',
    icon: (
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" width="20" height="16">
        <g fill="currentColor">
          <path d="M4.5 5A2.5 2.5 0 1 1 4.499.001 2.5 2.5 0 0 1 4.5 5zM16 5a2.5 2.5 0 1 1-.001-4.999A2.5 2.5 0 0 1 16 5zM0 9.335A3.336 3.336 0 0 1 3.335 6H4.67c.498 0 .969.11 1.394.302a3.999 3.999 0 0 0 1.294 3.696H.666A.666.666 0 0 1 0 9.335zM12.666 10h-.021a3.992 3.992 0 0 0 1.294-3.696 3.287 3.287 0 0 1 1.394-.302h1.335a3.336 3.336 0 0 1 3.335 3.335c0 .369-.3.666-.666.666h-6.67zm.335-3A3 3 0 1 1 7 6.999 3 3 0 0 1 13 7zM4 15.166A4.168 4.168 0 0 1 8.166 11h3.669a4.168 4.168 0 0 1 4.166 4.166.834.834 0 0 1-.834.834H4.834A.834.834 0 0 1 4 15.166z"/>
        </g>
      </svg>
    ),
    path: '/table',
    routeActive: ['/table'],
    permissions: [
      'table_page',
    ]
  },
  {
    label: 'User Management',
    icon: (
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" width="20" height="16">
        <g fill="currentColor">
          <path d="M4.5 5A2.5 2.5 0 1 1 4.499.001 2.5 2.5 0 0 1 4.5 5zM16 5a2.5 2.5 0 1 1-.001-4.999A2.5 2.5 0 0 1 16 5zM0 9.335A3.336 3.336 0 0 1 3.335 6H4.67c.498 0 .969.11 1.394.302a3.999 3.999 0 0 0 1.294 3.696H.666A.666.666 0 0 1 0 9.335zM12.666 10h-.021a3.992 3.992 0 0 0 1.294-3.696 3.287 3.287 0 0 1 1.394-.302h1.335a3.336 3.336 0 0 1 3.335 3.335c0 .369-.3.666-.666.666h-6.67zm.335-3A3 3 0 1 1 7 6.999 3 3 0 0 1 13 7zM4 15.166A4.168 4.168 0 0 1 8.166 11h3.669a4.168 4.168 0 0 1 4.166 4.166.834.834 0 0 1-.834.834H4.834A.834.834 0 0 1 4 15.166z"/>
        </g>
      </svg>
    ),
    path: '/employee',
    routeActive: ['/employee'],
    permissions: [
      'employee_page',
    ]
  },
  {
    label: 'Category Management',
    icon: (
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" width="20" height="16">
        <g fill="currentColor">
          <path d="M4.5 5A2.5 2.5 0 1 1 4.499.001 2.5 2.5 0 0 1 4.5 5zM16 5a2.5 2.5 0 1 1-.001-4.999A2.5 2.5 0 0 1 16 5zM0 9.335A3.336 3.336 0 0 1 3.335 6H4.67c.498 0 .969.11 1.394.302a3.999 3.999 0 0 0 1.294 3.696H.666A.666.666 0 0 1 0 9.335zM12.666 10h-.021a3.992 3.992 0 0 0 1.294-3.696 3.287 3.287 0 0 1 1.394-.302h1.335a3.336 3.336 0 0 1 3.335 3.335c0 .369-.3.666-.666.666h-6.67zm.335-3A3 3 0 1 1 7 6.999 3 3 0 0 1 13 7zM4 15.166A4.168 4.168 0 0 1 8.166 11h3.669a4.168 4.168 0 0 1 4.166 4.166.834.834 0 0 1-.834.834H4.834A.834.834 0 0 1 4 15.166z"/>
        </g>
      </svg>
    ),
    path: '/category',
    routeActive: ['/category'],
    permissions: [
      'category_page',
    ]
  },
  {
    label: 'Menu Management',
    icon: (
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" width="20" height="16">
        <g fill="currentColor">
          <path d="M4.5 5A2.5 2.5 0 1 1 4.499.001 2.5 2.5 0 0 1 4.5 5zM16 5a2.5 2.5 0 1 1-.001-4.999A2.5 2.5 0 0 1 16 5zM0 9.335A3.336 3.336 0 0 1 3.335 6H4.67c.498 0 .969.11 1.394.302a3.999 3.999 0 0 0 1.294 3.696H.666A.666.666 0 0 1 0 9.335zM12.666 10h-.021a3.992 3.992 0 0 0 1.294-3.696 3.287 3.287 0 0 1 1.394-.302h1.335a3.336 3.336 0 0 1 3.335 3.335c0 .369-.3.666-.666.666h-6.67zm.335-3A3 3 0 1 1 7 6.999 3 3 0 0 1 13 7zM4 15.166A4.168 4.168 0 0 1 8.166 11h3.669a4.168 4.168 0 0 1 4.166 4.166.834.834 0 0 1-.834.834H4.834A.834.834 0 0 1 4 15.166z"/>
        </g>
      </svg>
    ),
    path: '/menu',
    routeActive: ['/menu'],
    permissions: [
      'menu_page',
    ]
  },
  {
    label: 'Customer Management',
    icon: (
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" width="20" height="16">
        <g fill="currentColor">
          <path d="M4.5 5A2.5 2.5 0 1 1 4.499.001 2.5 2.5 0 0 1 4.5 5zM16 5a2.5 2.5 0 1 1-.001-4.999A2.5 2.5 0 0 1 16 5zM0 9.335A3.336 3.336 0 0 1 3.335 6H4.67c.498 0 .969.11 1.394.302a3.999 3.999 0 0 0 1.294 3.696H.666A.666.666 0 0 1 0 9.335zM12.666 10h-.021a3.992 3.992 0 0 0 1.294-3.696 3.287 3.287 0 0 1 1.394-.302h1.335a3.336 3.336 0 0 1 3.335 3.335c0 .369-.3.666-.666.666h-6.67zm.335-3A3 3 0 1 1 7 6.999 3 3 0 0 1 13 7zM4 15.166A4.168 4.168 0 0 1 8.166 11h3.669a4.168 4.168 0 0 1 4.166 4.166.834.834 0 0 1-.834.834H4.834A.834.834 0 0 1 4 15.166z"/>
        </g>
      </svg>
    ),
    path: '/customer',
    routeActive: ['/customer'],
    permissions: [
      'customer_page',
    ]
  },
  {
    label: 'Discount Management',
    icon: (
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" width="20" height="16">
        <g fill="currentColor">
          <path d="M4.5 5A2.5 2.5 0 1 1 4.499.001 2.5 2.5 0 0 1 4.5 5zM16 5a2.5 2.5 0 1 1-.001-4.999A2.5 2.5 0 0 1 16 5zM0 9.335A3.336 3.336 0 0 1 3.335 6H4.67c.498 0 .969.11 1.394.302a3.999 3.999 0 0 0 1.294 3.696H.666A.666.666 0 0 1 0 9.335zM12.666 10h-.021a3.992 3.992 0 0 0 1.294-3.696 3.287 3.287 0 0 1 1.394-.302h1.335a3.336 3.336 0 0 1 3.335 3.335c0 .369-.3.666-.666.666h-6.67zm.335-3A3 3 0 1 1 7 6.999 3 3 0 0 1 13 7zM4 15.166A4.168 4.168 0 0 1 8.166 11h3.669a4.168 4.168 0 0 1 4.166 4.166.834.834 0 0 1-.834.834H4.834A.834.834 0 0 1 4 15.166z"/>
        </g>
      </svg>
    ),
    path: '/discount',
    routeActive: ['/discount'],
    permissions: [
      'discount_page',
    ]
  },
  {
    label: 'Unit Management',
    icon: (
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" width="20" height="16">
        <g fill="currentColor">
          <path d="M4.5 5A2.5 2.5 0 1 1 4.499.001 2.5 2.5 0 0 1 4.5 5zM16 5a2.5 2.5 0 1 1-.001-4.999A2.5 2.5 0 0 1 16 5zM0 9.335A3.336 3.336 0 0 1 3.335 6H4.67c.498 0 .969.11 1.394.302a3.999 3.999 0 0 0 1.294 3.696H.666A.666.666 0 0 1 0 9.335zM12.666 10h-.021a3.992 3.992 0 0 0 1.294-3.696 3.287 3.287 0 0 1 1.394-.302h1.335a3.336 3.336 0 0 1 3.335 3.335c0 .369-.3.666-.666.666h-6.67zm.335-3A3 3 0 1 1 7 6.999 3 3 0 0 1 13 7zM4 15.166A4.168 4.168 0 0 1 8.166 11h3.669a4.168 4.168 0 0 1 4.166 4.166.834.834 0 0 1-.834.834H4.834A.834.834 0 0 1 4 15.166z"/>
        </g>
      </svg>
    ),
    path: '/unit',
    routeActive: ['/unit'],
    permissions: [
      'unit_page',
    ]
  },
  {
    label: 'Settings',
    icon: (
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" transform="scale(-1 1)" width="16" height="16">
        <g fill="currentColor">
          <path fill="currentColor" d="M5 8c0-1.684 1.316-3 3-3 1.656 0 3 1.316 3 3 0 1.656-1.344 3-3 3-1.684 0-3-1.344-3-3zm3-1.5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8 6.5zM9.159 0a1.5 1.5 0 0 1 1.459 1.148l.244 1.015c.266.13.519.277.759.44l1.003-.295a1.502 1.502 0 0 1 1.725.689l1.159 2.007c.344.6.234 1.359-.266 1.837l-.759.694a6.34 6.34 0 0 1 0 .904l.759.722c.5.478.609 1.238.266 1.837l-1.159 2.006c-.347.6-1.059.884-1.725.691l-1.003-.297a6.617 6.617 0 0 1-.759.441l-.244 1.016a1.502 1.502 0 0 1-1.459 1.147H6.84a1.5 1.5 0 0 1-1.459-1.147l-.244-1.016a6.314 6.314 0 0 1-.759-.441l-1.031.297c-.637.194-1.349-.091-1.695-.691L.493 10.998a1.5 1.5 0 0 1 .265-1.837l.757-.723a6.578 6.578 0 0 1 0-.904L.758 6.84a1.5 1.5 0 0 1-.265-1.837l1.159-2.007c.347-.6 1.059-.885 1.695-.689l1.031.295c.241-.163.494-.31.759-.44l.244-1.015A1.501 1.501 0 0 1 6.841 0H9.16zM6.422 3.237l-.35.147a4.941 4.941 0 0 0-1.1.637l-.303.231-1.718-.506-1.16 2.006 1.297 1.234-.048.375a5.208 5.208 0 0 0 0 1.276l.048.375-1.297 1.234 1.159 2.006 1.718-.506.303.231c.334.256.703.472 1.1.637l.35.147.419 1.738h2.319l.419-1.738.35-.147a4.941 4.941 0 0 0 1.1-.637l.303-.231 1.719.506 1.159-2.006-1.297-1.234.047-.375A4.8 4.8 0 0 0 13 8c0-.216-.013-.428-.041-.637l-.047-.375 1.297-1.234-1.159-2.006-1.719.506-.303-.231a4.903 4.903 0 0 0-1.1-.637l-.35-.147L9.159 1.5H6.84l-.419 1.738z"/>
        </g>
      </svg>
    ),
    path: '',
    routeActive: ['/about', '/contact'],
    permissions: [
      'about_page',
    ],
    children: [
      {
        label: 'About',
        icon: '',
        path: '/about',
        routeActive: ['/about'],
        permissions: ['about_page'],
      },
      {
        label: 'Contact',
        icon: '',
        path: '',
        routeActive: ['/contact'],
        permissions: ['contact_page'],
      },
    ]
  }
]
