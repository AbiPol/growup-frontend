import { Injectable, signal, effect } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private readonly THEME_KEY = 'growup-theme';

    // Señal para el estado del tema
    isDarkMode = signal<boolean>(this.getInitialTheme());

    constructor() {
        // Cada vez que la señal cambie, aplicamos el tema y lo guardamos
        effect(() => {
            const dark = this.isDarkMode();
            this.applyTheme(dark);
            localStorage.setItem(this.THEME_KEY, dark ? 'dark' : 'light');
        });
    }

    toggleTheme() {
        this.isDarkMode.update(dark => !dark);
    }

    private getInitialTheme(): boolean {
        const saved = localStorage.getItem(this.THEME_KEY);
        if (saved) return saved === 'dark';

        // Si no hay nada guardado, miramos la preferencia del sistema
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    private applyTheme(dark: boolean) {
        const html = document.documentElement;
        if (dark) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }
}
