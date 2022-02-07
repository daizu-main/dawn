# Dawn — Sleep Ink Incarnation


[Getting started](#getting-started) |
[Staying up to date with Dawn changes](#staying-up-to-date-with-dawn-changes) |
[Developer tools](#developer-tools) |
[Contributing](#contributing) |
[Code of conduct](#code-of-conduct) |
[Theme Store submission](#theme-store-submission) |
[License](#license)

This theme is based on the Shopify [Dawn Theme](https://github.com/Shopify/dawn).
See the readme there for general information on the Dawn Theme.



# Getting started

## Clone the repository
```sh
git clone git@github.com:daizu-main/dawn.git
cd dawn
```

> 💡 git via HTTPS is currently limited in the organization settings. 
> The GitHub docs have a [tutorial to set up SSH for your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

## Install the Shopify CLI
For local development and testing you need to install the Shopify Command Line Interface (CLI).

Shopify provides [installation instructions for all platforms.](https://shopify.dev/themes/tools/cli/installation)  
However, it is recommended to use the Ruby Gem installer. This is because we have already encountered breaking changes in minor releases of the CLI and downgrading is only possible with the Gem version. (As of Feb 2022, the homebrew cask does not support downgrading).

> **💡 Installing Ruby Gem on macOS**  
>  
> As macOS comes with an outdated Ruby version, installing Gems is not straight forward.  
> If you are not regulary using Ruby, follow these steps:
>
> 1. Install Ruby via homebrew with 
>   ```sh
>   brew install ruby
>   ```
> 2. Adjust the path in `~/.zshrc` to make sure the system uses the brew Ruby and Gem binaries.  
>    The path should look like this:   
>    `path=(/Users/johnappleseed/bin /usr/local/bin /usr/local/sbin /usr/local/opt/ruby/bin /usr/local/lib/ruby/gems/3.0.0/bin $path)`
> 3. Restart your shell and then you should be able to install the CLI with gem:  
>   ```sh
>   gem install shopify-cli -v 2.8
>   ```

### CLI Troubleshooting

If you see any issues with the CLI, check the open issues on the [Shopify CLI GitHub project](https://github.com/Shopify/shopify-cli).


> **🚨 Push and Pull**  
>  
> Under normal circumstances, you should never use `shopify theme push` or `shopify theme pull`.  
> Push will overwrite all theme settings on the shop with your local copy.
> Pull will overwrite your local settings with the shop settings.
> 
> We use GitHub integration to sync the repository with the stores. (see below), so manual push/pull should not be necessary.


## Launch a development server
You can launch a local server to run your local changes.

1. Go to to theme root folder
    ```sh
    cd path/to/dawn
    ```
2. Connect to a (development) shop:
    ```sh
    shopify login --store=sleep-ink-dev2.myshopify.com
    ```
3. Start a server
    ```sh
    shopify theme serve
    ```


> **💡 Managing stores**
>
> To check which store you are connected to run
> ```sh
> shopify store
> ````
>
> To switch between stores run
> ```sh
> shopify switch --store=sleep-ink-dev2.myshopify.com
> ```

Learn more about [development store in the Shopify docs](https://shopify.dev/themes/tools/development-stores).



# Force reset on last comit on Shopify admin





## Theme Check

We recommend using [Theme Check](https://github.com/shopify/theme-check) as a way to validate and lint your Shopify themes.

We've added Theme Check to Dawn's [list of VS Code extensions](/.vscode/extensions.json) so if you're using Visual Studio Code as your code editor of choice, you'll be prompted to install the [Theme Check VS Code](https://marketplace.visualstudio.com/items?itemName=Shopify.theme-check-vscode) extension upon opening VS Code after you've forked and cloned Dawn.

You can also run it from a terminal with the following Shopify CLI command:

```bash
shopify theme check
```

### Continuous Integration

Dawn uses [GitHub Actions](https://github.com/features/actions) to maintain the quality of the theme. [This is a starting point](https://github.com/Shopify/dawn/blob/main/.github/workflows/ci.yml) and what we suggest to use in order to ensure you're building better themes. Feel free to build off of it!

#### Shopify/lighthouse-ci-action

We love fast websites! Which is why we created [Shopify/lighthouse-ci-action](https://github.com/Shopify/lighthouse-ci-action). This runs a series of [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) audits for the home, product and collections pages on a store to ensure code that gets added doesn't degrade storefront performance over time.

#### Shopify/theme-check-action

Dawn runs [Theme Check](#Theme-Check) on every commit via [Shopify/theme-check-action](https://github.com/Shopify/theme-check-action).



## License

Copyright (c) 2021-present Shopify Inc. See [LICENSE](/LICENSE.md) for further details.
