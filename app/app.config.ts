import { componentNames } from "#components";
import { mdiGithub, mdiFacebook } from "@mdi/js";

export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'stone',
    },
  },
  app: {
    logo: '/favicon.ico',
  },
  footer: {
    homepageUrl: 'https://paisonrealestate.com/',
    componentName: 'Paison Real Estate',
    smallLinks: [
      {
        text: 'Privacy Policy',
        to: '/privacy',
      },
      {
        text: 'Terms of Service',
        to: '/terms',
      },
      {
        text: 'Contact',
        to: 'mailto:',
      },
    ],
  },
  socials: [
    {
      title: 'GitHub',
      icon: mdiGithub,
      to: 'https://github.com/barbapapazes/gavarnie',
      target: '_blank',
    },
    {
      title: 'X',
      icon:  mdiFacebook,
      to: 'https://x.com/soubiran_',
      target: '_blank',
    },
  ],
})
