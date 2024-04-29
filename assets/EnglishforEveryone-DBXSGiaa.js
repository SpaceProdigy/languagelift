import{s as c,B as o,c as x,i as m,j as e,r as l,d as M,b as C,M as R,T as w,m as F}from"./index-CARgSuHx.js";import{B as O}from"./Button-CPO-HQEI.js";const T=c(o)`
  width: 100px;
  height: 133px;
  background-image: url(${({img:t})=>t});

  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 10px;
`,N=c(o)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  position: relative;
  /* border: 1px solid ${({theme:t})=>t.palette.divider}; */
  /* width: 100%; */
  /* max-width: 400px; */
  border-radius: 10px;
`,A=c(o)`
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;var y={},W=m;Object.defineProperty(y,"__esModule",{value:!0});var H=y.default=void 0,U=W(x()),X=e;H=y.default=(0,U.default)((0,X.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-5 5-5-5h3V9h4v4z"}),"CloudDownload");var _={},Y=m;Object.defineProperty(_,"__esModule",{value:!0});var B=_.default=void 0,q=Y(x()),J=e;B=_.default=(0,q.default)((0,J.jsx)("path",{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5zm4-3H19v1h1.5V11H19v2h-1.5V7h3zM9 9.5h1v-1H9zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4zm10 5.5h1v-3h-1z"}),"PictureAsPdf");const K=c(o)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 400px;
  background-color: ${({theme:t})=>t.palette.background.paper};
  box-shadow: ${({theme:t})=>t.shadows[11]};
  padding: 50px;
  border-radius: 5px;
`,Z=c("input")`
  border-radius: 5px;
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  font-size: 28px;
  text-align: center;
  background-color: inherit;
`,G=c(o)`
  position: absolute;
  display: flex;
  gap: 16px;
  top: 5px;
  left: -5px;

  @keyframes shake-horizontal {
    0%,
    100% {
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70% {
      transform: translateX(-10px);
    }
    20%,
    40%,
    60% {
      transform: translateX(10px);
    }
    80% {
      transform: translateX(8px);
    }
    90% {
      transform: translateX(-8px);
    }
  }

  @keyframes shake-vertical {
    0%,
    100% {
      transform: translateY(0);
    }
    10%,
    30%,
    50%,
    70% {
      transform: translateY(-8px);
    }
    20%,
    40%,
    60% {
      transform: translateY(8px);
    }
    80% {
      transform: translateY(6.4px);
    }
    90% {
      transform: translateY(-6.4px);
    }
  }
  animation: ${({error:t})=>t?"shake-horizontal 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both":""};
  animation: ${({success:t})=>t?"shake-vertical 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both":""};
`,Q=c(o)`
  border-radius: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({borderColor:t})=>t};

  @keyframes vibrate-1 {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
    20% {
      -webkit-transform: translate(-2px, 2px);
      transform: translate(-2px, 2px);
    }
    40% {
      -webkit-transform: translate(-2px, -2px);
      transform: translate(-2px, -2px);
    }
    60% {
      -webkit-transform: translate(2px, 2px);
      transform: translate(2px, 2px);
    }
    80% {
      -webkit-transform: translate(2px, -2px);
      transform: translate(2px, -2px);
    }
    100% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }

  animation: ${({tab:t})=>t?"vibrate-1 0.3s linear both":""};
