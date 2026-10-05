import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Todos from './pages/Todos'
import AddTodo from './pages/AddTodo'
import EditTodo from './pages/EditTodo'

function App() {
  return (
    <div className='min-h-screen flex flex-col'>

      <Header />

      <main className='flex-1'>
        <Routes>
          <Route path='/' element={<Todos />} />
          <Route path='/todos' element={<Todos />} />
          <Route path='/add-todo' element={<AddTodo />} />
          <Route path='/edit-todo/:id' element={<EditTodo />} />
        </Routes>
      </main>

      <Footer />

    </div>
  )
}

export default App