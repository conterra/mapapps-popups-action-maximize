# Popups Action Maximize

This bundle adds a new action to maximize a popup.

![Screenshot App](https://github.com/conterra/mapapps-popups-action-maximize/blob/master/screenshot.JPG)

## Sample App
https://demos.conterra.de/mapapps/resources/apps/downloads_popupsactionsmaximize/index.html

## Installation Guide

Simply add the bundle "dn_popups-action-maximize" to your app.

[dn_popups-action-maximize Documentation](https://github.com/conterra/mapapps-popups-action-maximize/tree/master/src/main/js/bundles/dn_popups-action-maximize)

## Development Guide
### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

### Other methods to to define the mapapps.remote.base property.
1. Goal parameters
`mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
Change the mapapps.remote.base in the build.properties file and run:
`mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`
