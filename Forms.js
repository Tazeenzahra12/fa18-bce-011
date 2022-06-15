import React, { Component } from 'react';
import { Formik } from 'formik';
import '../styles/Forms.css'
class Forms extends Component {
    constructor(props) {
       super(props);
 
       this.initialValues = { name: '', email: '' , password: '', date: '' }
    }

    validate = (values) => {
        const errors = {};
        if (!values.name) {
           errors.name = 'Required';
        }
        if (!values.email) {
            errors.email = 'Required';
         }
        if (!values.password) {
           errors.password = 'Required';
        }
        if (!values.date) {
           errors.date = 'Required';
        }
        
        return errors;
    }
    handleSubmit = (values, setSubmitting) => {
        setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
        }, 400);
     }
     render() {
        return (
           <div id="Form">
              <Formik
                 initialValues={this.initialValues}
                 validate={values => this.validate(values)}
                 onSubmit={(values, { setSubmitting }) => this.handleSubmit(values, setSubmitting)} > 
                 {
                    ({
                       values,
                       errors,
                       touched,
                       handleChange,
                       handleBlur,
                       handleSubmit,
                       isSubmitting,
                       
                    }) => (
                    <form onSubmit={handleSubmit}>
                        <label for="name">Full Name <span>{errors.name && touched.name && errors.name}</span></label>
                        <input type="text" id="name" name="name" placeholder="Enter full name"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.name} />
                           <label for="email">Email <span>{errors.email && touched.email && errors.email}</span></label>
                        <input type="email" id="email" name="email" placeholder="Enter email"
                           onChange={handleChange}
                           onBlur={handleBlur} 
                           value={values.email} />
                           
                           
                            <label for="password">Password <span>{errors.password && touched.password && errors.password}</span></label>
                        <input type="password" id="password" name="password" placeholder="Enter password here"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.password} />

                        <label for="date">Date <span>{errors.date && touched.date && errors.date}</span></label>
                        <input type="date" id="date" name="date" placeholder="Enter date"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.date} />

<input type="submit" value="Submit" disabled={isSubmitting} />
                     </form>
                  )
                } 
                </Formik>
                </div>
      )
   }
}
export default Forms;