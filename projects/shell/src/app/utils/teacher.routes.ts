import { Routes } from '@angular/router';
import { ReactBridgeComponent } from '../shared/components/react-bridge/react-bridge.component';

export const teacherRoutes: Routes = [
    {
        path: '**', // Captura cualquier subruta y deja que React decida
        component: ReactBridgeComponent
    }
];
