import React, { useEffect, useState } from "react";

import axios from "axios";
import {
    createuserapi,
    deleteuserapi,
    getuserapi,
    updateuserapi,
} from "../services/api";

import Swal from "sweetalert2";

const EmployeeCards = () => {
    const [users, setUsers] = useState([]);

    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        mobile: "",
        age: "",
        empId: "",
        designation: "",
    });

    const [isEdit, setIsEdit] = useState(false);

    const [userid, setUserId] = useState("");

    async function getUserData() {
        try {
            const response = await axios.get(getuserapi);
            // console.log(response.data.data);
            setUsers(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUserData();
    }, []);

    function changeHandler(e) {
        let { name, value } = e.target;

        setNewUser((preItem) => {
            return { ...preItem, [name]: value };
        });
    }

    async function createUser() {
        try {
            await axios.post(createuserapi, newUser);

            await getUserData();

            await Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Employee created successfully...",
            });

            setNewUser({
                name: "",
                email: "",
                mobile: "",
                age: "",
                empId: "",
                designation: "",
            });
        } catch (error) {
            console.error(error);

            await Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response?.data?.message || "Something went wrong"
            })
        }
    }

    async function updatedUser() {
        try {
            await axios.put(
                `${updateuserapi}/${userid}`,
                newUser,
            );

            await getUserData();

            await Swal.fire({
                icon: "success",
                title: "Updated!",
                text: "Employee updated successfully.",
            });

            setNewUser({
                name: "",
                email: "",
                mobile: "",
                age: "",
                empId: "",
                designation: "",
            });

            setIsEdit(false);
            setUserId("");
        } catch (error) {
            console.error(error);

            await Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response?.data?.message || "Something went wrong"
            })
        }
    }

    async function submitHandler(e) {
        e.preventDefault();
        // console.log(e)

        if (isEdit) {
            await updatedUser();
        } else {
            await createUser();
        }
    }

    async function deleteHandler(userid) {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        });

        if (!result.isConfirmed) {
            return;
        }

        try {
            await axios.delete(`${deleteuserapi}/${userid}`);
            await getUserData();

            await Swal.fire({
                icon: "success",
                title: "Deleted!",
                text: "Employee deleted successfully.",
            });
        } catch (error) {
            console.error(error);


            await Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response?.data?.message || "Something went wrong",
            });
        }
    }

    function editHandler(user) {
        setUserId(user._id);

        setNewUser({
            name: user.name,
            email: user.email,
            mobile: user.mobile,
            empId: user.empId,
            age: user.age,
            designation: user.designation,
        });

        setIsEdit(true);
    }

    return (
        <div>
            <h1>Employee Management System</h1>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    value={newUser.name}
                    onChange={changeHandler}
                    name="name"
                    placeholder="Name"
                />
                <br />

                <input
                    type="email"
                    value={newUser.email}
                    onChange={changeHandler}
                    name="email"
                    placeholder="Email"
                />
                <br />

                <input
                    type="tel"
                    value={newUser.mobile}
                    onChange={changeHandler}
                    name="mobile"
                    placeholder="Enter your Mobile Number"
                />
                <br />

                <input
                    type="number"
                    value={newUser.empId}
                    onChange={changeHandler}
                    name="empId"
                    placeholder="Enter your emp. Id"
                />

                <input
                    type="number"
                    value={newUser.age}
                    onChange={changeHandler}
                    name="age"
                    placeholder="Enter your age"
                />
                <br />

                <select
                    name="designation"
                    value={newUser.designation}
                    onChange={changeHandler}
                >
                    <option value="">Select Designation</option>
                    <option value="Developer">Developer</option>
                    <option value="HR">HR</option>
                    <option value="Manager">Manager</option>
                    <option value="Tester">Tester</option>
                </select>

                <br />

                <br />

                <button type="submit">{isEdit ? "Update" : "Create"}</button>
            </form>
            <div>
                {users.map((item) => {
                    return (
                        <div key={item._id}>
                            <p>Name : {item.name}</p>
                            <p>Email : {item.email}</p>
                            <p>Mobile: {item.mobile}</p>
                            <p>Employee ID: {item.empId}</p>
                            <p>Age: {item.age}</p>
                            <p>Designation: {item.designation}</p>

                            <div>
                                <button onClick={() => deleteHandler(item._id)}>
                                    Delete
                                </button>
                                <button onClick={() => editHandler(item)}>
                                    Edit
                                </button>
                            </div>
                            <hr />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default EmployeeCards;