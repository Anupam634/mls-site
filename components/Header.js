"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        
        {/* Logo */}
        <div className="logo">
          <Image
            src="/images/Picture1.png"
            alt="logo"
            width={70}
            height={70}
          />
        </div>

        {/* Navigation */}
        <nav className="main-nav">
          <a href="#">Home</a>

          <div className="nav-item">
            <a href="#">
              CDL Training <span className="arrow">▼</span>
            </a>
          </div>

          <div className="nav-item">
            <a href="#">
              Truck Driving School <span className="arrow">▼</span>
            </a>
          </div>

          <div className="nav-item">
            <a href="#">
              MLS Companies <span className="arrow">▼</span>
            </a>
          </div>
        </nav>

        {/* CTA Button */}
        <div className="header-cta">
          <a className="btn-outline" href="#">
            <span className="icon">👤</span> Sign Up For Courses
          </a>
        </div>

      </div>
    </header>
  );
}
