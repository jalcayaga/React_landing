import styles from "../style";


import {
  Footer,
  Navbar,
  CamInfo,
  Slider,
  HeroAlarm,
  CTAalarm,
  BusinessAlarm,
  HorizontalCard
  
  
} from "../components";
import { Grid } from "@chakra-ui/react";

const Alarma = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />

        <HeroAlarm />
        <Slider />
      
       <BusinessAlarm/>
      </div>
    </div>

    <div className={`bg-primary container mx-auto flex flex-justify-between`}  >
       <div className={`${styles.boxWidth} text-white text-center` }>
      
        <HorizontalCard/>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      
       <CTAalarm/>
       
        <Footer />
      </div>
    </div>
  </div>
);

export default Alarma;
