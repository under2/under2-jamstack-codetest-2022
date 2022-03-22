import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Heading } from "../../atoms/Heading"
import { ArticleContainer } from "../../atoms/ArticleContainer"

FeatureForm.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export function FeatureForm() {

    const [inputs, setInputs] = useState({});
    const [submitting, setSubmitting] = useState(false);
 
    const formLocation = "https://under2.free.beeceptor.com/submit"

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    console.log(inputs)
    fetch(formLocation, {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(inputs)
      }).then(res => {
        console.log("Request complete! response:", res);
      });
    setTimeout(() => {
        setSubmitting(false);
      }, 3000);
  }


    return (
        <header className={`bg-gray-100`}>
            <ArticleContainer>
            <section>
                <div className="mb-4">
                    <Heading className=""> Financial Tech trends, straight to your inbox.</Heading>
                </div>
                <div className="mb-4"> 
                    <p className="form-title" >Sign up for trends, reports and papers on everythin finance, and tech in the banking world. </p>
                </div>
                    <div className="mb-4">
                    {submitting &&
                        <div>
                            You are submitting the following:
                            <ul>
                                {Object.entries(inputs).map(([name, value]) => (
                                    <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                                ))}
                            </ul>
                        </div>
                    }
                        <form
                            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                            onSubmit={handleSubmit} 
                            action={formLocation}
                            method="post" 
                        >
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                                    First name
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="firstName" 
                                    name="firstName" 
                                    type="text"
                                    value={inputs.firstName || ""} 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                    Last name
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="lastName" 
                                    name="lastName" 
                                    type="text"
                                    value={inputs.lastName || ""} 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="email" 
                                    name="email" 
                                    type="email"
                                    value={inputs.email || ""} 
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
                                    Company
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="company" 
                                    name="company" 
                                    type="text"
                                    value={inputs.company || ""} 
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <button 
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                                Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
            </section>
            </ArticleContainer>
        </header>
    )
}
