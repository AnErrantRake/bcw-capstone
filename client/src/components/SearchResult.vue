<template>
  <div class="searchResult">
    <p>{{result.name}}</p>
    <p>{{result.vicinity}}</p>
    <p>{{result.rating}}</p>
  </div>
</template>


<script>

  let testData = {
    "geometry": {
      "location": {
        "lat": 43.702157,
        "lng": -116.3348241
      },
      "viewport": {
        "northeast": {
          "lat": 43.70350278029149,
          "lng": -116.3330776697085
        },
        "southwest": {
          "lat": 43.70080481970849,
          "lng": -116.3357756302915
        }
      }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/golf-71.png",
    "id": "1392e24a4faa101377878fdacedf75524896acff",
    "name": "Eagle Hills Golf Course",
    "opening_hours": {
      "open_now": false
    },
    "photos": [
      {
        "height": 535,
        "html_attributions": [
          "\u003ca href=\"https://maps.google.com/maps/contrib/105962537210422932861/photos\"\u003eEagle Hills Golf Course\u003c/a\u003e"
        ],
        "photo_reference": "CmRaAAAA1gfjt7W_kIVUwUDqpDCi--3KUJKGMF_BlQ2vSO1HKwqSqPNNnUsQmF-g6v4aDozU8CTbVhQQUybRcP0d5iOIfCZdQy_HqotOKeH83QDl82RquxxTIXyIc0vcmQnUUMhgEhDU2rF-xNkABvp8dTkr07caGhSBaMAojaL2-ImmwLbw2trIhccaHg",
        "width": 536
      }
    ],
    "place_id": "ChIJV4cUzwkAr1QR0NDUgz-5knw",
    "plus_code": {
      "compound_code": "PM28+V3 Eagle, Idaho, United States",
      "global_code": "85M5PM28+V3"
    },
    "rating": 4.1,
    "reference": "ChIJV4cUzwkAr1QR0NDUgz-5knw",
    "scope": "GOOGLE",
    "types": ["restaurant", "food", "point_of_interest", "establishment"],
    "user_ratings_total": 236,
    "vicinity": "605 North Edgewood Lane, Eagle"
  }

  export default {
    name: 'searchResult',
    props: ['result'],
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>


<style scoped>

</style>