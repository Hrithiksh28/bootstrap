import ReactPlayer from 'react-player';

function Video4() {
  return(

    <div>
        <div className="row welcome text-center">
        <div className="col-12">
          <p className="jumbotext3">
            When you say you do not like wearing expensive rings,
            I totally agree... Because you are more precious than
            any other expensive stone... You are my 24K Karat Gold..
          </p>
          <hr />
        </div>
      </div>
    <ReactPlayer
        className="video"
        url= 'resources/videos/card3.mp4'
        controls = {true}
        />
    </div>
  );
}
export default Video4;
