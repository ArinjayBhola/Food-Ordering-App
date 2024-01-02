import React from 'react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted!');
    };

    return (
        <div className='contact'>
            <h2>Contact Us</h2>
            <p>Have questions or feedback? Reach out to us!</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit" className='contact-btn'>Submit</button>
            </form>
        </div>
    );
};

export default Contact;
