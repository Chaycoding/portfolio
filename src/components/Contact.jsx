import PageSwitchAni from "./transitionAnimation/pageAni";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoMdContact } from "react-icons/io";

function ContactPage() {
  const contactMethods = [
    {
      id: 1,
      icon: <SiGmail className="w-8 h-8 text-slate-400 group-hover:text-[#0ea5e9] transition-colors" />,
      title: "Email",
      value: "chasith1@gmail.com",
      link: "mailto:chasith1@gmail.com",
      actionText: "Send an email"
    },
    {
      id: 2,
      icon: <FaLinkedin className="w-8 h-8 text-slate-400 group-hover:text-[#0ea5e9] transition-colors" />,
      title: "LinkedIn",
      value: "Chasith Hordagoda",
      link: "https://www.linkedin.com/in/chasith-hordagoda-624363270/",
      actionText: "Connect on LinkedIn"
    },
    {
      id: 3,
      icon: <IoMdContact className="w-8 h-8 text-slate-400 group-hover:text-[#0ea5e9] transition-colors" />,
      title: "Phone",
      value: "+94 71 757 0364", 
      link: "tel:+94717570364",
      actionText: "Call directly"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050B14] text-slate-100 pt-32 pb-20">
      <PageSwitchAni />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Technical Header Section */}
        <div className="text-center mb-16">
           <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-mono tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse"></span>
            Secure Channel Open
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            Let's build something.
          </h1>
          <p className="text-slate-400 font-mono text-sm max-w-xl mx-auto leading-relaxed">
            Whether you want to discuss computational chemistry, machine learning models, or full-stack software engineering opportunities, my inbox is always open.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method) => (
            <a
              key={method.id}
              href={method.link}
              target={method.title === "LinkedIn" ? "_blank" : "_self"}
              rel="noreferrer"
              className="bg-[#0B1221]/80 backdrop-blur-md border border-slate-800/80 rounded-3xl p-8 flex flex-col items-center text-center hover:border-[#0ea5e9]/40 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] transition-all duration-500 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-800/50 flex items-center justify-center mb-6 border border-slate-700/50 group-hover:bg-[#0ea5e9]/10 group-hover:border-[#0ea5e9]/30 transition-all duration-500">
                {method.icon}
              </div>
              <h2 className="text-sm font-bold text-slate-200 uppercase tracking-widest mb-2">
                {method.title}
              </h2>
              <p className="text-slate-400 font-mono text-sm mb-8">
                {method.value}
              </p>
              <div className="mt-auto">
                <span className="text-[#0ea5e9] text-xs font-mono group-hover:underline underline-offset-4 transition-all">
                  {method.actionText} &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ContactPage;