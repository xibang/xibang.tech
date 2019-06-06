<template>
  <main id="about">
    <XTitle title="关于西邦" desc="About XiBang" img="/images/header/about.jpg" />
    <div class="text-center container">
      <div class="content">
        <h3>公司介绍</h3>
        <p>
          南京西邦智能科技有限公司成立于2019年4月17日，是一家专注于智能科技的互联网公司。我们立志于为个人及企业提供便捷的一站式软件系统服务及解决方案。
        </p>
        <h3>主旨</h3>
        <p>
          致力于效率、习惯养成和工具产品的研发，并推进开源公益事业在国内的良性发展。
        </p>

        <div class="timeline">
          <div class="timeline__group">
            <span class="timeline__year">2019</span>

            <div class="timeline__box">
              <div class="timeline__date">
                <span class="timeline__day">4</span>
                <span class="timeline__month">六月</span>
              </div>
              <div class="timeline__post">
                <div class="timeline__content">
                  <p>登记受理第一个软件著作权《西邦开源捐在线捐赠平台》。</p>
                </div>
              </div>
            </div>

            <div class="timeline__box">
              <div class="timeline__date">
                <span class="timeline__day">16</span>
                <span class="timeline__month">五月</span>
              </div>
              <div class="timeline__post">
                <div class="timeline__content">
                  <p>网站域名备案通过，备案号为：苏ICP备19022432号，域名包括：xibang.tech、xibangtech.com、xb.pub、kaiyuan.fund、v0.chat、js.cool。</p>
                </div>
              </div>
            </div>

            <div class="timeline__box">
              <div class="timeline__date">
                <span class="timeline__day">17</span>
                <span class="timeline__month">四月</span>
              </div>
              <div class="timeline__post">
                <div class="timeline__content">
                  <p>公司注册成立。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <XAside />
    </div>
  </main>
</template>

<script>
import XTitle from '~/components/partial/title';
import XAside from '~/components/widgets/about-aside';

export default {
  components: {
    XTitle,
    XAside
  },
  head() {
    return {
      title: '关于我们 | 西邦智能科技',
      meta: [
        { hid: 'description', name: 'description', content: '南京西邦智能科技有限公司成立于2019年4月17日，是一家专注于智能科技的互联网公司。我们立志于为个人及企业提供便捷的一站式软件系统服务及解决方案。' },
        { hid: 'keywords', name: 'keywords', content: '关于,西邦' }
      ]
    };
  }
};
</script>

<style lang="stylus">
#about {
  h3{
    margin-top: 0.5em
    color: #FECF39
    font-weight: bolder
    font-size: 2em
  }

  h4{
    font-size: 1.5em
    color: #f60
  }
  p {
    margin: 0.5em
    svg {
      width: 1em
      height: 1em
      margin: 0 0.25em
      vertical-align: middle
    }
  }
  .container {
    display: flex
    flex-direction: row-reverse
    justify-content: center
    align-items: stretch
  }
  .content {
    width: 100%
  }
}
@media only screen and (max-width: 768px) {
  #about {
    .container {
      flex-direction: column-reverse
    }
  }
}

#about {
  .timeline{
    text-align: left;
    --uiTimelineMainColor: var(--timelineMainColor, #222);
    --uiTimelineSecondaryColor: var(--timelineSecondaryColor, #fff);
    --timelineMainColor: #4557bb;
    font-size: 16px;

    position: relative;
    padding-top: 1em;
    padding-bottom: 2em;
  }

  .timeline:before{
    content: "";
    width: 4px;
    height: 100%;
    background-color: var(--uiTimelineMainColor);

    position: absolute;
    top: 0;
  }

  .timeline__group{
    position: relative;
  }

  .timeline__group:not(:first-of-type){
    margin-top: 4em;
  }

  .timeline__year{
    padding: .5em 1.5em;
    color: var(--uiTimelineSecondaryColor);
    background-color: var(--uiTimelineMainColor);

    position: absolute;
    left: 0;
    top: 0;
  }

  .timeline__box{
    position: relative;
  }

  .timeline__box:not(:last-of-type){
    margin-bottom: 30px;
  }

  .timeline__box:before{
    content: "";
    width: 100%;
    height: 2px;
    background-color: var(--uiTimelineMainColor);

    position: absolute;
    left: 0;
    z-index: -1;
  }

  .timeline__date{
    min-width: 65px;
    position: absolute;
    left: 0;

    box-sizing: border-box;
    padding: .5em 1.5em;
    text-align: center;

    background-color: var(--uiTimelineMainColor);
    color: var(--uiTimelineSecondaryColor);
  }

  .timeline__day{
    font-size: 2em;
    font-weight: 700;
    display: block;
  }

  .timeline__month{
    display: block;
    font-size: .8em;
    text-transform: uppercase;
  }

  .timeline__post{
    margin-left: 2em;
    padding: 1.5em 2em;
    border-radius: 2px;
    border-left: 3px solid var(--uiTimelineMainColor);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 1px 2px 0 rgba(0, 0, 0, .24);
    background-color: var(--uiTimelineSecondaryColor);
  }
}


@media screen and (min-width: 641px){
  #about{
    .timeline:before{
      left: 30px;
    }

    .timeline__group{
      padding-top: 55px;
    }

    .timeline__box{
      padding-left: 80px;
    }

    .timeline__box:before{
      top: 50%;
      transform: translateY(-50%);
    }

    .timeline__date{
      top: 50%;
      margin-top: -27px;
    }
  }
}

@media screen and (max-width: 640px){
  #about{
    .timeline:before{
      left: 0;
    }

    .timeline__group{
      padding-top: 40px;
    }

    .timeline__box{
      padding-left: 20px;
      padding-top: 70px;
    }

    .timeline__box:before{
      top: 90px;
    }

    .timeline__date{
      top: 0;
    }

    .timeline__post {
      margin-top: 1em;
      margin-left: 0;
    }
  }
}


</style>
