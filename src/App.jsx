import './App.css'
import Layout from './assets/Components/Layout'
import { useTheme } from './assets/ThemeProvider'
import WordFlip from './assets/Components/WordFlip'


function App() {
  const { theme } = useTheme();
  return (
      <div
        style={{backgroundColor: theme.primaryColor, height: "100vh", paddingTop: "100px"}}
      > 
        <Layout/>
        <h1 style={{
          color: theme.secondaryColor, fontSize: "80px"
        }
        }>Nicholas MacDonald <br></br>
        Developer &
        <WordFlip words={["Designer", "Photographer", "Videographer", "Animator", "3D artist", "Creative", "Visual Artist", "Motion Designer",]} />
        </h1>
        {/* <h1 style={{
          color: theme.secondaryColor, fontSize: "80px"
        }
        }> Designer</h1> */}
      

      </div>

  )
}

export default App