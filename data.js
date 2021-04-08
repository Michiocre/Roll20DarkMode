// ==UserScript==
// @name			Roll20 Dark Mode TEST
// @description		A dark theme for Roll20.net.
// @copyright		2021, Michiocre (https://openuserjs.org/users/Michiocre)
// @license			GPL-3.0-or-later
// @version			2021.04.08.1
// @include			https://app.roll20.net/editor/
// @include			https://app.roll20.net/campaigns/chatarchive*
// @run-at			document-start
// @grant none
// ==/UserScript==

// ==OpenUserJS==
// @author 			Michiocre
// ==/OpenUserJs==

(function () {
  var css = `
  :root {
	  --brighter-bg: hsl(0, 0%, 30%);
	  --main-bg: hsl(0, 0%, 20%);
	  --darker-bg: hsl(0, 0%, 10%);
	  --even-darker-bg: hsl(0, 0%, 5%);
	  --darkest-bg: hsl(0, 0%, 0%);
	  --main-hl: hsl(30, 100%, 50%);
	  --darker-hl: hsl(30, 100%, 40%);
	  --even-darker-hl: hsl(30, 100%, 30%);
	  --bright: hsl(0, 0%, 75%);
	  --brighter: hsl(0, 0%, 85%);
  
	  --hl-bg: hsl(43,63%,10%);
	  --brighter-hl-bg: hsl(43,63%,20%);
  }
  
  .ui-tabs-panel::-webkit-scrollbar {
	 display: none;
  }
  
  #editor-wrapper::-webkit-scrollbar {
	 display: none !important;
  }
  
  body {
	  background: none !important;
	  background-color: var(--even-darker-bg) !important;
  }
  
  #editor-wrapper{
	  background-color: var(--even-darker-bg) !important;
  }
  
  #rightsidebar {
	  background-color: var(--darker-bg) !important;
  }
  
  #rightsidebar ul.tabmenu {
	  background-color: var(--darker-bg) !important;
  }
  
  .ui-tabs .ui-tabs-nav {
	  border-color: var(--bright) !important;
  }
  
  .ui-tabs .ui-tabs-nav li a,
  .ui-tabs.ui-tabs-collapsible .ui-tabs-nav li.ui-tabs-selected a {
	  color: var(--bright) !important;
  }
  
  #rightsidebar .ui-tabs-nav li.ui-state-active a {
	  color: var(--main-hl) !important;
	  margin-top: 2px !important;
  }
  
  #rightsidebar .ui-tabs-nav li.ui-state-hover,
  #rightsidebar .ui-tabs-nav li.ui-state-hover a {
	  background-color: var(--brighter-bg) !important;
  }
  
  .ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default {
	  text-shadow: none !important;
  }
  
  textarea,select,input,table,
  .ui-dialog .btn:not(.sheet-wrapper-button),
  #textchat-input .btn,
  #rightsidebar .btn,
  .tokenactions .btn,
  .ui-dialog-content .ui-dialog-buttonset > button {
	  background-color: var(--darker-bg) !important;
	  color: var(--bright) !important;
	  border-color: var(--bright) !important;
	  background: none !important;
	  text-shadow: none !important;
  }
  
  #textchat .message {
	  background-color: var(--darker-bg) !important;
	  color: var(--brighter) !important;
  }
  
  #textchat .message.you {
	  background-color: var(--hl-bg) !important;
  }
  
  #textchat .message.you .spacer {
	  background-color: var(--brighter-hl-bg) !important;
  }
  
  #textchat .message .spacer {
	  background-color: var(--main-bg) !important;
  }
  
  #textchat-input {
	  background-color: var(--darker-bg) !important;
	  border-color: var(--brighter-bg) !important;
	  padding-left: 10px !important;
  }
  
  .ui-widget-content a,.ui-dialog .ui-dialog-title,label,h1,h2,h3,h4,h5,h6 {
	  color: var(--bright) !important;
  }
  
  .userscript-commandintro strong{
	 color: var(--main-hl) !important;
  }
  
  #textchat .message > .userscript-sharelink:hover a {
	  color: var(--brighter) !important;
  }
  
  .ui-widget-content {
	  color: var(--bright) !important;
	  border: 1px solid var(--darkest-bg) !important;
	  background: var(--darker-bg) !important;
  }
  
  #imagedialog .searchbox {
	  background: none !important;
  }
  
  .dd-content {
	  color: var(--brighter) !important;
  }
  
  .zoomInfoBox {
	  outline: 1px dashed var(--main-hl) !important;
  }
  
  #zoompanel ul li.zoomClickBack {
	  background-color: var(--hl-color) !important;
  }
  
  #zoomslider a.ui-slider-handle.ui-state-default.ui-corner-all {
	  background-color: var(--main-bg) !important;
	  background-image: none !important;
	  border: 2px solid var(--darker-bg) !important;
  }
  
  .zoomplus, .zoomminus {
	  background-color: var(--main-bg) !important;
	  border: 2px solid var(--darker-bg) !important;
  }
  
  #zoomslider.ui-slider.ui-slider-vertical.ui-widget.ui-widget-content.ui-corner-all {
	  background-color: var(--darker-bg) !important;
	  border: 1px solid var(--darkest-bg) !important;
  }
  
  #zoomclick .btn {
	  background-color: var(--main-bg) !important;
	  background: none;
  }
  
  #sidebarcontrol {
	  background-color: var(--main-bg) !important;
	  color: var(--main-hl) !important;
	  border: none !important;
  }
  
  .ui-dialog .ui-dialog-titlebar-close {
	  background-color: var(--brighter) !important;
  }
  
  #textchat .by {
	  color: var(--main-hl) !important;
  }
  
  #textchat .you .by {
	  color: var(--bright) !important;
  }
  
  .ui-dialog .ui-dialog-titlebar {
	  border: none!important;
	  background-color: var(--main-bg) !important;
  }
  
  code {
	  color: var(--main-hl) !important;
	  background-color: var(--darker-bg) !important;
	  border:1px solid var(--darkest-bg) !important;
  }
  
  .sheet-rolltemplate-default tr:nth-child(2n),
  .table-striped tbody tr:nth-child(odd) td,
  .table-striped tbody tr:nth-child(odd) th {
	  background-color:hsl(0,0%,15%)!important;
  }
  
  .table tbody tr:hover td,.table tbody tr:hover th {
	  background-color:hsl(0,0%,30%)!important;
  }
  
  .table th,.table td {
	  border-color:hsl(0,0%,10%)!important;
	  background-color:hsl(0,0%,25%)!important;
  }
  
  .ui-dialog-buttonset button {
	  background: none !important;
	  color: var(--brighter) !important;
	  border: 1px solid var(--brighter) !important;
	  border-radius: 4px !important;
	  padding: 4px 10px 4px !important;
  }
  
  `;
  if (typeof GM_addStyle != "undefined") {
    GM_addStyle(css);
  } else if (typeof PRO_addStyle != "undefined") {
    PRO_addStyle(css);
  } else if (typeof addStyle != "undefined") {
    addStyle(css);
  } else {
    const node = document.createElement("style");
    node.type = "text/css";
    node.innerHTML = css;

    // Note(stormy): wait for document.head to be available
    const interval = 10;
    const waitForDepts = () => {
      if (!document.head) {
        setTimeout(waitForDepts, 10);
        return;
      }
      document.head.appendChild(node);
    };
    setTimeout(waitForDepts, 10);
  }
})();
(function () {
  const el = document.createElement("link");
  el.rel = "stylesheet";
  el.href = "/css/licensed5ednd.css";
  document.head.appendChild(el);
})();