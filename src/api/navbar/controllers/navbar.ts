/**
 * navbar controller
 */



// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::navbar.navbar');



import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::navbar.navbar', ({ strapi }) => ({
  async find(ctx) {
    const entries = await strapi.entityService.findMany('api::navbar.navbar', {
      populate: { testImage: true }, // Populate images
    });

    return entries;
  },
}));


// Im using strapi as a CMS for my project. everything is done, what i'm left with is dealing with the image uploads from/to the s3. 
// In my strapi there are a bunch collections, one of which is home and it has no of attributes of the attributes is homeBgImage which is of type media.

// I'm telling you what I want
// I come to strapi platform and upload the image from my local system.
// after that the strapi should take that image and upload it in s3 and get a url, then this url is automatically should set to the field homeBgImage that i specified in my collection. I don't want to manually take that url and set to that feild