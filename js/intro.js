// const x = 10;
// console.log(x);
// let y = 20;
// console.log(y);
// y = 41;
// console.log(y);
// let z = y % 4;
// console.log(z);
// y++;
// console.log(y);
// z--;
// console.log(z);
// console.log("la valeur de y est :" +y)
// y+=11;// y=y+11;
// y-=3// y=y-3;
// let chaine="chaaine\"mot en cotte\"reste de la chaine";
// console.log(chaine);
// chaine='it\'s good day';
// console.log(chaine);
// dossier="projet\\images\\image.png";
// console.log(dossier);
// chaine="\premiere ligne\ndeuxieme ligne\ntroisieme ligne";
// console.log(chaine);
// let person = {
//     firstName: "tony",
//     lastName : "mellier",
//     id       : 1305,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   console.log(person.firstName);
//   console.log(person.lastName);
//   console.log(person.id);
//   console.log(person.fullName());
// function afficherMessage() {
//   console.log("un message");
// }
// afficherMessage();
// function some(a, b) {
//   return a + b;
// }
// let x;
// x = some(2, 3);
// console.log(x);
// x = some(6, 12);
// console.log(x);
// function somess(a, b) {
//   console.log(a + b);
// }
// somess(5, 4);
// somess(10, 3);

// let val1 = Math.random() * 10;
// console.log(val1);
// let val2 = Math.random() * 10;
// console.log(val2);
// x = some(val1, val2);
// console.log(x);
// s = Math.floor(Math.random() * 10);

// console.log(s);

// function egale(c, d) {
//   return c == d;
// }

// console.log(egale(6, 6));

// console.log(egale(9, 9));
// let chaine = " ";
// console.log(Boolean(chaine));
// chaine = "";
// console.log(Boolean(chaine));
// a = true;
// a == true ? (x = "true") : (x = "false");
// console.log(x);
// a = 5;
// b = 10;
// a < b ? (x = "inferieur") : (x = "superieur");
// console.log(x);

// function heure(timex) {
//   let time = timex;
//   if (time < 10) {
//     greeting = "Good morning";
//   } else if (time < 20) {
//     greeting = "Good day";
//   } else {
//     greeting = "Good evening";
//   }
//   return greeting;
// }
// console.log(heure(23));
// console.log(heure(5));
// console.log(heure(14));
// console.log(heure(21));

// function persone(ages) {
//   if (ages <= 10) {
//     greeting = "enfant";
//   } else if (ages <= 15) {
//     greeting = "adolescent";
//   } else if (ages <= 20) {
//     greeting = "jeune";
//   } else if (ages <= 45) {
//     greeting = "adulte";
//   } else {
//     greeting = "senior";
//   }
//   return greeting;
// }

// console.log(persone(10));
// console.log(persone(15));
// console.log(persone(20));
// console.log(persone(45));
// console.log(persone(100));

// function jour(j) {
//   switch (j) {
//     case 10:
//       j = "lundi";
//       break;
//     case 20:
//       j = "mardi";
//       break;
//     case 50:
//       j = "mercredi";
//   }
//   return j;
// }
// console.log(jour(10));
// console.log(jour(20));
// console.log(jour(50));

// function valeur(v) {
//   switch (v) {
//     case 0:
//       v = "off";

//       break;
//     case 1:
//       v = "on";
//       break;
//     default:
//       v = "no value found";
//       break;
//   }
//   return v;
// }
// console.log(valeur(0));
// console.log(valeur(1));
// console.log(valeur());

// function vieux(vieu) {
//   let taille = "";
//   switch (true) {
//     case vieu <= 10:
//       taille = "enfant";

//       break;
//     case vieu <= 15:
//       taille = "ado";
//       break;
//     case vieu <= 20:
//       taille = "jeune";
//       break;
//     case vieu <= 45:
//       taille = "adult";
//       break;

//     default:
//       taille = "creve";
//   }
//   return taille;
// }
// console.log(vieux(10));
// console.log(vieux(15));
// console.log(vieux(20));
// console.log(vieux(45));
// console.log(vieux(50));

// let text = "";
// let i;
// for (i = 0; i < 100; i++) {
//   text += " " + i + "";
// }
// console.log(text);

// function entier(tab) {
//   let text = "";

//   for (let i = 0; i < tab.length; i++) {
//     text += tab[i] + "\n";
//   }
//   return text;
// }

// tab1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(entier(tab1));
// tab2 = [3, 4, 5, 7, 8, 9, 10, 45, 50];
// console.log(entier(tab2));

