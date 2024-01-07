import React from 'react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted!');
    };

    return (
        <div className='contact p-6 bg-gray-100'>
            <h2 className='text-2xl font-bold mb-4'>Contact Us</h2>
            <p className='text-gray-600 mb-4'>Have questions or feedback? Reach out to us!</p>

            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4'>
                <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name:</label>
                <input type="text" id="name" name="name" required className='border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300' />

                <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email:</label>
                <input type="email" id="email" name="email" required className='border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300' />

                <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Message:</label>
                <textarea id="message" name="message" rows="4" required className='border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300'></textarea>

                <button type="submit" className='contact-btn bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'>Submit</button>
            </form>
        </div>
    );
};

export default Contact;
