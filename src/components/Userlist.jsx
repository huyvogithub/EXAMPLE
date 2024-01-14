
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Userlist.css'; // Import file CSS để chứa kiểu

const UserList = () => {
    const [userData, setUserData] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetchData();
    }, [refresh]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://ap-southeast-1.aws.data.mongodb-api.com/app/data-tqlme/endpoint/Find');
            const data = response.data;
            setUserData(data);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };

    const handleRefresh = () => {
        setRefresh(prevRefresh => !prevRefresh);
    };

    return (
        <div className="user-list-container"> {/* Thêm class để áp dụng kiểu */}
            <h2 className="user-list-title">BẢNG DỮ LIỆU LẤY ĐƯỢC</h2>
            <button onClick={handleRefresh}>Làm mới</button>
            <table className="user-list-table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên Người Dùng</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
