const Editors = require('./editors');
const Formatters = require('./formatters');
const Toolbar = require('./toolbars/Toolbar');
const ToolsPanel = require('./toolbars');
const Data = require('./data');
const Draggable = require('./draggable');
const Filters = require('./cells/headerCells/filters');

window.ReactDataGridPlugins = {Editors, Formatters, Toolbar, Data, ToolsPanel, Draggable, Filters};
module.exports = {Editors, Formatters, Toolbar, Data, ToolsPanel, Draggable, Filters};
