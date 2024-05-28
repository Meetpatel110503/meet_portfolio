import React, { useRef } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { useInView } from "react-intersection-observer"

export default function Contact({ darkMode }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: detailsRef, inView: detailsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://portfolio-777aa-default-rtdb.firebaseio.com/portfolio.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
      const responseData = await response.text()
      console.log(responseData)
      toast.success("Message sent successfully.")
      reset()
    } catch (error) {
      console.error("Error:", error)
      toast.error("Failed to send message. Please try again later.")
    }
  }

  return (
    <section
      id='contact'
      className={`${
        darkMode ? "bg-black text-gray-400" : "bg-white text-gray-700"
      } relative`}
    >
      <div className='container px-5 py-10  mx-auto text-center lg:px-40'>
        <div className='flex flex-col w-full'>
          <h1
            className={`sm:text-4xl text-3xl font-medium title-font mb-4 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Get in touch
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
        </div>
      </div>
      <div className='container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap'>
        <div
          ref={detailsRef}
          className={`lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative ${
            detailsInView ? "animate-fade-in" : "opacity-0"
          } ${
            darkMode ? "bg-gray-900" : "bg-gray-100"
          } transition-opacity ease-in-out duration-700`}
        >
          <iframe
            width='100%'
            height='100%'
            title='map'
            className='absolute inset-0'
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src='https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d514.6188263106562!2d72.87504702790957!3d20.715825164195564!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1716468213963!5m2!1sen!2sin'
          />
          <div
            className={`relative flex flex-wrap py-6 rounded shadow-md ${
              darkMode ? "bg-gray-900" : "bg-white"
            }`}
          >
            <div className='lg:w-1/2 px-8 mt-4 lg:mt-0'>
              <h2
                className={`title-font font-semibold tracking-widest text-xs ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                ADDRESS
              </h2>
              <p
                className={`mt-1 ${
                  darkMode ? "text-gray-400" : "text-gray-700"
                }`}
              >
                Kakwadi, Patel faliya
                <br />
                Ta & Di Valsad 396385
              </p>
            </div>
            <div className='lg:w-1/2 px-8 mt-4 lg:mt-0'>
              <h2
                className={`title-font font-semibold tracking-widest text-xs ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                EMAIL
              </h2>
              <a
                href='mailto:meetpatel110503@gmail.com'
                className={`leading-relaxed ${
                  darkMode ? "text-gray-400" : "text-gray-700"
                } hover:text-green-500   `}
              >
                meetpatel110503@gmail.com
              </a>
              <h2
                className={`title-font font-semibold tracking-widest text-xs mt-4 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                PHONE
              </h2>
              <p
                className={`leading-relaxed ${
                  darkMode ? "text-gray-400" : "text-gray-700"
                }`}
              >
                9173378175
              </p>
            </div>
          </div>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className={`lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 ${
            formInView ? "animate-fade-in" : "opacity-0"
          } transition-opacity ease-in-out duration-700`}
        >
          <h2
            className={`sm:text-4xl text-3xl mb-1 font-medium title-font ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Hire Me
          </h2>
          <p
            className={`leading-relaxed mb-5 ${
              darkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Thank you for your interest in getting in touch with me. I welcome
            your feedback, questions, and suggestions.
          </p>
          <div className='relative mb-4'>
            <label
              htmlFor='name'
              className={`leading-7 text-sm ${
                darkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Name
            </label>
            <input
              {...register("name", { required: true })}
              type='text'
              id='name'
              name='name'
              className={`w-full rounded border focus:ring-2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                darkMode
                  ? "bg-gray-900 border-gray-700 focus:border-indigo-500 focus:ring-indigo-900 text-gray-100"
                  : "bg-gray-100 border-gray-300 focus:border-indigo-500 focus:ring-indigo-200 text-black"
              }`}
            />
            {errors.name && (
              <span className='text-red-500'>Name is required</span>
            )}
          </div>
          <div className='relative mb-4'>
            <label
              htmlFor='email'
              className={`leading-7 text-sm ${
                darkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type='email'
              id='email'
              name='email'
              className={`w-full rounded border focus:ring-2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-1000 ease-in-out ${
                darkMode
                  ? "bg-gray-900 border-gray-700 focus:border-indigo-500 focus:ring-indigo-900 text-gray-100"
                  : "bg-gray-100 border-gray-300 focus:border-indigo-500 focus:ring-indigo-200 text-black"
              }`}
            />
            {errors.email && (
              <span className='text-red-500'>Email is required</span>
            )}
          </div>
          <div className='relative mb-4'>
            <label
              htmlFor='message'
              className={`leading-7 text-sm ${
                darkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Message
            </label>
            <textarea
              {...register("message", { required: true })}
              id='message'
              name='message'
              className={`w-full h-32 rounded border focus:ring-2 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out ${
                darkMode
                  ? "bg-gray-900 border-gray-700 focus:border-indigo-500 focus:ring-indigo-900 text-gray-100"
                  : "bg-gray-100 border-gray-300 focus:border-indigo-500 focus:ring-indigo-200 text-black"
              }`}
            />
            {errors.message && (
              <span className='text-red-500'>Message is required</span>
            )}
          </div>
          <button
            type='submit'
            className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
