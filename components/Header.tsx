import Link from 'next/link'
import AppleIcon from '@mui/icons-material/Apple';
import AdbIcon from '@mui/icons-material/Adb';
import styled from '@emotion/styled';

const HeaderContainer = styled('nav')({
    backgroundColor: '#0b5394ff',
    margin: '0 auto',
    paddingTop: '30px',
    paddingBottom: '30px',
    color: '#f2f2f2',
    letterSpacing: '0.08rem',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
});

export default function Header() {
  return (
    // <header className="text-gray-600 body-font bg-zinc-800">
    //   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    //     <Link href={'/'} passHref>
    //       <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    //         <span className="ml-4 text-xl text-white">App.Dev Docs</span>
    //       </a>
    //     </Link>
    //   </div>
    // </header>
    <HeaderContainer>
      <div className="flex items-center flex-shrink-0 text-white">
        <Link href={'/'} passHref>
          <a className="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-2">
            <span className="transition ease-in-out delay-150 text-white hover:text-zinc-600 duration-30 sm:ml-0 md:ml-0 lg:ml-0 xl:ml-0 2xl:ml-0 ml: text-xl">
              <AppleIcon sx={{ m: 0 }} />
              <AdbIcon sx={{ m: 1 }} />
              Mobile Tech
            </span>
          </a>
        </Link>
      </div>
      {/* <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Docs
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Examples
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Blog
          </a>
        </div>
        <div>
          <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
        </div>
      </div> */}
    </HeaderContainer>
  )
}