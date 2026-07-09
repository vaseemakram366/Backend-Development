import React, { useEffect, useState } from "react";
// import "./EmployeeCards.css";

import axios from "axios";
import {
    createuserapi,
    deleteuserapi,
    getuserapi,
    updateuserapi,
} from "../service/api";

const EmployeeCards = () => {
    const [users, setUsers] = useState([]);

    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        empId: "",
    });

    const [isEdit, setIsEdit] = useState(false);
    const [userid, setUserId] = useState("");

    // Search State
    const [searchTerm, setSearchTerm] = useState("");

    async function getUserData() {
        try {
            const response = await axios.get(getuserapi);
            setUsers(response.data.user);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserData();
    }, []);

    function changeHandler(e) {
        const { name, value } = e.target;

        setNewUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function createUser() {
        try {
            await axios.post(createuserapi, newUser);

            setNewUser({
                name: "",
                email: "",
                empId: "",
            });

            getUserData();
        } catch (error) {
            console.log(error);
        }
    }

    async function updatedUser() {
        try {
            await axios.put(`${updateuserapi}/${userid}`, newUser);

            getUserData();

            setNewUser({
                name: "",
                email: "",
                empId: "",
            });

            setIsEdit(false);
            setUserId("");
        } catch (error) {
            console.log(error);
        }
    }

    function submitHandler(e) {
        e.preventDefault();

        if (isEdit) {
            updatedUser();
        } else {
            createUser();
        }
    }

    async function deleteHandler(userid) {
        try {
            await axios.delete(`${deleteuserapi}/${userid}`);
            getUserData();
        } catch (error) {
            console.log(error);
        }
    }

    function editHandler(userid) {
        const selectedUser = users.find((item) => item._id === userid);

        if (!selectedUser) return;

        setUserId(userid);
        setIsEdit(true);

        setNewUser({
            name: selectedUser.name,
            email: selectedUser.email,
            empId: selectedUser.empId,
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    // Search Filter
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <div className="header">
                <h1>Employee Management System</h1>
                <p>Manage Employees Easily</p>
            </div>

            {/* Search Bar */}
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="🔍 Search Employee by Name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="top-section">
                <div className="form-card">
                    <h2>{isEdit ? "Update Employee" : "Add Employee"}</h2>

                    <form onSubmit={submitHandler}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Employee Name"
                            value={newUser.name}
                            onChange={changeHandler}
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={newUser.email}
                            onChange={changeHandler}
                        />

                        <input
                            type="number"
                            name="empId"
                            placeholder="Employee ID"
                            value={newUser.empId}
                            onChange={changeHandler}
                        />

                        <button type="submit">
                            {isEdit ? "Update Employee" : "Create Employee"}
                        </button>
                    </form>
                </div>

                <div className="stats-card">
                    <h2>Total Employees</h2>

                    <div className="count">
                        {filteredUsers.length}
                    </div>

                    <p>Employees Found</p>
                </div>
            </div>

            <div className="employee-grid">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((item) => (
                        <div className="employee-card" key={item._id}>
                            <div className="avatar">
                                {item.name.charAt(0).toUpperCase()}
                            </div>

                            <h3>{item.name}</h3>

                            <p>
                                <strong>Email</strong>
                                <br />
                                {item.email}
                            </p>

                            <p>
                                <strong>Employee ID</strong>
                                <br />
                                {item.empId}
                            </p>

                            <div className="btn-group">
                                <button
                                    className="edit-btn"
                                    onClick={() => editHandler(item._id)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() => deleteHandler(item._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <h2
                        style={{
                            width: "100%",
                            textAlign: "center",
                            marginTop: "50px",
                        }}
                    >
                        No Employee Found
                    </h2>
                )}
            </div>
        </div>
    );
};

export default EmployeeCards;