import React from 'react';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return <section id='about' className='section' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-y-10'>
        <motion.div whileInView={'show'} viewport={{ once: false, amount: 0.7 }} variants={fadeIn('up', 0.3)} initial="hidden" className='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>I am a Front-End Developer with 1 year of experience.</h3>
          <p className='mb-6'>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore.
          </p>
          <div className='flex  gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={5} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br /> Experience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={4} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects <br /> Completed
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={10} duration={3} /> : null}k+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Satisfied <br /> Clients
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Contact me</button>
            <a href='#' className='text-gradient btn-link'>
              My Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default About;
