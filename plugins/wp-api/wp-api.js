export default function (context, inject) {
  const { $axios, $config } = context;

  // Create a custom axios instance
  const api = $axios.create({
    baseURL: `${$config.baseURL}/wp-json/wp/v2/`,
  });

  // console.log('the config:', $config);

  // Inject to context as $wp
  inject('wp', api);
}
