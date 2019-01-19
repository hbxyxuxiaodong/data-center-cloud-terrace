import { Component, OnInit } from '@angular/core';
import Color from '../../utils/color.util';
@Component({
  selector: 'app-equipment-view',
  templateUrl: './equipment-view.component.html',
  styleUrls: ['./equipment-view.component.scss']
})
export class EquipmentViewComponent implements OnInit {
  public assetStatus: any = {
    color: ['#6acece', '#6acece', '#6acece'],
    title : {
      top:20,
      text:'资产状态柱状图展示',
      // subtext: '资产状态柱状图展示',
      x:'center',
      textStyle:{//标题内容的样式
        color:'#333333',//京东红
        fontStyle:'normal',//主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
        fontWeight:"bold",//可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
        // fontFamily:"san-serif",//主题文字字体，默认微软雅黑
        fontSize:14//主题文字z字体大小，默认为18px
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // type: 'cross'
        type: 'shadow'
      }
    },
    xAxis: [
      {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [{
      // name: '/万元',
      // min: 0,
      // max: 10000,
      // splitNumber: 10,
      // axisLabel: {
      //   formatter: function (value) {
      //     return (value / 10000);
      //   }
      // },
      type: 'value'

    }],
    series: [{
      name: '数量',
      type: 'bar',
      barCategoryGap: '50%',
      itemStyle: {
        normal: {
          color: params => {
            const color = Color.genColor(this.assetStatus.series[0].data);
            return color[params.dataIndex];
          }
        }
      },
      data: [123, 110,370, 780, 780, 440,370, 780, 790, 440,268,1000]
    }]
  };
  engineRoom = {
    color: Color.baseColor,
    title : {
      text: '所属机房饼状图展示',
      top:20,
      // subtext: '所属机房饼状图展示',
      x:'center',
      textStyle:{//标题内容的样式
        color:'#111',//京东红
        fontStyle:'normal',//主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
        fontWeight:"bold",//可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
        // fontFamily:"san-serif",//主题文字字体，默认微软雅黑
        fontSize:14//主题文字字体大小，默认为18px
      }
    },
    tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      type: 'scroll',
      orient: 'vertical',
      // right: 100,
      left:0,
      top: 20,
      bottom: 20,
      data: []
    },
    series : [
      {
        // name: '访问来源',
        type: 'pie',
        radius : '55%',
        center: ['50%', '50%'],
        data: [{
          value: 3350,
          name: '深圳'
        },
        {
          value: 310,
          name: '北京'
        },
        {
          value: 234,
          name: '广州'
        },
        {
          value: 135,
          name: '上海'
        },
        {
          value: 1548,
          name: '长沙'
        }],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
