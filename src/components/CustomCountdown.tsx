import Countdown from 'react-countdown';

function CustomCountdown() {
  const targetDate: Date = new Date('2026-08-24T08:00:00Z');

  // 1. Create a custom renderer function
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <span>The event is here!</span>;
    } else {
      // Render your custom text format
      return (
        <span>
          {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
        </span>
      );
    }
  };
  return (
    <>
      <Countdown date={targetDate} renderer={renderer} />
    </>
  );
}

export default CustomCountdown;