import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export function App () {
  const formatUserName = (userName) => `@${userName}`;  

    return (
        <section className='App'>
          <TwitterFollowCard 
            formatUserName={formatUserName} 
            userName="RappiArgentina" 
            initialIsFollowing={true}
            name="Rappi Argentina"/>
          <TwitterFollowCard 
          formatUserName={formatUserName} 
            userName="Emova_arg" 
            name="Emova - Concesionario del Subte de Buenos Aires"/>
          <TwitterFollowCard 
          formatUserName={formatUserName}  
            userName="adidasAR" 
            initialIsFollowing={true}
            name="adidas Argentina"/>
          <TwitterFollowCard 
          formatUserName={formatUserName}  
            userName="spotify" 
            name="Spotify"/>
        </section>      
    )
}