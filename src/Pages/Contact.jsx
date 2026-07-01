import React from "react"
import { MdEmail } from "react-icons/md"
import { RxPerson } from "react-icons/rx"
import { MdMailOutline } from "react-icons/md"
import { IoDocumentTextOutline } from "react-icons/io5"
import { MdOutlineEdit } from "react-icons/md"
import { PiTelegramLogoBold } from "react-icons/pi"

const Contact = () => {
  return (
    <section className='relative min-h-screen'>
      <div className='cont-1'>
        <div className='flex flex-col items-center py-10 bg-[#f1fcfa] gap-5 w-full'>
          <h2 className='font-DMmono text-base font-bold text-[#00D0B0] tracking-[2px]'>
            / CONTACT
          </h2>
          <h3 className='font-dm font-bold text-5xl'>Get in touch with us</h3>
          <div className='font-dm text-xm text-[#222831]/70 flex flex-col items-center gap-2'>
            <p>Have a project in mind or want to work together?</p>
            <p>
              Fill out the form bellow or reach me through the contact
              information
            </p>
          </div>
        </div>
        <div className='max-w-7xl px-30 py-20 mx-auto'>
          <div className='w-3/5 shadow-xl rounded-2xl p-8 border-2 border-slate-100'>
            <form className='flex flex-col gap-3'>
              <div>
                <h3 className='font-bold text-gray-600 py-2'>Full Name</h3>
                <div className='relative border-2 border-slate-100 rounded-xl'>
                  <input
                    type='text'
                    placeholder='Enter Your Name'
                    className='py-2 px-4 border-hidden font-dm placeholder:text-xm placeholder:text-gray-400 font-medium outline-none'
                  />
                  <RxPerson className='absolute size-5 right-4 top-1/2 -translate-y-1/2 text-gray-600' />
                </div>
              </div>
              <div>
                <h3 className='font-bold text-gray-600 py-2'>Email Address</h3>
                <div className='relative border-2 border-slate-100 rounded-xl'>
                  <input
                    type='email'
                    placeholder='Enter Your Email'
                    className='py-2 px-4 font-dm placeholder:text-xm placeholder:text-gray-400 outline-none'
                  />
                  <MdMailOutline className='absolute size-5 right-4 top-1/2 -translate-y-1/2 text-gray-500' />
                </div>
              </div>
              <div>
                <h3 className='font-bold text-gray-600 py-2'>Subject</h3>
                <div className='relative border-2 border-slate-100 rounded-xl'>
                  <input
                    type='text'
                    placeholder='Enter Your Subject'
                    className='py-2 px-4 font-dm placeholder:text-xm placeholder:text-gray-400 outline-none'
                  />
                  <IoDocumentTextOutline className='absolute size-5 right-4 top-1/2 -translate-y-1/2 text-gray-600' />
                </div>
              </div>
              <div>
                <h3 className='font-bold text-gray-600 py-2'>Message</h3>
                <div className='relative border-2 border-slate-100 rounded-xl min-h-40 py-4 px-4'>
                  <input
                    placeholder='Your Message'
                    className='font-dm placeholder:text-xm placeholder:text-gray-400 flex justify-start outline-none'
                  ></input>
                  <MdOutlineEdit className='absolute size-5 right-5 top-3/4 -translate-y-1/2 text-gray-600' />
                </div>
              </div>
              <div className='flex items-start'>
                <button className='font-dm px-5 py-3 rounded-xl text-sm font-bold bg-[#00D0B0] text-white flex gap-2 items-center'>
                  <PiTelegramLogoBold className="text-white size-4"/> 
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
