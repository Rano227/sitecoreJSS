import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the header component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when `jss manifest` is run.
 */
export default function header(manifest: Manifest) {
  manifest.addComponent({
    name: 'Header',
    icon: SitecoreIcon.DocumentTag,
    placeholders:['jss-header'],
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'logo', type: CommonFieldTypes.Image }
    ],
  });
}
