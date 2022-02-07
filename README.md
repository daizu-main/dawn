# Dawn — Sleep Ink Incarnation


[Getting started](#getting-started) |
[Deployment / CI](#deployment-ci) |
[License](#license)

This theme is based on the Shopify [Dawn Theme](https://github.com/Shopify/dawn).
See the readme there for general information on the Dawn Theme.



## Getting started

### Clone the repository
```sh
git clone git@github.com:daizu-main/dawn.git
cd dawn
```

> 💡 git via HTTPS is currently limited in the organization settings. 
> The GitHub docs have a [tutorial to set up SSH for your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

### Install the Shopify CLI
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

#### CLI Troubleshooting

If you see any issues with the CLI, check the open issues on the [Shopify CLI GitHub project](https://github.com/Shopify/shopify-cli).


> **🚨 Push and Pull**  
>  
> Under normal circumstances, you should never use `shopify theme push` or `shopify theme pull`.  
> Push will overwrite all theme settings on the shop with your local copy.
> Pull will overwrite your local settings with the shop settings.
> 
> We use GitHub integration to sync the repository with the stores. (see below), so manual push/pull should not be necessary.


### Launch a development server
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


## Deployment / CI

We use the Shopify GitHub integration to directly sync the repository with Shopify.

### Staging
We follow a three staged deployment process:

1. Developers have their own development stores and can deploy to these for testing and tinkering.
2. The `develop` branch is linked with the `sleep-ink-dev2.myshopify.com` store.  
Here marketing and design can review changes before they are merged on `main`
3. The `main` branch is linked to the production store `sleep-ink.myshopify.com`

### Content changes
It is important to understand that a Shopify theme not only contains the layout and design. It also stores content and settings in the templates files.  
**When content changes are made in the Shopify admin web console, a commit is created on the according git branch.**

As with code changes, content changes should only be made top-down. So content editors should make changes on the development / staging stores (affecting the `develop` branch).  
Once these changes have been reviewed, they are deployed when `develop` is merged into `main` as part of a pull request.

### Development process
The development process looks usually like this:

1. 👩‍💻 A developer creates a feature or fix branch from `develop`
2. 👀 When they are done, they create a PR against `develop`
3. ✅ Other developers review and approve the PR so it is merged
4. 👀 When a meaningful set of changes has accumulated on `develop`, 
   the devs create a PR against `main` and ask marketing and design to 
   review the changes on the stating shop.  
5. 📝 Content editors make changes in the Shopify admin panel (web GUI),
   which directly comit on `develop`
6. 🚀 When marketing and design approve it, the PR is merged into `main`,
   going live in the production shop

### Force reset on last comit on Shopify admin
It can happen that the 





## Theme Check

We recommend using [Theme Check](https://github.com/shopify/theme-check) as a way to validate and lint your Shopify themes.

We've added Theme Check to Dawn's [list of VS Code extensions](/.vscode/extensions.json) so if you're using Visual Studio Code as your code editor of choice, you'll be prompted to install the [Theme Check VS Code](https://marketplace.visualstudio.com/items?itemName=Shopify.theme-check-vscode) extension upon opening VS Code after you've forked and cloned Dawn.

You can also run it from a terminal with the following Shopify CLI command:

```bash
shopify theme check
```


#### Shopify/lighthouse-ci-action

We love fast websites! Which is why we created [Shopify/lighthouse-ci-action](https://github.com/Shopify/lighthouse-ci-action). This runs a series of [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) audits for the home, product and collections pages on a store to ensure code that gets added doesn't degrade storefront performance over time.

#### Shopify/theme-check-action

Dawn runs [Theme Check](#Theme-Check) on every commit via [Shopify/theme-check-action](https://github.com/Shopify/theme-check-action).



## License

Copyright (c) 2021-present Shopify Inc. See [LICENSE](/LICENSE.md) for further details.
