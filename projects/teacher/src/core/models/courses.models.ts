import type { CourseModel } from '@shared/models/course.model';

export interface CourseItem extends Omit<CourseModel, 'category'> {
    category: 'DISEÑO WEB' | 'DESARROLLO' | 'ARQUITECTURA' | 'MARKETING'; // Tipado estricto para teacher
    students: number;
    rating: number;
}

export type CourseStatus = 'Publicado' | 'Borrador' | 'En Revision';
// Alias de tipo separado para las severidades
export type Severity = 'success' | 'secondary' | 'warning' | 'info' | 'danger';

export const STATUS_SEVERITY_MAP: Record<CourseStatus, Severity> = {
    'Publicado': 'success',
    'Borrador': 'secondary',
    'En Revision': 'warning'
};

export interface CourseCardProps {
    course: CourseItem;
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
}