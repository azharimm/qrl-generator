import React from 'react'

const Error = ({error}) => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-12">
                    <div className="text-center">
                        <h4>Oopss! Something went wrong.</h4>
                        <p>{error.data.error}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error
