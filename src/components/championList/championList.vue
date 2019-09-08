<template>
  <div>
    <p class="loader" v-if="!seasons">  Please wait ... </p>
    <main v-else-if="seasons">
      <section class="season-list">
        <a href="#" v-for="(winner, index) in seasons" :key="index" class="season-list__link" :class="{ 'season-list__active': index === activeSeason }" @click="filterWinners(winner.season, index)">{{winner.season}}
        </a>
      </section>
      <section>
        <div v-for="(winner, index) in champions" :key="index" >
          <p>The champion is <span>{{winner.familyName}} {{winner.givenName}}</span>. Please <a target="_blank" :href="winner.url" class=""> click here </a> to learn more.
          <img alt="flag" class="flag" src="../../assets/flag.png"> </p>
        </div>
      </section>
      <winnersList v-if="racers" :racers="racers"/>
    </main>
  </div>
</template>

<script src="./championList.js"/>
