$(function () {
	new ChartWeb.ChartView('chartviewhtml',
		 {
			"type": "bar",
			"palettes":[{
				"name": "blue",
				"colors":"#0080e0"
				}, {
				"name": "black",
				"colors":"#000000"
				}, {
				"name": "green",
				"colors":"#aadf10"
				}
			],				
			"title": {
				"caption": "하반기 사원별 판매 실적 현황",
				"styles": {
					"textColor": "#f00000"
				},
				"subTitle":{
					"position": "bottom",
					"text": "목표: 전월대비 10% 이상",
					"styles": {
						"textAlign": "center",
						"textColor": "#2ab6da"				
					}
				}
			},
			"yAxes": {
				"title": {
					"styles":{
						"visible": false
					}
				},
				"categories": ["컴퓨터", "모니터", "키보드", "마우스", "모니터받침대"]
			},
			"xAxes": {
				"title": {
					"caption": "실제 판매실적",
					"styles":{
						"textColor": "#389f2c"
					}
				},
				"baseValue": 0,
				"styles": {
					"grid": {
						"stroke": "#18000000"
					}
				}
			},
			"seriesGroups": {
				"name": "group1",
				"stackMode": "normal",
				"label": {
					"styles": {
					},
					"items": [
					]
				}
			},
			"series": [{
				"name": "영업사원1",
				"group": "group1",
				"items": [17, 13, 16, 13, 17],
				"styles": {
					"fill": "pal(blue)",
					"fillAlpha": 0.7,
					"strokeAlpha": 1,
					"label": {
						"horizontalAlign": "left",
						"textColor": "#eeeeee"
					}
				},
				"animations": [{
					"property": "mask"
				}]
				}, {
				"name": "영업사원2",
				"group": "group1",
				"items": [20, 20, 20, 20, 20],
				"styles": {
					"fill": "pal(black)",
					"fillAlpha": 0.7,
					"strokeAlpha": 1,
					"label": {
						"horizontalAlign": "left",
						"textColor": "#dddddd"
					}
				},
				"animations": [{
					"property": "mask"
				}]
				}, {
				"name": "영업사원3",
				"group": "group1",
				"items": [13, 11, 20, 12, 11],
				"styles": {
					"fill": "pal(green)",
					"fillAlpha": 0.7,
					"strokeAlpha": 1,
					"label": {
						"horizontalAlign": "left",
						"textColor": "#008800"
					}
				},
				"animations": [{
					"property": "mask"
				}]
			}],
			"legend": {
			}
		}
	);
});
