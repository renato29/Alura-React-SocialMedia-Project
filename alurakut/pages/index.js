
import  MainGrid  from '../src/components/MainGrid';
import  Box  from '../src/components/Box'

export default function Home() {
    return (
        <MainGrid>
          <div className='profileArea' style={{gridArea: 'profileArea'}}>
                <Box> <img  src='http://github.com/renato29.png'/> </Box>
          </div>
          <div className='welcomeArea' style={{gridArea: 'welcomeArea'}}>
            <Box>Bem Vindo</Box>
          </div>
          <div  className='profileRelationsArea' style={{gridArea: 'profileRelationsArea'}}>
             <Box>Team/Staff</Box>
          </div>
        
       
        </MainGrid>

    )
}
