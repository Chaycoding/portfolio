import PageSwitchAni from "./transitionAnimation/pageAni";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoMdContact } from "react-icons/io";
function ContactPage() {
  return (
    <div className="-mt-20">
      <PageSwitchAni />
      <div className=" w-full text-white ">
        <div className="h-[26rem] w-full bg-contacthero  bg-cover bg-center  ">
          <div className="h-full w-full contactbackthing flex text-6xl justify-center items-center">
            <h1>I'd love to hear from you</h1>
          </div>
        </div>

        <div className="grid grid-cols-2 px-48 text-xl mt-20">
          <div className="grid grid-cols-2">
            <div className="flex gap-5  items-center">
              <IoMdContact className="text-3xl" />
              <h1>Contact number - </h1>
            </div>
            <p>0717570364</p>
            <div className="flex gap-5  items-center">
              <FaLinkedin className="text-3xl" />
              <h1>LinkedIn - </h1>
            </div>
            <a href="">Chasith Hordagoda</a>
            <div className="flex gap-5  items-center">
              <SiGmail className="text-3xl" />
              <h1>Email - </h1>
            </div>
            <a href="">Chasith1@gmail.com</a>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
