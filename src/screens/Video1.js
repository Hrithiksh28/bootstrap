import ReactPlayer from 'react-player';

function Video1() {
  return(
    <div className="videodisplay">
      <div className="row welcome text-center">
        <div className="col-12">
          <p className="jumbotext3">
            Love at first sight!!! Does beauty really causes you to
            love at frst sight?? Yes it does.... It did for me.. But for me,
            it was your inner beauty, your childishness, your caring behaviour
            towards me that made me fall for you....
          </p>
          <hr />
        </div>
      </div>
    <ReactPlayer
        className="video"
        url= 'resources/videos/cap1.mp4'
        controls = {true}
        />
      <hr />
    </div>
  );
}
export default Video1;
