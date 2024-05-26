import sanityClient, { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client =createClient({
    projectId: 'peilpvnp',
    dataset: 'production',
    apiVersion: 'v2024-05-24', // use a current date
    useCdn: true,
    token: "sknlawQ75E33oCPwZ8DZS9vhMH3Ew1LHvGMBSrr6eu78nQJNnbuU2XNO7BN1mt65fpaLvVE3uBcRlTIQR1SzEaN95GUa5XM9he65PvJhDWCseuUkepQOEN8MrumKnAg3P1lBnopLeeKNtg2UCmQxno6h1tJFDQQttci6aVl2nlSio12fLgfd",
  
})

const builder = imageUrlBuilder(client);

export function urlFor(source:any) {
  return builder.image(source);
}


