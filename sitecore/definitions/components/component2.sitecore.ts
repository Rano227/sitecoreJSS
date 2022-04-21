import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the component2 component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when `jss manifest` is run.
 */
export default function component2(manifest: Manifest) {
  manifest.addComponent({
    name: 'Component2',
    icon: SitecoreIcon.DocumentTag,
    placeholders: ['jss-main-2', 'jss-main'],
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'content', type: CommonFieldTypes.RichText },
    ],
  });
}
