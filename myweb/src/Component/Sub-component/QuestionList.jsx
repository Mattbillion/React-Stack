import '../../Style/QuestionList.css'

export default function QuestionList(props) {
  return (
    <div className="Question-card">
      <div className='left'>
      <p className="Votes">{props.votes}</p>
      <p className="Answer">{props.answers}</p>
      <p className="Views">{props.views}</p>
      </div>
      <div className='right'>
      <h3 className="Title">{props.title}</h3>
      <p className="Description">{props.description}</p>
      <div className="summary-meta">
        <div className="tag-list">
          <ul>
            <li><a href="#">java</a></li>
            <li><a href="#">spring-boot</a></li>
            <li><a href="#">spring-security</a></li>
            <li><a href="#">linux-kernel</a></li>
          </ul>
        </div>
        <div className="user-card">
          <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="profile" />
          <p className='user-name'>{props.username}</p>
          <p className='log'>{props.log}</p>
        </div>
      </div>
      </div>
    </div>    
  );
}