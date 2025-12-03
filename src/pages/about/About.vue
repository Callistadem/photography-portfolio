<template>
    <div id="about">
      <img class="about-photo" src="/src/imgs/about/profile-pic2.jpg" alt="About" />
      <div class="about-text">
        <p>Hi, my name is Callista!</p>
        <p>
          I first got into photography back in 2017 and I’ve loved it ever since! 
        </p>
        <p>
          I’m based in Montreal, Canada but I love traveling which is why I mainly do travel photography. 
          I actually recently went on exchange in the Netherlands where I got to travel to so many 
          wonderful places all around Europe! 
        </p>
        <p>
          Along with travel photography, I’ve also done real estate, event, and portrait photography. 
          I always love trying out new things! Feel free to contact me for any inquiries.  
        </p>
        <p>xx Callista</p>
      </div>
    </div>
</template>

<style scoped>

#about {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    text-align: center;
    padding: 3rem;
    margin-left: 5rem;
    margin-right: 5rem;
  }

  img {
    max-height: 80%;
    overflow-x: hidden;
    border-radius: 5px;
    margin-right: 5rem;
    width: 100%;
    object-fit: cover;
  }

  .about-text {
    padding: 3rem;
    text-align: center;
    line-height: 2rem;
  }
  
  @media (max-width: 1240px) {
    #about{
      flex-direction: column;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }

    .about-text {
      padding: 1rem;
      width: 100%;
      font-size: 1rem; 
    }

    img {
      width: 100%;
      margin-right: 0;
    }

  }
  
</style>