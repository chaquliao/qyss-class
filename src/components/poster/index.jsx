import React from 'react';
import { Image, Space, Divider, Swiper, ImageViewer } from 'antd-mobile'
import peoplePng from '../../assets/images/people.png';
import book1Png from '../../assets/images/book1.png';
import book2Png from '../../assets/images/book2.png';
import eyesPng from '../../assets/images/eyes.png';
import book3Png from '../../assets/images/book3.png';
import jiantouPng from '../../assets/images/jiantou.png';
import smilePng from '../../assets/images/smile.png';
import certificate1Png from '../../assets/images/certificate1.jpg';
import certificate2Png from '../../assets/images/certificate2.jpg';
import certificate3Png from '../../assets/images/certificate3.jpg';
import certificate4Png from '../../assets/images/certificate4.jpg';
import certificate5Png from '../../assets/images/certificate5.jpg';
import certificate6Png from '../../assets/images/certificate6.jpg';
import certificate7Png from '../../assets/images/certificate7.jpg';
import certificate8Png from '../../assets/images/certificate8.jpg';
import certificate9Png from '../../assets/images/certificate9.jpg';
import certificate10Png from '../../assets/images/certificate10.jpg';
import certificate11Png from '../../assets/images/certificate11.jpg';
import certificate12Png from '../../assets/images/certificate12.jpg';
import certificate13Png from '../../assets/images/certificate13.jpg';
import certificate14Png from '../../assets/images/certificate14.jpg';
import certificate15Png from '../../assets/images/certificate15.jpg';
import certificate16Png from '../../assets/images/certificate16.jpg';
import certificate17Png from '../../assets/images/certificate17.jpg';
import certificate18Png from '../../assets/images/certificate18.jpg';
import certificate19Png from '../../assets/images/certificate19.jpg';
import certificate20Png from '../../assets/images/certificate20.jpg';
import zhizhaoPng from '../../assets/images/zhizhao.jpeg';
import wechatJpeg from '../../assets/images/wechat.jpeg';
import { INFO_BOX_IMAGE } from '../../assets/images/base64-image'
import { ImgPreview } from './imgPreview'
import { GroupBooks } from './groupBooks'
import './index.css'

const certificatePngs = [certificate1Png, certificate2Png, certificate3Png, certificate4Png, certificate5Png, certificate6Png, certificate7Png, certificate8Png, certificate9Png, certificate10Png, certificate11Png, certificate12Png, certificate13Png, certificate14Png, certificate15Png, certificate16Png, certificate17Png, certificate18Png, certificate19Png, certificate20Png]

