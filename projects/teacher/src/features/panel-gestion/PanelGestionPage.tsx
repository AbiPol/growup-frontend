import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { DashboardStats, Course, Activity } from '../../core/models/dashboard.models';
import type { CourseStatus } from '../../core/models/courses.models';
import { STATUS_SEVERITY_MAP } from '../../core/models/courses.models';
import { DashboardService } from '../../core/services/dashboard.service';
import { StatsCard } from '../../shared/components/StatsCard';

// Importaciones de PrimeReact
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';

export default function PanelGestionPage() {
    const navigate = useNavigate();

    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [courses, setCourses] = useState<Course[]>([]);
    const [activities, setActivities] = useState<Activity[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Ejecutamos todas las peticiones en paralelo
        Promise.all([
            DashboardService.getStats(),
            DashboardService.getCourses(),
            DashboardService.getActivities()
        ]).then(([statsData, coursesData, activitiesData]) => {
            setStats(statsData);
            setCourses(coursesData);
            setActivities(activitiesData);
            setLoading(false);
        }).catch(error => {
            console.error("Error al cargar datos:", error);
            setLoading(false);
        });
    }, []);

    // Plantilla para la columna de Estado
    const statusTemplate = (course: Course) => {
        return (
            <Tag
                value={course.publicationStatus.toUpperCase()}
                severity={STATUS_SEVERITY_MAP[course.publicationStatus as CourseStatus]}
                className="rounded-full px-4 text-[10px] font-black tracking-tighter dark:text-text"
            />
        );
    };

    // Plantilla para la columna de Precio
    const priceTemplate = (course: Course) => {
        return <span className="font-bold text-text font-sans">{course.price.toLocaleString()}€</span>;
    };

    // Plantilla para la valoración
    // const ratingTemplate = (course: Course) => {
    //     return (
    //         <div className="flex items-center text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 w-fit px-3 py-1 rounded-xl transition-colors">
    //             <i className="pi pi-star-fill mr-2 text-xs"></i>
    //             <span className="font-bold text-yellow-700 dark:text-yellow-400 text-sm">{course.rating}</span>
    //         </div>
    //     );
    // };

    if (loading) {
        return (
            <div className="flex items-center justify-center p-20">
                <i className="pi pi-spin pi-spinner text-4xl text-brand-500"></i>
                <span className="ml-3 text-gray-500 font-medium font-sans italic">Preparando tu panel...</span>
            </div>
        );
    }

    return (
        <div className="p-4 space-y-8 animate-fade-in">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                <div>
                    <h1 className="text-4xl font-black text-grow font-sans tracking-tight">
                        Panel de Gestión
                    </h1>
                    <p className="text-gray-500 font-sans mt-1 text-lg">
                        Aquí tienes el pulso de tu actividad docente.
                    </p>
                </div>
                <button
                    onClick={() => navigate('/nuevo-curso')}
                    className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-2xl transition-all font-bold font-sans flex items-center shadow-lg shadow-brand-500/30 active:scale-95 group">
                    <i className="pi pi-plus mr-3 group-hover:rotate-90 transition-transform"></i>
                    Nuevo Curso
                </button>
            </header>

            {/* Grid de KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard title="Total Alumnos" value={stats?.totalStudents.toLocaleString() || 0} icon="pi-users" colorClass="blue" growth={stats?.studentsGrowth} />
                <StatsCard title="Cursos Activos" value={stats?.activeCourses || 0} icon="pi-book" colorClass="orange" />
                <StatsCard title="Valoración Media" value={stats?.averageRating || 0} icon="pi-star-fill" colorClass="yellow" />
                <StatsCard title="Ingresos/mes" value={`${stats?.monthlyRevenue.toLocaleString()}€`} icon="pi-wallet" colorClass="green" growth={stats?.revenueGrowth} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Listado de Cursos */}
                <section className="lg:col-span-2 bg-surface dark:bg-surface p-8 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-black text-text dark:text-text font-sans italic">Tus Cursos Publicados</h2>
                        <button className="text-brand-500 font-bold hover:underline transition-all font-sans">Ver todos</button>
                    </div>

                    <DataTable
                        value={courses}
                        className="p-datatable-sm custom-teaching-table dark-table"
                        scrollable
                        scrollHeight="400px"
                        breakpoint="960px"
                        tableStyle={{ minWidth: '40rem' }}
                        rowClassName={() => 'hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors'}
                    >
                        <Column field="name" header="TÍTULO DEL CURSO" sortable
                            className="font-bold dark:bg-bg text-text dark:text-text py-6" headerClassName="text-gray-400 dark:text-gray-500 font-bold text-xs tracking-widest bg-surface dark:bg-surface border-b border-gray-100 dark:border-gray-800 py-4"></Column>
                        <Column field="category" header="CATEGORÍA" sortable
                            className="text-gray-600 dark:bg-bg dark:text-gray-400" headerClassName="text-gray-400 dark:text-gray-500 font-bold text-xs tracking-widest bg-surface dark:bg-surface border-b border-gray-100 dark:border-gray-800 py-4"></Column>
                        <Column field="rating" header="VALORACIÓN" sortable className="dark:bg-bg" headerClassName="text-gray-400 dark:text-gray-500 font-bold text-xs tracking-widest bg-surface dark:bg-surface border-b border-gray-100 dark:border-gray-800 py-4"></Column>
                        <Column body={priceTemplate} header="PRECIO" sortable className="text-text dark:text-text dark:bg-bg" headerClassName="text-gray-400 dark:text-gray-500 font-bold text-xs tracking-widest bg-surface dark:bg-surface border-b border-gray-100 dark:border-gray-800 py-4"></Column>
                        <Column body={statusTemplate} header="ESTADO" sortable className="dark:bg-bg dark:text-text" headerClassName="text-gray-400 dark:text-gray-500 font-bold text-xs tracking-widest bg-surface dark:bg-surface border-b border-gray-100 dark:border-gray-800 py-4"></Column>
                    </DataTable>
                </section>

                {/* Actividad Reciente */}
                <section className="bg-surface dark:bg-surface p-8 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-800">
                    <h2 className="text-2xl font-black text-text dark:text-text font-sans italic mb-8 text-center lg:text-left">Actividad Reciente</h2>
                    <div className="space-y-6">
                        {activities.map((activity) => (
                            <div key={activity.id} className="flex gap-4 group cursor-pointer p-2 rounded-2xl hover:bg-brand-50/50 dark:hover:bg-brand-900/10 transition-all border border-transparent hover:border-brand-100 dark:hover:border-brand-800">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${activity.type === 'enrollment' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-500 dark:text-blue-400' :
                                    activity.type === 'question' ? 'bg-orange-100 dark:bg-orange-900/20 text-orange-500 dark:text-orange-400' :
                                        'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-500 dark:text-yellow-400'
                                    }`}>
                                    <i className={`pi ${activity.type === 'enrollment' ? 'pi-user-plus' :
                                        activity.type === 'question' ? 'pi-comments' :
                                            'pi-star'
                                        } text-sm`}></i>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-sm text-gray-700 dark:text-gray-300 font-sans leading-tight">
                                        <span className="font-black text-grow dark:text-text">{activity.user}</span> {activity.action} <span className="font-bold text-brand-500">{activity.target}</span>
                                    </p>
                                    <span className="text-[10px] text-gray-400 dark:text-gray-500 font-black uppercase mt-1 tracking-wider">{activity.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}