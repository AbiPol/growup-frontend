import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { PrimeReactProvider } from 'primereact/api';
// Temas y estilos base de PrimeReact
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './index.css';

export function mount(el: HTMLElement) {
  const root = createRoot(el);
  root.render(
    <StrictMode>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </StrictMode>,
  );
  return () => root.unmount();
}

// Desarrollo local
const rootElement = document.getElementById('root');
if (rootElement) {
  mount(rootElement);
}
