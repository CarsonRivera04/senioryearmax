import { useEffect, useState } from 'react';

function CustomCountdown() {
  // August 21, 2026 at 5:00 PM Eastern Daylight Time (UTC-4).
  const startTime = new Date('2026-08-21T16:00:00Z').getTime();
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1_000);
    return () => window.clearInterval(timer);
  }, []);

  const elapsedSeconds = Math.max(0, Math.floor((now - startTime) / 1_000));
  const days = Math.floor(elapsedSeconds / 86_400);
  const hours = Math.floor((elapsedSeconds % 86_400) / 3_600);
  const minutes = Math.floor((elapsedSeconds % 3_600) / 60);
  const seconds = elapsedSeconds % 60;

  return (
    <span>
      {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
    </span>
  );
}

export default CustomCountdown;
