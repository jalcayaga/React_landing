import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  const whatsappNumber = "+56996985294"; // Reemplaza con tu número de WhatsApp

  const openWhatsAppChat = () => {
    const whatsappURL = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div
      className={`${styles.flexCenter} w-[110px] h-[110px] rounded-full bg-green-gradient p-[2.5px] cursor-pointer`}
      onClick={openWhatsAppChat}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient ml-2">Saber</span>
          </p>
        </div>

        <p className="flex flex-row font-poppins font-medium text-[18px] leading-[23px]">
          <img
            src={arrowUp}
            alt="contactanos"
            className="w-[23px] object-contain"
          />
          <span className="text-gradient">más</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
