export function translate(speech: string, vocabulary: string[]): string {
  if (speech.length === 0) return speech;

  const speechArr = speech.split(" ");
  const history: { [key: number]: { s: string[]; v: string[] } } = {};

  function handleChanges() {
    for (let index = 0; index < speechArr.length; index++) {
      if (speechArr[index].search(/[*]/g) > -1) {
        const containSpecial = speechArr[index].search(/[?!,.]/g) > -1;
        const target = speechArr[index];
        const len = containSpecial
          ? speechArr[index].length - 1
          : speechArr[index].length;
        let hints = target
          .split("")
          .reduce(
            (acc: Array<{ l: string; i: number }>, l, i) =>
              l.search(/[a-z]/g) > -1 ? [...acc, { l, i }] : acc,
            []
          );

        if (!(len in history)) {
          history[len] = {
            s: speechArr.filter((w) => {
              const isWSpecial = w.search(/[?!,.]/g) > -1;
              if (isWSpecial) return w.length - 1 === len;
              return w.length === len;
            }),
            // ? That one is for the mark
            v: vocabulary.filter((w) => w.length === len),
          };
        }
        if (history[len].v.length === 1 && history[len].s.length === 1) {
          speechArr[index] = containSpecial
            ? history[len].v[0] + target.charAt(target.length - 1)
            : history[len].v[0];
          history[len].v = [];
          history[len].s = [];
          hints = [];
        }
        if (hints.length > 0) {
          let x = -1;
          const found = history[len].v.filter((w, ind) => {
            const success = hints.reduce(
              (acc: boolean, obj) => (acc ? w.charAt(obj.i) === obj.l : acc),
              true
            );
            if (success) {
              x = ind;
            }
            return success;
          });
          if (found.length === 1) {
            history[len].v.splice(x, 1);
            const tIndex = history[len].s.indexOf(target);
            if (tIndex > -1) {
              history[len].s.splice(history[len].s.indexOf(target), 1);
            }
            speechArr[index] = containSpecial
              ? found[0] + target.charAt(target.length - 1)
              : found[0];
          }
        }
      }
    }
  }
  while (true) {
    handleChanges();
    if (speechArr.filter((w) => w.search(/[*]/g) > -1).length === 0) break;
  }

  return speechArr.join(" ");
}

// See https://www.chaijs.com for how to use Chai.

let examp: any[] = ["a**? *c*. **e,", ["ace", "acd", "abd"]];
console.log(translate(examp[0], examp[1]), "[[solution]]:", "abd? acd. ace,");
let a: any[] = ["m** ***e **s l*****", ["name", "myy", "legion", "iss"]];
console.log(translate(a[0], a[1]), "[[solution]]:", "myy name iss legion");
let b: any[] = [
  "*** **** **s *****n, f** **e *r* m***!",
  ["mmy", "name", "iss", "legion", "for", "wwe", "are", "many"],
];
console.log(
  translate(b[0], b[1]),
  "[[solution]]:",
  "mmy name iss legion, for wwe are many!"
);
let c: any[] = [
  "*** **g *o* never **o **rment m*e!",
  [
    "demon",
    "mme",
    "hell",
    "spit",
    "iii",
    "pigg",
    "beg",
    "too",
    "you",
    "never",
    "torment",
    "exorcism",
  ],
];
console.log(
  translate(c[0], c[1]),
  "[[solution]]:",
  "iii beg you never too torment mme!"
);
let d: any[] = [
  "***! **ll? f*l*. he*l, fe*l? c*ll. ***t,",
  ["mel", "dell", "felt", "fill", "fell", "hell", "cell"],
];
console.log(
  translate(d[0], d[1]),
  "[[solution]]:",
  "mel! dell? fill. hell, fell? cell. felt,"
);
let e: any[] = ["", ["hell", "weak"]];
console.log(translate(e[0], e[1]), "[[solution]]:", "");
let f: any[] = ["****. ***,", ["aaa", "bbbb"]];
console.log(translate(f[0], f[1]), "[[solution]]:", "bbbb. aaa,");

a = [
  "fye*** w*eg **e ***z* ***s x*e*fg *****v eee*eu i** ***re **g*t* *e*",
  [
    "eggete",
    "fefffv",
    "eeeeeu",
    "fyefee",
    "wfeg",
    "iee",
    "eefs",
    "hee",
    "hfe",
    "efere",
    "gegzf",
    "xgeffg",
  ],
];
console.log(
  translate(a[0], a[1]),
  "[[solution]]:",
  "fyefee wfeg hfe gegzf eefs xgeffg fefffv eeeeeu iee efere eggete hee"
);
