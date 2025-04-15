import './App.css';
import React, { useEffect } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import sprysmdestroyerlogo from './images/detailed.png';
import screenshot1 from './images/469af8c6555eecf2638dce91420b8aaabbf48d5948e680e2190f36d80e8e4114.jpg';
import screenshot2 from './images/12f5fd7f298036cacc57d42fceb19007dc0280766228ae1f16ecabd9015193c1.webp';
import screenshot3 from './images/7d446c44ffecce0f93771788517de085fa822eb6aed69cdcd2739c68190bb7f9.jpg';
import amor from './images/amor_cut.png';
import robot from './images/robo_cut.png';
import boy from './images/boy_cut.png';
import gallery1 from './images/gallery1.png';
import gallery2 from './images/gallery2.png';
import gallery3 from './images/gallery3.png';
import gallery4 from './images/gallery4.png';
import gallery5 from './images/gallery5.png';
import gallery6 from './images/gallery6.jpg';
import gallery7 from './images/gallery7.png';
import gallery8 from './images/gallery8.png';
import gallery9 from './images/gallery9.png';
import gallery10 from './images/gallery10.png';
import maidslogo from './images/logo_maids.png';

const App = () => {

  useEffect(() => {
    // Initialize Material Box when the component mounts
    const materialBox = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(materialBox);
  }, []);

  const CharacterDesc = (image, title, description) => {
    return (
      <div className='row' style={{
        textAlign: 'left',
        margin: '20px 0',
        background: 'linear-gradient(0deg,rgb(19, 46, 46) 0%, rgb(33, 33, 33) 100%)',
        padding: '0',
      }}>
        <div className='col s12 m5 offset-m1' style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <img src={image} alt="Screenshot" style={{maxHeight: '400px', display: 'block'}}></img>
          </div>
        <div className='col s12 m5' style={{
          textAlign: 'left',
        }}>
          <h4 style={{fontWeight: 'bold'}}>{title}</h4>
          <p style={{
            fontSize: '18px',
            fontWeight: '400',
            letterSpacing: '1px',
          }} dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="header">
        <img src={sprysmdestroyerlogo} alt="Logo" className='logo' style={{
          marginTop: '20px',
          marginBottom: '20px',
        }} />
        <div className='center-button'>
          <a href="https://store.steampowered.com/app/2975480/S_Prysm_Destroyer/" target="_blank" rel="noreferrer" className="btn waves-effect waves-light transparent cool-button" style={{
            maxWidth: '350px',
            width: '100%',
            height: '100px',
            margin: '10px',
            border: '4px solid #FFFFFF',
          }}
          >
            <i className="bi bi-steam left" style={{fontSize: '.73cm', marginLeft: '12px'}}></i>
            <div style={{
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>Play it on Steam</div>
          </a>
        </div>
        <div className='row center-button-parent'>
          <div className='col s12 m4 center-button'>
          <a href="https://store.playstation.com/ja-jp/concept/10013189" target="_blank" rel="noreferrer"  className="btn waves-effect waves-light transparent cool-button playstation" style={{
            maxWidth: '300px',
            width: '100%',
            height: '80px',
            margin: '10px',
            border: '4px solid #FFFFFF',
          }}>
            <i className="bi bi-playstation left" style={{fontSize: '.73cm', marginLeft: '12px'}}></i>
            <div style={{
              fontSize: '22px',
              fontWeight: 'bold',
            }}>Playstation</div>
          </a>
          </div>
          <div className='col s12 m4 center-button'>
          <a href="https://store-jp.nintendo.com/item/software/D70010000090102" target="_blank" rel="noreferrer"  className="btn waves-effect waves-light transparent cool-button nintendo" style={{
            maxWidth: '300px',
            width: '100%',
            height: '80px',
            margin: '10px',
            border: '4px solid #FFFFFF',
          }}>
            <i className="bi bi-nintendo-switch left" style={{fontSize: '.73cm', marginLeft: '12px'}}></i>
            <div style={{
              fontSize: '22px',
              fontWeight: 'bold',
            }}>Switch</div>
          </a>
          </div>
          <div className='col s12 m4 center-button'>
          <a href="https://www.xbox.com/ja-JP/games/store/s-prysm-destroyer/9pdxn02twxhs" target="_blank" rel="noreferrer"  className="btn waves-effect waves-light transparent cool-button xbox" style={{
            maxWidth: '300px',
            width: '100%',
            height: '80px',
            margin: '10px',
            border: '4px solid #FFFFFF',
          }}>
            <i className="bi bi-xbox left" style={{fontSize: '.73cm', marginLeft: '12px'}}></i>
            <div style={{
              fontSize: '22px',
              fontWeight: 'bold',
            }}>Xbox</div>
          </a>
          </div>
        </div>
        <h2 style={{
          fontSize: '18px',
          fontWeight: 'bold',
        }}>S. Prysm Destroyer is a 2d anime platformer shooter game where you fight against Primordial threats using guns and super powers</h2>
      </div>
      <div className="angled-section" style={{marginTop: '35px', paddingBottom: '180px'}}>
        <h2 style={{
          fontWeight: 'bold',
        }}>Trailer</h2>
        <div style={{padding: '0 10%'}}>
          <iframe className="full-width-video" id="s-prysm-destroyer-trailer" src="//www.youtube.com/embed/ww07ZzzMZoY" frameborder="0" allowfullscreen="true" title="S Prysm Destroyer trailer video"></iframe>
          <label style={{color:"white"}} for="s-prysm-destroyer-trailer">S Prysm Destroyer trailer</label>
        </div>
      </div>
      <div className='pattern-background' style={{
        marginTop: '-100px',
        zIndex: '80',
        position: 'relative',
        padding: '20px',
        fontFamily: 'geo'
      }}>
        <h2>About</h2>
        <div className='row'>
          <div className='col s12 m5 offset-m1'>
            <img src={screenshot1} alt="Screenshot" className='materialboxed' style={{width: '100%'}}></img>
            </div>
          <div className='col s12 m5' style={{
            textAlign: 'left',
          }}>
            <h3>Fight against the Primordial</h3>
            <p style={{fontSize: '26px'}}>They have been roaming the once occupied human cities for a long time and forced people to live in walking domes. <br/> Exterminate them all and regain freedom.</p>
          </div>
        </div>
        <div className='row reverse-on-mobile'>
          <div className='col s12 m5 offset-m1' style={{
            textAlign: 'left',
          }}>
            <h3>Use the prysmals to obtain greater power</h3>
            <p style={{fontSize: '26px'}}>Primal sources of energy and power leaved by rich comets, Prysm Destroyer was made to use them to its full potential giving you great special powers for a limited amount of time. They also look very cool!</p>
          </div>
          <div className='col s12 m5 offset-m1' style={{margin: 0}}>
          <img src={screenshot2} alt="Screenshot 2" className='materialboxed' style={{width: '100%'}}></img>
          </div>
        </div>
        <div className='row'>
          <div className='col s12 m5 offset-m1'>
            <img src={screenshot3} alt="Screenshot 3" className='materialboxed' style={{width: '100%'}}></img>
            </div>
          <div className='col s12 m5' style={{
            textAlign: 'left',
          }}>
            <h3>Obtain the best score and unlock cute costumes</h3>
            <p style={{fontSize: '26px'}}>The better you play, the more score you’ll get and more cute costumes for Amor you’ll unlock. Costumes such as maid, bunny girl and gothic lolita and more!</p>
          </div>
        </div>
      </div>
      {CharacterDesc(amor, 'Amor', 'A cute girl that fell in love with a boy whose passion was constructing robots. She was rather normal in her own way but after a tragic event it seems like she acts as if she does not have any emotions anymore.<br/><br/>Whenever she enters Prysm Destroyer, her left eye color turns blue.<br/><br/>Amor loves hear punk rock music, her favorite food is chicken with fries and her fashion color choice is pink. She seems to be very affectionate with her jacket.')}
      {CharacterDesc(robot, 'Prysm Destroyer', 'A robot. A SUPER robot, as some would say. It was a project made by Chitzu, inspired by those cool mecha animes. He was made out of scrap and made as if he was a legendary warrior.<br/><br/>It was given two stamps:<ul><li>The left one, an orange S meaning SUPER. Its Chitzu logo, the seal of quality.</li><li>The right one, given by Amor. Its the logo of her favorite rock band, Lovely Killers ON STAGE.</li></ul>')}
      {CharacterDesc(boy, 'Chitzu', 'Maybe he is a genius or just a stupid guy with big dreams. Either way, what he has achieved is not really normal for a normal boy. He once had a dream of being free and walk around the planet with no one stopping him. Honestly it’s just an excuse to create cool robots.<br/><br/>Chitzu was always wearing the jacket once gave by his mother.<br/><br/>After his death, his creation has been acting more different and harsh in combat, the reasons are unknown.')}

      <div className='gallery'>
        <h2 style={{
          fontWeight: 'bold',
        }}>Gallery</h2>
        <div className='row'>
          <div className='col s6 m4 l3'><img src={gallery1} alt="S Prysm Destroyer Art 1 Robot" className='materialboxed' style={{width: '100%'}}></img></div>
          <div className='col s6 m4 l3'><img src={gallery2} alt="S Prysm Destroyer Art 2 Amor" className='materialboxed' style={{width: '100%'}}></img></div>
          <div className='col s6 m4 l3'><img src={gallery3} alt="S Prysm Destroyer Art 3 Chitzu" className='materialboxed' style={{width: '100%'}}></img></div>
          <div className='col s6 m4 l3'><img src={gallery4} alt="S Prysm Destroyer Art 4 Robot Concept Art" className='materialboxed' style={{width: '100%'}}></img></div>
          <div className='col s6 m4 l3'><img src={gallery5} alt="S Prysm Destroyer Art 5 Amor Concept Art" className='materialboxed' style={{width: '100%'}}></img></div>
          <div className='col s6 m4 l3'><img src={gallery6} alt="S Prysm Destroyer Art 6 Amor maid" className='materialboxed' style={{width: '100%'}}></img></div>
          <div className='col s6 m4 l3'><img src={gallery7} alt="S Prysm Destroyer Art 7 Amor" className='materialboxed' style={{width: '100%'}}></img></div>
          <div className='col s6 m4 l3'><img src={gallery8} alt="S Prysm Destroyer Art 8 Amor" className='materialboxed' style={{width: '100%'}}></img></div>
          <div className='col s6 m4 l3'><img src={gallery9} alt="S Prysm Destroyer Art 9 Beegirl" className='materialboxed' style={{width: '100%'}}></img></div>
          <div className='col s6 m4 l3'><img src={gallery10} alt="S Prysm Destroyer Art 10 Amor Christmas" className='materialboxed' style={{width: '100%'}}></img></div>
        </div>
        <img src={maidslogo} alt="MaidsWithGuns Developer Logo" className='logo' style={{
          marginTop: '20px',
          marginBottom: '20px',
        }} />
        <div style={{
          textAlign: 'center',
          margin: '40px auto',
        }}>
          <p style={{ fontSize: '24px', fontWeight: '500', marginBottom: '20px' }}>
            Know the people who worked on the game!
          </p>
          <ul style={{ listStyle: 'none', padding: '0', lineHeight: '2' }}>
            <li><a href="https://x.com/MaidsWithGuns_" target="_blank" rel="noreferrer">MaidsWithGuns</a> - <strong>Producer</strong></li>
            <li><a href="https://www.instagram.com/bigscaryindian/" target="_blank" rel="noreferrer">BigScaryIndian</a> - <strong>Musician</strong></li>
            <li><a href="https://x.com/R4ND0MCH2" target="_blank" rel="noreferrer">Randamu3dModels</a> - <strong>3D Modeling</strong></li>
            <li><a href="https://www.eastasiasoft.com/" target="_blank" rel="noreferrer">EastAsiaSoft</a> - <strong>Publishing on consoles</strong></li>
          </ul>
          <p style={{ fontSize: '20px', fontWeight: '500', marginBottom: '20px' }}>
            Contact me through: contact@maidswithguns.com
          </p>
        </div>
        <h3>For creators</h3>
        <a href="https://drive.google.com/drive/u/1/folders/1kn2j4AVSV5Lqwln9qamRsqDnAdvoeLDE" target="_blank" rel="noreferrer" className="btn waves-effect waves-light transparent cool-button" style={{
            maxWidth: '350px',
            width: '100%',
            height: '100px',
            margin: '10px auto',
            border: '4px solid #FFFFFF',
          }}
          >
            <div style={{
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>Presskit images</div>
          </a>
      </div>
      <div style={{
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '12px',
        zIndex: 1000,
      }}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            backgroundColor: '#222',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background 0.3s',
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#444'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#222'}
        >
          Back to Top
        </button>
      </div>

    </div>
  );
}

export default App;
