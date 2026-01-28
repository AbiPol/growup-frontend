//import { CourseItem } from "../../shared/components/CourseCard";

import type { CourseItem } from "../models/courses.models";

const courses: CourseItem[] = [
    {
        id: '1',
        name: 'Domina Tailwind CSS 4 desde Cero',
        description: 'Aprende a maquetar interfaces modernas con la última versión de Tailwind CSS y sus nuevas capacidades de variables CSS.',
        category: 'DISEÑO WEB',
        students: 1240,
        rating: 4.9,
        price: 49.99,
        publicationStatus: 'Publicado'
    },
    {
        id: '2',
        name: 'React 19 & Next.js: Guía Completa',
        description: 'Domina los Server Components, las nuevas hooks y el ecosistema de Next.js para crear apps ultrarrápidas.',
        category: 'DESARROLLO',
        students: 850,
        rating: 4.8,
        price: 79.99,
        publicationStatus: 'Publicado'
    },
    {
        id: '3',
        name: 'Arquitecturas Limpias en TypeScript',
        description: 'Aprende SOLID, patrones de diseño y cómo estructurar proyectos escalables que duren años.',
        category: 'ARQUITECTURA',
        students: 450,
        rating: 4.7,
        price: 59.99,
        publicationStatus: 'Borrador'
    },
    {
        id: '4',
        name: 'Arquitecturas Limpias en TypeScript',
        description: 'Aprende SOLID, patrones de diseño y cómo estructurar proyectos escalables que duren años.',
        category: 'ARQUITECTURA',
        students: 450,
        rating: 4.7,
        price: 59.99,
        publicationStatus: 'En Revision'
    }
];
/**
 * RETO PARA EL USUARIO:
 * Implementar las llamadas a "servidor" (puedes usar el mismo estilo que DashboardService)
 */
export const CourseService = {

    // 1. Crear método getAllCourses() que devuelva un Promise<CourseItem[]>
    getAllCourses(): Promise<CourseItem[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(courses);
            }, 500);
        });
    },
    // 2. Crear método deleteCourse(id)
    deleteCourse(id: string): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const index = courses.findIndex((course) => course.id === id);
                if (index !== -1) {
                    courses.splice(index, 1);
                }
                resolve();
            }, 500);
        });
    },
    // 3. Crear método updateCourse(id, data)
    updateCourse(id: string, data: Partial<CourseItem>): Promise<CourseItem> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = courses.findIndex((course) => course.id === id);
                if (index !== -1) {
                    Object.assign(courses[index], data);
                    resolve(courses[index]);
                } else {
                    // Si no existe, informamos del error
                    reject(new Error(`Curso con id ${id} no encontrado`));
                }
            }, 500);
        });
    },
    // 4. Crear método createCourse(data)
    createCourse(data: CourseItem): Promise<CourseItem> {
        return new Promise((resolve) => {
            setTimeout(() => {
                courses.push(data);
                resolve(data);
            }, 500);
        });
    }

};
