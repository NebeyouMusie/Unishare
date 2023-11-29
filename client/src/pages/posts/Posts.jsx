import './posts.css'

const Posts = () => {
  return (
    <div className='posts'>
      <div className='recentPosts'>
        <div className='postCard'>
          <div className='topContent'>
            <p className='postType'>EXAM</p>
            <p className='posttime'>10:20AM</p>
          </div>
          <p className='postDescription'>Dear students, you'll have...</p>
        </div>
        <div className='postCard'>
          <div className='topContent'>
            <p className='postType'>EXAM</p>
            <p className='posttime'>10:20AM</p>
          </div>
          <p className='postDescription'>Dear students, you'll have...</p>
        </div>
        <div className='postCard'>
          <div className='topContent'>
            <p className='postType'>EXAM</p>
            <p className='posttime'>10:20AM</p>
          </div>
          <p className='postDescription'>Dear students, you'll have...</p>
        </div>
        <div className='postCard'>
          <div className='topContent'>
            <p className='postType'>EXAM</p>
            <p className='posttime'>10:20AM</p>
          </div>
          <p className='postDescription'>Dear students, you'll have...</p>
        </div>
        <div className='postCard'>
          <div className='topContent'>
            <p className='postType'>EXAM</p>
            <p className='posttime'>10:20AM</p>
          </div>
          <p className='postDescription'>Dear students, you'll have...</p>
        </div>
        <div className='postCard'>
          <div className='topContent'>
            <p className='postType'>EXAM</p>
            <p className='posttime'>10:20AM</p>
          </div>
          <p className='postDescription'>Dear students, you'll have...</p>
        </div>
        <div className='postCard'>
          <div className='topContent'>
            <p className='postType'>EXAM</p>
            <p className='posttime'>10:20AM</p>
          </div>
          <p className='postDescription'>Dear students, you'll have...</p>
        </div>
      </div>
      <div className='postForm'>
        <form >
          <div className='postTitle'>
            <p>Title</p>
            <input type="text" placeholder='Enter post title'/>
          </div>
          <div className='postDesc'>
            <p>Description</p>
            <textarea type="text" rows="4" placeholder='Enter post description'/>
          </div>
          <div className='postDueDate'>
            <p>Due Date</p>
            <input type="date" />
          </div>
          <div className='postFile'>
            <p>Choose a file</p>
            <div className='chooseFile'>
              <label htmlFor="postFile">
                <i class="fa-solid fa-file-circle-plus"></i>
              </label>
              <input style={{display: "none"}} type="file" id='postFile'/>
              <select name="posttype" id="postType">
                <option value="">Announcement</option>
                <option value="">Resource</option>
                <option value="">Assignment</option>
              </select>
            </div>
          </div>
          <button className="postButton" type='submit'>post</button>
        </form>
      </div>
    </div>
  )
}

export default Posts