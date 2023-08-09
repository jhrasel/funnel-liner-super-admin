import CustomButton from '@/Components/Common/CustomButton/CustomButton'
import Image from 'next/image'
import React from 'react'

const index = () => {

    return (

        <>

            <section className='login'>

                <div className="login__content box__shadow">

                    <div className="login__logo">
                        <Image
                            src="/images/logo.png"
                            width={200}
                            height={50}
                            alt="Picture of the author"
                        />
                    </div>

                    <div className="login__form width__100">

                        <div className="custom__input">
                            <label>Phone Number or Email</label>
                            <input type="email" placeholder='Phone Number or Email'/>
                        </div>

                        <div className="custom__input">
                            <label>Password</label>
                            <input type="password" placeholder='Password'/>
                        </div>


                        <CustomButton submitButton="Login" />

                    </div>

                </div>

            </section>

        </>

    )
}

export default index
