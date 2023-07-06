import React from 'react'
// import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <header className='text-gray-700 border-b border-gray-200 '>
      <div className='container flex mx-auto p-5 flex-col items-center md:flex-row'>
        <a href="#" className='font-medium text-gray-900 mb-4 md:mb-0'>
          <span className='text-xl ml-3'>ShinCode</span>
        </a>
        <nav className='md:ml-auto test-base' >
          <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>Home</a>
          <a href="#about" className='mr-5 hover:text-blue-400 duration-300'>About</a>
          <a href="#skills" className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
          <a href="#Blog" className='hover:text-blue-400 duration-300'>Blog</a>
        </nav>
      </div>
      </header>

      <section className='text-gray-700' id='home'>
        <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center'>
          {/* flex-grow: 紫の部分を消しながら全画面表示 */}
          <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
            <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>
              Hi!
              <br />
              I'm ShinCode
              <br />
              Web Developer
            </h1>
            <p className='mb-8 leading-relaxed'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt dignissimos atque  voluptate blanditiis necessitatibus reiciendis tenetur amet? Repudiandae, cupiditate   illum.
            </p>
            <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg   hover:bg-green-600 duration-300'>
              Contact
            </button>
          </div>
          <div className='md:w-1/2 lg:max-w-lg w-5/6'>
            <img src="./img/icon2.jpg " alt="" />
          </div>
        </div>
      </section>

      <section className='text-gray-700 border-t'>
        <div className='container mx-auto px-5 py-24'>
          <div className='text-center mb-20'>
            <h1 className="sm:text-3xl text-2xl font-medium mb-2 text-gray-900">
              About Me
            </h1>
            <p className="pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, velit?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta,
              ad debitis praesentium quis dolore adipisci deleniti. Fugit non
              magni dolorem! Facere debitis rerum qui ut fuga, ullam, ad vitae
              explicabo et ipsa amet consequatur ipsum iure quibusdam numquam
              illo ipsam reiciendis rem sapiente architecto exercitationem,
              labore quaerat. Dolore numquam quam repellendus saepe culpa
              distinctio maiores soluta, pariatur quae alias velit nisi
              corrupti, quod magnam eius. Necessitatibus architecto nobis ipsa,
              excepturi voluptatibus eum velit cum sequi possimus harum sunt
              commodi cumque sint. Enim tempora minima sapiente omnis, qui
              facilis! Sequi, ab ut facere excepturi molestias ipsa, reiciendis
              quisquam, sed eos magni aliquid explicabo. Est vel sequi cum ipsa
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-200 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full w-8 h-8 flex justify-center items-center mr-3'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium'>Web Developer</h2>
                </div>
                <div>
                  <p className="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur architecto dicta non facilis, aliquid placeat ipsam eos, est blanditiis hic recusandae, debitis labore cum velit. Corporis eveniet fugiat maiores hic.
                  </p>
                  <a href="#" className='flex mt-3 text-green-500 items-center'>
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                      d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                      fill="currentColor"
                    />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-200 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full w-8 h-8 flex justify-center items-center mr-3'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium'>Web Developer</h2>
                </div>
                <div>
                  <p className="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur architecto dicta non facilis, aliquid placeat ipsam eos, est blanditiis hic recusandae, debitis labore cum velit. Corporis eveniet fugiat maiores hic.
                  </p>
                  <a href="#" className='flex mt-3 text-green-500 items-center'>
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                      d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                      fill="currentColor"
                    />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-200 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full w-8 h-8 flex justify-center items-center mr-3'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium'>Web Developer</h2>
                </div>
                <div>
                  <p className="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur architecto dicta non facilis, aliquid placeat ipsam eos, est blanditiis hic recusandae, debitis labore cum velit. Corporis eveniet fugiat maiores hic.
                  </p>
                  <a href="#" className='flex mt-3 text-green-500 items-center'>
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                      d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                      fill="currentColor"
                    />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="skill" className="text-gray-700 border-t border-gray-200">
        <div className="flex container px-5 py-24 mx-auto flex-wrap">
          <div className="rounded w-full mb-10 lg:w-1/2 lg:mb-0">
            <img
              src="https://i.ibb.co/ZHGrn4B/work4.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:py-6 lg:pl-12 lg:text-left lg:w-1/2 w-full">
            <h1 className="sm:text-3xl text-2xl font-medium text-gray-900 mb-10">
              My Skills
            </h1>
            <div className="">
              <div className="w-full">
                <h2>HTML</h2>
                <div className="shadow w-full bg-green-100 mt-2">
                  <div
                    className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "85%" }}
                  >
                    85%
                  </div>
                </div>
                <h2 className="pt-5">CSS</h2>
                <div className="shadow w-full bg-green-100 mt-2">
                  <div
                    className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "80%" }}
                  >
                    80%
                  </div>
                </div>
                <h2 className="pt-5">Javascript</h2>
                <div className="shadow w-full bg-green-100 mt-2">
                  <div
                    className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "65%" }}
                  >
                    65%
                  </div>
                </div>
                <h2 className="pt-5">Tailwindcss</h2>
                <div className="shadow w-full bg-green-100 mt-2">
                  <div
                    className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "75%" }}
                  >
                    75%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
