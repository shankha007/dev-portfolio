import { motion } from "framer-motion";
import Head from 'next/head';

import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { fadeInUp, routeAnimation, stagger } from "../animations";

const index = () => {
  return (
    <motion.div
      variants={routeAnimation}
      initial="intial"
      animate="animate"
      exit="exit"
      className="flex flex-col flex-grow px-6 pt-1"
    >
      <Head>
        <title>Shankha Shubhra Das | Portfolio</title>
      </Head>
      <h5 className="my-3 text-base font-medium">
        I am currently working as a Software Enginner at Persistent Systems Ltd.
        I have completed my B.Tech from Academy of Technology with 9.58 DGPA and
        secured 86.8% and 91.7% aggregate in 12th and 10th respectively. I have
        4+ years of experience in Web Development and 2+ years of experience in
        Machine Learning.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer?</h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              key={service.about}
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;
