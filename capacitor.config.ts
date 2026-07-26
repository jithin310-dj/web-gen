import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nexgen.creations',
  appName: 'NEXGEN CREATIONS',
  webDir: 'public', // Any folder that exists
  server: {
    url: 'https://nexgen-creations.vercel.app',
    cleartext: false,
  },
};

export default config;