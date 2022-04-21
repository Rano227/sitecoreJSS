import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the banner component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when `jss manifest` is run.
 */
export default function banner(manifest: Manifest) {
  manifest.addComponent({
    name: 'Banner',
    icon: SitecoreIcon.DocumentTag,
    placeholders: ['jss-main-2'],
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      // { name: 'logo', type: CommonFieldTypes.Image }
      { name: 'content', type: CommonFieldTypes.RichText },
    ],
  });
}
