import type { SyntheticsConfig } from '@elastic/synthetics';

export default env => {
  const config: SyntheticsConfig = {
    params: {
      url: 'http://localhost:5173',
    },
    playwrightOptions: {
      ignoreHTTPSErrors: false,
    },
    /**
     * Configure global monitor settings
     */
    monitor: {
      schedule: 10,
      locations: ['us_east','us_west'],
      privateLocations: [],
    },
    /**
     * Project monitors settings
     */
    project: {
      id: 'synthetics-replicator-tests',
      url: 'https://5973875c97444a5ca1d38c2f839e672c.us-central1.gcp.cloud.es.io:443',
      space: 'default',
    },
  };
  if (env === 'production') {
    config.params = { url: 'https://main--clinquant-sunflower-ef6f9e.netlify.app/' }
  }
  return config;
};
