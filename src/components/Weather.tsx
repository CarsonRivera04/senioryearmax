import { useEffect } from 'react';

function Weather() {
    useEffect(() => {
        const id = 'weatherwidget-io-js';
        if (!document.getElementById(id)) {
            const js = document.createElement('script');
            js.id = id;
            js.src = 'https://weatherwidget.io/js/widget.min.js';
            js.async = true;
            document.body.appendChild(js);
            return;
        }

        // If the script is already present, try to re-initialize the widget if possible
        const w = (window as any);
        if (w) {
            if (typeof w.__weatherwidget_init === 'function') {
                w.__weatherwidget_init();
            } else if (typeof w.weatherwidget_init === 'function') {
                w.weatherwidget_init();
            } else {
                // Fallback: briefly append a cloned script to trigger initialization
                const existing = document.getElementById(id) as HTMLScriptElement | null;
                if (existing) {
                    const clone = document.createElement('script');
                    clone.src = existing.src;
                    clone.async = true;
                    document.body.appendChild(clone);
                    clone.onload = () => setTimeout(() => { clone.remove(); }, 1500);
                }
            }
        }
    }, []);

    return (
        <a
            className="weatherwidget-io"
            href="https://forecast7.com/en/30d44n84d28/tallahassee/?unit=us"
            data-label_1="TALLAHASSEE"
            data-label_2="WEATHER"
            data-theme="original"
        >
            TALLAHASSEE WEATHER
        </a>
    );
}

export default Weather;