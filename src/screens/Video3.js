import ReactPlayer from 'react-player';

function Video3() {
  return(
    <div>
      <div className="row welcome text-center">
      <div className="col-12">
        <p className="jumbotext3">
           Okay sacrificing your food is okay... Your better half
           can eat your food!!!
        </p>
        <hr />
      </div>
    </div>
          <ReactPlayer
        className="video"
        url= 'resources/videos/card2.mp4'
        controls = {true}
        />
    </div>
  );
}
export default Video3;