export const Poster = () => {
    const [zhizhaoVisible, setZhizhaoVisible] = React.useState(false)
    const [wechatVisible, setWechatVisible] = React.useState(false)

    return (
        <div className='container'>
            <div className='wrapper'>
                <div style={{
                    height: '6200px'
                }}>
                    <div className='css3ff6055db825da0'>浅予深深托管班开班了</div>
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
                            top: '190px',
                            left: '170px',
                            zIndex: 1
                        }}>
                            <Image src={jiantouPng} width={60} height={40} />
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: '230px',
                            left: '230px',
                            zIndex: 1
                        }}>
                            <Image src={book3Png} width={80} height={80} />
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: '280px',
                            left: '330px',
                            zIndex: 1
                        }}>
                            <Image src={smilePng} width={40} height={40} />
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
                            <Image src={INFO_BOX_IMAGE} width={360} height={610} />
                        </div>
                        <Space className='sloganContainer' direction='vertical' style={{ '--gap': '13px' }}>
                            <span className="slogan">
                                <span className="css3ff5fe59f825da0">浅予深深</span>
                            </span>
                            <span className="slogan">
                                <span className='css3ff60aa5fb25da0'>宝贝长乐</span>
                            </span>
                            <span className="slogan">
                                <span className='css3ff60fd0f125da0'>家长无忧</span>
                            </span>
                        </Space>
                        <div style={{
                            position: 'absolute',
                            top: '90px',
                            right: '10px'
                        }}>
                            <Image src={eyesPng} width={100} height={80} />
                        </div>
                        <div className='infoContainer'>
                            <div className='infoWrapper' style={{
                                marginTop: "10px"
                            }}>
                                <div className='titleBarContainer'>
                                    <div className='titleBarWrapper'>
                                        <span className='css3ff61de94725da0'>招生对象</span>
                                    </div>
                                </div>
                                <div className='contentContainer'>
                                    <span>
                                        1-6年级小学生
                                    </span>
                                </div>
                            </div>
                            <div className='infoWrapper'>
                                <div className='titleBarContainer'>
                                    <div className='titleBarWrapper'>
                                        <span className='css3ff62b5ffc25da0'>招生人数</span>
                                    </div>
                                </div>
                                <div className='contentContainer'>
                                    <span>
                                        10-16人
                                    </span>
                                </div>
                            </div>
                            <div className='infoWrapper'>
                                <div className='titleBarContainer'>
                                    <div className='titleBarWrapper'>
                                        <span className='css3ff62d3d0b25da0'>托管地址</span>
                                    </div>
                                </div>
                                <div className='contentContainer'>
                                    <span>
                                        金沙城3栋
                                    </span>
                                </div>
                            </div>
                            <div className='infoWrapper'>
                                <div className='titleBarContainer'>
                                    <div className='titleBarWrapper'>
                                        <span className='css3ff62d3d0b25da0'>托管时间</span>
                                    </div>
                                </div>
                                <div className='contentContainer'>
                                    <span>
                                        晚托（放学到晩上8点）
                                    </span>
                                </div>
                            </div>
                            <div className='infoWrapper'>
                                <div className='titleBarContainer'>
                                    <div className='titleBarWrapper'>
                                        <span className='css3ff62d3d0b25da0'>托管内容</span>
                                    </div>
                                </div>
                                <div className='contentContainer'>
                                    <span>
                                        接放学、作业辅导、阅读指导、国学学习、心理疏导
                                    </span>
                                </div>
                            </div>
                            <div className='infoWrapper'>
                                <div className='titleBarContainer'>
                                    <div className='titleBarWrapper'>
                                        <span className='css3ff62d3d0b25da0'>开班时间</span>
                                    </div>
                                </div>
                                <div className='contentContainer'>
                                    <span>
                                        2024年9月1日
                                    </span>
                                </div>
                            </div>
                            <div className='infoWrapper'>
                                <div className='titleBarContainer'>
                                    <div className='titleBarWrapper'>
                                        <span className='css3ff62d3d0b25da0'>收费标准</span>
                                    </div>
                                </div>
                                <div className='contentContainer'>
                                    <span>
                                        托管费1200／月，晚餐费20元／餐
                                    </span>
                                </div>
                            </div>
                            <div className='infoWrapper'>
                                <div className='titleBarContainer'>
                                    <div className='titleBarWrapper'>
                                        <span className='css3ff62d3d0b25da0'>联系电话</span>
                                    </div>
                                </div>
                                <div className='contentContainer'>
                                    <span>
                                        18000599476(廖老师)
                                    </span>
                                </div>
                            </div>
                            <div className='infoWrapper' style={{ paddingBottom: '20px' }}>
                                <div className='titleBarContainer'>
                                    <div className='titleBarWrapper'>
                                        <span className='css3ff62d3d0b25da0'>名师指导</span>
                                    </div>
                                </div>
                                <div className='contentContainer'>
                                    <div>
                                        <div className='teacherName'>廖俊平（浅予）：</div>
                                        <div>优秀高中语文教师、年级主任、优秀班主任、家庭教育指导师、心理咨询师（业余）、高级阅读指导师</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='contactContainer'>
                        <div className='contactWrapper'>
                            <Space justify="around" align='center' style={{ width: '100%' }} >
                                <div onClick={() => setWechatVisible(true)}>
                                    <div className='css3ffb74c27425da0' style={{
                                        textAlign: 'center',
                                        paddingBottom: '5px',
                                    }}>微信联系</div>
                                    <Image src={wechatJpeg} width={120} height={140} />
                                </div>
                                <Divider type="vertical" style={{
                                    color: '#000',
                                    borderColor: '#000',
                                    // borderStyle: 'dashed',
                                    borderWidth: '2px',
                                    height: '120px'
                                }} />
                                <GroupBooks />
                            </Space>
                        </div>
                    </div>
                    <div className='imgContainer'>
                        <div className='css3ff62d3d0b25da0' style={{ marginTop: '20px' }}>营业执照</div>
                        <ImgPreview imgUrl={zhizhaoPng} />
                        <div className='css3ff62d3d0b25da0' style={{ marginTop: '20px' }}>证书</div>
                        {
                            certificatePngs.map(item => (
                                <ImgPreview imgUrl={item} />
                            ))
                        }
                    </div>
                </div>
            </div >
            <ImageViewer
                classNames={{
                    mask: 'customize-mask',
                    body: 'customize-body',
                }}
                image={wechatJpeg}
                visible={wechatVisible}
                onClose={() => {
                    setWechatVisible(false)
                }}
            />
        </div >
    )
}