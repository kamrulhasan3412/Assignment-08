import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-linear-to-r from-[#6A11CB] to-[#2575FC] text-white">
        <div className="w-11/12 mx-auto py-12 grid md:grid-cols-4 grid-cols-1 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">HERO.IO</h2>
            <p className="text text-gray-200">
              We build productive and powerful apps that help you learn, plan,
              focus, and grow every day.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-200">
              <li>
                <a className="text-lg">Home</a>
              </li>
              <li>
                <a className="text-lg">Apps</a>
              </li>
              <li>
                <a className="text-lg">Installation</a>
              </li>
              <li>
                <a className="text-lg">Contact</a>
              </li>
              <li>
                <a className="text-lg">About us</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Top Apps</h3>
            <ul className="space-y-2 text-gray-200">
              <li className="text-lg">SmPlan: ToDo List</li>
              <li className="text-lg">Focus Timer - FLIP</li>
              <li className="text-lg">Alarmy - Smart Alarm</li>
              <li className="text-lg">Pomocat - Pomodoro Timer</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex flex-col gap-4 text-lg text-gray-200">
              <a>Facebook</a>
              <a>Twitter</a>
              <a>Youtube</a>
            </div>
          </div>
        </div>

        <div
          className="border-t border-white/20 mt-6 py-4 text-center text-white
        "
        >
          © 2025 HERO.IO — All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
