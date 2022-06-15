import React from 'react'
import "./gallery.scss"
export const Gallery = ({ photos }) => {

    return (
        <div>
            <div>
                <h1>Gallery</h1>
                {photos.length > 0 ? <h4 style={{ color: "#2187fc" }}>Results {photos.length}</h4> : <h4 style={{ color: "#2187fc" }}>There isn't search available </h4>}

            </div>
            <div className='gallery-cont'>
                {photos.map((element) => {
                    return (
                        <div className='gallery_photo' key={element.id}>
                            <h5 className='photo__description'>{element.alt_description}</h5>
                            <img className='photo' height={400} width={400} src={element.urls.small} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
