"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Phone, Mail, MapPin } from "lucide-react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\d{10}$/;

const submitToWeb3Forms = async (payload, accessKey) => {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ ...payload, access_key: accessKey }),
  });
  const result = await response.json();
  if (!result.success) {
    throw new Error(result.message || "Submission failed");
  }
  return result;
};

export default function ContactSection() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
    botcheck: false,
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Phone field: strip anything that isn't a digit, cap at 10 chars
    const nextValue =
      name === "mobile" ? value.replace(/\D/g, "").slice(0, 10) : value;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : nextValue,
    }));
  };

  const validate = () => {
    const errors = {};

    if (!formData.firstName.trim()) errors.firstName = "Please enter your first name.";
    if (!formData.lastName.trim()) errors.lastName = "Please enter your last name.";

    if (!formData.email.trim()) {
      errors.email = "Please enter your email.";
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.mobile.trim()) {
      errors.mobile = "Please enter your mobile number.";
    } else if (!PHONE_REGEX.test(formData.mobile.trim())) {
      errors.mobile = "Mobile number must be exactly 10 digits.";
    }

    if (!formData.message.trim()) errors.message = "Please enter a message.";

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot: real users never check/fill this hidden field. If it's
    // set, silently drop the submission instead of sending it anywhere.
    if (formData.botcheck) {
      return;
    }

    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    setLoading(true);
    setStatus("");

    const payload = {
      subject: "Fun Fine New Lead",
      from_name: `${formData.firstName} ${formData.lastName}`,
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      mobile: formData.mobile,
      message: formData.message,
    };

    try {
      // Fire both submissions in parallel. We redirect if AT LEAST ONE
      // succeeds, so a hiccup on one inbox doesn't block the user.
      const results = await Promise.allSettled([
        submitToWeb3Forms(
          payload,
          process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "33a2033f-0e90-449e-b7fb-55c1c9@af6d4"
        ),
        submitToWeb3Forms(
          payload,
          process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY_2 || "30f8c7f4-4835-432e-8020-b9ca08bf5e26"
        ),
      ]);

      const atLeastOneSucceeded = results.some(
        (r) => r.status === "fulfilled"
      );

      if (atLeastOneSucceeded) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          message: "",
          botcheck: false,
        });
        setFieldErrors({});
        router.push("/thank-you");
        return;
      }

      setStatus("error");
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
          <form onSubmit={handleSubmit} noValidate className="space-y-5 sm:space-y-6">
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full h-12 sm:h-14 border border-gray-400 rounded px-5 bg-[#FFF1DE] outline-none focus:border-[#FF6A54]"
                />
                {fieldErrors.firstName && (
                  <p className="mt-1.5 text-sm text-red-600">{fieldErrors.firstName}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full h-12 sm:h-14 border border-gray-400 bg-[#FFF1DE] rounded px-5 outline-none focus:border-[#FF6A54]"
                />
                {fieldErrors.lastName && (
                  <p className="mt-1.5 text-sm text-red-600">{fieldErrors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 sm:h-14 border border-gray-400 bg-[#FFF1DE] rounded px-5 outline-none focus:border-[#FF6A54]"
              />
              {fieldErrors.email && (
                <p className="mt-1.5 text-sm text-red-600">{fieldErrors.email}</p>
              )}
            </div>

            <div>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile"
                inputMode="numeric"
                maxLength={10}
                value={formData.mobile}
                onChange={handleChange}
                className="w-full h-12 sm:h-14 border border-gray-400 bg-[#FFF1DE] rounded px-5 outline-none focus:border-[#FF6A54]"
              />
              {fieldErrors.mobile && (
                <p className="mt-1.5 text-sm text-red-600">{fieldErrors.mobile}</p>
              )}
            </div>

            <div>
              <textarea
                rows={5}
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded p-4 sm:p-5 bg-[#FFF1DE] outline-none resize-none focus:border-[#FF6A54]"
              />
              {fieldErrors.message && (
                <p className="mt-1.5 text-sm text-red-600">{fieldErrors.message}</p>
              )}
            </div>

            {/* Honeypot - visually hidden, wired to state so it actually works */}
            <input
              type="checkbox"
              name="botcheck"
              checked={formData.botcheck}
              onChange={handleChange}
              className="hidden"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

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