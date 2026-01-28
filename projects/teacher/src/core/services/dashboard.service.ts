import type { DashboardStats, Course, Activity } from '../models/dashboard.models';

/**
 * En React no tenemos inyección de dependencias como en Angular,
 * por lo que a menudo usamos funciones exportadas o clases simples.
 */
export const DashboardService = {

    getStats: (): Promise<DashboardStats> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    totalStudents: 1250,
                    activeCourses: 12,
                    averageRating: 4.8,
                    monthlyRevenue: 3450.50,
                    studentsGrowth: 12.5,
                    revenueGrowth: 8.2
                });
            }, 800);
        });
    },

    getCourses: (): Promise<Course[]> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: '1', name: 'Domina Tailwind CSS 4', category: 'Diseño Web', students: 450, rating: 4.9, price: 49.99, publicationStatus: 'Publicado', lastUpdate: '2025-01-20' },
                    { id: '2', name: 'React Avanzado con TypeScript', category: 'Desarrollo', students: 320, rating: 4.8, price: 59.99, publicationStatus: 'Publicado', lastUpdate: '2025-01-15' },
                    { id: '3', name: 'Angular Pro: Arquitecturas Híbridas', category: 'Desarrollo', students: 180, rating: 4.7, price: 64.99, publicationStatus: 'Borrador', lastUpdate: '2025-01-24' },
                    { id: '4', name: 'UI/UX para Programadores', category: 'Diseño', students: 290, rating: 4.9, price: 39.99, publicationStatus: 'En Revision', lastUpdate: '2025-01-10' },
                ]);
            }, 500);
        });
    },

    getActivities: (): Promise<Activity[]> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: '1', user: 'Maria García', action: 'se inscribió en', target: 'Domina Tailwind CSS 4', time: 'hace 5 min', type: 'enrollment' },
                    { id: '2', user: 'Juan Pérez', action: 'dejó una reseña en', target: 'React Avanzado', time: 'hace 20 min', type: 'review' },
                    { id: '3', user: 'Carlos Ruiz', action: 'hizo una pregunta en', target: 'Angular Pro', time: 'hace 1 hora', type: 'question' },
                    { id: '4', user: 'Ana López', action: 'se inscribió en', target: 'UI/UX para Programadores', time: 'hace 2 horas', type: 'enrollment' },
                ]);
            }, 600);
        });
    }
};
