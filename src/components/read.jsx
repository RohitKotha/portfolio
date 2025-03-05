import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <div className="-mt-[2rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About</p>
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-5xl leading-[30px]">
 <strong>AWS Summer Intern :</strong><br />
Technical Hub, Surampalem, Andhra Pradesh, India.   
(June 2024 - July 2024)                                        
<br/>
    
  🔹 Engaged in learning and applying 10+ AWS Cloud services, including AWS EC2, S3, Lambda,RDS, and CloudWatch. <br />
  🔹Hands-on skills in cloud computing concepts like scalable infrastructure, serverless computing, 
  and database management.<br />
  🔹Collaborated on 2 AWS-based projects, focusing on real world problems and solving them by using 
cloud technology. <br />
🔹Implemented best practices for deployment, security, and cost optimization of AWS applications. <br />
      </motion.p>

      
    </div>
  );
};

export default SectionWrapper(Education, 'Education');
