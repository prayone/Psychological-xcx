<script>
export default {
  created () {
  },
}
</script>

<style lang="less">
view{
  box-sizing: border-box;
  font-family: "Microsoft YaHei","PingFang SC",'Roboto' , sans-serif ;
}
image{
  width: 100%;
  height: 100%!important;
}
.title-desc {
  font-size: 20px;
  line-height: 20px;
  color: #222;
  position: relative;
  margin-bottom: 16px;
  // &::after{
  //   width: 4px;
  //   border-radius: 2px;
  //   height: 20px;
  //   content: '';
  //   position: absolute;
  //   left: -10px;
  //   top: 0px;
  //   background: #30CFAE;
  // }
}
.animate_{
  -webkit-animation: scaleDraw 3s ease-in-out infinite;
}
 @keyframes scaleDraw {  /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
    0%{
        transform: scale(1);  /*开始为原始大小*/
    }
    25%{
        transform: scale(1.05); /*放大1.1倍*/
    }
    50%{
        transform: scale(1);
    }
    75%{
        transform: scale(1.05);
    }
    100%{
       transform: scale(1);
    }
}
</style>
