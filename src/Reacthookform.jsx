// import { useForm } from "react-hook-form";

// import React from 'react'

// const Reacthookform = () => {
//     const { register, handleSubmit, errors } = useForm();
//     const onSubmit = (data) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label>Username</label>
//         <input
//           type="text"
//           placeholder="Enter your username"
//           name="username"
//           ref={register({ required: true })}
//         />
//         {errors.username && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>Email</label>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           name="email"
//           ref={register({ required: true })}
//         />
//         {errors.email && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>Password</label>
//         <input
//           type="password"
//           placeholder="Enter your password"
//           name="password"
//           ref={register({ required: true })}
//         />
//         {errors.password && <span>This field is required</span>}
//       </div>

//       <input type="submit" value="Submit" />
//     </form>
//   )
// }

// export default Reacthookform

import { TextField } from "@material-ui/core";
import { useController } from "react-hook-form";

import React from 'react'

const Reacthookform = () => {
    const { register, handleSubmit, errors } = useController();
    const onSubmit = (data) => console.log(data);
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Username"
        name="username"
        variant="outlined"
        control={register({ required: true })}
        error={Boolean(errors.username)}
      />
      <TextField
        label="Email"
        name="email"
        variant="outlined"
        control={register({ required: true })}
        error={Boolean(errors.email)}
      />
      <TextField
        label="Password"
        name="password"
        variant="outlined"
        control={register({ required: true })}
        error={Boolean(errors.password)}
      />
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default Reacthookform

    
  