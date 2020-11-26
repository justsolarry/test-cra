### Repo showing that ICSS exports is broken on some CRA versions


ICSS Exports work on `react-scripts": "3.4.4"` and not `react-scripts: "4.0.0"`


### Steps to show that it works on `react-scripts": "3.4.4"`
1. Clone repo
2. `yarn`
3. `yarn start`
4. Edit text on the page should be red


### Steps to show that it does not work on `react-scripts": "4.0.0"`
1. Clone repo
2. Go to `package.json` and change  `react-scripts": "3.4.4"` to `react-scripts": "4.0.0"`
3. Delete `yarn.lock` and `node_modules`
2. `yarn`
3. `yarn start`
4. Edit text on the page will be white instead of red (not picking up the `colors` object)
