import style from '../style/components/Profile.module.css';

export function Profile() {
  return (
    <div className={style.profileContainer}>
      <img src="http://github.com/jedersoncm.png" alt="Foto Jederson"/>
      <div>
        <strong>Jederson Macedo</strong>
        <p>
          <img src="icons/level.svg" alt="level up"/>
          Level 1
        </p>
      </div>
    </div>
  );
}