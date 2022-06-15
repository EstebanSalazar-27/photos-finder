import React, { useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import "./header.scss"
export const Header = ({ setPhotos }) => {
    const [imagesCollection, setImagesCollection] = useState([])



    useEffect(() => {
        setPhotos(imagesCollection)
    }, [imagesCollection]);

    return (
        <header className='header'>
            <Formik initialValues={{ search: "" }} onSubmit={async (values) => {
                const res = await fetch(`https://api.unsplash.com/search/photos?per_page=30&query=${values.search}`, {
                    headers: {
                        "Authorization": 'Client-ID bfFuSZHe-ja6W8McFC-r8Ibmy3E0cLzNsVKiGcCOYA4'
                    }
                })
                const data = await res.json()
                setImagesCollection(data.results)
            }}>
                <Form className='form'>
                    <Field className="form__search-input" name="search" type="search" placeholder="Search photos" />

                </Form>
            </Formik>
        </header>

    )
}
