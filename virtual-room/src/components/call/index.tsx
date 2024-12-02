import { FaVolumeMute, FaHeadphonesAlt, FaRegSun  } from "react-icons/fa";
import './call.scss';

const Call = () => {
  return (
    <section className="call">
      <div className="call_main">
        <div className='call_main-buttons'>
          <button className="call_main__button">
            <FaVolumeMute />
          </button>
          <button className="call_main__button">
            <FaHeadphonesAlt />
          </button>
          <button className="call_main__button">
            <FaRegSun />
          </button>
        </div>
      </div>
       <div className="call_bottom">
         <div className="call_bottom-item">
            <img className='call_bottom-image' src='https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            <div className="call_bottom-name">Lena Harris</div>
          </div>
          <div className="call_bottom-item">
            <img className='call_bottom-image' src='https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600' />
            <div className="call_bottom-name">Tom Holland</div>
          </div>
          <div className="call_bottom-item">
            <img className='call_bottom-image' src='https://images.pexels.com/photos/3781545/pexels-photo-3781545.jpeg?auto=compress&cs=tinysrgb&w=600' />
            <div className="call_bottom-name">Marie Karsson</div>
          </div>
          <div className="call_bottom-item">
            <img className='call_bottom-image' src='https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&w=600' />
            <div className="call_bottom-name">Helena Sim</div>
          </div>
          <div className="call_bottom-item">
            <img className='call_bottom-image' src='https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600' />
            <div className="call_bottom-name">Lille Watson</div>
          </div>
          <div className="call_bottom-item">
            <img className='call_bottom-image' src='https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600' />
            <div className="call_bottom-name">Carl Stompson</div>
          </div>
           <div className="call_bottom-item">
            <img className='call_bottom-image' src='https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=600' />
            <div className="call_bottom-name">Frank Benny</div>
          </div>
        </div>
    </section>
  )
}

export default Call;
