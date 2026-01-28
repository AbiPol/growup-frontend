export interface RouteMetadata {
    path: string;
    label: string;
    icon: string;
    title: string;
}

export const teacherMenuMetadata: RouteMetadata[] = [
    { path: 'panel-gestion', label: 'Panel de Gestión', icon: 'pi pi-th-large', title: 'Dashboard Formador' },
    { path: 'gestion-cursos', label: 'Gestión de Cursos', icon: 'pi pi-book', title: 'Mis Cursos' },
    { path: 'analiticas', label: 'Analíticas', icon: 'pi pi-chart-bar', title: 'Estadísticas' },
];
