import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import style from '../style/components/Profile.module.css';

export function Profile() {
const { level } = useContext(ChallengeContext)

  return (
    <div className={style.profileContainer}>
      <img src="http://github.com/jedersoncm.png" alt="Foto Jederson"/>
      <div>
        <strong>Jederson Macedo</strong>
        <p>
          <img src="icons/level.svg" alt="level up"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}