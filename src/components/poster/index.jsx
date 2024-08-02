import React from 'react';
import { Image, Space } from 'antd-mobile'
import peoplePng from '../../assets/images/people.png';
import book1Png from '../../assets/images/book1.png';
import book2Png from '../../assets/images/book2.png';
import { INFO_BOX_IMAGE } from '../../assets/images/base64-image'
import './index.css'


export const Poster = () => {
    return (
        <div className='container'>
            <div className='wrapper'>
                <div style={{
                    height: '400px'
                }}>
                    <div className='css3fb8b2440f25da0'>浅予深深托管班开班了</div>
                    <div style={{
                        position: "relative",
                        marginTop: '20px',
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '70px',
                            left: '120px'
                        }}>
                            <Image src={book1Png} width={80} height={80} />
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: '90px',
                            left: '150px'
                        }}>
                            <Image src={book2Png} width={80} height={80} />
                        </div>
                        <div style={{
                            position: 'absolute',
                        }}>
                            <Image src={peoplePng} width={180} height={300} />
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: '130px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                        }}>
                            <Image src={INFO_BOX_IMAGE} width={360} height={500}/>
                        </div>
                    </div>
                </div>
                <div>
                    123
                </div>
            </div>
        </div>
    )
}