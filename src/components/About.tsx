import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="w-48 md:w-64 flex-shrink-0 self-center mx-auto md:mx-0 md:mr-6"
          >
            <img
              src="/profile_pic.png"
              alt="Profile"
              className="rounded-full w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-6 text-justify flex-grow"
          >
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg ">
              Hi, I’m Sai Kumar Nandi, a passionate Full Stack Software Developer with 4+ years of experience 
              turning complex business requirements into powerful, high-performance applications. 
              Armed with a Master’s in Computer Science from the University of Central Missouri, 
              I blend technical depth with a strong drive for building elegant and scalable solutions.

            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              I've had the privilege of working with top-tier financial institutions like BNY Mellon, 
              Tata Consultancy Services, and the National Stock Exchange of India, 
              where I engineered trading platforms, optimized backend services, and delivered secure, 
              enterprise-grade systems used in real-world, high-stakes environments.

            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              From crafting intuitive user interfaces to architecting robust backend services, 
              I specialize in full-stack development using .NET, C#, ASP.NET MVC, Angular, and SQL Server, 
              with hands-on experience in WCF, Docker, Kubernetes, and Agile practices. 
              I thrive on solving complex problems, enhancing system performance, 
              and creating seamless digital experiences that scale.

            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              Driven by curiosity and a commitment to excellence, I’m always looking to push boundaries, 
              automate what’s manual, and build tech that makes an impact.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              Let’s connect and build something exceptional together.!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
