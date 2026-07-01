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
  { title: 'Create senioryearmax.com', done: true, date: '6/27/2026' },
  { title: 'Bowling at the Union', done: false, date: '' },
  { title: 'Paint a Pot', done: false, date: '' },
  { title: 'ASLC Movie', done: false, date: '' },
  { title: 'Flip at Township', done: false, date: '' },
  { title: 'Spikeball on Landis', done: false, date: '' },
  { title: 'Meal at Suwannee', done: false, date: '' },
  { title: 'Day at the Rez', done: false, date: '' },
  { title: 'Volleyball at Salley', done: false, date: '' },
  { title: 'Become Intramural Champions', done: false, date: '' },
  { title: 'Play Racquetball at the Leach', done: false, date: '' },
  { title: 'Truco Tuesday (Trusday)', done: false, date: '' },
  { title: 'Nintendo DS night (Mario Kart)', done: false, date: '' },
  { title: 'Host a dinner party', done: false, date: '' },
  { title: 'BBQ at Quantum pool', done: false, date: '' },
  { title: 'Karaoke night', done: false, date: '' },
  { title: 'Day trip to Thomasville', done: false, date: '' },
  { title: 'Host a white elephant party', done: false, date: '' },
  { title: 'Watch a Christmas Movie', done: false, date: '' },
  { title: 'Watch a Halloween Movie', done: false, date: '' },
  { title: 'Throw a rager for Carson\'s birthday', done: false, date: '' },
  { title: 'Throw a rager for Amaya\'s birthday', done: false, date: '' },
  { title: 'Throw a rager for Kyara\'s birthday', done: false, date: '' },
  { title: 'Beach day at St. George Island', done: false, date: '' },
  { title: 'Picnic at a park (or Landis)', done: false, date: '' },
  { title: 'Run the Tallahassee Half Marathon', done: false, date: '' },
  { title: 'Senior year bar crawl with the best costumes', done: false, date: '' },
  { title: 'Host a party with a stupid theme', done: false, date: '' },
  { title: 'Eat a grand seafood boil', done: false, date: '' },
  { title: 'Spend a day at the sink hole', done: false, date: '' },
  { title: 'Float around the lazy river (I forgot the name)', done: false, date: '' },
  { title: 'Fun day at Fun Station', done: false, date: '' },
  { title: 'Frolic through Maclay Gardens', done: false, date: '' },
  { title: 'Watch an FSU play', done: false, date: '' },
  { title: 'Attend an FSU symphony', done: false, date: '' },
  { title: 'Espresso martini happy hour in downtown', done: false, date: '' },
  { title: 'Take graduation pictures :(', done: false, date: '' },
  { title: 'Get OUR (yes Carson too) engineering rings', done: false, date: '' },
  { title: 'Throw a graduation party', done: false, date: '' },
  { title: 'Play some pickleball', done: false, date: '' },
  { title: 'Go on an outdoor pursuit', done: false, date: '' },
  { title: 'Attend the FSU Circus', done: false, date: '' },
  { title: 'Laugh at 30 in 60', done: false, date: '' },
  { title: 'Go to a spin class', done: false, date: '' },
  { title: 'Go to a yoga class', done: false, date: '' },
  { title: 'Skip flip for Friday night Shabbat', done: false, date: '' },
  { title: 'Host a wine night', done: false, date: '' },
  { title: 'Host a fruit tier list night', done: false, date: '' },
  { title: 'Invent our drunk spelling bee', done: false, date: '' },
  { title: 'Play twister', done: false, date: '' },
  { title: 'Flamenco classes at Studio D', done: false, date: '' },
  { title: 'Attend the SHPE National Convention', done: false, date: '' },
  { title: 'Shred on some Guitar Hero', done: false, date: '' },
  { title: 'Be performative at The Bark', done: false, date: '' },
  { title: 'Go to every (and I mean every) bar in a 10 mile radius', done: false, date: '' },
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
      <h2 id="activity-tag-cloud-heading">The Official Senior Year Max Bucket List</h2>
      <p>
        {doneCount} conquered. {uniqueActivities.length - doneCount} to go. 
      </p>
      <div className="tag-cloud__list">
        {uniqueActivities.map((activity) => {
          const statusLabel = activity.done ? `Conquered on ${activity.date}` : 'Unconquered (for now).'

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
