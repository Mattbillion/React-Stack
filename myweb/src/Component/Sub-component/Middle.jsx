import QuestionList from "./QuestionList";

const result = [
  {
    title: 'Spring Security Request Matcher not working to permit allowed path',
    description: 'I am following an older tutorial to implement Spring Security. Unfortunately, antmatchers is not recogzied as a method in my configuration class, so after doing some research, I believe ...',
    votes: 10,
    answers: 300,
    views: 266,
    username: "Edward Hedger",
    log: "11 asked 1 min ago"
  },

  {
    title: 'Spring Security Request Matcher not working to permit allowed path',
    description: 'I am following an older tutorial to implement Spring Security. Unfortunately, antmatchers is not recogzied as a method in my configuration class, so after doing some research, I believe ...',
    votes: 20,
    answers: 300,
    views: 266,
    username: "Edward Hedger",
    log: "11 asked 1 min ago"
  },

  {
    title: 'DataFrame Row Sequences Using Sports Geospatial Tracking Data',
    description: 'I have some X Y Geospatial Cordinate Data For a Rugby match but there is no data on where the Ball is located. This is my problem! Therefore we have to determine using ',
    votes: 10,
    answers: 400,
    views: 123,
    username: "Edward Hedger",
    log: "11 asked 1 min ago"
  },


]

export default function Middle () {
  return (
    <div>
      <QuestionList
      title={result[0].title}
      description={result[0].description}
      votes={"Votes: " + result[0].votes}
      answers={"Answers: " + result[0].answers}
      views={"Views: " + result[0].views}
      username={result[0].username}
      log={result[0].log}
      />

      <QuestionList
      title={result[1].title}
      description={result[1].description}
      votes={"Votes: " + result[1].votes}
      answers={"Answers: " + result[1].answers}
      views={"Views: " + result[1].views}
      username={result[1].username}
      log={result[1].log}
      />

      <QuestionList
      title={result[2].title}
      description={result[2].description}
      votes={"Votes: " + result[2].votes}
      answers={"Answers: " + result[2].answers}
      views={"Views: " + result[2].views}
      username={result[2].username}
      log={result[2].log}
      />
    </div>
  );
}

