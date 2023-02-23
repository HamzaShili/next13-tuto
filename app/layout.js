import './globals.css'
import NavLink from '@/components/nav-link';

export default function RootLayout({ children }) {
  return (
    <html className='bg-gray-900 text-gray-100 antialiased'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className='border-b p-4'>
          <nav className='space-x-4'>
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/movies'>Movies</NavLink>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
