// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// const ShuffleHero = () => {
//   return (
//     <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-6 max-w-7xl mx-auto">
//       <div>
//         {/* <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
//           Better every day
//         </span> */}
//         <h3 className="text-5xl text-yell md:text-8xl font-semibold">
//          Un nuevo modo de proteccion.
//         </h3>
//         <p className="text-base md:text-lg text-white my-4 md:my-6">
//         Deja tu seguridad en nuestras manos, asesorate por expertos y encuentra soluciones 
//         definitivas. Subred
//         </p>
//         <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded
//          transition-all hover:bg-indigo-600 active:scale-95">
//           Find a class
//         </button>
//       </div>
//       <ShuffleGrid />
//     </section>
//   );
// };

// const shuffle = (array) => {
//   let currentIndex = array.length,
//     randomIndex;

//   while (currentIndex != 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ];
//   }

//   return array;
// };
// //imagenes width 611 x height 918 en
// const squareData = [
//   {
//     id: 1,
//     src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//   },
//   {
//     id: 2,
//     src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     id: 3,
//     src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     id: 4,
//     src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     id: 5,
//     src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
//   },
//   {
//     id: 6,
//     src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//   },
//   {
//     id: 7,
//     src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//   },
//   {
//     id: 8,
//     src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//   },
//   {
//     id: 9,
//     src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//   },
//   {
//     id: 10,
//     src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     id: 11,
//     src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
//   },
//   {
//     id: 12,
//     src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
//   },
//   {
//     id: 13,
//     src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//   },
//   {
//     id: 14,
//     src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
//   },
//   {
//     id: 15,
//     src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
//   },
//   {
//     id: 16,
//     src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
//   },
// ];

// const generateSquares = () => {
//   return shuffle(squareData).map((sq) => (
//     <motion.div
//       key={sq.id}
//       layout
//       transition={{ duration: 1.5, type: "spring" }}
//       className="w-full h-full"
//       style={{
//         backgroundImage: `url(${sq.src})`,
//         backgroundSize: "cover",
//       }}
//     ></motion.div>
//   ));
// };

// const ShuffleGrid = () => {
//   const timeoutRef = useRef(null);
//   const [squares, setSquares] = useState(generateSquares());

//   useEffect(() => {
//     shuffleSquares();

//     return () => clearTimeout(timeoutRef.current);
//   }, []);

//   const shuffleSquares = () => {
//     setSquares(generateSquares());

//     timeoutRef.current = setTimeout(shuffleSquares, 3000);
//   };

//   return (
//     <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
//       {squares.map((sq) => sq)}
//     </div>
//   );
// };

// export default ShuffleHero;

// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import {images1, images2, images3, images4, images5, images6,images7,images8,images9,images10,images11, images12, images13} from "../../images";



// const ShuffleHero = () => {

//   return (

//     <section className="w-full px-2 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-10xl mx-auto">

//       <div>

//         <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">

//           Better every day

//         </span>

//         <h3 className="text-4xl text-yell md:text-6xl font-semibold">

//           Let's change it up a bit

//         </h3>

//         <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">

//           A la vanguardia de la vola.

//         </p>

//         <button className="bg-gn text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">

//           Volver

//         </button>

//       </div>

//       <ShuffleGrid />

//     </section>

//   );

// };


// const shuffle = (array) => {

//   let currentIndex = array.length,

//     randomIndex;


//   while (currentIndex != 0) {

//     randomIndex = Math.floor(Math.random() * currentIndex);

//     currentIndex--;


//     [array[currentIndex], array[randomIndex]] = [

//       array[randomIndex],

//       array[currentIndex],

//     ];

//   }


//   return array;

// };


// const squareData = [

//   {

//     id: 1,

//     src: images1,

//   },

//   {

//     id: 2,

//     src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",

//   },

//   {

//     id: 3,

//     src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",

//   },

//   {

//     id: 4,

//     src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",

//   },

//   {

//     id: 5,

//     src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",

//   },

//   {

//     id: 6,

//     src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",

//   },

//   {

//     id: 7,

//     src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",

//   },

//   {

//     id: 8,

//     src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",

//   },

//   {

//     id: 9,

//     src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",

//   },

//   {

//     id: 10,

//     src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",

//   },

//   {

//     id: 11,

//     src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",

//   },

//   {

//     id: 12,

//     src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",

//   },

//   {

//     id: 13,

//     src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

//   },

//   {

//     id: 14,

//     src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",

//   },

//   {

//     id: 15,

//     src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",

//   },

//   {

//     id: 16,

//     src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",

//   },

// ];


// const generateSquares = () => {

//   return shuffle(squareData).map((sq) => (

//     <motion.div

//       key={sq.id}

//       layout

//       transition={{ duration: 1.5, type: "spring" }}

//       className="w-full h-full"

//       style={{

//         backgroundImage: `url(${sq.src})`,

//         backgroundSize: "cover",

//       }}

//     ></motion.div>

//   ));

// };


// const ShuffleGrid = () => {

//   const timeoutRef = useRef(null);

//   const [squares, setSquares] = useState(generateSquares());


//   useEffect(() => {

//     shuffleSquares();


//     return () => clearTimeout(timeoutRef.current);

//   }, []);


//   const shuffleSquares = () => {

//     setSquares(generateSquares());


//     timeoutRef.current = setTimeout(shuffleSquares, 3000);

//   };


//   return (

//     <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">

//       {squares.map((sq) => sq)}

//     </div>

//   );

// };


// export default ShuffleHero;

// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// import images1 from "../../assets/AlarmaGSM.png";
// import images2 from "../../assets/axpro.png";
// import images3 from "../../assets/cartel_alarma.png";
// import images4 from "../../assets/logo.png";
// import images5 from "../../assets/robot.png";
// import images6 from "../../assets/bill.png";
// import images7 from "../../assets/AlarmaGSM.png";
// import images8 from "../../assets/axpro.png";
// import images9 from "../../assets/cartel_alarma.png";
// import images10 from "../../assets/logo.png";
// import images11 from "../../assets/robot.png";
// import images12 from "../../assets/bill.png";
// import images13 from "../../assets/AlarmaGSM.png";
// import images14 from "../../assets/axpro.png";
// import images15 from "../../assets/cartel_alarma.png";
// import images16 from "../../assets/logo.png";

// const ShuffleHero = () => {
//   return (
//     <section className="w-full px-2 py-12 grid grid-cols-1 
//     md:grid-cols-2 items-center gap-8 max-w-10xl mx-auto">
//       <div>
//         <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
//           Better every day
//         </span>
//         <h3 className="text-4xl text-yell md:text-6xl font-semibold">
//           Let's change it up a bit
//         </h3>
//         <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
//           A la vanguardia de la vola.
//         </p>
//         <button className="bg-gn text-white font-medium py-2 px-4 rounded transition-all
//          hover:bg-indigo-600 active:scale-95">
//           Volver
//         </button>
//       </div>
//       <ShuffleGrid />
//     </section>
//   );
// };

// const shuffle = (array) => {
//   let currentIndex = array.length,
//     randomIndex;

//   while (currentIndex !== 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ];
//   }

//   return array;
// };

// const squareData = [
//   { id: 1, src: images1 },
//   { id: 2, src: images2 },
//   { id: 3, src: images3 },
//   { id: 4, src: images4 },
//   { id: 5, src: images5 },
//   { id: 6, src: images6 },
//   { id: 7, src: images7 },
//   { id: 8, src: images8 },
//   { id: 9, src: images9 },
//   { id: 10, src: images10 },
//   { id: 11, src: images11 },
//   { id: 12, src: images12 },
//   { id: 13, src: images13 },
//   { id: 14, src: images14 },
//   { id: 15, src: images15 },
//   { id: 16, src: images16 },
// ];

// const generateSquares = () => {
//   return shuffle(squareData).map((sq) => (
//     <motion.div
//       key={sq.id}
//       layout
//       transition={{ duration: 1.5, type: "spring" }}
//       className="w-full h-full"
//       style={{
//         backgroundImage: `url(${sq.src})`,
//         backgroundSize: "cover",
//       }}
//     ></motion.div>
//   ));
// };

// const ShuffleGrid = () => {
//   const timeoutRef = useRef(null);
//   const [squares, setSquares] = useState(generateSquares());

//   useEffect(() => {
//     shuffleSquares();
//     return () => clearTimeout(timeoutRef.current);
//   }, []);

//   const shuffleSquares = () => {
//     setSquares(generateSquares());
//     timeoutRef.current = setTimeout(shuffleSquares, 3000);
//   };

//   return (
//     <div className="grid grid-cols-4 grid-rows-4 h-[550px] gap-2">
//       {squares.map((sq) => sq)}
//     </div>
//   );
// };

// export default ShuffleHero;










import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styles, { layout } from "../../style";
import Button from "../Button";
import { featuresAlarm } from "../../constants";

// Importa imágenes desde carpeta assets
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpg";
import image4 from "../../assets/4.jpg";
import image5 from "../../assets/5.jpg";
import image6 from "../../assets/6.jpg";
import image7 from "../../assets/7.jpg";
import image8 from "../../assets/8.jpg";
import image9 from "../../assets/9.jpg";
import image10 from "../../assets/10.jpg";
import image11 from "../../assets/11.jpg";
import image12 from "../../assets/12.jpg";
import image13 from "../../assets/13.jpg";
import image14 from "../../assets/14.jpg";
import image15 from "../../assets/15.jpg";
import image16 from "../../assets/16.jpg";

const ShuffleHero = () => {
  const controls = useAnimation();
  const [showText, setShowText] = useState(false);

//ajustar segun se amplia el landing page, regula el scroll para que aparezca el texto.
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 4000)  {
        controls.start({ opacity: 1, y: 0 });
        setShowText(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-6 max-w-7xl mx-auto">
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 60 }}
          animate={controls}
          transition={{ duration: 1}}
          className="text-5xl text-yell md:text-8xl font-semibold"
        >
          Un nuevo modo de protección.
        </motion.h3>
        {showText && (
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={controls}
            transition={{ duration: 1}}
            className="text-base md:text-lg text-white my-4 md:my-6"
          >
            Deja tu seguridad en nuestras manos, asesórate por expertos y encuentra soluciones definitivas. Subred
          </motion.p>
        )}
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: image1,
  },
  {
    id: 2,
    src: image2,
  },
  {
    id: 3,
    src: image3,
  },
  {
    id: 4,
    src: image4,
  },
  {
    id: 5,
    src: image5,
  },
  {
    id: 6,
    src: image6,
  },
  {
    id: 7,
    src: image7,
  },
  {
    id: 8,
    src: image8,
  },
  {
    id: 9,
    src: image9,
  },
  {
    id: 10,
    src: image10,
  },
  {
    id: 11,
    src: image11,
  },
  {
    id: 12,
    src: image12,
  },
  {
    id: 13,
    src: image13,
  },
  {
    id: 14,
    src: image14,
  },
  {
    id: 15,
    src: image15,
  },
  {
    id: 16,
    src: image16,
  },
  
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      layout
      transition={{ duration: 1, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000); 
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
