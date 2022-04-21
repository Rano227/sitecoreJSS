import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the component1 component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when `jss manifest` is run.
 */
export default function component1(manifest: Manifest) {
  manifest.addComponent({
    name: 'Component1',
    icon: SitecoreIcon.DocumentTag,
   // params: ['color'],
    placeholders: ['jss-main-2', 'jss-main'],
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'content', type: CommonFieldTypes.RichText },
    ],
  });
}
