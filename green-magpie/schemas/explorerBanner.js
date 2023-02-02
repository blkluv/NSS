export default {
    name: 'explorerBanner',
    title: 'ExplorerBanner',
    type: 'document',
    fields: [
        {
            name: 'explorerImage',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'explorerCollectionName',
            title: 'Collection Name',
            type: 'string',
        },
        {
            name: 'explorerButtonText',
            title: 'Button Text',
            type: 'string',
        },
        {
            name: 'explorerBlockchain',
            title: 'Blockchain Desc',
            type: 'string',
        },
        {
            name: 'explorerDate',
            title: 'Date Creation',
            type: 'string',
        },
        {
            name: 'explorerLargeText1',
            title: 'LargeText1',
            type: 'string',
        },
        {
            name: 'explorerLargeText2',
            title: 'LargeText2',
            type: 'string',
        },
        {
            name: 'explorerLargeTitle3',
            title: 'LargeText3',
            type: 'string',
        },
      
        {
            name: 'explorerArtist',
            title: 'By',
            type: 'string',
        }
    ],
  };