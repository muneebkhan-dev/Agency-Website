import React, { useState } from "react"
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    if (e.target.name === "name") {
      if (e.target.value.length < 3) {
        setErrors({
          ...errors,
          name: "Name must be at least 3 characters",
        })
      } else {
        setErrors((prev) => {
          const { name, ...rest } = prev
          return rest
        })
      }
    }

    if (e.target.name === "email") {
      if (e.target.value.length < 3) {
        setErrors({
          ...errors,
          email: "Please enter a valid email",
        })
      } else {
        setErrors((prev) => {
          const { email, ...rest } = prev
          return rest
        })
      }
    }

    if (e.target.name === "subject") {
      if (e.target.value.length < 3) {
        setErrors({
          ...errors,
          subject: "Subject must be at least 3 characters",
        })
      } else {
        setErrors((prev) => {
          const { subject, ...rest } = prev
          return rest
        })
      }
    }

    if (e.target.name === "message") {
      if (e.target.value.length < 10) {
        setErrors({
          ...errors,
          message: "Message must be at least 10 characters",
        })
      } else {
        setErrors((prev) => {
          const { message, ...rest } = prev
          return rest
        })
      }
    }

    console.log(formData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name.trim()) {
      setErrors({
        name: "Please enter your name",
      })
      return
    }

    if (!formData.email.trim()) {
      setErrors({
        email: "Please enter your email",
      })
      return
    }

    if (!formData.subject.trim()) {
      setErrors({
        subject: "Please enter your subject",
      })
      return
    }

    if (!formData.message.trim()) {
      setErrors({
        message: "Please enter your message",
      })
      return
    }
    

    console.log(formData)
  }

  return (
    <section className='relative min-h-screen'>
      <div className=''>
        <div className='flex flex-col items-center px-5 md:px-0 lg:px-0 py-10 bg-[#f1fcfa] gap-5 w-full'>
          <h2 className='font-DMmono text-sm md:text-base lg:text-base font-bold text-[#00D0B0] tracking-[2px]'>
            / CONTACT
          </h2>
          <h3 className='font-dm font-bold text-3xl md:text-5xl lg:text-5xl'>
            Get in touch with us
          </h3>
          <div className='font-dm text-sm md:text-base lg:text-base text-center text-[#222831]/70 flex flex-col items-center gap-2'>
            <p>Have a project in mind or want to work together?</p>
            <p>
              Fill out the form bellow or reach me through the contact
              information
            </p>
          </div>
        </div>
        <div className='contact-content max-w-7xl px-5 md:px-10 lg:px-30 py-10 md:py-20 lg:py-20 mx-auto flex flex-col md:flex-row lg:flex-row gap-10 md:gap-7 lg:gap-15'>
          <div className='w-auto md:w-3/5 lg:w-3/5 shadow-xl rounded-2xl p-8 border-2 border-slate-100'>
            <form
              onSubmit={handleSubmit}
              className='flex text-start flex-col gap-3'
            >
              <div>
                <h3 className='text-base font-bold py-2'>Full Name</h3>
                <div
                  className={`relative border-2 rounded-xl ${errors.name ? "border-red-400" : "border-slate-100"}`}
                >
                  <input
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    type='text'
                    placeholder='Enter your name'
                    className='w-full pr-10 md:pr-0 lg:pr-0 py-2 px-4 border-hidden font-dm placeholder:font-medium text-sm md:text-base lg:text-base placeholder:text-gray-400 outline-none'
                  />
                  <RxPerson className='absolute size-5 right-4 top-1/2 -translate-y-1/2' />
                </div>
                {errors.name && (
                  <p className='text-red-500 text-sm mt-1'>{errors.name}</p>
                )}
              </div>
              <div>
                <h3 className='text-base font-bold py-2'>Email Address</h3>
                <div
                  className={`relative border-2 rounded-xl  ${errors.email ? "border-red-400" : "border-slate-100"}`}
                >
                  <input
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    type='email'
                    placeholder='Enter your email'
                    className='w-full pr-10 md:pr-0 lg:pr-0 py-2 px-4 font-dm placeholder:font-medium text-sm md:text-base lg:text-base placeholder:text-gray-400 outline-none'
                  />
                  <MdMailOutline className='absolute size-5 right-4 top-1/2 -translate-y-1/2' />
                </div>
                {errors.email && (
                  <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
                )}
              </div>
              <div>
                <h3 className='text-base font-bold py-2'>Subject</h3>
                <div className='relative border-2 border-slate-100 rounded-xl'>
                  <input
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    type='subject'
                    placeholder='Enter your subject'
                    className='w-full pr-10 md:pr-0 lg:pr-0 py-2 px-4 font-dm placeholder:font-medium text-sm md:text-base lg:text-base placeholder:text-gray-400 outline-none'
                  />
                  <IoDocumentTextOutline className='absolute size-5 right-4 top-1/2 -translate-y-1/2 text-gray-600' />
                </div>
                {errors.subject && (
                  <p className='text-red-500 text-sm mt-1'>{errors.subject}</p>
                )}
              </div>
              <div>
                <h3 className='text-base font-bold py-2'>Message</h3>
                <div className='relative border-2 border-slate-100 rounded-xl  py-4 px-4'>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    type='message'
                    placeholder='Write your message here...'
                    className='w-full min-h-40 font-dm placeholder:font-medium text-sm md:text-base lg:text-base placeholder:text-gray-400 flex justify-start outline-none'
                  ></textarea>
                  <MdOutlineEdit className='absolute size-5 right-5 top-3/4 -translate-y-1/2 text-gray-600' />
                </div>
                {errors.message && (
                  <p className='text-red-500 text-sm mt-1'>{errors.message}</p>
                )}
              </div>
              <div className='flex items-start'>
                <button
                  onSubmit={handleSubmit}
                  className='font-dm px-5 py-3 rounded-xl text-sm font-bold bg-[#00D0B0] text-white flex gap-2 items-center'
                >
                  <PiTelegramLogoBold className='text-white size-4' />
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className='py-10'>
            <div className='flex items-start gap-4 py-5  w-auto lg:w-4/5'>
              <div className='bg-[#F0FDFA] rounded-full p-2'>
                <IoPersonOutline className='text-[#0D9488] size-6' />
              </div>
              <div className='flex flex-col gap-2'>
                <h3 className='font-dm text-xl font-bold'>
                  Contact Information
                </h3>
                <p className='font-dm text-base text-gray-500 leading-5'>
                  Feel free to reach out using any of the methods below
                </p>
              </div>
            </div>
            <div>
              <div className='flex items-start gap-4 py-5 w-auto lg:w-4/5 border-b border-gray-300'>
                <div className='bg-[#F0FDFA] rounded-xl p-4'>
                  <MdMailOutline className='text-[#0D9488] size-6' />
                </div>
                <div className='flex flex-col gap-2'>
                  <h4 className='font-dm text-base font-bold'>Email</h4>
                  <p className='font-dm text-base text-gray-500'>
                    hi@myport.com
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-4 py-5 w-auto lg:w-4/5 border-b border-gray-300'>
                <div className='bg-[#F0FDFA] rounded-xl p-4'>
                  <IoCallOutline className='text-[#0D9488] size-6' />
                </div>
                <div className='flex flex-col gap-2'>
                  <h4 className='font-dm text-base font-bold'>Phone</h4>
                  <p className='font-dm text-base text-gray-500'>
                    +92 335 786394
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-4 py-5 w-auto lg:w-4/5 border-b border-gray-300'>
                <div className='bg-[#F0FDFA] rounded-xl p-4'>
                  <IoLocationOutline className='text-[#0D9488] size-6' />
                </div>
                <div className='flex flex-col gap-2'>
                  <h4 className='font-dm text-base font-bold'>Location</h4>
                  <p className='font-dm text-base text-gray-500'>
                    Karachi, Pakistan
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-4 py-5 w-auto lg:w-4/5 border-b border-gray-300'>
                <div className='bg-[#F0FDFA] rounded-xl p-4'>
                  <FiClock className='text-[#0D9488] size-6' />
                </div>
                <div className='flex flex-col gap-2'>
                  <h4 className='font-dm text-base font-bold'>Working Hours</h4>
                  <p className='font-dm text-base text-gray-500'>
                    Mon - Fri | 9:00 AM - 6:00
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-4 py-5 w-auto lg:w-4/5'>
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
      </div>
    </section>
  )
}

export default Contact
