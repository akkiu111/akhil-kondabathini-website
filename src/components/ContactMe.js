import React, {useState} from "react";
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form";

const ContactMe = () => {
 const [successMessage, setSuccessMessage] = useState("");
 const { register, handleSubmit, formState :{errors} } = useForm();
 const serviceID ="myservice_ID";
 const templateID ="mytemplate_ID";
 const userID ="user_yfwz1aqBnX6SWTPwtF2gK";

 const onSubmit = (data, r) =>{
     sendEmail(serviceID, templateID,
        {
            name: data.name,
            phone: data.phone,
            email: data.email,
            subject: data.subject,
            description: data.description
        },
        userID
        )
        r.target.reset();
 }


    const sendEmail = (serviceID, templateID, variables, userID) => {
    
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");      
          }).catch(err => console.error(`Something went wrong ${err}`));
      }


    return (
        <div id="contactId" className="contact">
            <div className="text-center">
            <h1 style={{textTransform: "uppercase"}}>contact me</h1>
            <p>Please fill out the form and send me your message.
                I will contact you as soon as possible.
            </p>
            <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit = {handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* Name Input */}
                        <div className="text-center">
                        <input 
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        {...register('name',{
                                required: "Please enter your name",
                                maxLength:{
                                    value: 20,
                                    message:"Please enter a name with fewer than 20 characters"
                                }
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                           {errors.name && errors.name.message}
                        </span>

                        {/* PhoneNumber Input */}

                        <div className="text-center">
                        <input 
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        {...register('phone',{
                                required: "Please enter your phone number",             
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.phone && errors.phone.message}
                        </span>

                        {/* Email Input */}

                        <div className="text-center">
                        <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        {...register('email',{
                                required: "Please enter your email address",
                                pattern:{
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message:"invalid Email"
                                }                                
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.email && errors.email.message}
                        </span>

                        {/* Subject Input */}

                        <div className="text-center">
                        <input 
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        {...register('subject',{
                                required: "Please add subject"   
                            })
                        }
                        />
                        <div className="line"></div>
                        </div> 
                        <span className="error-message">
                            {errors.subject && errors.subject.message}
                        </span>
                        </div>

                        <div className="col-md-6 col-xs-12">
                       
                        {/* Description */}

                        <div className="text-center">
                        <textarea 
                        type="text"
                        className="form-control"
                        placeholder="please enter your message here..."
                        {...register('description',{
                                required: "Please enter your message"
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.description && errors.description.message}
                        </span>
                        <button className="btn-main-offer contact-btn"
                            type="submit">Submit
                        </button>
                        </div>

                    </div>
                    </form>
            </div>
        </div>
    )
}

export default ContactMe
