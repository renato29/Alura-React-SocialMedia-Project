
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
// import { profileRelationsArea } from '../src/components/ProfileRelations';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(githubUser) {
  console.log(githubUser)
  return (
    <Box>
      <img 
      src={`http://github.com/${githubUser.githubUser}.png`} 
      style={{ borderRadius: '8px' }} /> 
      </Box>
  )
}


export default function Home() {

  const githubUser = 'renato29'
  // Can be any user name

  const pessoasFavoritas = [ 
    'sonnysangha',
    'danistefanovic',
    'filipedeschamps',
    'ohmyzsh',
    'github',
    'kamranahmedse',
  ]
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div
          className='profileArea'
          style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div
          className='welcomeArea'
          style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className='title' style={{gridArea: 'welcomeArea'}}>
            Bem Vindo
            </h1>
            <OrkutNostalgicIconSet /> 
            </Box>
        </div>
        <div className='profileRelationsArea' style={{ gridArea: 'profileRelationsArea' }}>
            <ProfileRelationsBoxWrapper>
              <h2 className='smallTitle'>
                Pessoas na Comunidade ({pessoasFavoritas.length})
              </h2>

              <ul>
                {pessoasFavoritas.map((itemAtual)=>{
                    return(
                      <li>
                        <a href={`users/${itemAtual}`} key={itemAtual}>
                          <img src={`http://github.com/${itemAtual}.png`} />
                          <span>{itemAtual}</span>
                        </a>
                      </li>
                    )})}
              </ul>
            </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
