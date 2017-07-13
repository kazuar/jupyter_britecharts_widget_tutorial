var widgets = require('jupyter-js-widgets');
var _ = require('underscore');
var britechart_css = require('britecharts/dist/css/britecharts.min.css');

import * as d3 from 'd3';
import bar from 'britecharts/dist/umd/bar.min.js';
import colors from 'britecharts/dist/umd/colors.min.js';

var BarChartModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(_.result(this, 'widgets.DOMWidgetModel.prototype.defaults'), {
        _model_name : 'BarChartModel',
        _view_name : 'BarChartView',
        _model_module : 'jupyter_britecharts_widget_tutorial',
        _view_module : 'jupyter_britecharts_widget_tutorial',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0'
    })
});

// Renders the widget model.
var BarChartView = widgets.DOMWidgetView.extend({
    render: function() {
        let barChart = new bar();
        let barContainer = d3.select(this.el);
        let containerWidth = "600";
         
        barChart
            .margin({
                left: 120,
                right: 20,
                top: 20,
                bottom: 10
            })
            .horizontal(true)
            .usePercentage(true)
            .percentageAxisToMaxRatio(1.3)
            .width(containerWidth)
            .height(400);
        barChart.colorSchema(colors.colorSchemas.extendedOrangeColorSchema);
        var data = this.model.get("_model_data");
        barContainer.datum(data).call(barChart);        
    }
});

module.exports = {
    BarChartModel: BarChartModel,
    BarChartView: BarChartView
};
