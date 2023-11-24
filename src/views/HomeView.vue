<template>
  <v-sheet class="custom-container" elevation="0">
    <v-toolbar :elevation="0" class="custom-toolbar" style="background-color: rgba(255, 255, 255, 0.5); border-radius: 10px 0  0;" transition="fade">     
      <v-img src="" alt="Logo" contain></v-img>
      <v-slide-x-transition>
        <v-row>
          <v-col class="text-h4">
            <transition name="fade" mode="out-in">
              <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
                font-weight: bolder; margin-left:10px; font-size: 45px; color: black; margin-top: 50px;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                animation: fadeInOut 3s infinite alternate;">
                GUARDIAN ANGEL DEPARTURES -
                
                {{ currentDate }}
              </div>
            </transition>
          </v-col>
        </v-row>
      </v-slide-x-transition>
    </v-toolbar>
    <v-table :headers="headers" :items="busData" class="elevation-0 custom-table">
      <template v-slot:top>
        <v-toolbar flat class="custom-toolbar">
         <tr>
          <th style="font-size: 36px;font-family: sans-serif; font-weight: bolder;padding-left: 10px;color:aliceblue;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"><v-icon>mdi-bus</v-icon>Bus Reg No</th>
          <th style="font-size: 36px;font-family: sans-serif; font-weight: bolder;padding-left: 100px;color:aliceblue;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"><v-icon>mdi-map-marker</v-icon>Destination</th>
          <th style="font-size: 36px;font-family: sans-serif; font-weight: bolder;padding-left: 160px;color:aliceblue;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"><v-icon>mdi-bus</v-icon>Bus Letter</th>
          <th  style="font-size: 36px;font-family: sans-serif; font-weight: bolder;padding-left: 160px;color:aliceblue;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"><v-icon>mdi-clock-time-four</v-icon>Departure Time</th>
          <th  style="font-size: 36px;font-family: sans-serif; font-weight: bolder; padding-left: 130px;color:aliceblue;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"><v-icon>mdi-check-circle</v-icon>Status</th>

         </tr>
        </v-toolbar>
      </template>
      <tbody style="padding-left: 20px;">
        <tr v-for="(bus, index) in getDisplayedBusData" :key="index" class="batch-row">
          <td style="font-size: 35px;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-weight: bolder;padding-left: 30px;">{{ bus.route_name}}</td>
          <td style="font-size: 35px;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-weight: bolder;padding-left: 200px;">{{ bus.bus_number }}</td>
          <td style="font-size: 35px;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-weight: bolder;padding-left: 190px;height: 100px;">{{ bus.departure_time}}</td>
          <td style="font-size: 35px; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-weight: bolder; padding-left: 120px;">
  <v-btn :color="getStatusColor(bus.status_name)" elevation="23" style="width:200px;height:50px;font-size: 24px;border-radius: 10px;font-weight: bolder;">
    {{ bus.status }}
  </v-btn>
</td>        </tr>
      </tbody>
    </v-table>

    <marquee-text :speed="30" :hover-pause="true" style="margin-left: -150px; color:black;margin-top: 10px;background: white;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif">
          <v-row>
            <v-col v-for="(word, index) in words" :key="index" class="text-h4">
              <transition name="fade" mode="out-in">
                <div :key="word"  style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;display: inline-block;margin-right: 0px;animation: marqueeAnimation 10s linear infinite;">{{ word }}</div>
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
  background: linear-gradient(to bottom, rgba(0, 123, 255, 0.8), rgba(255, 255, 255, 0.2)), url('/Bus2-removebg.png') center center;  background-size: cover;
  padding: 20px;
  background-size: cover;
  margin: 0;
  max-width: 100%;
  height: 100vh;
  width:2050px;
  border: none;
  margin-left:100px;
  margin-top: -40px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1); /* Add box-shadow for the table */
  
}

.batch-row {
  font-size: 35px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bolder;
  /* Add other styles as needed */
}


.custom-table {
  color:white;
  background:black;
  opacity: 0.7;
  transition: opacity 0.5s ease-in-out; /* Add transition */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1); /* Add box-shadow for the table */
}

.custom-toolbar {
  background-color:#007bff;
  height: 100px;
}

.custom-header {
  color: white;
  
}
.custom-header-cell,
.custom-data-cell {
  font-size: 34px;
  font-family: 'Your-Selected-Font', sans-serif; /* Replace 'Your-Selected-Font' with the desired font */
  font-weight: bolder;
  padding-left: 20px; /* Adjust as needed */
}


.text-h4 {
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 900;
  margin-left:-10px;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 0.5s; /* Add transition for transform */
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px); /* Apply a translateY animation */
}
marquee-text {
  overflow: hidden;
}
marquee-text div {
  display: inline-block;
  margin-right: 20px; /* Adjust as needed */
  animation: marqueeAnimation 10s linear infinite;
}
@keyframes marqueeAnimation {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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
      currentDate: this.getCurrentDate(),
      batchIndex: 0,
      batchSize: 8,
      words: ["WELCOME", "TO", "THE", "GUARDIAN", "ANGEL", "BUS", "STATION", "DEPARTURES!", ""],
      headers: [
      { text: 'Bus Reg No', value: 'reg_number' },
        { text: 'Destination', value: 'route_name' },
        { text: 'Bus Letter', value: 'bus_number' },
        { text: 'Departure Time', value: 'departureTime' },
        { text: 'Status', value: 'status_name' },
      ],
      busData: [],
      redirect: false,
      redirectDestination: '/about', // Change this to the desired route
    };
  },
  methods: {

    getCurrentDate() {
      const now = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return now.toLocaleDateString('en-US', options);
    },


    formatDepartureTime(departureTime) {
      // Assuming departureTime is in HH:mm format
      const [hours, minutes] = departureTime.split(':');
      const formattedTime = `${parseInt(hours, 10) % 12 || 12}:${minutes} ${parseInt(hours, 10) < 12 ? 'AM' : 'PM'}`;
      return formattedTime;
    },
    
    getStatusColor(status) {
      // Return a color based on the status value
      switch (status_name) {
        case 'On Time':
          return 'green';
          case 'Loading':
          return 'Orange';
        case 'Delayed':
          return 'blue';
          case 'Late':
          return 'blue';
        case 'Cancelled':
          return 'red';
          case 'Arrived':
          return 'Grey';
        default:
          return 'green'; // Default color for unknown status
      }
    },
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
    }, 60000);
      // Set a timer to update the batch index every 5 seconds
    setInterval(() => {
    this.batchIndex = (this.batchIndex + 1) % Math.ceil(this.busData.length / this.batchSize);
  }, 8000);
},
computed: {
  getDisplayedBusData() {
    const startIdx = this.batchIndex * this.batchSize;
    const endIdx = startIdx + this.batchSize;
    return this.busData.slice(startIdx, endIdx);
  },
},
  
};
</script>
