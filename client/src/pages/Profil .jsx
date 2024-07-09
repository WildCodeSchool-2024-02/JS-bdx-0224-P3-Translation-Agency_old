/* eslint-disable react/jsx-no-comment-textnodes */

import "../styles/Profile.scss";

function Profil() {
  return (
    <div>
      <div className="containerProfil">
        <div className="asidebar">
          <img
            className="img_profil"
            src="https://s3-alpha-sig.figma.com/img/2153/f3c9/e1cc3fb83311eba39234c275cc56372c?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VpBFXMusumgXiEyWuINISzKvKs5BqQz2Ed6m09s4YRJQeSN3gk2mqsRrUeRXIHiKkagD6Y8WYJ59lGzRb6S-o~tATuzoDxw02f469TF3p39DT3EEJiCfwR2YJIlXkzMH89bcpDbK9--IcvByzeM4qKffaMr558zEKcinqJ5ySFtj6GZbUrDN4AKUeHFjyluxmKZsSPw6lv-pdBqYUNngaBqqcZUhPv9mNlR8~Qlp-p1Uw7hr4OtxrJDqT3IqAck3rr65JW4jANhWMIP8XIoAfX87O-S4fDn4tOmBxtZFqiGNVh5E8-vIKMrNz1B0P9BTTZYgc~CoegdgZUgnY~bSDw__"
          />
        </div>
        <div className="profil">
          <p className="phProfil">MON COMPTE</p>
          <button type="submit" className="btn_Profile">
            Nom
          </button>
          <button type="submit" className="btn_Profile">
            Prenom
          </button>
          <button type="submit" className="btn_Profile">
            Adress
          </button>
          <button type="submit" className="btn_Profile">
            Pays
          </button>
          <button type="submit" className="btn_Profile">
            Email
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profil;
