<template>
  <footer class="navbar navbar-expand-lg navbar-dark bg-dark">
    <h3 id="txt">O BANCO QUE PENSA EM VOCÊ!</h3>
    <p style="color: white"><span>NICEBANK</span> &copy; 2022</p>
  </footer>
</template>


<script>
import axios from "axios";

export default {
  name: "footer",
  methods: {
    
  },
  
};
</script>



<style>
footer {
  
  bottom: 0;
  border-top: 1px solid #dec129;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 100%; /* Para ocupar toda a largura */
  background-color: aliceblue;
  margin-top: 20%;
  position: fixed;
}


h3#txt {
  color: white;
}

footer span {
  font-weight: bold;
  color: #dec129;
  font-size: 14px;
}
</style>