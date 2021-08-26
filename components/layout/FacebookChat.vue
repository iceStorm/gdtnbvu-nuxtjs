<template>
  <!-- Messenger Plugin chat Code -->
  <div id="gdtnbvu-chat">

    <!-- <div id="fb-root"></div> -->
     <!-- Your Chat Plugin code -->
    <!-- <div class="fb-customerchat"
        attribution="setup_tool"
        page_id="1576327239056942"
        theme_color="#ffc300"
        logged_in_greeting="Xin chào, nhắn tin với chúng tôi tại đây về các thắc mắc hoặc khiếu nại."
        logged_out_greeting="Xin chào, nhắn tin với chúng tôi tại đây về các thắc mắc hoặc khiếu nại.">
    </div> -->

    <!-- Messenger Plugin chat Code -->
    <div id="fb-root"></div>

    <!-- Your Plugin chat code -->
    <div id="fb-customer-chat" class="fb-customerchat">
    </div>

  </div>
</template>

<script>
export default {
  mounted() {
    console.log('facebook chat plugin being enabled...');

    const chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute('page_id', '1576327239056942');
    chatbox.setAttribute('attribution', 'biz_inbox');

    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v11.0',
      });
    };

    (function (d, s, id) {
      let js; const
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },
};
</script>
