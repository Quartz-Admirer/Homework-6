import React from 'react';
import '../styles/globals.css';

const ContactComponent: React.FC = () => {
    return (
        <section id="contact" className='contact'>
            <h2>Contacts</h2>
            <p>Contact with me:</p>
            <div className='contact-icons'>
                <a href="https://vk.com/quartz_admirer" target="_blank" rel="noopener noreferrer">
                    <img src="/VKlogo.png" alt="vk-link" title="vk-link"/>
                </a>
                <a href="https://t.me/Quartz_Admirer" target="_blank" rel="noopener noreferrer">
                    <img src="/TGlogo.png" alt="tg-link" title="tg-link"/>
                </a>
                <a href="https://www.behance.net/ksiomisfaton" target="_blank" rel="noopener noreferrer">
                    <img src="/BElogo.png" alt="bh-link" title="bh-link"/>
                </a>
            </div>
        </section>
    );
};

export default ContactComponent;
