import React from 'react';

import { fadeIn } from '../variants';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Banner = () => {
  return <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 whileInView={'show'} viewport={{ once: false, amount: 0.7 }} variants={fadeIn('up', 0.3)} initial="hidden" className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>Ali <span>Ibrahim</span></motion.h1>
          <motion.div whileInView={'show'} viewport={{ once: false, amount: 0.7 }} variants={fadeIn('up', 0.4)} initial="hidden" className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a</span>
            <TypeAnimation repeat={Infinity} wrapper='span' speed={50} className='text-accent' sequence={['Software Engineer', 2000, 'Front-End Developer', 2000, 'Back-End Developer', 2000]} />
          </motion.div>
          <motion.p whileInView={'show'} viewport={{ once: false, amount: 0.7 }} variants={fadeIn('up', 0.5)} initial="hidden" className='mb-8 max-w-lg mx-auto lg:mx-0'>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore.
          </motion.p>
          <motion.div whileInView={'show'} viewport={{ once: false, amount: 0.7 }} variants={fadeIn('up', 0.6)} initial="hidden" className='flex max-w-max items-center gap-x-6 mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg'>Contact me</button>
            <a href='#' className='text-gradient btn-link'>My Portfolio</a>
          </motion.div>
          <motion.div whileInView={'show'} viewport={{ once: false, amount: 0.7 }} variants={fadeIn('up', 0.7)} initial="hidden" className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='https://github.com/AliHasanIbrahim47'>
              <FaGithub />
            </a>
            <a href='https://www.facebook.com/profile.php?id=100004743640585'>
              <FaFacebook />
            </a>
            <a href='https://www.linkedin.com/in/ali-ibrahima9a915218'>
              <FaLinkedin />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  </section>;
};

export default Banner;
