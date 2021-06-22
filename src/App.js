import "./styles.css";

export default function App() {
return (
<div class="App">

<header>
  <div>calc</div>
  
  <div class="switch-btns">
    <div class="btns">
      <input type="radio" name="theme" />
      <input type="radio" name="theme" />
      <input type="radio" name="theme"/>
      <label for="btns" class="label"></label>
    </div>
  </div>

</header>

<div id="result">
  <input id="inputDisplayResultado" type="text" value="" readonly />
</div>

<main>

    <input type="button" value="7" id="seven" class="btn"/>
    <input type="button" value="8" class="btn"/>
    <input type="button" value="9" class="btn"/>
    <input type="button" id="del" value="DEL" class="btn"/>
    <input type="button" value="4"/>
    <input type="button" value="5"/>
    <input type="button" value="6"/>
    <input type="button" value="+"/>
    <input type="button" value="1"/>
    <input type="button" value="2"/>
    <input type="button" value="3"/>
    <input type="button" value="-"/>
    <input type="button" value="/"/>
    <input type="button" value="0"/>
    <input type="button" value="."/>
    <input type="button" value="x"/>
    <input type="button" id="reset" value="RESET"/>
    <input type="button" id="igual" value="="/>

</main>

<div></div>


</div>);}
