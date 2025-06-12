
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Server, Rabbit, FileText, Users, Truck, Cloud } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profilePic from '../assets/perfil.jpeg';

const corporateProjects = [
  {
    icon: <Rabbit className="h-8 w-8 text-sky-400" />,
    title: "Control de Accesos – Club Boca Juniors",
    description: "Integración con sistema externo de validación de entradas en tiempo real mediante colas de mensajes.",
    tags: ["Java", "Spring Boot", "RabbitMQ", "SQL Server"]
  },
  {
    icon: <FileText className="h-8 w-8 text-sky-400" />,
    title: "Gestión de Eventos Sociales",
    description: "Backend para administración de entradas, reservas, reportes y facturación (integración con API AFIP).",
    tags: ["Java", "Spring Boot", "REST API", "PostgreSQL"]
  },
  {
    icon: <Users className="h-8 w-8 text-sky-400" />,
    title: "Sistema Inmobiliario",
    description: "Gestión de lotes, seguimiento de pagos, documentación y generación de reportes y PDFs.",
    tags: ["Java", "Spring Boot", "Hibernate", "PostgreSQL", "PDFBox"]
  },
  {
    icon: <Briefcase className="h-8 w-8 text-sky-400" />,
    title: "Gestión Médica Institucional",
    description: "Registro de profesionales, obras sociales, nomencladores y facturación completa (honorarios, gastos, coseguro).",
    tags: ["Java", "Spring Boot", "API AFIP", "Spring Security", "Docker"]
  }
];


const freelanceProjects = [
  {
    icon: <Truck className="h-8 w-8 text-sky-400" />,
    title: "Sistema de Gestión Logística de Transporte",
    description: "Backend completo, diseño de base de datos y liderazgo técnico. Despliegue en VPS con configuración de infraestructura y sistema en producción.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Linux", "Tomcat"]
  }
];


const skills = ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "REST APIs", "Microservices", "RabbitMQ", "PostgreSQL", "MySQL", "Linux", "Tomcat", "Git", "Maven", "Agile Methodologies"];

const PortfolioPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <motion.header
        className="text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-block p-4 bg-sky-500/20 rounded-full mb-6 shadow-lg">
          <img
            src={profilePic}
            alt="Foto de perfil del desarrollador"
            className="h-24 w-24 rounded-full border-4 border-sky-400 shadow-xl"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-400">
          Juan Manuel F. Robles
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-sky-200/80 max-w-2xl mx-auto">
          Desarrollador Backend Especializado en Java & Spring Boot | Creando Soluciones Robustas y Escalables
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <a href="mailto:roblesc4rp@gmail.com" className="text-sky-300 hover:text-sky-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/juanmarobles/" target="_blank" rel="noopener noreferrer" className="text-sky-300 hover:text-sky-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
          </a>
          <a href="https://github.com/juanmarobles" target="_blank" rel="noopener noreferrer" className="text-sky-300 hover:text-sky-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
          </a>
        </div>
      </motion.header>

      <motion.section
        className="mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 flex items-center justify-center text-sky-300">
          <Briefcase className="h-10 w-10 mr-3 text-sky-400" /> Proyectos Corporativos
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {corporateProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="glassmorphic h-full border-sky-700/50 shadow-2xl hover:shadow-sky-500/50 transition-shadow duration-300">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="p-3 rounded-lg bg-sky-500/20">{project.icon}</div>
                  <div>
                    <CardTitle className="text-2xl font-semibold text-sky-100">{project.title}</CardTitle>
                    <CardDescription className="text-sky-300/80">{project.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary" className="bg-sky-600/70 text-sky-100 border-sky-500">{tag}</Badge>)}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 flex items-center justify-center text-sky-300">
          <Code className="h-10 w-10 mr-3 text-sky-400" /> Proyectos Freelance
        </h2>
        <div className="grid md:grid-cols-1 gap-8"> {/* Assuming fewer freelance projects, adjust as needed */}
          {freelanceProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="glassmorphic border-sky-700/50 shadow-2xl hover:shadow-sky-500/50 transition-shadow duration-300">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="p-3 rounded-lg bg-sky-500/20">{project.icon}</div>
                  <div>
                    <CardTitle className="text-2xl font-semibold text-sky-100">{project.title}</CardTitle>
                    <CardDescription className="text-sky-300/80">{project.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary" className="bg-sky-600/70 text-sky-100 border-sky-500">{tag}</Badge>)}
                  </div>
                  <div className="mt-4 flex items-center text-sm text-sky-400">
                    <Cloud className="h-4 w-4 mr-2" />
                    <span>Desplegado en producción en VPS Hostinger</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 flex items-center justify-center text-sky-300">
          <Server className="h-10 w-10 mr-3 text-sky-400" /> Habilidades Técnicas
        </h2>
        <motion.div
          variants={itemVariants}
          className="p-6 md:p-8 glassmorphic rounded-xl border-sky-700/50 shadow-2xl"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: Math.random() > 0.5 ? 3 : -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Badge variant="default" className="text-md px-4 py-2 bg-gradient-to-tr from-sky-500 to-cyan-400 text-slate-900 font-semibold shadow-lg cursor-default">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <motion.footer
        className="text-center py-8 border-t border-sky-700/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <p className="text-sky-300/70">&copy; {new Date().getFullYear()} Juan Manuel Ferreyra Robles. Todos los derechos reservados.</p>
      </motion.footer>
    </div>
  );
};

export default PortfolioPage;
