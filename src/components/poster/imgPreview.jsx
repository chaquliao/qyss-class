import React, { useState } from 'react'
import { ImageViewer, Image } from 'antd-mobile'
import './index.css'

export const ImgPreview = (props) => {
    const { imgUrl, title } = props;
    const [visible, setVisible] = useState(false);
    return (
        <>
            <div style={{ padding: '10px' }}>
                <div className='imgInnerContainer' onClick={() => setVisible(true)}>
                    <div className='imgInnerWrapper'>
                        <Image src={imgUrl} width={330} height={200} />
                    </div>
                </div>
            </div>
            <div>
                <ImageViewer
                    classNames={{
                        mask: 'customize-mask',
                        body: 'customize-body',
                    }}
                    image={imgUrl}
                    visible={visible}
                    onClose={() => {
                        setVisible(false)
                    }}
                />
            </div>

        </>
    )
}