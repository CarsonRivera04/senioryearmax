import { useMemo } from 'react'
import './ActivityTagCloud.css'

const doneFaceImg = `${import.meta.env.BASE_URL}smiley-face.jpg`
const notDoneFaceImg = `${import.meta.env.BASE_URL}frowny-face.jpg`

type Activity = {
  title: string
  done: boolean
  date: string
  doneImg?: string
  notDoneImg?: string
}

export const activities: Activity[] = [
  { title: 'Skipping class professionally', done: true, date: '8/30' },
  { title: 'Parking lot diplomacy', done: true, date: '8/30' },
  { title: 'Hallway speed walking', done: true, date: '8/30' },
  { title: 'Senior sunrise', done: false, date: '8/30' },
  { title: 'Senior sunset', done: false, date: '8/30' },
  { title: 'Last first day', done: true, date: '8/30' },
  { title: 'Pretending to read the syllabus', done: true, date: '8/30' },
  { title: 'Overexplaining my absence', done: true, date: '8/30' },
  { title: 'Group project survival', done: true, date: '8/30' },
  { title: 'Lunch table negotiations', done: true, date: '8/30' },
  { title: 'Locker cleanout archaeology', done: false, date: '8/30' },
  { title: 'Graduation cap planning', done: false, date: '8/30' },
  { title: 'College essay panic', done: true, date: '8/30' },
  { title: 'Teacher recommendation follow-up', done: true, date: '8/30' },
  { title: 'Finding a charger', done: true, date: '8/30' },
  { title: 'Borrowing a pencil forever', done: true, date: '8/30' },
  { title: 'Avoiding the front row', done: true, date: '8/30' },
  { title: 'Spirit week commitment', done: false, date: '8/30' },
  { title: 'Homecoming analysis', done: true, date: '8/30' },
  { title: 'Prom group chat chaos', done: false, date: '8/30' },
  { title: 'Senior quote brainstorming', done: true, date: '8/30' },
  { title: 'Yearbook signature economy', done: false, date: '8/30' },
  { title: 'Class ring consideration', done: false, date: '8/30' },
  { title: 'Scholarship tab hoarding', done: true, date: '8/30' },
  { title: 'Application portal refreshing', done: true, date: '8/30' },
  { title: 'Diploma name verification', done: false, date: '8/30' },
  { title: 'Cap and gown pickup', done: false, date: '8/30' },
  { title: 'Senior prank legal review', done: false, date: '8/30' },
  { title: 'Parking pass flexing', done: true, date: '8/30' },
  { title: 'Attendance office relations', done: true, date: '8/30' },
  { title: 'Study hall productivity theater', done: true, date: '8/30' },
  { title: 'Bathroom pass logistics', done: true, date: '8/30' },
  { title: 'Cafeteria line strategy', done: true, date: '8/30' },
  { title: 'Microwave queue patience', done: true, date: '8/30' },
  { title: 'Pep rally endurance', done: false, date: '8/30' },
  { title: 'Club meeting cameo', done: true, date: '8/30' },
  { title: 'AP exam bargaining', done: false, date: '8/30' },
  { title: 'Finals week folklore', done: false, date: '8/30' },
  { title: 'Extra credit hunting', done: true, date: '8/30' },
  { title: 'Transcript inspection', done: true, date: '8/30' },
  { title: 'Emailing at 11:58 PM', done: true, date: '8/30' },
  { title: 'Presentation voice activation', done: true, date: '8/30' },
  { title: 'Quizlet archaeology', done: true, date: '8/30' },
  { title: 'Calculator borrowing', done: true, date: '8/30' },
  { title: 'Notebook page rationing', done: true, date: '8/30' },
  { title: 'Backpack receipt collection', done: true, date: '8/30' },
  { title: 'Water bottle personality', done: true, date: '8/30' },
  { title: 'Morning announcement critique', done: true, date: '8/30' },
  { title: 'Field trip permission slip', done: false, date: '8/30' },
  { title: 'School photo retake', done: false, date: '8/30' },
  { title: 'ID badge disappearance', done: true, date: '8/30' },
  { title: 'Library printer negotiations', done: true, date: '8/30' },
  { title: 'Chromebook battery roulette', done: true, date: '8/30' },
  { title: 'Desk carving observation', done: true, date: '8/30' },
  { title: 'Fire drill migration', done: true, date: '8/30' },
  { title: 'Assembly seating politics', done: true, date: '8/30' },
  { title: 'Substitute teacher briefing', done: true, date: '8/30' },
  { title: 'Bell schedule decoding', done: true, date: '8/30' },
  { title: 'Late pass collecting', done: true, date: '8/30' },
  { title: 'Senioritis research', done: true, date: '8/30' },
  { title: 'Internship pretending', done: false, date: '8/30' },
  { title: 'Resume padding', done: true, date: '8/30' },
  { title: 'LinkedIn profile haunting', done: false, date: '8/30' },
  { title: 'Summer plan invention', done: false, date: '8/30' },
  { title: 'Dorm room spreadsheeting', done: false, date: '8/30' },
  { title: 'Roommate horoscope analysis', done: false, date: '8/30' },
  { title: 'Textbook price grief', done: false, date: '8/30' },
  { title: 'Financial aid form wrestling', done: true, date: '8/30' },
  { title: 'Merit scholarship manifestation', done: true, date: '8/30' },
  { title: 'Major declaration cosplay', done: false, date: '8/30' },
  { title: 'Career fair wandering', done: false, date: '8/30' },
  { title: 'Campus tour snack review', done: true, date: '8/30' },
  { title: 'Decision day outfit', done: false, date: '8/30' },
  { title: 'Acceptance email rereading', done: true, date: '8/30' },
  { title: 'Rejection email character arc', done: true, date: '8/30' },
  { title: 'Waitlist delusion management', done: false, date: '8/30' },
  { title: 'Commitment post drafting', done: false, date: '8/30' },
  { title: 'Graduation rehearsal confusion', done: false, date: '8/30' },
  { title: 'Walking across the stage', done: false, date: '8/30' },
  { title: 'Family photo marathon', done: false, date: '8/30' },
  { title: 'Thank-you note avoidance', done: false, date: '8/30' },
  { title: 'Goodbye speech workshopping', done: false, date: '8/30' },
  { title: 'Nostalgia speedrun', done: false, date: '8/30' },
  { title: 'Last locker slam', done: false, date: '8/30' },
  { title: 'Senior skip day logistics', done: false, date: '8/30' },
  { title: 'Beach week mythology', done: false, date: '8/30' },
  { title: 'Memory box stuffing', done: false, date: '8/30' },
  { title: 'Time capsule overthinking', done: false, date: '8/30' },
  { title: 'Playlist emotional damage', done: true, date: '8/30' },
  { title: 'Teacher goodbye tour', done: false, date: '8/30' },
  { title: 'Classroom chair nostalgia', done: false, date: '8/30' },
  { title: 'Parking spot farewell', done: false, date: '8/30' },
  { title: 'Summer job onboarding', done: false, date: '8/30' },
  { title: 'Alarm clock betrayal', done: true, date: '8/30' },
  { title: 'First paycheck prophecy', done: false, date: '8/30' },
  { title: 'Packing list denial', done: false, date: '8/30' },
  { title: 'Adulting beta test', done: false, date: '8/30' },
  { title: 'Leaving town rehearsal', done: false, date: '8/30' },
  { title: 'One more lap around school', done: false, date: '8/30' },
]

