import React, { useEffect, useState } from "react";
import "./EmployeeCards.css";

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
        let { name, value } = e.target;

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

        setUserId(userid);
        setIsEdit(true);

        setNewUser({
            name: selectedUser.name,
            email: selectedUser.email,
            empId: selectedUser.empId,
        });
    }

    return (
        <div className="container">
            <div className="header">
                <h1>Employee Management System</h1>
                <p>Manage Employees Easily</p>
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
                        {users.length}
                    </div>

                    <p>Employees Registered</p>
                </div>
            </div>

            <div className="employee-grid">
                {users.map((item) => (
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
                ))}
            </div>
        </div>
    );
};

export default EmployeeCards;