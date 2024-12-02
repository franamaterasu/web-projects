import { FaAngleRight } from "react-icons/fa";
import './chat.scss';

const Chat = () => {
  return (
    <section className="chat">
      <h5 className="chat__title">Chat's meeting</h5>
      <section className="chat__content">
        <article className="chat__item">
           <img className='chat__image' src='https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          <p className="chat__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, itaque? Delectus sed nihil nemo suscipit quos architecto eveniet neque</p>
        </article>
         <article className="chat__item">
           <img className='chat__image' src='https://images.pexels.com/photos/3781545/pexels-photo-3781545.jpeg?auto=compress&cs=tinysrgb&w=600' />
          <p className="chat__text">Lorem ipsum dolor sit amet</p>
        </article>
         <article className="chat__item">
          <img className='chat__image' src='https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          <p className="chat__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </article>
         <article className="chat__item">
          <img className='chat__image' src='https://images.pexels.com/photos/3781545/pexels-photo-3781545.jpeg?auto=compress&cs=tinysrgb&w=600' />
          <p className="chat__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, itaque? Delectus sed nihil nemo suscipit quos architecto eveniet neque</p>
        </article>
         <article className="chat__item">
          <img className='chat__image' src='https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          <p className="chat__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, itaque? Delectus sed nihil nemo suscipit quos architecto eveniet neque</p>
        </article>
         <article className="chat__item">
          <img className='chat__image' src='https://images.pexels.com/photos/3781545/pexels-photo-3781545.jpeg?auto=compress&cs=tinysrgb&w=600' />
          <p className="chat__text">Lorem ipsum dolor sit amet</p>
        </article>
         <article className="chat__item">
          <img className='chat__image' src='https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          <p className="chat__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, itaque? Delectus sed nihil nemo suscipit quos architecto eveniet neque</p>
        </article>
         <article className="chat__item">
          <img className='chat__image' src='https://images.pexels.com/photos/3781545/pexels-photo-3781545.jpeg?auto=compress&cs=tinysrgb&w=600' />
          <p className="chat__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, itaque?</p>
        </article>
         <article className="chat__item">
          <img className='chat__image' src='https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          <p className="chat__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, itaque? Delectus sed nihil nemo suscipit quos architecto eveniet neque</p>
        </article>
         <article className="chat__item">
          <img className='chat__image' src='https://images.pexels.com/photos/3781545/pexels-photo-3781545.jpeg?auto=compress&cs=tinysrgb&w=600' />
          <p className="chat__text">Lorem ipsum dolor sit amet. Delectus sed nihil nemo suscipit quos architecto eveniet neque</p>
        </article>
      </section>
      <section className="chat_message">
        <button className="chat_message__button"><FaAngleRight /></button>
        <input className="chat_message__input"type="text" placeholder='Insert your message' />
      </section>
    </section>
  )
}

export default Chat
