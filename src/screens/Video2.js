import ReactPlayer from 'react-player';

function Video2() {
  return(
    <div>
      <div className="row welcome text-center">
      <div className="col-12">
        <p className="jumbotext3">
          Is sacrificing your time, your enegry for your better half
          really necessary? I don't think so.. You made me realize what
          love is baby..
        </p>
        <hr />
      </div>
    </div>
    <ReactPlayer
        className="video"
        url= 'resources/videos/card1.mp4'
        controls = {true}
        />
      </div>
  );
}
export default Video2;
