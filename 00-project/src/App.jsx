import './App.css';
import { TwitterFollowCard } from './TwitterFollorCard.jsx';

export function App () {
    return (
        <section className='App'>
          <TwitterFollowCard isFollowing userName="Reddit" name="Reddit Argentina"/>
          <TwitterFollowCard isFollowing={false} userName="pheralb" name="Pablo Hernandez"/>
          <TwitterFollowCard isFollowing userName="Amelissarc" name="Melissa Rincón"/>
          <TwitterFollowCard isFollowing userName="jablarias" name="Jaime Blanco"/>
        </section>      
    )
}