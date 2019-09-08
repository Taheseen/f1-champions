
<template>
    <div class="table-container" role="table" aria-label="Destinations">
        <div class="flex-table header" role="rowgroup">
            <div class="flex-row first" role="columnheader">Driver</div>
            <div class="flex-row" role="columnheader">Nationality</div>
            <div class="flex-row" role="columnheader">Car</div>
            <div class="flex-row" role="columnheader">Race Name</div>
        </div>
        <div v-for="(racer,index) in racers" :key="index" class="flex-table row" role="rowgroup">
            <div class="flex-row" role="cell">{{racer.driver.familyName}} {{racer.driver.givenName}} </div>
            <div class="flex-row" role="cell">{{racer.driver.nationality}}</div>
            <div class="flex-row" role="cell">{{racer.car}}</div>
            <div class="flex-row" role="cell">{{racer.raceName}}</div>
        </div>
    </div>
</template>

<script src="./winnersList.js"/>
