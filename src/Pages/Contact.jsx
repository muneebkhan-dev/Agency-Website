import React from "react"
import { MdEmail } from "react-icons/md"
import { RxPerson } from "react-icons/rx"
import { MdMailOutline } from "react-icons/md"
import { IoDocumentTextOutline } from "react-icons/io5"
import { MdOutlineEdit } from "react-icons/md"
import { PiTelegramLogoBold } from "react-icons/pi"
import { IoPersonOutline } from "react-icons/io5"
import { IoCallOutline } from "react-icons/io5"
import { IoLocationOutline } from "react-icons/io5"
import { FiClock } from "react-icons/fi"
import { FiShare2 } from "react-icons/fi"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaTelegramPlane } from "react-icons/fa"

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
        <div className='max-w-7xl px-30 py-20 mx-auto flex gap-15'>
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
                  <PiTelegramLogoBold className='text-white size-4' />
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div>
            <div className='flex items-start gap-4 py-5 w-4/5'>
              <div className='bg-[#F0FDFA] rounded-full p-2'>
                <IoPersonOutline className='text-[#0D9488] size-6' />
              </div>
              <div className='flex flex-col gap-2'>
                <h3 className='font-dm text-xl font-bold'>
                  Contact Information
                </h3>
                <p className='font-dm text-sm text-gray-500 leading-5'>
                  Feel free to reach out using any of the methods below
                </p>
              </div>
            </div>
            <div>
              <div className='flex items-start gap-4 py-5 w-4/5 border-b border-gray-300'>
                <div className='bg-[#F0FDFA] rounded-xl p-4'>
                  <MdMailOutline className='text-[#0D9488] size-6' />
                </div>
                <div className='flex flex-col gap-2'>
                  <h4 className='font-dm text-base font-bold'>Email</h4>
                  <p className='font-dm text-xs text-gray-500'>hi@myport.com</p>
                </div>
              </div>
              <div className='flex items-start gap-4 py-5 w-4/5 border-b border-gray-300'>
                <div className='bg-[#F0FDFA] rounded-xl p-4'>
                  <IoCallOutline className='text-[#0D9488] size-6' />
                </div>
                <div className='flex flex-col gap-2'>
                  <h4 className='font-dm text-base font-bold'>Phone</h4>
                  <p className='font-dm text-xs text-gray-500'>
                    +92 335 786394
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-4 py-5 w-4/5 border-b border-gray-300'>
                <div className='bg-[#F0FDFA] rounded-xl p-4'>
                  <IoLocationOutline className='text-[#0D9488] size-6' />
                </div>
                <div className='flex flex-col gap-2'>
                  <h4 className='font-dm text-base font-bold'>Location</h4>
                  <p className='font-dm text-xs text-gray-500'>
                    Karachi, Pakistan
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-4 py-5 w-4/5 border-b border-gray-300'>
                <div className='bg-[#F0FDFA] rounded-xl p-4'>
                  <FiClock className='text-[#0D9488] size-6' />
                </div>
                <div className='flex flex-col gap-2'>
                  <h4 className='font-dm text-base font-bold'>Working Hours</h4>
                  <p className='font-dm text-xs text-gray-500'>
                    Mon - Fri | 9:00 AM - 6:00
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-4 py-5 w-4/5'>
                <div className='bg-[#F0FDFA] rounded-xl p-4'>
                  <FiShare2 className='text-[#0D9488] size-6' />
                </div>
                <div className='flex flex-col gap-2'>
                  <h4 className='font-dm text-base font-bold'>Follow Me</h4>
                  <div className='flex gap-7'>
                    <FaLinkedin />
                    <FaGithub />
                    <FaFacebook />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-7xl bg-[#061d41] rounded-2xl mx-auto shadow-xl'>
          <div className='flex items-center justify-between py-8 px-30'>
            <div className="flex gap-10">
              <div className='rounded-full bg-white p-3'>
                <FaTelegramPlane className='text-[#0D9488] size-10' />
              </div>
              <div className='flex flex-col gap-2'>
                <h4 className='font-poppins text-white text-xl font-semibold'>
                  Let's build something amazing together.
                </h4>
                <p className='font-dm text-sm text-white'>
                  I'm always open to discussing new projects and ideas.
                </p>
              </div>
            </div>
            <div>
            <button className="font-dm text-white px-6 py-4 bg-[#0D9488] rounded-xl font-bold">Get in Touch</button>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