type ActivityTagCloudProps = {
  activities?: Activity[]
}

function getTagClass(title: string) {
  const score = title.split('').reduce((total, letter) => {
    return total + letter.charCodeAt(0)
  }, 0)

  return `tag-cloud__item tag-cloud__item--${(score % 5) + 1}`
}

function getStatusImage(activity: Activity) {
  return activity.done
    ? activity.doneImg || doneFaceImg
    : activity.notDoneImg || notDoneFaceImg
}

function ActivityTagCloud({ activities: activityList = activities }: ActivityTagCloudProps) {
  const uniqueActivities = useMemo(() => {
    const seenTitles = new Set<string>()

    return activityList.filter((activity) => {
      const cleanTitle = activity.title.trim()

      if (!cleanTitle || seenTitles.has(cleanTitle)) {
        return false
      }

      seenTitles.add(cleanTitle)
      return true
    })
  }, [activityList])

  const doneCount = uniqueActivities.filter((activity) => activity.done).length

  return (
    <section className="tag-cloud" aria-labelledby="activity-tag-cloud-heading">
      <h2 id="activity-tag-cloud-heading">Senior Year Max Activities</h2>
      <p>
        {doneCount} done. {uniqueActivities.length - doneCount} not done.
      </p>
      <div className="tag-cloud__list">
        {uniqueActivities.map((activity) => {
          const statusLabel = activity.done ? 'Conquered.' : 'Unconquered (for now).'

          return (
            <article
              aria-label={`${activity.title}: ${statusLabel}`}
              className={`${getTagClass(activity.title)} ${
                activity.done ? 'tag-cloud__item--done' : 'tag-cloud__item--not-done'
              }`}
              key={activity.title}
            >
              <span className="tag-cloud__title">{activity.title}</span>
              <span className="tag-cloud__status">
                <img alt="" src={getStatusImage(activity)} />
                <span>{statusLabel}</span>
              </span>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default ActivityTagCloud
