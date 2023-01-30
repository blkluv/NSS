import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
//IMPORT components from schemas
import product from './product';
import banner from './banner';
import headArt from './headArt';
import artwork from './artwork';
import footerBanner from './footerBanner';


export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ product, banner,  footerBanner, headArt, artwork ]),
})
