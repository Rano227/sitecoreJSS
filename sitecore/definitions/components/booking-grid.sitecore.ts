import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the bookingGrid component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when `jss manifest` is run.
 */
export default function bookingGrid(manifest: Manifest) {
  manifest.addComponent({
    name: 'BookingGrid',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'content', type: CommonFieldTypes.RichText },
      { name: 'departureTime', type: CommonFieldTypes.RichText },
      { name: 'arrivalTime', type: CommonFieldTypes.RichText },
      
    ],

    params:['bid']
  });
}
