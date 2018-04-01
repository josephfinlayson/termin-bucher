<template>
  <div id="app">
    <MyHeader></MyHeader>
    <div class="jumbotron jumbotron-fluid">
      <div class="container-fluid text-center">
        <h1 class="display-4 ">
          <logo/>
        </h1>
        <p class="lead">Get notified when then there is an Anmeldung appointment!</p>
      </div>
    </div>

    <div class="container justify-content-center">
      <div class="row">
        <step title="1"
              text="Enter your email to get notified if there is an anmeldung appt in the next 7 days in Berlin"></step>
        <step title="2" text="Get notification via email that appointment is available"></step>
        <step title="3" text="Click the link in your email, and grab that appointment!"></step>
      </div>
    </div>

    <div class="jumbotron">
      <div class="container py-5 ">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-4"><h5>Why is this needed?</h5>
            <p>The Berlin Bürgeramts are totally overloaded! Often there are no appointments available for many weeks at
              central Bürgeramts, even though it's required to register within 3 weeks of moving apartment.
            </p></div>
          <div class="mb-4 mb-lg-0 col-12 col-lg-4"><h5>How does it work?</h5>
            <p>We are continually checking the Berlin Burgeramt website, so when an appointment becomes available, we
              can
              let you know!</p></div>
          <div class="mb-4 mb-lg-0 col-12 col-lg-4"><h5>What does it cost?</h5>
            <p>It's totally free, we will also not sell or give your email to anyone else. You can stop recieving
              notifications at any time</p></div>
        </div>
      </div>
    </div>


    <section class="container py-5 ">
      <div class="row justify-content-center">
        <form>
          <h5> Sign up </h5>
          <hr/>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                   placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">I confirm I want to recieve notifications about
              available appointments for Anmeldung in Berlin</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>

  </div>
</template>

<script>
import MyHeader from "./header";
import Logo from "./logo";
import step from "./step";

export default {
  name: "app",
  components: { Logo, MyHeader, step }
};
</script>

<!-- CSS libraries -->
<!--<style src="normalize.css/normalize.css" />-->
<style src="./base.css"/>
