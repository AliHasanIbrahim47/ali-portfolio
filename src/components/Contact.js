import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return <section id='contact' className='py-16 lg:section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div whileInView={'show'} viewport={{ once: false, amount: 0.3 }} variants={fadeIn('right', 0.3)} initial="hidden" className='flex-1 flex justify-start items-center'>
          <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
          <h2 className='text-[45px] lg:text-[90px] mb-12 leading-none'>Let us work <br /> together!</h2>
        </motion.div>
        <motion.form whileInView={'show'} viewport={{ once: false, amount: 0.3 }} variants={fadeIn('left', 0.3)} initial="hidden" className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
          <input
            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
            type='text' placeholder='your name'
          />
          <input
            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
            type='text' placeholder='your email'
          />
          <textarea
            className='resize-none mb-12 bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
            type='text' placeholder='your message'
          >
          </textarea>
          <button className='btn btn-lg'>Send message</button>
        </motion.form>
      </div>
    </div>
  </section>;
};

export default Contact;
