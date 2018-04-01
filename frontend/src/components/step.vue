<template>
  <div
    class="mb-4 mb-lg-5 col-12 col-lg-4"><h5>Step {{title}}</h5>

    <!--<img class="card-img-top" src="" alt="Card image cap">-->
    <p
      style="min-height: 3rem;"

      class="card-text font-weight-bold"


    >{{text}}</p>
    <a href="#" class="btn btn-primary">Get started</a>
  </div>
</template>

<style scoped>
  .card {
    border: 0
  }

  .card-title {

  }
</style>


<script>

  export default {
    name: "step",
    props: ['title', 'text'],
  };

</script>
