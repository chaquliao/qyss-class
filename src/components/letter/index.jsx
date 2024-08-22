import React from 'react';

import './index.css';

export const Letter = () => {
  return (
    <div className="letter-container">
      <h1 style={{textAlign: 'center'}}>致家长</h1>
      <p>浅予托管不是一个单纯的托管班。</p>
      <p>作为一个有三十五年高中语文教学经历和二十多年班主任工作经验的老师，我见到太多高中学生家长的无奈与痛苦，清楚地知道高中阶段学生的问题根源在小学阶段。</p>
      <p>内卷时代注定是个全民焦虑的时代，几乎所有家长都为孩子学习成绩焦虑。学习成绩固然重要，但学习习惯、学习品质的培养远比学习成绩更重要。</p>
      <h2>托管目标（除作业辅导外）</h2>
      <ol>
        <li>培养良好学习方法</li>
        <li>激发学习内驱力</li>
        <li>提升学习品质</li>
        <li>引导积极心理</li>
      </ol>
      <h2>课程内容设置</h2>
      <ol>
        <li>时间管理指导</li>
        <li>专注力训练</li>
        <li>传统文化学习</li>
        <li>经典阅读与积极心理</li>
        <li>家长养育指导</li>
      </ol>
      <h3>备注：</h3>
      <p>需准备学习书籍</p>
      <ol>
        <li>《牧羊少年奇幻之旅》，1、2、3年级漫画版，4、5、6年级文字版</li>
        <li>《墨非定律》，1 －6年级均漫画版</li>
      </ol>
    </div>
  );
};