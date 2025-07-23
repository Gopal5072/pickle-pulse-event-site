'use client';

import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  const handleRegisterClick = () => {
    router.push('/register');
  };

  return (
    <section className="hero">
      <div>
        <h1>Court and Corporate</h1>
        <p>Where strategy meets serve!</p>
        <p>30 August 2025 | Gurugram</p>
        <button 
          onClick={handleRegisterClick}
          className="hero-cta-button"
        >
          Request Invite
        </button>
      </div>
    </section>
  );
}
