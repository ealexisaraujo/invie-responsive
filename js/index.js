var ref = firebase.database().ref("usuario");

var btnLogin = document.getElementById("btnLogin");
var btnLogout = document.getElementById("btnLogout");

var usuario = {};
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    btnLogin.style.display = 'none';
    btnLogout.style.display = 'inline-block';
  } else {
    btnLogin.style.display = 'inline-block';
    btnLogout.style.display = 'none';
  }
});

btnLogin.addEventListener("click", function () {
  event.preventDefault();
  // var provider = new firebase.auth.FacebookAuthProvider();
  // provider.addScope('public_profile');
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  firebase.auth().signInWithPopup(provider).then(function (datosusuario) {
    btnLogout.innerHTML = "Cerrar sesión";
    usuario = {
      nombre: datosusuario.user.displayName,
      email: datosusuario.user.email,
      uid: datosusuario.user.uid
    };
    agregarUsuario(usuario, usuario.uid);
  }).catch(function (error) {
    console.log("error");
  });
});

btnLogout.addEventListener("click", function () {
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
    btnLogin.innerHTML = "Iniciar sesión";
    btnLogout.innerHTML = "";

  }).catch(function (error) {
    // An error happened.
    console.log(error);
  });
});

function agregarUsuario(usuario, uid) {
  ref.child(uid).update(usuario);
}