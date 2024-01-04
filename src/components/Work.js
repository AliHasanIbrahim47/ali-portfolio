import React from 'react';

import { fadeIn } from '../variants';

import { motion } from 'framer-motion';

import img1 from "../assets/web1.png";
import img2 from "../assets/web2.png";
import img3 from "../assets/web3.png";

const Work = () => {
  return <section id='work' className='section'>
    <div className='container mx-auto'>
      <motion.div whileInView={'show'} viewport={{ once: false, amount: 0.7 }} variants={fadeIn('up', 0.3)} initial="hidden" className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div whileInView={'show'} viewport={{ once: false, amount: 0.7 }} variants={fadeIn('right', 0.5)} initial="hidden" className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <div>
            <h2 className='h2 leading-tight text-accent'>My Latest <br /> Projects.</h2>
            <p className='max-w-sm mb-16'>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore.
            </p>
            <button className='btn btn-sm'>View all projects</button>
          </div>
          {/* image */}
          <a href='https://travel-app-nextjs-gules.vercel.app'><div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt='' />
            <div className='group-hover:bottom-24 transition-all duration-700 z-50 absolute -bottom-full left-12'>
              <span className='text-3xl text-white'>Project</span>
            </div>

          </div></a>
        </motion.div>
        <motion.div whileInView={'show'} viewport={{ once: false, amount: 0.7 }} variants={fadeIn('left', 0.5)} initial="hidden" className='flex-1 flex flex-col mt-10 gap-y-10'>
          <a href='https://food-order-app-react-mu.vercel.app'><div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt='' />
            <div className='group-hover:bottom-24 transition-all duration-700 z-50 absolute -bottom-full left-12'>
              <span className='text-3xl text-white'>Project</span>
            </div>
          </div></a>

          <a href='https://real-estate-react-six.vercel.app'><div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt='' />
            <div className='group-hover:bottom-24 transition-all duration-700 z-50 absolute -bottom-full left-12'>
              <span className='text-3xl text-white'>Project</span>
            </div>
          </div>
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section >;
};

export default Work;
