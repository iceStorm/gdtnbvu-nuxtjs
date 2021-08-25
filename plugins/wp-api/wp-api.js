export default function (context, inject) {
  const { $axios, $config } = context;

  console.log('\ninjecting $wp api...');

  // Create a custom axios instance
  const api = $axios.create({
    baseURL: `${$config.baseURL}/wp-json/wp/v2/`,
  });

  // console.log('the config:', $config);

  // Inject to the context as $wp
  inject('wp', api);
}
