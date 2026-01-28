import type { RouteObject } from 'react-router-dom';
import { teacherMenuMetadata } from './formador.metadata';
import AnaliticasPage from './analiticas/AnaliticasPage';
import GestionCursosPage from './gestion-cursos/GestionCursosPage';
import GestionCursosEditorPage from './gestion-cursos/GestionCursosEditorPage';
import PanelGestionPage from './panel-gestion/PanelGestionPage';
import TeacherLayout from './TeacherLayout';
import type { JSX } from 'react';

// Mapeamos los componentes a los metadatos
const componentMap: Record<string, JSX.Element> = {
    'analiticas': <AnaliticasPage />,
    'gestion-cursos': <GestionCursosPage />,
    'panel-gestion': <PanelGestionPage />,
    //'editar-curso/:id': <GestionCursosEditorPage />,
    //'nuevo-curso': <GestionCursosEditorPage />,
};

export const teacherRoutes: RouteObject[] = [
    {
        path: '',
        element: <TeacherLayout />,
        children: [
            ...teacherMenuMetadata.map(meta => ({
                path: meta.path,
                element: componentMap[meta.path]
            })),
            { path: 'editar-curso/:id', element: <GestionCursosEditorPage /> },
            { path: 'nuevo-curso', element: <GestionCursosEditorPage /> },
            { path: '', element: <PanelGestionPage /> }
        ]
    }
];