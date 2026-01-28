import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CourseCard } from '../../shared/components/CourseCard';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { CourseService } from '../../core/services/courses.service';
import type { CourseItem } from '../../core/models/courses.models';

export default function GestionCursosPage() {
    const navigate = useNavigate();
    // --- ESPACIO PARA EL RETO DEL USUARIO ---
    // [TIP]: Aquí deberías usar useState para los cursos y useEffect para cargarlos del servicio
    // ----------------------------------------

    const [searchTerm, setSearchTerm] = useState('');
    const [courses, setCourses] = useState<CourseItem[]>([]);

    const [category, setCategory] = useState('');
    const [status, setStatus] = useState('');

    const categories = [
        { name: 'Todas las Categorías', value: '' },
        { name: 'Diseño Web', value: 'Diseño Web' },
        { name: 'Desarrollo', value: 'Desarrollo' },
        { name: 'Arquitectura', value: 'Arquitectura' }
    ];

    const statuses = [
        { name: 'Cualquier Estado', value: '' },
        { name: 'Publicado', value: 'Publicado' },
        { name: 'Borrador', value: 'Borrador' },
        { name: 'En Revision', value: 'En Revision' }
    ];

    useEffect(() => {
        const loadCourses = async () => {
            try {
                const courses = await CourseService.getAllCourses();
                setCourses(courses);
            } catch (error) {
                console.error('Error al cargar los cursos:', error);
            }
        };
        loadCourses();
    }, []);

    // Esta variable se recalcula cada vez que cambian: searchTerm, category, status o courses
    // Se guarda el resultado en memoria y se vuelve a calcular solo cuando cambia alguno de los valores
    const filteredCourses = useMemo(() => courses.filter((course) => {
        // 1. Filtro por búsqueda de texto (Nombre)
        const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase());

        // 2. Filtro por Categoría (Normalizamos a mayúsculas para comparar)
        const matchesCategory = !category || course.category.toUpperCase() === category.toUpperCase();

        // 3. Filtro por Estado
        const matchesStatus = !status || course.publicationStatus === status;

        return matchesSearch && matchesCategory && matchesStatus;
    }), [courses, searchTerm, category, status]);

    const handleDeleteCourse = async (id: string) => {
        // Opcional: Podrías añadir un Confirm antes de borrar
        if (window.confirm('¿Estás seguro de que deseas eliminar este curso?')) {
            try {
                await CourseService.deleteCourse(id);
                setCourses((prev) => prev.filter((course) => course.id !== id));
            } catch (error) {
                console.error('Error al borrar el curso:', error);
            }
        }
    };

    return (
        <div className="p-4 space-y-8 animate-fade-in bg-bg dark:bg-bg min-h-screen transition-colors duration-300">
            {/* Header de la Página */}
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-4xl font-black text-grow dark:text-grow font-sans tracking-tight italic">
                        Mis Cursos
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 font-sans mt-1 text-lg">
                        Gestiona, edita y publica tu contenido educativo.
                    </p>
                </div>
                <button
                    onClick={() => navigate('../nuevo-curso')}
                    className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-2xl transition-all font-black font-sans flex items-center shadow-xl shadow-brand-500/30 active:scale-95 group"
                >
                    <i className="pi pi-plus-circle mr-3 text-xl group-hover:rotate-90 transition-transform"></i>
                    CREAR NUEVO CURSO
                </button>
            </header>

            {/* Barra de Filtros */}
            <div className="bg-surface dark:bg-surface p-6 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <i className="pi pi-search absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    <InputText
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Buscar por título o categoría..."
                        className="w-full pr-12 py-4 rounded-2xl border-gray-100 dark:border-gray-800 bg-bg dark:bg-bg/50 focus:bg-surface dark:focus:bg-surface transition-all font-sans text-text dark:text-text"
                    />
                </div>
                <Dropdown
                    placeholder="Todas las Categorías"
                    value={category}
                    onChange={(e) => setCategory(e.value)}
                    options={categories}
                    optionLabel="name"
                    optionValue="value"
                    className="w-full md:w-60 rounded-2xl border-gray-100 dark:border-gray-800 bg-bg dark:bg-bg/50 font-sans font-bold"
                />
                <Dropdown
                    placeholder="Cualquier Estado"
                    value={status}
                    onChange={(e) => setStatus(e.value)}
                    options={statuses}
                    optionLabel="name"
                    optionValue="value"
                    className="w-full md:w-52 rounded-2xl border-gray-100 dark:border-gray-800 bg-bg dark:bg-bg/50 font-sans font-bold"
                />
            </div>

            {/* Grid de Cursos */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredCourses.map(course => (
                    <CourseCard
                        key={course.id}
                        course={course}
                        onEdit={(id) => navigate(`../editar-curso/${id}`)}
                        onDelete={handleDeleteCourse}
                    />
                ))}
            </div>

            {/* Estado Vacío (Opcional) */}
            {courses.length === 0 && (
                <div className="flex flex-col items-center justify-center p-20 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
                    <i className="pi pi-book text-6xl text-gray-300 mb-4"></i>
                    <p className="text-gray-500 font-bold font-sans">Aún no has creado ningún curso.</p>
                </div>
            )}
        </div>
    );
}