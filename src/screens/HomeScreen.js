import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';

const image1 = 'resources/img.png';
function HomeScreen() {
  return(
          <div>
              <div className="carousel slide" id="slides" data-ride="carousel">
                <ul className="carousel-indicators">
                  <li data-target="#slides" data-slide-to={0} className="active" />
                  <li data-target="#slides" data-slide-to={1} />
                  <li data-target="#slides" data-slide-to={2} />
                </ul>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="resources/car1.png" />
                    <div className="carousel-caption">
                      <h1 className="display-2">
                        Welcome To
                      </h1>
                      <h3>DAppDemic</h3>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="resources/car2.png" />
                  </div>
                  <div className="carousel-item">
                    <img src="resources/car3.png" />
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row jumbotron text-center">
                  <div className="col-12">
                    <p className="jumbotext">
                      Introductory site about the team and the product
                    </p>
                  </div>
                </div>
              </div>
              <div className="container-fluid padding">
                <div className="row welcome text-center">
                  <div className="col-12">
                    <h1 className="welcometext">
                      You are the BEST Thing that has ever happened to me
                    </h1>
                  </div>
                  <hr />
                  <div className="col-12">
                    <p className="lead">
                      Hey there, you beautiful! A very happy birthday to
                      a very strong, a successful girl and the love of my life.
                    </p>
                  </div>
                </div>
              </div>

              <div className="container-fluid padding">
                <div className="row padding">
                  <div className="col-lg-6">
                    <h2>
                      One kiss defines thousands of moments. Lovely moments!
                    </h2>
                    <br />
                    <p className="lead">
                      Babe, you have turned me into a person who was confident
                      in himself. Without you, I surely would have given up. You
                      are the source of my light!
                    </p>
                    <h6 className="poem">
                      Alone in the darkness
                    </h6>
                    <h6 className="poem">
                      Shattered was I
                    </h6>
                    <h6 className="poem">
                      Slowly growing with the madness
                      </h6>
                    <h6 className="poem">
                      Was not able to fly.
                      </h6>
                    <h6 className="poem">
                      I felt a hand on me
                      </h6>
                    <h6 className="poem">
                      Of gentle care and glee.
                      </h6>
                    <h6 className="poem">
                      Surprisingly he was my lost friend
                      </h6>
                      <h6 className="poem">
                      who gave me a hope to love again.
                      </h6>
                      <h6 className="poem">
                      He thought it would be awkward
                      </h6>
                      <h6 className="poem">
                      Because he had loved me once
                      </h6>
                      <h6 className="poem">
                      And I had decided to move forward
                      </h6>
                      <h6 className="poem">
                      Not only for months.
                      </h6>
                      <h6 className="poem">
                      I asked him to wait
                      </h6>
                      <h6 className="poem">
                      Because my mind was an empty plate.
                      </h6>
                      <h6 className="poem">
                      We decided to become best friends
                      </h6>
                      <h6 className="poem">
                      As we could not handle the relationship trends.
                      </h6>
                      <h6 className="poem">
                      We were not in a  relationship
                      </h6>
                      <h6 className="poem">
                      But had promised for the future
                      </h6>
                      <h6 className="poem">
                      Just because its an unique relationship
                      </h6>
                      <h6 className="poem">
                      It has an unusual structure.
                      </h6>
                    <Link to="/video1" className="btn btn-primary">
                      Click for a nostalgic moment
                    </Link>
                  </div>
                  <div className="col-lg-6">
                    <img className="img-fluid" src="resources/cap1.jpg"/>
                  </div>
                </div>
              </div>
              <Parallax bgImage={ image1 } strength={500} style={{height:500}}>
              </Parallax>
              <button className="fun" data-toggle="collapse" data-target="#emoji">
                Click for bhaalu!!
              </button>
              <div id="emoji" className="collapse">
                <div className="container-fluid padding">
                  <div className="row text-center">
                    <div className="col-sm-6 col-md-3">
                      <img className="gif" src="resources/gif/5.gif" />
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <img className="gif" src="resources/gif/6.gif" />
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <img className="gif" src="resources/gif/1.gif" />
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <img className="gif" src="resources/gif/2.gif" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="container-fluid padding">
                <div className="row welcome text-center">
                  <div className="col-12">
                    <h1 className="display-4">
                      My top 3 photos of all time
                    </h1>
                  </div>
                  <hr />
                </div>
              </div>

              <div className="container-fluid padding">
                <div className="row padding">
                  <div className="col-md-4">
                    <div className="card">
                      <img className="card-img-top" src="resources/card1.png" />
                      <div className="card-body">
                        <h4 className="card-title">
                          Click Below to see a loving person
                        </h4>
                        <Link to="/video2" class="btn btn-outline-secondary">See Video</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <img className="card-img-top" src="resources/card3.jpg" />
                      <div className="card-body">
                        <h4 className="card-title">
                          Click below to see a crazy person
                        </h4>
                        <Link to="/video3" class="btn btn-outline-secondary">See Video</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <img className="card-img-top" src="resources/card2.jpg" />
                      <div className="card-body">
                        <h4 className="card-title">
                          Click below to see my life
                        </h4>
                        <Link to="/video4" class="btn btn-outline-secondary">See Video</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-4" />
              <div className="container-fluid padding">
                <div className="row padding">
                  <div className="col-lg-6">
                    <h2>
                        A moment with you defines my lifetime!
                    </h2>
                    <br />
                    <p className="lead">
                        You are a very strong woman. I believe in your
                        that you will become the most successful woman
                        and prove those who doubted on you!
                    </p>
                  <h6 className="poem">
                    Felt like paralyzed for walking.
                  </h6>
                  <h6 className="poem">
                    Once loved as best friends,
                  </h6>
                  <h6 className="poem">
                    Had a big silence of violence.
                  </h6>
                  <h6 className="poem">
                    Fingers wanted to type,
                  </h6>
                  <h6 className="poem">
                    And the tears waited to wipe.
                  </h6>
                  <h6 className="poem">
                    Our hearts shouted out loud,
                  </h6>
                  <h6 className="poem">
                    But we were buried deep inside the ground.
                  </h6>
                  <h6 className="poem">
                    Could not hear anything,
                  </h6>
                  <h6 className="poem">
                    But our hearts had understood everything.
                  </h6>
                  <h6 className="poem">
                    We were strangers again,
                  </h6>
                  <h6 className="poem">
                    With heavy hearts full of vain.
                  </h6>
                  <h6 className="poem">
                    Was happy with a big sigh.
                  </h6>
                  <h6 className="poem">
                    Chats then converted to call,
                  </h6>
                  <h6 className="poem">
                    And realized that we had a great fall.
                  </h6>
                  <h6 className="poem">
                    Was lucky to get him back,
                  </h6>
                  <h6 className="poem">
                    But this time he was ready with a love pack.
                  </h6>
                  <h6 className="poem">
                    I had asked for my bestfriend,
                  </h6>
                  <h6 className="poem">
                    And received a loving boyfriend.
                  </h6>
                  <h6 className="poem">
                    Now I am not asking for anything,
                  </h6>
                  <h6 className="poem">
                    Because he has become my everything.
                  </h6>
                    <Link to="/video5" className="btn btn-primary">
                      More nostalgic moment!
                    </Link>
                  </div>
                  <div className="col-lg-6">
                    <img src="resources/cap2.jpg" className="img-fluid" />
                  </div>
                </div>
              </div>

        </div>
            );

}
export default HomeScreen;
