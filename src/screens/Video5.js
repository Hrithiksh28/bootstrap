import ReactPlayer from 'react-player';

function Video5() {
  return(

    <div>
        <div className="row welcome text-center">
        <div className="col-12">
          <p className="jumbotext3">
            When we were best friends in 11th STD, I could've never
            imagined that life will get any better. I knew that time,
            that this is the best I'm going to get.... People say relationships
            breaks the friendship. But for us, that friendship bond has become
            much bigger and stronger... I Love You Sakshi Borkar... A very Happy Birthday!!!!
          </p>
          <hr />
        </div>
      </div>
    <ReactPlayer
        className="video"
        url= 'resources/videos/cap2.mp4'
        controls = {true}
        />
    </div>
  );
}
export default Video5;
