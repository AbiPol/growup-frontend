import { Outlet } from 'react-router-dom';

export default function TeacherLayout() {
    return (
        <div className="min-h-screen bg-bg dark:bg-bg transition-colors duration-300 rounded-4xl">
            {/* área de Contenido Principal que heredará del Shell */}
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <Outlet />
            </main>
        </div>
    );
}