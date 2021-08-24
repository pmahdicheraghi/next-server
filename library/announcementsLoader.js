import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const announcementsDirectory = path.join(process.cwd(), 'announcements')

export function getAnnouncementsData() {
  // Get file names under /announcements
  const fileNames = fs.readdirSync(announcementsDirectory)
  const allAnnouncementsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(announcementsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the announcement metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort announcements by date
  return allAnnouncementsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}
