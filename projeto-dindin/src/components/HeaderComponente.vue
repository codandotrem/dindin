<template>
  <header>
    <div class="header-componente-container">
      <a href="#"><img class="logo" src="../assets/logo-dindin-white.png"></a>
      <h2><a href="#">dindin</a></h2>
        <div class="texts">
          <p><a href="#">CURSOS</a></p>
          <p><a href="#">PAINEL ADMINISTRATIVO</a></p>
        </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "HeaderComponente",
  props: {
    msg: String,
  },
};
</script>

<style>

/*Puting some default*/

@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
*{ 
  border:0;
  padding: 0;
  margin:0;
  vertical-align: baseline;
  box-sizing: border-box;
  font-weight: inherit;
  font-family: Ubuntu;
}
a{
  text-decoration: none;
  color: white;
}

/*Header Componente*/
.header-componente-container{
    position: relative;
    align-items: center;
    display: flex;
    width:100%;
    height: 117px;
    background: #2E948A;
    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.25);
}
.header-componente-container .texts{
    position:relative;
    display: flex;
    margin-left:auto;
    margin-right: 40px;
}
.header-componente-container img{
    position: relative;
    margin-left:82px;
    height: 71px;
}
.header-componente-container h2{ 
    position: relative;
    margin-left:11px;
    width: auto;
    height: 48px;
    font-style: normal;
    font-weight: 600;
    font-size: 56px;
    line-height: 64px;
    color: #FFFFFF;
}
.header-componente-container p{
    position: relative;
    margin-left:42px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-transform: uppercase;
    color: #FFFFFF;
}

/*Responsive 1 */

@media (max-width: 499px){
.header-componente-container{
  display: block; 
  height: 185px;
}
.header-componente-container .texts{
    display: block;
    margin-left:auto;
    margin-right: 0px;
    
}
.header-componente-container img{
  margin-top: 5px;
  margin-left: 0px;
  height: 50px;
}
.header-componente-container h2{ 
    display: inline-block;
    margin-left: 2px;   
    bottom: 3px;
    font-size: 40px;   
}
.header-componente-container p{
  margin-top: 10px;
}
}
/*Responsive 2 */

@media (max-width: 599px){

.header-componente-container img{
  margin-top: 5px;
  margin-left: 5px;
  height: 40px;
}
.header-componente-container h2{  
    margin-left: 2px;   
    font-size: 30px;   
}
.header-componente-container p{
  font-size: 16px;
  padding: 25px 0px 0px 0px;
  margin: auto 10px;
}
}

/*Responsive 3 */

@media (max-width: 750px){

.header-componente-container img{
  margin-top: 5px;
  margin-left: 5px;
  height: 60px;
}
.header-componente-container h2{  
    margin-left: 2px;   
    font-size: 50px;   
}
.header-componente-container p{
  font-size: 20px;
  padding: 25px 0px 0px 0px;
  margin: auto 10px;
}
}

</style>
