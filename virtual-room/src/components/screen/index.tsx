import Header from '../header/'
import Call from '../call';
import Chat from '../chat';
import './screen.scss';

const Screen = () => {
  return (
    <section className="screen">
      <Header/>
      <Call />
      <Chat />
    </section>
  )
}

export default Screen;
