<template>
  <v-sheet class="custom-container">
    <v-toolbar :elevation="0" class="custom-toolbar" style="background-color: rgba(255, 255, 255, 0.5); border-radius: 10px 0  0;">
      <v-img src="" alt="Logo" contain></v-img>
      <v-slide-x-transition>
        <v-row>
          <v-col class="text-h4">
            <transition name="fade" mode="out-in">
              <div style="font-family: sans-serif; font-weight: bolder;">WELCOME TO GUARDIAN ANGEL BUS STATION DEPARTURES</div>
            </transition>
          </v-col>
        </v-row>
      </v-slide-x-transition>
    </v-toolbar>

    <v-table :headers="headers" :items="busData" class="elevation-0 custom-table">
      <template v-slot:top>
        <v-toolbar flat class="custom-toolbar">
          <v-col v-for="(header, index) in headers" :key="index" class="text-left">
            <v-toolbar-title class="custom-header" style="font-size: 24px;font-family: sans-serif; font-weight: bolder;padding-left: 20px;">{{ header.text }}</v-toolbar-title>
          </v-col>
        </v-toolbar>
      </template>
      <tbody style="padding-left: 20px;">
        <tr v-for="(bus, index) in busData" :key="index" >
          <td style="font-size: 24px;font-family: sans-serif; font-weight: bolder;padding-left: 20px;">{{ bus.bus_reg_no }}</td>
          <td style="font-size: 24px;font-family: sans-serif; font-weight: bolder;padding-left: 210px;">{{ bus.destination }}</td>
          <td style="font-size: 24px;font-family: sans-serif; font-weight: bolder;padding-left: 190px;">{{ bus.departure_time }}</td>
          <td style="font-size: 24px;font-family: sans-serif; font-weight: bolder; padding-left: 100px;">{{ bus.status }}</td>
        </tr>
      </tbody>
    </v-table>

    <marquee-text :speed="30" :hover-pause="true" style="margin-left: -150px; color:black;margin-top: 10px;background: white;">
          <v-row>
            <v-col v-for="(word, index) in words" :key="index" class="text-h4">
              <transition name="fade" mode="out-in">
                <div :key="word">{{ word }}</div>
              </transition>
            </v-col>
          </v-row>
        </marquee-text>

    <div v-if="redirect" style="display: none;">
      <router-link :to="redirectDestination"></router-link>
    </div>
  </v-sheet>
</template>

<style scoped>
.custom-container {
  background: url('/Bus2.jpg') center center;
  background-size: cover;
  padding: 20px;
  width:1550px; 
  margin-left:-164px; 
  margin-top: -0px; 
  max-width:100%;
  height:700px; 
  border:none;
}

.custom-table {
  color: black;
  opacity: 0.9;
  
}

.custom-toolbar {
  background-color:#007bff;
}

.custom-header {
  color: white;
  
}

.text-h4 {
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<script>
import MarqueeText from 'vue-marquee-text-component';
import axiosInstance from '../service/api'; // Import the Axios instance you provided

export default {
  components: {
    MarqueeText,
  },
  data() {
    return {
      words: ["WELCOME", "TO", "THE", "GUARDIAN", "ANGEL", "BUS", "STATION", "DEPARTURES!", ""],
      headers: [
        { text: 'Bus Reg No', value: 'busRegNo' },
        { text: 'Destination', value: 'destination' },
        { text: 'Departure Time', value: 'departureTime' },
        { text: 'Status', value: 'status' },
      ],
      busData: [],
      redirect: false,
      redirectDestination: '/about', // Change this to the desired route
    };
  },
  mounted() {
    // Fetch data from the API when the component is mounted
    axiosInstance.get('/Getreservations')
      .then(response => {
        this.busData = response.data.data; // Assuming your API response has a 'data' property
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    // Set a timeout to trigger the redirection after 5 seconds
    setTimeout(() => {
      // Use programmatic navigation to redirect to another page
      this.$router.push(this.redirectDestination);
    }, 5000);
  },
};
</script>
