import './App.css';
import { BeforeBtn } from './components/BeforeBtn';
import { NextBtn } from './components/NextBtn';

function App() {
  return (
    <div className="App">
      <main className='app-main'>
        <section className='section-content'>
          Content
        </section>
        <section className='section-button'>
          <NextBtn />
          <BeforeBtn />
        </section>
      </main>
    </div>
  );
}

export default App;
