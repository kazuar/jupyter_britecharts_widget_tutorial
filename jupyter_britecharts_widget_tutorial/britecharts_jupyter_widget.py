import ipywidgets as widgets
from traitlets import Unicode
from traitlets import default
from traitlets import List
from traitlets import Instance


class BarChart(widgets.DOMWidget):
    @default('layout')
    def _default_layout(self):
        return widgets.Layout(height='400px', align_self='stretch')

    def set_data(self, js_data):
        self.data = js_data
        self.model_data = self.data

    _view_name = Unicode('BarChartView').tag(sync=True)
    _model_name = Unicode('BarChartModel').tag(sync=True)
    _view_module = Unicode('britecharts-jupyter').tag(sync=True)
    _model_module = Unicode('britecharts-jupyter').tag(sync=True)
    _view_module_version = Unicode('^0.1.0').tag(sync=True)
    _model_module_version = Unicode('^0.1.0').tag(sync=True)
    model_data = List([]).tag(sync=True)
