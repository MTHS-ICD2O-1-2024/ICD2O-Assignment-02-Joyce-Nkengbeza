// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Joyce Nkengbeza
// Created on: Mar 2025
// This file contains the JS functions for index.html

"use strict"

function calculateAreaOfCircle() {
  // input
  const radiuslength = parseInt(document.getElementById('radius-length').value)

  // process
    const areaOfCircle = (radiuslength * radiuslength) * Math.PI 

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + areaOfCircle + ' cm²'
}
