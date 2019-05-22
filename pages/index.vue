<template>
  <div>
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: push">
      <ul class="uk-slideshow-items" uk-height-viewport="offset-top: true; offset-bottom: true">
        <li>
          <div class="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
            <img src="images/photo.jpg" alt="" uk-cover>
          </div>
          <div class="uk-position-cover" uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000" />
          <div class="uk-position-center uk-position-medium uk-text-center">
            <div uk-slideshow-parallax="scale: 1,1,0.8">
              <h2 uk-slideshow-parallax="x: 200,0,0">
                Heading
              </h2>
              <p uk-slideshow-parallax="x: 400,0,0;">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div class="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
            <img src="images/dark.jpg" alt="" uk-cover>
          </div>
          <div class="uk-position-cover" uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000" />
          <div class="uk-position-center uk-position-medium uk-text-center">
            <div uk-slideshow-parallax="scale: 1,1,0.8">
              <h2 uk-slideshow-parallax="x: 200,0,0">
                Heading
              </h2>
              <p uk-slideshow-parallax="x: 400,0,0;">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div class="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
            <img src="images/light.jpg" alt="" uk-cover>
          </div>
          <div class="uk-position-cover" uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000" />
          <div class="uk-position-center uk-position-medium uk-text-center">
            <div uk-slideshow-parallax="scale: 1,1,0.8">
              <h2 uk-slideshow-parallax="x: 200,0,0">
                Heading
              </h2>
              <p uk-slideshow-parallax="x: 400,0,0;">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </li>
      </ul>

      <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous" />
      <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next" />
    </div>

    <div class="uk-card uk-card-body uk-card-primary">
      <h3 class="uk-card-title">
        Nuxt.js + UIKIT
      </h3>
      <button class="uk-button uk-button-default" title="Hello World" uk-tooltip>
        Hover
      </button>
      <div class="uk-inline">
        <button class="uk-button uk-button-default" type="button">
          Click
        </button>
        <div uk-dropdown="mode: click" class="uk-dropdown">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </div>
      </div>
      <hr class="uk-divider-icon">
      <NuxtLink to="/about">
        About page
      </NuxtLink>
    </div>
    <div class="uk-card uk-card-body uk-card-primary">
      <h3 class="uk-card-title">
        Nuxt.js + UIKIT
      </h3>
      <button class="uk-button uk-button-default" title="Hello World" uk-tooltip>
        Hover
      </button>
      <div class="uk-inline">
        <button class="uk-button uk-button-default" type="button">
          Click
        </button>
        <div uk-dropdown="mode: click" class="uk-dropdown">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </div>
      </div>
      <hr class="uk-divider-icon">
      <NuxtLink to="/about">
        About page
      </NuxtLink>
    </div>

    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: fade">
      <ul class="uk-slideshow-items">
        <li>
          <img src="images/photo.jpg" alt="" uk-cover>
          <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
            <h3 class="uk-margin-remove">
              Bottom
            </h3>
            <p class="uk-margin-remove">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </li>
        <li>
          <img src="images/dark.jpg" alt="" uk-cover>
          <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
            <h3 class="uk-margin-remove">
              Bottom
            </h3>
            <p class="uk-margin-remove">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </li>
        <li>
          <img src="images/light.jpg" alt="" uk-cover>
          <div class="uk-overlay uk-overlay-primary uk-position-right uk-text-center uk-transition-slide-right uk-width-medium">
            <h3 class="uk-margin-remove">
              Left
            </h3>
            <p class="uk-margin-remove">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </li>
      </ul>

      <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous" />
      <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next" />
    </div>

    <div class="uk-card uk-card-body uk-card-primary">
      <h3 class="uk-card-title">
        Nuxt.js + UIKIT
      </h3>
      <button class="uk-button uk-button-default" title="Hello World" uk-tooltip>
        Hover
      </button>
      <div class="uk-inline">
        <button class="uk-button uk-button-default" type="button">
          Click
        </button>
        <div uk-dropdown="mode: click" class="uk-dropdown">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </div>
      </div>
      <hr class="uk-divider-icon">
      <NuxtLink to="/about">
        About page
      </NuxtLink>
    </div><div class="uk-card uk-card-body uk-card-primary">
      <h3 class="uk-card-title">
        Nuxt.js + UIKIT
      </h3>
      <button class="uk-button uk-button-default" title="Hello World" uk-tooltip>
        Hover
      </button>
      <div class="uk-inline">
        <button class="uk-button uk-button-default" type="button">
          Click
        </button>
        <div uk-dropdown="mode: click" class="uk-dropdown">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </div>
      </div>
      <hr class="uk-divider-icon">
      <NuxtLink to="/about">
        About page
      </NuxtLink>
    </div>
    <div class="uk-card uk-card-body uk-card-primary">
      <h3 class="uk-card-title">
        Nuxt.js + UIKIT
      </h3>
      <button class="uk-button uk-button-default" title="Hello World" uk-tooltip>
        Hover
      </button>
      <div class="uk-inline">
        <button class="uk-button uk-button-default" type="button">
          Click
        </button>
        <div uk-dropdown="mode: click" class="uk-dropdown">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </div>
      </div>
      <hr class="uk-divider-icon">
      <NuxtLink to="/about">
        About page
      </NuxtLink>
    </div>
    <div class="uk-card uk-card-body uk-card-primary">
      <h3 class="uk-card-title">
        Nuxt.js + UIKIT
      </h3>
      <button class="uk-button uk-button-default" title="Hello World" uk-tooltip>
        Hover
      </button>
      <div class="uk-inline">
        <button class="uk-button uk-button-default" type="button">
          Click
        </button>
        <div uk-dropdown="mode: click" class="uk-dropdown">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </div>
      </div>
      <hr class="uk-divider-icon">
      <NuxtLink to="/about">
        About page
      </NuxtLink>
    </div>
  </div>
</template>
