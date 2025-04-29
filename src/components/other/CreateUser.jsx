import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
        city: "",
        state: "",
        role: "",
        profileImage: null
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'profileImage') {
            setForm((prev) => ({ ...prev, [name]: files[0] }));
        } else {
            setForm((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        // ✅ Map frontend keys to backend expected keys
        formData.append('Name', form.name);
        formData.append('Email', form.email);
        formData.append('password', form.password);
        formData.append('role', form.role);
        formData.append('city', form.city);
        formData.append('state', form.state);
        formData.append('address', form.address);
        if (form.profileImage) {
            formData.append('image', form.profileImage); // 👈 Must match backend: upload.single('image')
        }

        try {
            const res = await axios.post('http://localhost:7000/api/employee/createUser', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log("res", res.data);
            alert('Employee created successfully!');
            navigate("/admin-dashboard");
        } catch (error) {
            console.error('Submit error:', error);
            alert('Failed to create employee!');
        }
    };

    return (
        <div className="flex items-center justify-center mt-5">
            <form className="w-full max-w-lg bg-white rounded px-8 pt-6 pb-8 mb-4 relative" onSubmit={handleSubmit}>
                <button type="button" className="absolute top-0 right-0 bg-transparent hover:bg-gray-500 text-gray-700 hover:text-white font-semibold py-2 px-4 rounded" onClick={() => navigate("/admin-dashboard")}>
                    X
                </button>
                <h2 className="text-center text-gray-800 font-bold mb-4">Create New Member</h2>

                <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input className="shadow border rounded text-gray-600 font-cursive italic font-bold w-full py-2 px-3 mb-4" type="text" name="name" value={form.name} onChange={handleChange} />

                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input className="shadow border rounded text-gray-600 font-cursive italic font-bold w-full py-2 px-3 mb-4" type="email" name="email" value={form.email} onChange={handleChange} />

                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input className="shadow border rounded text-gray-600 font-cursive italic font-bold w-full py-2 px-3 mb-4" type="password" name="password" value={form.password} onChange={handleChange} />

                <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
                <select className="shadow border rounded text-gray-600 font-cursive italic font-bold w-full py-2 px-3 mb-4" name="role" value={form.role} onChange={handleChange}>
                    <option value="" disabled style={{ color: 'black' }}>Select Role</option>
                    {["employee", "admin", "teamLead"].map((role) => (
                        <option key={role} value={role} style={{ color: 'black' }}>{role}</option>
                    ))}
                    
                </select>

                <label className="block text-gray-700 text-sm font-bold mb-2">City</label>
                <input className="shadow border rounded text-gray-600 font-cursive italic font-bold w-full py-2 px-3 mb-4" type="text" name="city" value={form.city} onChange={handleChange} />

                <label className="block text-gray-700 text-sm font-bold mb-2">State</label>
                <input className="shadow border rounded text-gray-600 font-cursive italic font-bold w-full py-2 px-3 mb-4" type="text" name="state" value={form.state} onChange={handleChange} />

                <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                <input className="shadow border rounded text-gray-600 font-cursive italic font-bold w-full py-2 px-3 mb-4" type="text" name="address" value={form.address} onChange={handleChange} />

                <label className="block text-gray-700 text-sm font-bold mb-2">Profile Image</label>
                <input className="shadow border rounded text-gray-600 font-cursive italic font-bold w-full py-2 px-3 mb-4" type="file" name="profileImage" accept="image/*" onChange={handleChange} />

                <button type="submit" className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Create Member
                </button>
            </form>
        </div>
    );
};

export default CreateUser;

