<template>
  <header id="header" role="heading">
    <nav>
      <h1 class="logo">
        <NuxtLink to="/">
          <img src="~/assets/images/logo.png">
          <span>南京西邦智能科技有限公司</span>
        </NuxtLink>
      </h1>
      <ul ref="nav">
        <li v-for="item in nav" :key="item.name">
          <a v-if="item.type==='outer'" :href="item.to" target="_blank">
            <span class="uk-icon uk-margin-small-right" :uk-icon="`icon: ${item.icon}`" />
            {{ item.name }}
          </a>
          <NuxtLink v-else :to="item.to">
            <span class="uk-icon uk-margin-small-right" :uk-icon="`icon: ${item.icon}`" />
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
      <div class="nav__icon" @click.stop="toggleActive">
        <span />
        <span />
        <span />
      </div>
    </nav>
    <!--/Nav-->
  </header>
  <!--/Header-->
</template>

<script>
import nav from '~/assets/js/nav';

export default {
  data: () => ({
    nav,
    active: false
  }),
  mounted() {
    this.resizer();
    window.addEventListener('resize', this.resizer);
  },
  methods: {
    resizer() {
      if (window.innerWidth > 767) {
        this.$refs.nav.style = 'display: flex;height: auto;';
      } else {
        const height = window.innerHeight - 80;
        this.$refs.nav.style = `display: none;height: ${height}px;`;
      }
    },
    toggleActive() {
      this.active = !this.active;
      if (this.active) {
        if (this.$refs.nav.style.display === 'none') {
          this.$refs.nav.style.display = 'block';
        }
      } else if (this.$refs.nav.style.display === 'block') {
        this.$refs.nav.style.display = 'none';
      }
    }
  }
};
</script>

<style lang="stylus">
header {
  z-index: 9999
  position: fixed
  background: rgba(0,0,0,.5)
  width: 100%
  .logo img {
    width: 130px
  }
  h1 {
    margin-right: auto
    span {
      display: none
    }
  }
  nav {
    height: 80px
    padding: 0 10px
    margin: 0px auto
    display: -webkit-flex
    display: flex
    -ms-align-items: center
    align-items: center
  }

  ul {
    display: -webkit-flex
    display: flex
    list-style: none
  }

  ul li {
    a, a:link, a:visited {
      color: #fff
      margin: 0px 10px
      padding: 10px
      border-radius: 5px
    }
  }
}

.nav__icon,
.nav__icon span {
  display: none
}

.nav__icon {
  width: 36px
  height: 28px
  margin-right: 10px
  position: relative
  cursor: pointer
}

.nav__icon span {
  background: rgba(255, 255, 255, 1)
  position: absolute
  left: 0
  width: 100%
  height: 4px
  border-radius: 4px
}

.nav__icon span:nth-of-type(1) {
  top: 0
}

.nav__icon span:nth-of-type(2) {
  top: 12px
}

.nav__icon span:nth-of-type(3) {
  bottom: 0
}

.nav__icon.active span:nth-of-type(1) {
  -webkit-transform: translateY(12px) rotate(-45deg)
  transform: translateY(12px) rotate(-45deg)
}

.nav__icon.active span:nth-of-type(2) {
  display: none
}

.nav__icon.active span:nth-of-type(3) {
  -webkit-transform: translateY(-12px) rotate(45deg)
  transform: translateY(-12px) rotate(45deg)
}

@media only screen and (max-width: 768px) {
  header{
    ul {
      -webkit-flex-direction: column
      flex-direction: column
      -webkit-justify-content: center
      justify-content: center
      background: rgba(0, 0, 0, .8)
      position: absolute
      top: 80px
      left: 0px
      width: 100%
      z-index: 980
    }
    ul li {
      padding: 10px
      text-align: center
    }
    ul li a {
      display: block
      background: transparent
      margin: 0px
      padding: 20px
    }
    ul li a:hover {
      color: #000
      background: #fff
    }
  }
  .nav__icon,
  .nav__icon span {
    display: inline-block
    transition: all .4s
    box-sizing: border-box
    z-index: 999
  }
}
</style>