`,ee=()=>{const[t,k]=l.useState(!sessionStorage.getItem("English-For-Everyone")),[g,u]=l.useState(null),a=l.useRef({1:"",2:"",3:"",4:""}),[p,b]=l.useState({1:"",2:"",3:"",4:""}),i=Object.values(p).join(""),h="1234",d=M(),{language:j}=l.useContext(C);console.log(!sessionStorage.getItem("English-For-Everyone"));const D=()=>k(!1),v=i.length===4&&h!==i,f=h===i;l.useEffect(()=>{f&&(sessionStorage.setItem("English-For-Everyone","access"),setTimeout(()=>{D()},500))},[f]),l.useEffect(()=>{i.length===4&&a.current[g].blur()},[g,i.length]);const S=(r,n)=>{const s=r.target.value,P=s.replace(/\D/g,"");if(b(()=>({...p,[r.target.id]:P.slice(0,1)})),!isNaN(s)&&s!==""){if(n===4){a.current[1].focus();return}a.current[n+1].focus()}},V=(r,n)=>{if(r.keyCode===39){if(n===4)return a.current[1].focus();a.current[n+1].focus()}if(r.keyCode===37){if(n===1)return a.current[4].focus();a.current[n-1].focus(),a.current[n-1]}if(r.keyCode===8){if(i.length===0&&a.current[n].blur(),r.preventDefault(),n===1){b(s=>({...s,[n]:""})),a.current[4].focus();return}a.current[n-1].focus(),b(s=>({...s,[n]:""}))}},$=r=>i===h?d.palette.success.main:i.length===4&&h!==i?d.palette.error.main:p[r]?d.palette.info.main:d.palette.text.primary;return e.jsx(e.Fragment,{children:e.jsx(R,{open:t,children:e.jsx(K,{children:e.jsxs(o,{sx:{display:"flex",gap:1,flexDirection:"column",alignItems:"center"},children:[e.jsx(w,{variant:"subtitle2",children:j==="en"?"Enter password":"Введіть пароль"}),e.jsx(o,{sx:{position:"relative",width:200,height:50},children:e.jsx(G,{error:v?"+":"",success:f?"+":"",children:[1,2,3,4].map((r,n)=>e.jsx(Q,{tab:Number(r)<=Number(p[r])?"+":"",borderColor:$(r),children:e.jsx(Z,{ref:s=>{a.current[r]=s},id:r,onChange:s=>S(s,r),value:p[r],autoComplete:"off",onKeyDown:s=>V(s,r),onFocus:()=>u(r),type:"tel"})},n))})}),e.jsx(F.div,{animate:{opacity:v||f?1:0},transition:{duration:.5},style:{height:50},children:e.jsxs(w,{variant:"caption",textAlign:"center",color:v?d.palette.error.main:d.palette.success.main,children:[v&&(j==="en"?"The password is incorrect, please try again":"Пароль невірний, спробуйте ще раз"),f&&(j==="en"?"Success":"Yспіх")]})})]})})})})},te="/LanguageLift/assets/level1course-G3gVfnSN.jpg",re="/LanguageLift/assets/level1practice-B5J6Ocoh.jpg",ne="/LanguageLift/assets/course2-DSHxMhx-.jpg",ae="/LanguageLift/assets/practice2-DdYZKi8g.jpg",se="/LanguageLift/assets/course3-Z1xcun6O.jpg",oe="/LanguageLift/assets/practice3-B9aIXM-B.jpg",ie="/LanguageLift/assets/course4-DHSUDOv1.jpg",le="/LanguageLift/assets/practice4-CClzIK9P.jpg",ce="/LanguageLift/assets/audio-DElmfsmO.jpg",ue=[{name:{en:"English For Everyone Course Book Level 1 Beginner",ua:"Підручник з курсу «Англійська для всіх» рівень 1, початківець"},img:te,link:"https://drive.google.com/file/d/1tldpBFFFsBmUVit-S78tdWgzmfn5vR4i/view?usp=drive_link"},{name:{en:"English for Everyone Practice Book level 1 Beginner",ua:"Книга практики «Англійська для всіх», рівень 1, початківець"},img:re,link:"https://drive.google.com/file/d/1DcHGrud-ulHNY27IPkBXndwwZuCrGNUD/view?usp=drive_link"},{name:{en:"English for Everyone Course-Book Level 2 Beginner",ua:"Підручник з курсу «Англійська для всіх» рівень 2, початківець"},img:ne,link:"https://drive.google.com/file/d/1YjWihJd4v2iITQjLi0USL3fmTCkAbZmJ/view?usp=drive_link"},{name:{en:"English for Everyone Practice Book Level 2 Beginner ",ua:"Книга практики «Англійська для всіх», рівень 2, початківець"},img:ae,link:"https://drive.google.com/file/d/1kOnQorTUJjK8xoGTIfZy__U2RGrdTnT-/view?usp=drive_link"},{name:{en:"English for Everyone Course Book Level 3 Intermediate",ua:"Підручник з курсу «Англійська для всіх» рівень 3, середній"},img:se,link:"https://drive.google.com/file/d/1fDE_AuLhuX3gVf9Ua2C6JFwJIM01CVCp/view?usp=drive_link"},{name:{en:"English for Everyone Practice-Book Level 3 Intermediate ",ua:"Книга практики «Англійська для всіх», рівень 3, середній"},img:oe,link:"https://drive.google.com/file/d/1KT9UJBtEZ3Pw8SPuF4JSqzsfmbKRyOAT/view?usp=drive_link"},{name:{en:"English for Everyone Course Book Level 4 Advanced",ua:"Підручник з курсу «Англійська для всіх» рівень 4, просунутий"},img:ie,link:"https://drive.google.com/file/d/1jNw-WVcCfkxhnpwN1qoxzxkWZ7dpygkS/view?usp=drive_link"},{name:{en:"English for Everyone Practice Book Level 4 Advanced",ua:"Книга практики «Англійська для всіх», рівень 4, просунутий"},img:le,link:"https://drive.google.com/file/d/1BCX7RosC9cAt-lxOuPUWZr1toG95uF6k/view?usp=drive_link"},{name:{en:"Audio materials for listening can be found here",ua:"Аудіоматеріали для прослуховування можливо знайти тут"},img:ce,link:"https://www.dkefe.com/en/audio"}];var E={},de=m;Object.defineProperty(E,"__esModule",{value:!0});var I=E.default=void 0,pe=de(x()),fe=e;I=E.default=(0,pe.default)((0,fe.jsx)("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5"}),"Link");var L={},ge=m;Object.defineProperty(L,"__esModule",{value:!0});var z=L.default=void 0,he=ge(x()),ve=e;z=L.default=(0,he.default)((0,ve.jsx)("path",{d:"M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5zm2.5-.5h1.5V15H10v-4.5h1.5V9H7zm5.5 0H14V15h1.5v-4.5H17V9h-4.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5m0 2.5h-2v-1h2z"}),"Http");const ke=()=>{const{language:t}=l.useContext(C);return e.jsxs(A,{children:[e.jsx(ee,{}),ue.map(({name:k,link:g,img:u},a)=>e.jsxs(N,{children:[e.jsx(o,{children:e.jsx(T,{img:u})}),e.jsxs(o,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:1,width:200},children:[e.jsx(w,{variant:"subtitle2",textAlign:"center",children:k[t]}),e.jsx("a",{href:g,download:!0,target:"_blank",rel:"noopener noreferrer",children:e.jsx(O,{variant:"contained",size:"small",startIcon:u.includes("audio")?e.jsx(z,{}):e.jsx(B,{}),endIcon:u.includes("audio")?e.jsx(I,{}):e.jsx(H,{}),children:u.includes("audio")?t==="en"?"Link":"Посилання":t==="en"?"DownLoad":"Завантажити"})})]})]},a))]})};export{ke as default};