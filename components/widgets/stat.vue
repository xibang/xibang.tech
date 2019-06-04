<template>
  <div id="stat" :style="`background-image: url(${statBgUrl});`">
    <h2>为什么选择我们？</h2>
    <div class="pure-g border">
      <div class="pure-u-1 pure-u-md-1-3">
        <h3>
          <svg-icon name="regular/clock" />
          高效
        </h3>
        <p>团队内部采用的是 Scrum 敏捷模型进行快速迭代。</p>
      </div>
      <div class="pure-u-1 pure-u-md-1-3">
        <h3>
          <svg-icon name="brands/git-alt" />
          可控
        </h3>
        <p>使用 Git 进行版本管理，并定时汇报开发进度。</p>
      </div>
      <div class="pure-u-1 pure-u-md-1-3">
        <h3>
          <svg-icon name="solid/fingerprint" />
          安全
        </h3>
        <p>拥有多年行业经验，对系统架构安全性格外注重。</p>
      </div>
    </div>
    <h2>
      我们更注重技术的沉淀。
    </h2>
    <p>即便仅仅是初创公司，也充满创造力。因为专注，所以专业。</p>
    <div class="pure-g">
      <div class="pure-u-1-4">
        <h3>
          <NuxtLink to="/sponsers">
            {{ clients }}
          </NuxtLink>
        </h3>
        <p>长期合作客户</p>
      </div>
      <div class="pure-u-1-4">
        <h3>
          <NuxtLink to="/product">
            {{ projects }}
          </NuxtLink>
        </h3>
        <p>成熟产品项目</p>
      </div>
      <div class="pure-u-1-4">
        <h3>
          <a href="https://github.com/xibang" target="_blank">
            {{ opensource }}
          </a>
        </h3>
        <p>开源项目</p>
      </div>
      <div class="pure-u-1-4">
        <h3>
          <NuxtLink to="/about">
            {{ properties }}
          </NuxtLink>
        </h3>
        <p>知识产权</p>
      </div>
    </div>
  </div>
</template>

<script>
import { clients, projects, opensource, properties } from '~/assets/js/stat';
import statBgUrl from '~/assets/images/stat.png';

export default {
  data: () => ({
    statBgUrl,
    clients,
    projects,
    opensource,
    properties
  })
};
</script>

<style lang="stylus">
#stat
  padding: 2em
  color: #fff
  text-align: center
  background-color: #4b5d73
  background-size: cover
  h2
    font-size: 1.5em
    padding: 0.5em 0
  h3, p
    margin: 0
  h3
    margin-top: 0.5em
    color: #FECF39
    font-weight: bolder
    font-size: 2em
    a
      color: #FECF39
    svg
      fill: #FECF39
      height: 1em
      width: 1em
      padding-top: 0.25em
  .pure-g
    padding-bottom: 1em
    margin-bottom: 1em
    &.border
      border-bottom: 1px dashed #ccc
    p
      font-size: 1.2em

@media only screen and (max-width: 768px)
  #stat
    h3
      font-size: 1.5em
    .pure-g p
      font-size: 12px
</style>
