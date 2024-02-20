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
  const form = useForm<formValues>()
  const { register, control, handleSubmit } = form

  const onSubmited = (data: formValues) => {
    console.log("form submited", data);

  }
  rendercount++
  return (
    <div>
      <h1>Youtube from ({rendercount / 2})</h1>
      <form onSubmit={handleSubmit(onSubmited)} noValidate>
        <label htmlFor='username'>Username</label>
        {/* <input type='text' id='username' name={name} ref={ref} onChange={onChange} onBlur={onBlur} /> */}
        <input type='text' id='username' {...register("username", {required:"please provide the User Name"})} />


        <label htmlFor='email'>E-mail</label>
        <input type='email' id='email' {...register("email")} />

        <label htmlFor='channel'>Channel</label>
        <input type='text' id='channel' {...register("channel", {required:"please provide the channel nmae"})} />

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  )
}

export default YoutubeForm