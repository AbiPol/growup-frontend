import type { CourseStatus } from './courses.models';

export interface RevenueData {
    month: string;
    revenue: number;
    enrollments: number;
}

export interface CoursePerformance {
    courseId: string;
    courseName: string;
    students: number;
    revenue: number;
    rating: number;
    status: CourseStatus;
}

export interface AnalyticsSummary {
    totalRevenue: number;
    totalStudents: number;
    averageRating: number;
    activeCourses: number;
}
