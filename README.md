Install `yarn` for this project!

Remember to call `git pull origin master` to keep your local repository up to date.

Default styles such as font-family & element styles shall be made in the index/App.scss

## Available Scripts

In the project directory, you can run:
`yarn start`
Start project locally
`yarn build`

Publish development to production


## Convention rules
 ### React component folder structure:
 Component files should generally have a jsx & scss file.
  * JS component file name should include `-component`. Example: `react-component.jsx`
  * Styles file names should include `-styles`. Example: `react-styles.jsx   
 ### Styling
  * Use `scss` instead of `css`
  * Import sass variables on top of your scss file from `variables.scss`. Example: `@import './variables.scss'`
  * All HTML tag styling that is global must be put inside the index.scss file
  * As for classes, global classes should be placed in the App.scss. Global HTML tags can also be placed there if the tag styling has multiple versions.
  


## Credits
Developers: [Abraham](https://github.com/AbrahamDN) | [Zay](https://github.com/soniclinkerman)
Design: Aryo Pamungkas
