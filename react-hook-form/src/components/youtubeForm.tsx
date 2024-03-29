import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from "@hookform/devtools"

let rendercount = 0;

type formValues = {
  username: string
  email: string
  channel: string
}
const YoutubeForm = () => {
  const form = useForm<formValues>({
    defaultValues: {
      username: "",
      email: "",
      channel: ""
    }
  })
  const { register, control, handleSubmit, formState } = form
  const { errors } = formState

  const onSubmited = (data: formValues) => {
    console.log("form submited", data);

  }
  rendercount++
  return (
    <div>
      <h1>Youtube from ({rendercount / 2})</h1>
      <form onSubmit={handleSubmit(onSubmited)} noValidate>
        <div className='form-control'>
          <label htmlFor='username'>Username</label>
          {/* <input type='text' id='username' name={name} ref={ref} onChange={onChange} onBlur={onBlur} /> */}
          <input type='text' id='username' {...register("username", { required: "please provide the User Name" })} />
          <p className='error'>{errors.username?.message}</p>
        </div>


        <div className='form-control'>
          <label htmlFor='email'>E-mail</label>
          <input
            type='email'
            id='email'
            {...register("email", {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email address',
              },
              validate: (formvalue) => {
                return formvalue !== "admin@email.com" || "enter a diffrent email address"
              }
            })
            } />
          <p className='error'>{errors.email?.message}</p>
        </div>

        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <input type='text' id='channel' {...register("channel", { required: "please provide the channel nmae" })} />
          <p className='error'>{errors.channel?.message}</p>
        </div>


        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  )
}

export default YoutubeForm