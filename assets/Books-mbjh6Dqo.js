import{s as l,B as r,A as d,C as u,j as e,P as o,m as y,T as w,q as _,r as B,a as E,b as H}from"./index-CempTzmn.js";import{P as C}from"./Password-DXEGkpOc.js";import{B as I}from"./Button-Dr2q17ri.js";import{F as L,I as P,O as S,a as b}from"./OutlinedInput-C8RUn6Xu.js";import{A as z}from"./index-DP4JfoKB.js";import"./Close-DOIleLGP.js";const V=l(r)`
  width: 100%;
  height: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
`,R=l(r)`
  width: 100%;

  display: flex;
  flex-wrap: wrap;

  gap: 20px;
`,D=l(r)`
  width: 100px;
  height: 133px;
  background-image: url(${({img:i})=>i});

  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 10px;
`,q=l(r)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  position: relative;
  /* border: 1px solid ${({theme:i})=>i.palette.divider}; */
  /* width: 100%; */
  /* max-width: 400px; */
  border-radius: 10px;
`;var c={},O=u;Object.defineProperty(c,"__esModule",{value:!0});var h=c.default=void 0,F=O(d()),M=e;h=c.default=(0,F.default)((0,M.jsx)("path",{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5zm4-3H19v1h1.5V11H19v2h-1.5V7h3zM9 9.5h1v-1H9zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4zm10 5.5h1v-3h-1z"}),"PictureAsPdf");var g={},T=u;Object.defineProperty(g,"__esModule",{value:!0});var m=g.default=void 0,A=T(d()),$=e;m=g.default=(0,A.default)((0,$.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-5 5-5-5h3V9h4v4z"}),"CloudDownload");var p={},W=u;Object.defineProperty(p,"__esModule",{value:!0});var f=p.default=void 0,U=W(d()),J=e;f=p.default=(0,U.default)((0,J.jsx)("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5"}),"Link");var v={},K=u;Object.defineProperty(v,"__esModule",{value:!0});var x=v.default=void 0,Z=K(d()),G=e;x=v.default=(0,Z.default)((0,G.jsx)("path",{d:"M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5zm2.5-.5h1.5V15H10v-4.5h1.5V9H7zm5.5 0H14V15h1.5v-4.5H17V9h-4.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5m0 2.5h-2v-1h2z"}),"Http");j.propTypes={filterResult:o.array.isRequired,language:o.string.isRequired};function j({filterResult:i,language:a}){return e.jsx(e.Fragment,{children:i==null?void 0:i.map(({name:n,link:s,img:t})=>e.jsx(y.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:e.jsxs(q,{children:[e.jsx(r,{children:e.jsx(D,{img:t})}),e.jsxs(r,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:1,width:200},children:[e.jsx(w,{variant:"subtitle2",textAlign:"center",children:n[a]}),e.jsx("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:e.jsx(I,{variant:"contained",size:"small",startIcon:t!=null&&t.includes("audio")?e.jsx(x,{}):e.jsx(h,{}),endIcon:t!=null&&t.includes("audio")?e.jsx(f,{}):e.jsx(m,{}),children:t!=null&&t.includes("audio")?a==="en"?"Link":"Посилання":a==="en"?"DownLoad":"Завантажити"})})]})]})},_()))})}k.propTypes={filterResult:o.array.isRequired,language:o.string.isRequired,setIsSearch:o.func.isRequired,isSearch:o.string.isRequired};function k({filterResult:i,language:a,setIsSearch:n,isSearch:s}){return e.jsx(r,{sx:{width:"100%",display:"flex",justifyContent:"center"},children:e.jsxs(L,{size:"small",fullWidth:!0,sx:{maxWidth:400},children:[e.jsx(P,{children:a==="en"?"Search":"Пошук"}),e.jsx(S,{label:"Search",onChange:t=>n(t.target.value),value:s}),e.jsx(b,{sx:{height:20},children:i.length===0&&(a==="ua"?"Нічого не знайдено":"Nothing found")})]})})}const N="/languagelift/assets/level1course-G3gVfnSN.jpg",X="/languagelift/assets/level1practice-B5J6Ocoh.jpg",Y="/languagelift/assets/course2-DSHxMhx-.jpg",Q="/languagelift/assets/practice2-DdYZKi8g.jpg",ee="/languagelift/assets/course3-Z1xcun6O.jpg",te="/languagelift/assets/practice3-B9aIXM-B.jpg",ie="/languagelift/assets/course4-DHSUDOv1.jpg",ae="/languagelift/assets/practice4-CClzIK9P.jpg",re="/languagelift/assets/audio-DElmfsmO.jpg",ne=[{name:{en:"English For Everyone Course Book Level 1 Beginner",ua:"Підручник з курсу «Англійська для всіх» рівень 1, початківець"},tag:"english",img:N,link:"https://drive.google.com/file/d/1tldpBFFFsBmUVit-S78tdWgzmfn5vR4i/view?usp=drive_link"},{name:{en:"English for Everyone Practice Book level 1 Beginner",ua:"Книга практики «Англійська для всіх», рівень 1, початківець"},tag:"english",img:X,link:"https://drive.google.com/file/d/1DcHGrud-ulHNY27IPkBXndwwZuCrGNUD/view?usp=drive_link"},{name:{en:"English for Everyone Course-Book Level 2 Beginner",ua:"Підручник з курсу «Англійська для всіх» рівень 2, початківець"},tag:"english",img:Y,link:"https://drive.google.com/file/d/1YjWihJd4v2iITQjLi0USL3fmTCkAbZmJ/view?usp=drive_link"},{name:{en:"English for Everyone Practice Book Level 2 Beginner ",ua:"Книга практики «Англійська для всіх», рівень 2, початківець"},tag:"english",img:Q,link:"https://drive.google.com/file/d/1kOnQorTUJjK8xoGTIfZy__U2RGrdTnT-/view?usp=drive_link"},{name:{en:"English for Everyone Course Book Level 3 Intermediate",ua:"Підручник з курсу «Англійська для всіх» рівень 3, середній"},tag:"english",img:ee,link:"https://drive.google.com/file/d/1fDE_AuLhuX3gVf9Ua2C6JFwJIM01CVCp/view?usp=drive_link"},{name:{en:"English for Everyone Practice-Book Level 3 Intermediate ",ua:"Книга практики «Англійська для всіх», рівень 3, середній"},tag:"english",img:te,link:"https://drive.google.com/file/d/1KT9UJBtEZ3Pw8SPuF4JSqzsfmbKRyOAT/view?usp=drive_link"},{name:{en:"English for Everyone Course Book Level 4 Advanced",ua:"Підручник з курсу «Англійська для всіх» рівень 4, просунутий"},tag:"english",img:ie,link:"https://drive.google.com/file/d/1jNw-WVcCfkxhnpwN1qoxzxkWZ7dpygkS/view?usp=drive_link"},{name:{en:"English for Everyone Practice Book Level 4 Advanced",ua:"Книга практики «Англійська для всіх», рівень 4, просунутий"},tag:"english",img:ae,link:"https://drive.google.com/file/d/1BCX7RosC9cAt-lxOuPUWZr1toG95uF6k/view?usp=drive_link"},{name:{en:"Audio materials for listening can be found here",ua:"Аудіоматеріали для прослуховування можливо знайти тут"},tag:"english",img:re,link:"https://www.dkefe.com/en/audio"}],se="/languagelift/assets/essential-grammar-in-use-B0dypmHg.jpg",oe=[{name:{en:"Essential grammar in use",ua:"Основна граматика у використанні"},img:se,link:"https://drive.google.com/file/d/18CUzBIAxvsOrCaYKqQBmXOymENxBTsXL/view?usp=drive_link",tag:"english"}],le=[...oe,...ne],he=()=>{const[i,a]=B.useState(""),n=E(H),s=le.filter(({name:t})=>t.en.toLocaleLowerCase().includes(i.toLocaleLowerCase().trim())||t.ua.toLocaleLowerCase().includes(i.toLocaleLowerCase().trim()));return e.jsxs(V,{children:[!sessionStorage.getItem("English-For-Everyone")&&e.jsx(C,{passwordKey:"1234",sessionKey:"English-For-Everyone",buttonBack:!0,openWithInitilizat:!0}),e.jsx(k,{filterResult:s,language:n,setIsSearch:a,isSearch:i}),e.jsx(R,{children:e.jsx(z,{children:e.jsx(j,{filterResult:s,language:n})})})]})};export{he as default};
