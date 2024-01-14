// UserLogin.jsx
import React, { useState } from 'react';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import axios from 'axios';
import './FORM.css'; // Import file CSS tùy chỉnh
const initialSchema = {
    title: 'NHẬP TÊN',
    type: 'object',
    required: ['username'],
    properties: {
        username: { type: 'string', title: 'TÊN BỆNH NHÂN' },
    },
};
const UserLogin = () => {
    const [formData, setFormData] = useState({});
    const [submitCount, setSubmitCount] = useState(0);
    const handleSubmit = async ({ formData }) => {
        try {
            console.log('Tên Bệnh Nhân:', formData.username);

            // Gửi yêu cầu đến server bằng axios
            const response = await axios.post(
                'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-tqlme/endpoint/postbackend',
                formData
            );

            console.log('Kết quả từ server:', response.data);
            alert('DỮ LIỆU ĐÃ ĐƯỢC LƯU LẠI CẢM ƠN  BẠN ĐÃ SỬ DỤNG');
            setFormData({}); // Reset form sau khi submit thành công
            setSubmitCount(submitCount + 1);
        } catch (error) {
            console.error('Lỗi khi gửi dữ liệu:', error);
        }
    };
    return (
        <div className="auth-form-container">
            <h1 className="form-title">MỜI NHẬP TÊN BỆNH NHÂN</h1>
            <Form
                schema={initialSchema}
                validator={validator}
                formData={formData}
                onChange={({ formData }) => setFormData(formData)}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default UserLogin;
