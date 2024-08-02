import React from 'react';
import { Image, Space } from 'antd-mobile'
import peoplePng from '../../assets/images/people.png';
import book1Png from '../../assets/images/book1.png';
import book2Png from '../../assets/images/book2.png';
import './index.css'


export const Poster = () => {
    return (
        <div className='container'>
            <div className='wrapper'>
                <div style={{
                    height: '400px'
                }}>
                    浅予深深托管班开班了
                    <div style={{
                        position: "relative",
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '80px',
                            left: '130px'
                        }}>
                            <Image src={book1Png} width={80} height={80} />
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: '100px',
                            left: '160px'
                        }}>
                            <Image src={book2Png} width={80} height={80} />
                        </div>
                        <div style={{
                            position: 'absolute',
                            // left: '130px'
                        }}>
                            <Image src={peoplePng} width={180} height={300} />
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