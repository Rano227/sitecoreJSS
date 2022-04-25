import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the flightsearch component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when `jss manifest` is run.
 */
export default function flightsearch(manifest: Manifest) {
  manifest.addComponent({
    name: 'Flightsearch',
    icon: SitecoreIcon.DocumentTag,
    params:['showbookingpagebutton'],
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'DepartureLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'ArrivalLabel', type: CommonFieldTypes.SingleLineText },
      { name: 'DepartureDate', type: CommonFieldTypes.SingleLineText },
      { name: 'ReturnDate', type: CommonFieldTypes.SingleLineText },      
      { name: 'SearchText', type: CommonFieldTypes.SingleLineText },   
      { name: 'ResultText', type: CommonFieldTypes.SingleLineText },   
    ],
  });
}
