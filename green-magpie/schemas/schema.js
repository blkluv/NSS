import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
//IMPORT components from schemas

import banner from './banner';
import headArt from './headArt';
import artwork from './artwork';
import footerBanner from './footerBanner';
import explorerBanner from './explorerBanner';



export default createSchema({
  name: 'default',
  types: schemaTypes.concat([  banner,   footerBanner, headArt, artwork,explorerBanner ]),
})
