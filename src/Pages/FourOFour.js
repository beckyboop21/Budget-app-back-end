import { Link  } from "react-router-dom";

export default function FourOFour() {
  return (
    <div className="err">
      <h1>Sorry, no page found</h1>
      <h2 className="return"><Link to={`/`}>
        Return Home!
      </Link></h2>
      <img
  src="https://media4.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
  width={600}
  alt="404 Error gif"
/>
    </div>
  );
}