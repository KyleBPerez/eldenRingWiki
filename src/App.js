import Button from '@mui/material/Button'
import { fetchAmmoByName } from './axios-servies'

function App() {
  return (
    <div className='App'>
      <Button
        size='large'
        variant='contained'
        onClick={() => fetchAmmoByName('Firebone Arrow')}
      >
        Elden Ring Wiki Clone
      </Button>
    </div>
  )
}

export default App
