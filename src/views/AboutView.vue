<template>
  <v-sheet elevation="0" class="custom-container" style="width: 1750px; margin-left: -150px; margin-top:0px; max-width: 100%; height: 600px; opacity: 0.9;">
    <div class="header">
      <h1 class="animated-header">The Best Ahead of the Rest</h1>
    </div>
    
    <div class="social-icons">
      <a href="#" class="social-icon animated-icon" style="animation-delay: 1s;"><mdi-facebook></mdi-facebook></a>
      <a href="#" class="social-icon animated-icon" style="animation-delay: 2s;"><mdi-twitter></mdi-twitter></a>
      <a href="#" class="social-icon animated-icon" style="animation-delay: 3s;"><mdi-instagram></mdi-instagram></a>
      <!-- Add more social media icons as needed -->
    </div>

    <div class="image-container">
      <img v-for="(item, i) in items" :key="i" :src="item.src" class="animated-image" :style="{ animationDelay: i * 2 + 's' }">
    </div>

    <!-- <marquee-text :speed="30" :hover-pause="true" style="margin-left: -150px; color: black; margin-top:-70px; background: white; height:50px;">
      <v-row>
        <v-col v-for="(word, index) in words" :key="index" class="text-h4 dancing-word" :style="{ animationDelay: index * 0.5 + 's' }">
          <transition name="fade" mode="out-in">
            <div :key="word">{{ word }}</div>
          </transition>
        </v-col>
      </v-row>
    </marquee-text> -->

    

    <div v-if="redirect" style="display: none;">
      <router-link :to="redirectDestination"></router-link>
    </div>
  </v-sheet>
</template>

<style scoped>
  .custom-container {
    border-radius: 10px;
    background-color: #f0f0f0; /* Light gray background color */
    padding: 20px;
  }

  .header {
    text-align: center;
    margin-bottom: 20px;
  }

  .animated-header {
    font-size: 60px;
    color: #007bff; /* Change color as needed */
    animation: fadeInUp 0.5s ease-in-out;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  info-section {
    text-align: center;
    margin: 20px 0;
  }

  .animated-info {
    font-size: 18px;
    color: #333;
    animation: fadeInUp 1.5s ease-in-out;
  }

  
  .social-icon {
    font-size: 24px;
    color: #007bff; /* Change color as needed */
    margin: 0 10px;
  }

  .animated-icon {
    animation: bounceIn 1s ease-in-out;
  }

  .image-container {
    display: flex;
    overflow: hidden;
    height: 100%;
  }
  .bus-info {
    text-align: center;
    margin: 40px 0;
  }

  .animated-subheader {
    font-size: 36px;
    color: #007bff;
    animation: fadeInOut 1.5s ease-in-out;
  }

  .animated-paragraph {
    font-size: 18px;
    color: #333;
    animation: fadeInOut 1.5s ease-in-out;
  }

  .animated-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: fadeInOut 3s infinite alternate;
  }

  @keyframes fadeInOut {
    0%, 100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  .dancing-word {
    display: inline-block;
    animation: bounce 0.5s infinite alternate;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes bounceIn {
    0%, 20%, 40%, 60%, 80%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }

  /* ... your existing styles ... */
</style>

<script>
  import MarqueeText from 'vue-marquee-text-component'

  export default {
    components: {
      MarqueeText,
    },
    data() {
      return {
        words: ["WELCOME", "TO", "THE", "GUARDIAN", "ANGEL", "BUS", "STATION", "DEPARTURES!", ""],

        items: [
          { src: 'Bus2-removebg.png' },
          { src: 'Bus-PhotoRoom.png-PhotoRoom.png' },
         
        ],
        redirect: false,
        redirectDestination: '/', // Change this to the desired route
      };
    },
    mounted() {
      // Set a timeout to trigger the redirection after 5 seconds
      setTimeout(() => {
        // Use programmatic navigation to redirect to another page
        this.$router.push(this.redirectDestination);
      }, 5000);
    },
  };
</script>
