export interface DashboardStats {
    totalStudents: number;
    activeCourses: number;
    averageRating: number;
    monthlyRevenue: number;
    studentsGrowth: number;
    revenueGrowth: number;
}

import type { CourseModel } from '@shared/models/course.model';

export interface Course extends Omit<CourseModel, 'category'> {
    category: string;
    students: number;
    rating: number;
    lastUpdate: string;
}

export interface Activity {
    id: string;
    user: string;
    action: string;
    target: string;
    time: string;
    type: 'enrollment' | 'question' | 'review';
}
