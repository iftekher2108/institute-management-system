import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/themes/lara-dark-blue/theme.css";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        if (import.meta.env.SSR) {
            hydrateRoot(el,<PrimeReactProvider value={{ ripple: true }}>
                <App {...props} />
                </PrimeReactProvider> );
            return;
        }

        createRoot(el).render(<PrimeReactProvider value={{ ripple: true }}>
            <App {...props} />
            </PrimeReactProvider>);
    },
    progress: {
        color: '#4B5563',
    },
});
