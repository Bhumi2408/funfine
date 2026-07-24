"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key:
            process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
            "YOUR_ACCESS_KEY",

          subject: "New Contact Form Submission",

          from_name: `${formData.firstName} ${formData.lastName}`,

          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          mobile: formData.mobile,
          message: formData.message,

          botcheck: false,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.log(err);
      setStatus("error");
    }

    setLoading(false);
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "PHONE",
      value: "+91-8130878411",
      bg: "#D89442",
    },
    {
      icon: <Mail size={24} />,
      title: "EMAIL",
      value: "parulfoodproduct@gmail.com",
      bg: "#865B29",
    },
    {
      icon: <MapPin size={24} />,
      title: "ADDRESS",
      value:
        "Plot No. 2114, HSIIDC, Phase 2, Sector 38, Rai, Sonipat, Haryana, 131029, India",
      bg: "#D89442",
    },
  ];

  return (
    <section className="py-10 lg:py-10">
      <div className="max-w-[1400px] mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side */}
          <div className="bg-[#F9C983] rounded-[20px] lg:rounded-[30px] p-6 sm:p-8 lg:p-14">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#111827] mb-5">
              We'd Love to Hear From You
            </h2>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  style={{ background: item.bg }}
                  className="rounded-2xl p-4 sm:p-5 flex gap-4 sm:gap-5 items-start"
                >
                  <div className="bg-white w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center text-[#8B4E09] shrink-0">
                    {item.icon}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-white text-lg sm:text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="text-white text-sm sm:text-base leading-6 sm:leading-8 break-words">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full h-12 sm:h-14 border border-gray-400 rounded px-5 bg-[#FFF1DE] outline-none focus:border-[#FF6A54]"
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full h-12 sm:h-14 border border-gray-400 bg-[#FFF1DE] rounded px-5 outline-none focus:border-[#FF6A54]"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full h-12 sm:h-14 border border-gray-400 bg-[#FFF1DE] rounded px-5 outline-none focus:border-[#FF6A54]"
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile"
              required
              value={formData.mobile}
              onChange={handleChange}
              className="w-full h-12 sm:h-14 border border-gray-400 bg-[#FFF1DE] rounded px-5 outline-none focus:border-[#FF6A54]"
            />

            <textarea
              rows={5}
              name="message"
              placeholder="Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded p-4 sm:p-5 bg-[#FFF1DE] outline-none resize-none focus:border-[#FF6A54]"
            />

            {/* Honeypot */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />

            {status === "success" && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-sm sm:text-base">
                Message sent successfully.
              </div>
            )}

            {status === "error" && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm sm:text-base">
                Something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 sm:h-14 rounded bg-[#FF6A54] hover:bg-[#f5533c] text-white font-semibold text-lg sm:text-xl transition-all disabled:opacity-70"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}