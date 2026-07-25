import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Thank You | Parul Food Products",
  description:
    "Thank you for contacting Parul Food Products. Our team will get back to you shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

const page = () => {
  return (
    <>

      <section className="py-16 lg:py-24">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <div className="bg-[#F9C983] rounded-[20px] lg:rounded-[30px] p-8 sm:p-12 lg:p-16">
            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-[#FF6A54] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
            </div>

            <h2 className="mt-8 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827]">
              Your Message Has Been Sent
            </h2>

            <p className="mt-5 leading-7 text-[#111827]/80 max-w-xl mx-auto">
              Thank you for reaching out to Parul Food Products. Our team
              has received your details and will get back to you shortly.
            </p>

            <p className="mt-6 leading-7 text-[#111827]/80">
              Need immediate assistance? Call us at{" "}
              <a
                href="tel:+918130878411"
                className="text-[#FF6A54] font-semibold"
              >
                +91-8130878411
              </a>
            </p>

            <Link
              href="/"
              className="inline-block mt-10 bg-[#FF6A54] hover:bg-[#f5533c] text-white font-semibold text-lg px-10 py-4 rounded transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;