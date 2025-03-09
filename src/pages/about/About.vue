<template>
    <div id="about">
      <img src="@/assets/imgs/about/profile-pic.jpg" alt="About" />
      <div class="about-text">
        <p>Hi, my name is Callista!</p>
        <p>
          I first got into photography back in 2017 and I’ve loved it ever since! 
          I’m now 22 years old and I just recently graduated from a B.Sc. Computer Science. 
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
    padding: 3%;
  }

  img {
    max-height: 70vh;
    padding-left: 5rem;
    padding-right: 5rem;
  }

  .about-text {
    padding: 3rem;
    text-align: center;
    width: 40%;
    line-height: 2rem;
  }

  
</style>