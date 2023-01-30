export default {
    name: 'artwork',
    title: 'Artwork',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      
      { 
        name: 'artistName',
        title: 'Artist Name',
        type: 'string',
      },
      {
        name: 'largenumber',
        title: 'LargeNumber',
        type: 'string',
    },
    {
      name: 'cat',
      title: 'Category',
      type: 'string',
  },
      { 
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      { 
        name: 'desc',
        title: 'Description Full',
        type: 'string',
      },
      { 
        name: 'shortDesc',
        title: 'Description Short',
        type: 'string',
      },
      { 
        name: 'blockDesc',
        title: 'Blockchain Description',
        type: 'string',
      },
      {
        name: 'buttonAdd',
        title: 'Button Add To Cart',
        type: 'string',
    },
    {
      name: 'buttonBuy',
      title: 'Button Buy Now',
      type: 'string',
  },
    { 
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'largenumber',
        maxLength: 90,
      }
    }
    ]
  }