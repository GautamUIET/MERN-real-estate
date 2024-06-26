import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });
            const data = await res.json();
            setLoading(false);
            console.log(data);

            if (data.success === false) {
                setError(data.message);
                return;
            }
            console.log("navigating to Home page");
            navigate('/');
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };

    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                <input
                    type="email"
                    placeholder='Email'
                    className='border p-3 rounded-lg'
                    id='email'
                    value={formData.email}
                    onChange={changeHandler}
                    required
                />
                <input
                    type="password"
                    placeholder='Password'
                    className='border p-3 rounded-lg'
                    id='password'
                    value={formData.password}
                    onChange={changeHandler}
                    required
                />
                <button
                    type="submit"
                    disabled={loading || !formData.email || !formData.password}
                    className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
                >
                    {loading ? 'Loading...' : 'Sign In'}
                </button>
            </form>
            <div className='flex gap-2 mt-5'>
                <p>Don't have an account?</p>
                <Link to='/sign-up'>
                    <span className='text-blue-700'>Sign up</span>
                </Link>
            </div>
            {error && <p className='text-red-500 mt-5'>{error}</p>}
        </div>
    );
};

export default SignIn;
