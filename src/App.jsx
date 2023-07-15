import { Form } from './components/Form'
import { Nav } from './components/Nav'

function App() {
  return (
    <div className='w-[100vw] flex flex-col items-center'>
      <Nav/>
      <section className=' min-h-screen flex justify-center items-center pt-28 w-full'>
        <Form/>
      </section>
    </div>
  )
}

export default App
