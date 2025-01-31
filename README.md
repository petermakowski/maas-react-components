# MAAS React Components

This project is a library of React components for use in MAAS UI projects.

It contains components that are either specific to, or only used in MAAS. General purpose components should be added to
[@canonical/react-components](https://github.com/canonical/react-components) instead.

Read more in [Project philosophy and guidelines](GUIDELINES.md).

## Development with `maas-react-components`

To see the changes you make to `maas-react-components` reflected in a consuming app immediately, follow these steps:

1. In the `maas-react-components` directory, run the following command to create a symlink:

   ```bash
   yarn link
   ```

2. In the consuming repository (e.g., `maas-ui`), run the following command to use the local version of `maas-react-components`:

   ```bash
   yarn link "@canonical/maas-react-components"
   ```

3. Go back to `maas-react-components` directory and run the following command to start the build process with the watch flag:

   ```bash
   npm run build:watch
   ```

4. As you make changes to `maas-react-components` they will be automatically built and reflected in the consuming app.
