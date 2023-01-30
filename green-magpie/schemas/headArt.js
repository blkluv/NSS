export default {
    name: 'headArt',
    title: 'HeadArt',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'buttonText',
            title: 'ButtonText',
            type: 'string',
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            name: 'largeText1',
            title: 'LargeText1',
            type: 'string',
        },
        {
            name: 'largeText2',
            title: 'LargeText2',
            type: 'string',
        },
        {
            name: 'largeText3',
            title: 'LargeText3',
            type: 'string',
        },
        {
            name: 'imageDesc',
            title: 'imageDesc',
            type: 'string',
        }
    ],
    
  };

  