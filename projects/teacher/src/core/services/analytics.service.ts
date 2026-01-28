import type { AnalyticsSummary, CoursePerformance, RevenueData } from '../models/analytics.models';
import { CourseService } from './courses.service';

export const AnalyticsService = {
    getSummary: (): Promise<AnalyticsSummary> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    totalRevenue: 54320.50,
                    totalStudents: 3450,
                    averageRating: 4.85,
                    activeCourses: 15
                });
            }, 600);
        });
    },

    getRevenueTrends: (): Promise<RevenueData[]> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { month: 'Ene', revenue: 4500, enrollments: 120 },
                    { month: 'Feb', revenue: 5200, enrollments: 145 },
                    { month: 'Mar', revenue: 4800, enrollments: 130 },
                    { month: 'Abr', revenue: 6100, enrollments: 180 },
                    { month: 'May', revenue: 7500, enrollments: 210 },
                    { month: 'Jun', revenue: 8900, enrollments: 250 },
                    { month: 'Jul', revenue: 9200, enrollments: 280 },
                    { month: 'Ago', revenue: 8500, enrollments: 230 },
                    { month: 'Sep', revenue: 10500, enrollments: 310 },
                    { month: 'Oct', revenue: 12000, enrollments: 350 },
                    { month: 'Nov', revenue: 13500, enrollments: 400 },
                    { month: 'Dic', revenue: 15000, enrollments: 450 }
                ]);
            }, 800);
        });
    },

    getCoursePerformance: async (): Promise<CoursePerformance[]> => {
        const courses = await CourseService.getAllCourses();
        return courses.map(course => ({
            courseId: course.id,
            courseName: course.name,
            students: course.students,
            revenue: course.students * course.price * 0.7, // Simulado
            rating: course.rating,
            status: course.publicationStatus
        }));
    }
};
