import './dashboard.css'

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <div className='receivedAssignmentsCard'>
        <h1 className='receivedText'>RECEIVED ASSIGNMENTS</h1>
      </div>
      <div className='yourPostsCard'>
        <h1 className='postsText'>YOUR POSTS</h1>
      </div>
    </div>
  )
}
