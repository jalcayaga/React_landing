import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[120px] h-[120px] rounded-full bg-green-gradient p-[2.5px] cursor-pointer`}
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
        <span className="text-gradient ">más</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
