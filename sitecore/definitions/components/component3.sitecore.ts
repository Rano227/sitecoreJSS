import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the component3 component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when `jss manifest` is run.
 */
export default function component3(manifest: Manifest) {
  manifest.addComponent({
    name: 'Component3',
    icon: SitecoreIcon.DocumentTag,
    placeholders: ['jss-main-2', 'jss-main'],
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'content', type: CommonFieldTypes.RichText },
    ],
  });
}