// function exemple(x) {
//   let t = "";
//   for (i = 0; i < x.length; i++) {
//     if (x[i] === "non") {
//       continue;
//     }
//     t += x[i] + "\n";
//   }
//   return t;
// }

// t1 = ["bla", "oh", "non", "dac"];
// console.log(exemple(t1));

function exemplee(x) {
  let te = "";
  let i = 0;
  while (x[i]) {
    if (x[i] === "oignon") {
      i++;
      continue;
    }

    te += x[i] + "\n";
    i++;
  }

  return te;
}
te1 = ["kebab", "salade", "tomate", "oignon", "nutella"];
console.log(exemplee(te1));

function exemplee(x) {
  let te = "";
  let i = 0;
  while (x[i]) {
    if (x[i] === "oignon") {
      i++;
      continue;
    }

    te += x[i] + "\n";
    i++;
  }

  return te;
}
te1 = ["kebab", "salade", "tomate", "oignon", "nutella"];
console.log(exemplee(te1));
function exempleee(a) {
  let i = 0;
  let text = "";
  while (i < a.length) {
    text += a[i] + "\n";
    i++;
  }
  return text;
}

// a1 = ["manger", "boire", "dormir"];
// console.log(exempleee(a1));

// tab = ["a", "b", "c", "d"];
// console.log(tab);
// tab[2] = "z";
// console.log(tab);
// tab.toString();
// console.log(tab);

function moyenne(tab) {
  if (tab.length === 0) {
    return 0;
  }
  let n = tab.length;
  let somme = 0;
  for (i = 0; i < n; i++) {
    somme += tab[i];
  }
  let resultat = somme / n;
  return resultat;
}
let abcd = [10, 20, 3];
console.log(moyenne(abcd));

// function max(table) {
//   let i;
//   let maxi = table[0];
//   for (i = 0; i < table.length; i++) {
//     if (table[i] > maxi) {
//     }
//   }

//   return maxi;
// }

// let table = [1, 1.5, 3, 4, 9, 20, 50];
// console.log(max(table));

// function marre(z, tableaux) {
//   let i;
//   for (i = 0; i < tableaux.length; i++) {
//     if (tableaux[i] === z) {
//       return i;
//     }
//   }
// }
// let z = [3, 0, 9.2, 8, 7, 1];
// console.log(marre(1, z));

function postion(a, tab) {
  let i;
  for (i = 0; i < tab.length; i++) {
    if (tab[i] === a) {
      return i + 1;
    }
  }
}
let a = [3, 0, 9.2, 8, 7, 1];
console.log(postion(8, a));

function position2(b, tableaux) {
  let i = 0;
  while (i < tableaux.length) {
    if (tableaux[i] === b) {
      return i + 1;
    }
    i++;
  }
}
console.log(position2(1, a));

function position3(c, table) {
  let i = 0;
  while (i < table.length) {
    if (table[i] === c) {
      return i + 1;
    }
    i++;
  }
}
console.log(position3(0, a));

// function nbjour(mois, annee) {
//   if (mois == 2) {
//     if (annee % 4 == 0) {
//       return 29;
//     } else {
//       return 28;
//     }
//   }

let n = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   return n[mois - 1];
// }
// console.log(nbjour(8, 2021));
// console.log(nbjour(3, 2021));
// console.log(nbjour(12, 2021));
// console.log(nbjour(2, 2021));
// console.log(nbjour(10, 2021));

function nbjour(mois, annee) {
  // let n = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  switch (mois) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 9:
    case 11:
      return 30;
    case 2:
      if (mois == 2) {
        if (annee % 4 == 0) {
          return 29;
        } else {
          return 28;
        }
      }
  }
}
console.log(nbjour(8));
console.log(nbjour(3));
console.log(nbjour(12));
console.log(nbjour(2));
console.log(nbjour(10));
//inverser la chaine de mots
function inverser(chaine) {
  let d = "";
  for (i = chaine.length - 1; i >= 0; i--) {
    d += chaine[i];
  }
  return d;
}
let c = "abcdefghijklmnopqrstuvwxyz";
console.log(inverser(c));

function inverser1(chaine1) {
  let d = "";
  for (i = chaine1.length - 1; i >= 0; i--) {
    d += chaine1[i];
  }
  return d;
}
let c1 = "hello";
console.log(inverser1(c1));

// trouver le nombre de mots

function nbmots(cha) {
  let tab = cha.split(" ");
  return tab.length;
}

let ch = "bonjour ou oui non ah ha";
let ch2 = "bonjour ou oui non ah ha";
console.log(nbmots(ch));
console.log(nbmots(ch2));
//comparer les nbdemots
function compare(ch, ch2) {
  return nbmots(ch) == nbmots(ch2);
}

