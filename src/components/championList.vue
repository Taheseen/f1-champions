<template>
  <div>
    <header >
    <h1 class="title">F1 Champions</h1>
  </header>
  <main  v-if="winners">
    <section class="bigbottom yearcolumn">
      <a href="#"  v-for="(winner, index) in winners" :key="index" class="options-link link-active"  @click="filterWinners(winner.season, index)" >{{winner.season}}
      </a>
      <div>
        <!-- <span>{{winner.driver.familyName}} {{winner.driver.givenName}}</span> -->
        <!-- <span> {{winner.driver.dateOfBirth}} </span> -->
        <!-- <span> {{winner.driver.nationality}}</span>  -->
          <!-- <a target="_blank" :href="winner.driver.url" class="info-link bigbottom">Learn more here...</a> -->
      </div>
      <!-- <div v-if="showPanel === index">
        <div v-for="racer in racers" :key="racer.driverId">
          <h3>Name : {{racer.driver.familyName}} {{racer.driver.givenName}}</h3>
          <p> DOB : {{racer.driver.dateOfBirth}}
            Nationality : {{racer.driver.nationality}}
            <a target="_blank" :href="racer.driver.url" class="info-link bigbottom">Learn more here...</a>
          </p>
        </div>
      </div> -->
    </section>
     <winnersList v-if="racers" :racers="racers"/>
      <!-- <div v-for="racer in racers" :key="racer.driverId">
          <h3>Name : {{racer.driver.familyName}} {{racer.driver.givenName}}</h3>
          <p> DOB : {{racer.driver.dateOfBirth}}
            Nationality : {{racer.driver.nationality}}
            <a target="_blank" :href="racer.driver.url" class="info-link bigbottom">Learn more here...</a>
          </p>
        </div> -->
    <section>
    </section>
  </main>
  </div>
</template>

<script src="./championList.js"/>
