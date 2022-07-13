const app = new Vue (
   {
      el: '#root',
      data: {
         randomEmail: '',
      },
      methods: {

      },
      created() {
         axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
         .then((response) => {
            const email = response.data.response;
            this.randomEmail = email;
         });
      }
   }
)