console.log(compare(ch, ch2));
// donner la racine carrer d'un nombre
function racine(nombre) {
  return Math.sqrt(nombre);
}
console.log(racine(16));
//doner le perimetre d'un rectangle
function perimetre(longeur, largeur) {
  return longeur * 2 + largeur * 2;
}
console.log(perimetre(6, 2));
//donner le carrer d'un nombre
function carre(coter) {
  return coter * 4;
}

console.log(carre(5));
// retouner un nombre si il est inferieur true est superieur false
function some(t, k) {
  return t + k < 100;
}
console.log(some(5, 5));
console.log(some(60, 80));
// convertire l'heure et les minute en seconde
function converstion(heure, minute) {
  return heure * 3600 + minute * 60;
}
console.log(converstion(1, 30));
// diviser le chiffre 1 par le deuxieme
function divisible(j, m) {
  return j % m == 0;
}
console.log(divisible(8, 4));
console.log(divisible(2, 3));
// exercice inervser le tableau
function inverser2(tab2) {
  let d = "";
  for (i = tab2.length - 1; i >= 0; i--) {
    d += tab2[i];
  }
  return d;
}
let tab = [25, 4, 6, 9, 3, 1, 7, 5];
console.log(inverser1(tab));
//essay
// function tout(fin) {
//   let info = "";
//   let i;

//   for (i = 0; i < fin.length; i++) {
//     let impot;
//     let secu;
//     let categorieage;
//     switch (true) {
//       case fin[i].revenu <= 1000:
//         impot = (fin[i].revenu * 7) / 100;
//         secu = (fin[i].revenu * 9) / 100;

//         break;
//       case fin[i].revenu <= 2000:
//         impot = (fin[i].revenu * 11) / 100;
//         secu = (fin[i].revenu * 18) / 100;
//         break;
//       case fin[i].revenu <= 3000:
//         impot = (fin[i].revenu * 15) / 100;
//         secu = (fin[i].revenu * 36) / 100;
//         break;

//       default:
//         impot = (fin[i].revenu * 20) / 100;
//         secu = (fin[i].revenu * 72) / 100;
//         break;
//     }
//     switch (true) {
//       case fin[i].age <= 10:
//         categorieage = "enfant";
//         break;
//       case fin[i].age <= 20:
//         categorieage = "ados";
//         break;
//       case fin[i].age <= 45:
//         categorieage = "jeune";
//         break;

//       default:
//         categorieage = "vieux";
//         break;
//     }
//     info +=
//       fin[i].prenom +
//       fin[i].nom +
//       " " +
//       categorieage +
//       secu +
//       " " +
//       impot +
//       " " +
//       "\n";
//   }
//   return info;
// }
function tout1(fin1) {
  let info = "";
  let i;

  for (i = 0; i < fin1.length; i++) {
    let impot;
    let secu;
    let categorieage;
    if (fin1[i].revenu <= 1000) {
      impot = (fin1[i].revenu * 7) / 100;
      secu = (fin1[i].revenu * 9) / 100;
    } else if (fin1[i].revenu <= 2000) {
      impot = (fin1[i].revenu * 11) / 100;
      secu = (fin1[i].revenu * 18) / 100;
    } else if (fin1[i].revenu <= 3000) {
      impot = (fin1[i].revenu * 15) / 100;
      secu = (fin1[i].revenu * 36) / 100;
    } else {
      impot = (fin1[i].revenu * 20) / 100;
      secu = (fin1[i].revenu * 72) / 100;
    }
    if (fin1[i].age <= 10) {
      categorieage = "enfant";
    } else if (fin1[i].age <= 15) {
      categorieage = "ados";
    } else if (fin1[i].age <= 20) {
      categorieage = "jeune";
    } else {
      categorieage = "vieux";
    }

    info +=
      fin1[i].prenom +
      " " +
      fin1[i].nom +
      " " +
      categorieage +
      secu +
      " " +
      impot +
       
      "\n";
  }
  return info;
}

let gens = [
  { nom: "mayo", prenom: "oeuf", age: 10, revenu: 1000 },
  { nom: "ketchup", prenom: "tomate", age: 15, revenu: 500 },
  { nom: "harisa", prenom: "piquant", age: 20, revenu: 10000 },
  { nom: "xavier", prenom: "bertrand", age: 65, revenu: 2500 },
];
console.log(gens[2]);
console.log(gens[0]);
console.log(gens[1]);
console.log(gens[3]);
console.log(tout1(gens));
