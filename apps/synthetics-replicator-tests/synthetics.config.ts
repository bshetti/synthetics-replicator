import type { SyntheticsConfig } from '@elastic/synthetics';

export default env => {
  const config: SyntheticsConfig = {
    params: {
      url: 'https://main--clinquant-sunflower-ef6f9e.netlify.app/',
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
      privateLocations: [''],
    },
    /**
     * Project monitors settings
     */
    project: {
      id: 'replicator-website-tests',
      url: 'https://364473b79f9e4f5494e8d78ab4d9acfb.us-west2.gcp.elastic-cloud.com:443',
      space: 'default',
    },
  };
  if (env === 'production') {
    config.params = { url: 'https://main--clinquant-sunflower-ef6f9e.netlify.app/' }
  }
  return config;
};
