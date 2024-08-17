import React from 'react'
import { Image, Space } from 'antd-mobile'
import groupBook1Png from '../../../assets/images/groupBook1.png';
import groupBook2Png from '../../../assets/images/groupBook2.png';
import groupBook3Png from '../../../assets/images/groupBook3.png';
import groupBook4Png from '../../../assets/images/groupBook4.png';


import './index.css'

export const GroupBooks = () => {
    return (
        <div className='bookGroupInnerWrapper'>
            <Image
                src={groupBook1Png}
                width={25}
                height={100}
            />
            <Image
                src={groupBook2Png}
                width={20}
                height={80}
            />
            <div className='booksRight'>
                <Image
                    src={groupBook3Png}
                    width={80}
                    height={20}
                />
                <Image
                    src={groupBook4Png}
                    width={100}
                    height={25}
                />
            </div>
        </div>
    )
}