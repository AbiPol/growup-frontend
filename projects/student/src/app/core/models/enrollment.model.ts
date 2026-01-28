import { CourseModel } from '@shared/models/course.model';

export interface EnrolledCourse extends CourseModel {
    progress: number; // Porcentaje 0-100
    lastAccessDate: Date | string;
    enrollmentStatus: 'active' | 'completed' | 'archived' | 'not_started';
    nextLessonId?: string; // ID de la siguiente lección para "Continuar"
}
