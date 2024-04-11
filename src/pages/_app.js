import '@/styles/globals.css';
import Nav from '@/components/Nav';
import { useState } from 'react';
import LoginModal from '@/components/LoginModal';
import RegisterModal from '@/components/Register';
import '@/styles/slide.css';
import '@/styles/productPage.css';
import Footer from '@/components/Footer';
import { AuthProvider } from '@/context/AuthContext';

function MyApp({ Component, pageProps }) {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    return (
        <AuthProvider>
            <div className="flex flex-col min-h-screen">
                {/* Nav Component */}
                <Nav setShowLoginModal={setShowLoginModal} setShowRegisterModal={setShowRegisterModal} />
                {showLoginModal && (
                    <LoginModal setShowModal={setShowLoginModal} setShowRegisterModal={setShowRegisterModal} />
                )}
                {showRegisterModal && (
                    <RegisterModal setShowModal={setShowRegisterModal} setShowLoginModal={setShowLoginModal} />
                )}
                <div className="flex-1">
                    <Component {...pageProps} />
                </div>

                {/* Footer Component */}
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default MyApp;
