<template>
  <div id="about">
    <img class="about-photo" src="/src/imgs/about/profile-pic2.jpg" alt="About" />
    <div class="about-text">
      <p>Hi, my name is Callista!</p>
      <p>
        I first got into photography back in 2017 and I’ve loved it ever since! What started as a passion has now grown into something I’m excited to offer as a professional service.
      </p>
      <p>
        I’m based in Montreal, Canada but I love traveling so you can often catch me exploring (and photographing!) places all around the world. I actually recently went on exchange in the Netherlands where I got to travel to so many wonderful places all around Europe!
      </p>
      <p>
        Beyond travel photography, I’ve also worked in real estate, events, and portrait photography. I love trying new things and bringing people’s ideas to life.
      </p>
      <p>If you have a project in mind or just want to chat, feel free to reach out.</p>
      <p>xx Callista</p>
    </div>
  </div>
</template>

<style scoped>
#about {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  padding: 3rem;
  gap: 3rem; /* spacing between image and text */
  max-width: 1000px;
  margin: 0 auto; /* center container */
  padding-top: 5rem;
}

.title {
  padding: 3rem;
  font-size: 1.5rem;
}

.about-photo {
  border-radius: 5px;
  max-width: 400px; /* limits image size */
  width: 100%;
  height: auto;
  object-fit: cover;
}

.about-text {
  flex: 1; /* text takes remaining space */
  line-height: 1.8rem;
  font-size: 1.1rem;
}

/* Responsive for smaller screens */
@media (max-width: 780px) {
  #about {
    flex-direction: column;
    padding: 1.5rem;
    gap: 1.5rem;
  }

  .about-photo {
    max-width: 100%;
    margin: 0 auto;
  }

  .about-text {
    padding: 0;
    font-size: 1rem;
  }
}
</style>
