// import React, { useState } from "react";

// export default function ApplicationForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email.includes("@")) newErrors.email = "Valid email required";
//     if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone must be 10 digits";
//     if (!formData.message.trim()) newErrors.message = "Message is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log("Form submitted ✅", formData);
//       setSubmitted(true);
//       // you can send data to backend here
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-4">
//       <h2 className="text-2xl font-bold text-center">Application Form</h2>

//       {submitted ? (
//         <div className="text-green-600 font-medium text-center">Thank you! Your application has been submitted.</div>
//       ) : (
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block font-medium">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border rounded p-2"
//             />
//             {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
//           </div>

//           <div>
//             <label className="block font-medium">Email</label>
//             <input
//               type="text"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border rounded p-2"
//             />
//             {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
//           </div>

//           <div>
//             <label className="block font-medium">Phone</label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full border rounded p-2"
//             />
//             {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
//           </div>

//           <div>
//             <label className="block font-medium">Message</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full border rounded p-2"
//               rows="4"
//             />
//             {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700"
//           >
//             Submit
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }

  import { useState } from "react";

  function forms_manage(){
    const [formData, setFormData] = useState({
      name: "",
      email: ""
    })
    const [Error, setErrors] = useState({})
    const [submit, setSubmitted] = useState(false)
    const validate = (e) => {
      e.preventDefault(); 
      const errors = {}
      if (!formData.name.trim()) errors.name = "Name is required"
      if (!formData.email.includes("@")) errors.email = "email is incorrect"
      setErrors(errors)
      if (Object.keys(Error).length === 0)
        setSubmitted(true)
      
    }
    const update = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value})
    }
    return (
      <>
        {submit? (<div> no errors submitted</div>)
        : <form onSubmit={validate}>
            name:  <span></span>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={update}
            />
            {Error.name && <span>{Error.name}</span>}<br></br>
            email:  <span></span>
            <input 
              type="text"
              name="email"
              value={formData.email}
              onChange={update}
            />
            {Error.email && <span>{Error.email}</span>} <br></br>
            <button type="submit"> click here</button>
          </form>}
      </>
    )

  }

export default forms_manage