<template>
    <div class="dropdown">
      <button @click="toggleDropdown" class="dropdown-toggle">{{ selectedOption }}</button>
      <ul v-if="isOpen" class="dropdown-menu">
        <li v-for="option in options" :key="option" @click="selectOption(option)">{{ option }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'depositPage'
    ,data() {
      return {
        isOpen: false,
        selectedOption: 'Select an option',
        options: ['Option 1', 'Option 2', 'Option 3']
      };
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
      selectOption(option) {
        this.selectedOption = option;
        this.isOpen = false;
      }
    }
  };
  </script>
  
  <style>
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-toggle {
    padding: 8px 12px;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
    cursor: pointer;
  }
  
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    min-width: 160px;
    padding: 8px 0;
    margin: 2px 0 0;
    font-size: 14px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  }
  
  .dropdown-menu li {
    padding: 6px 12px;
    cursor: pointer;
  }
  
  .dropdown-menu li:hover {
    background-color: #f1f1f1;
  }
  </style>
  