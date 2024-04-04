"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2016],{661:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}}),n(5769),n(63238),n(61418),n(17460),n(14078),n(20266),n(52077),n(911),n(23938),n(27471),n(61370),n(61013),n(32081),n(43512);var i=n(65009),a=n.n(i),r=n(25883),s=n(53218),o=n(8782),l=n(47518),c=n(83094),u=n(12392),d=n(5099),f=n(28469),p=n(71616),m=n(70294),b=n(27515),v=n(47005),h=n(44614),g=n(94389),y=n(78695),w=n(28978),k=n(74783),S=(n(87201),n(61022),n(21865),n(1892)),T=n.n(S),P=n(95760),x=n.n(P),L=n(38311),O=n.n(L),E=n(58192),Z=n.n(E),C=n(38060),q=n.n(C),I=n(54865),M=n.n(I),F=n(79993),D={};D.styleTagTransform=M(),D.setAttributes=Z(),D.insert=O().bind(null,"head"),D.domAPI=x(),D.insertStyleElement=q(),T()(F.Z,D),F.Z&&F.Z.locals&&F.Z.locals;var B,R,H,A,N,K=n(53913),_=n(29856),V=(n(1203),n(76056),n(99785),n(34988)),z={};function U(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function j(e){var t=document.createElement("div");document.body.appendChild(t),t.innerHTML='<div class="subtitleSync"> <div class="subtitleSyncContainer"> <button type="button" is="paper-icon-button-light" class="subtitleSync-closeButton"><span class="material-icons close" aria-hidden="true"></span></button> <div class="subtitleSyncTextField" contenteditable="true" spellcheck="false">0s</div> <div class="sliderContainer subtitleSyncSliderContainer"> <input is="emby-slider" type="range" step="1" min="-300" max="300" value="0" class="subtitleSyncSlider" data-slider-keep-progress="true"/> </div> </div> </div> ',R=t.querySelector(".subtitleSyncSlider"),H=t.querySelector(".subtitleSyncTextField"),A=t.querySelector(".subtitleSync-closeButton"),N=t.querySelector(".subtitleSyncContainer"),y.Z.tv&&(R.classList.add("focusable"),setTimeout((function(){R.enableKeyboardDragging()}),0)),N.classList.add("hide"),H.updateOffset=function(e){this.textContent=e+"s"},H.addEventListener("click",(function(){this.hasFocus=!0})),H.addEventListener("keydown",(function(e){if("Enter"===e.key){var t=/[-+]?\d+\.?\d*/g.exec(this.textContent);t?(t=t[0],t=parseFloat(t),t=Math.min(30,Math.max(-30,t)),this.textContent=t+"s",s.O.setSubtitleOffset(t,B),R.updateOffset((n=10*t,Math.min(300,Math.max(-300,n.toFixed(1)))))):this.textContent=(s.O.getPlayerSubtitleOffset(B)||0)+"s",this.hasFocus=!1,e.preventDefault()}else this.hasFocus=!0,null===e.key.match(/[+-\d.s]/)&&e.preventDefault();var n;e.stopPropagation()})),H.blur=function(){!this.hasFocus&&this.prototype&&this.prototype.blur()},R.updateOffset=function(e){this.value=void 0===e?0:e},R.addEventListener("change",(function(){s.O.setSubtitleOffset(W(this.value),B),H.updateOffset(W(this.value))})),R.getBubbleHtml=function(e){var t=function(e){var t=(e-50)/50;return(t*=30).toFixed(1)}(e);return'<h1 class="sliderBubbleText">'+(t>0?"+":"")+parseFloat(t)+"s</h1>"},A.addEventListener("click",(function(){s.O.disableShowingSubtitleOffset(B),G.prototype.toggle("forceToHide")})),e.element=t}function W(e){return(e/10).toFixed(1)}z.styleTagTransform=M(),z.setAttributes=Z(),z.insert=O().bind(null,"head"),z.domAPI=x(),z.insertStyleElement=q(),T()(V.Z,z),V.Z&&V.Z.locals&&V.Z.locals;var G=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),B=t,j(this)}var t,n;return t=e,(n=[{key:"destroy",value:function(){e.prototype.toggle("forceToHide"),B&&(s.O.disableShowingSubtitleOffset(B),s.O.setSubtitleOffset(0,B));var t=this.element;t&&(t.parentNode.removeChild(t),this.element=null)}},{key:"toggle",value:function(e){if(B&&s.O.supportSubtitleOffset(B))switch(e){case void 0:if(s.O.isShowingSubtitleOffsetEnabled(B)&&s.O.canHandleOffsetOnCurrentSubtitle(B)){s.O.getPlayerSubtitleOffset(B)||H.hasFocus||(R.value="0",H.textContent="0s",s.O.setSubtitleOffset(0,B)),N.classList.remove("hide");break}case"hide":if(H.hasFocus)break;case"forceToHide":N.classList.add("hide")}}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),$=G,X=n(86628);function Y(){return document.querySelector(".dialogContainer .dialog.opened")}function J(e){function t(t){if(!t||"Program"!==t.Type)return R&&(R.destroy(),R=null),void e.querySelector(".btnRecord").classList.add("hide");K.Z.getApiClient(t.ServerId).getCurrentUser().then((function(i){i.Policy.EnableLiveTvManagement&&n.e(3989).then(n.bind(n,63989)).then((function(n){var i=n.default;R?R.refreshItem(t):(R=new i({item:t,button:e.querySelector(".btnRecord")}),e.querySelector(".btnRecord").classList.remove("hide"))}))}))}function i(n){var i=n.originalItem;B=i;var a=n.displayItem||i;t(a);var r=a.SeriesName||a.Album;(a.EpisodeTitle||a.IsSeries)&&(r=a.Name),function(e,t){var n=p.ZP.getDisplayName(e,{includeParentInfo:"Program"!==e.Type,includeIndexNumber:"Program"!==e.Type});n&&t&&(n="".concat(t," - ").concat(n)),n||(n=t||""),X.appRouter.setTitle(n);var i=t||(e?e.Name:null);i&&(document.title=i)}(a,r);var s=e.querySelector(".osdSecondaryMediaInfo"),o=m.ZP.getSecondaryMediaInfoHtml(a,{startDate:!1,programTime:!1});s.innerHTML=o,o?s.classList.remove("hide"):s.classList.add("hide"),H?(T(Ue,a.StartDate),T(je,a.EndDate),Ue.classList.remove("hide"),je.classList.remove("hide"),Re=a.StartDate?f.ZP.parseISO8601Date(a.StartDate).getTime():0,He=a.EndDate?f.ZP.parseISO8601Date(a.EndDate).getTime():0):(Ue.classList.add("hide"),je.classList.add("hide"),Ue.innerHTML="",je.innerHTML="",Re=0,He=0)}function S(e,t){return t?f.ZP.toLocaleTimeString(e,{hour:"numeric",minute:"2-digit",second:"2-digit"}).toLowerCase().replace("am","").replace("pm","").trim():f.ZP.getDisplayTime(e).toLowerCase().replace("am","").replace("pm","").trim()}function T(e,t){var n;t&&(n=S(t=f.ZP.parseISO8601Date(t))),e.innerHTML=n||""}var P=!1;function x(e){Ye.classList.remove("osdHeader-hidden"),function(e){if(A)"osd"===A&&e&&!y.Z.mobile&&U(e);else{var t=Je;A="osd",E(t),t.classList.remove("hide"),t.classList.remove("videoOsdBottom-hidden"),e||(e=t.querySelector(".btnPause")),y.Z.mobile||U(e),ke()}}(e),j()}function L(){Ye.classList.add("osdHeader-hidden"),function(){if("osd"===A){var e=Je;E(e),e.classList.add("videoOsdBottom-hidden"),c.ZP.addEventListener(e,Xe,Z,{once:!0}),A=null,ke("hide"),document.activeElement&&document.activeElement.blur()}}(),d.ZP.hideCursor()}function O(){V&&(clearTimeout(V),V=null)}function E(e){c.ZP.removeEventListener(e,Xe,Z,{once:!0})}function Z(e){var t=e.target;t==Je&&(t.classList.add("hide"),c.ZP.removeEventListener(t,Xe,Z,{once:!0}))}var C,q,I,M,F,D,B,R,H,A,N,V,z,U=(0,r.Z)((function(e){return b.Z.focus(e)}),50);function j(){!A||P||Y()?O():(O(),V=setTimeout(L,3e3))}function W(e){if("mouse"===(e.pointerType||(y.Z.mobile?"touch":"mouse"))){var t=e.screenX||e.clientX||0,n=e.screenY||e.clientY||0,i=z;if(!i)return void(z={x:t,y:n});if(Math.abs(t-i.x)<10&&Math.abs(n-i.y)<10)return;i.x=t,i.y=n,x()}}function G(t){var n,i=I;switch(t.detail.command){case"left":"osd"===A?x():A||(t.preventDefault(),s.O.rewind(i));break;case"right":"osd"===A?x():A||(t.preventDefault(),s.O.fastForward(i));break;case"pageup":s.O.nextChapter(i);break;case"pagedown":s.O.previousChapter(i);break;case"up":case"down":case"select":case"menu":case"info":case"play":case"playpause":case"pause":case"fastforward":case"rewind":case"next":case"previous":x();break;case"record":(n=e.querySelector(".btnRecord")).classList.contains("hide")||n.click(),x();break;case"togglestats":ye();break;case"back":"osd"!==A||Y()||(L(),t.preventDefault())}}function J(){var t,n;!I.forcedFullscreen||s.O.isFullscreen(I)?((n=(t=e.querySelector(".btnFullscreen")).querySelector(".material-icons")).classList.remove("fullscreen_exit","fullscreen"),s.O.isFullscreen(I)?(t.setAttribute("title",h.ZP.translate("ExitFullscreen")+" (f)"),n.classList.add("fullscreen_exit")):(t.setAttribute("title",h.ZP.translate("Fullscreen")+" (f)"),n.classList.add("fullscreen"))):X.appRouter.back()}function Q(){ce(s.O.getCurrentPlayer())}function ee(n,a){var r,o;a.NowPlayingItem&&(D=!0,function(n,a,r){var o=r.PlayState||{};pe(o.IsPaused);var l=s.O.getSupportedCommands(a);Fe=l,ve(a,o.IsMuted,o.VolumeLevel),_e&&!_e.dragging&&(_e.disabled=!o.CanSeek),$e.disabled=!o.CanSeek,Ge.disabled=!o.CanSeek;var c=r.NowPlayingItem||{};Ae=o.PlaybackStartTimeTicks,be(o.PositionTicks,c.RunTimeTicks,o.PlaybackStartTimeTicks,o.PlaybackRate,o.BufferedRanges||[]),function(n,a){var r,o=a.NowPlayingItem;if(B=o,!o)return t(null),X.appRouter.setTitle(""),Ne.disabled=!0,_e.disabled=!0,$e.disabled=!0,Ge.disabled=!0,e.querySelector(".btnSubtitles").classList.add("hide"),e.querySelector(".btnAudio").classList.add("hide"),e.querySelector(".osdTitle").innerHTML="",void(e.querySelector(".osdMediaInfo").innerHTML="");H=function(e){return!("TvChannel"!==e.Type||!e.CurrentProgram)}(o),function(e){if("TvChannel"===e.Type){var t=K.Z.getApiClient(e.ServerId);return t.getItem(t.getCurrentUserId(),e.Id).then((function(e){return{originalItem:e,displayItem:e.CurrentProgram}}))}return Promise.resolve({originalItem:e})}(o).then(i),Ne.disabled=!1,_e.disabled=!1,$e.disabled=!1,Ge.disabled=!1,s.O.subtitleTracks(n).length?(e.querySelector(".btnSubtitles").classList.remove("hide"),ke()):(e.querySelector(".btnSubtitles").classList.add("hide"),ke("forceToHide")),s.O.audioTracks(n).length>1?e.querySelector(".btnAudio").classList.remove("hide"):e.querySelector(".btnAudio").classList.add("hide"),(null===(r=B.Chapters)||void 0===r?void 0:r.length)>1?(e.querySelector(".btnPreviousChapter").classList.remove("hide"),e.querySelector(".btnNextChapter").classList.remove("hide")):(e.querySelector(".btnPreviousChapter").classList.add("hide"),e.querySelector(".btnNextChapter").classList.add("hide"))}(a,r);var u=r.MediaSource&&null==r.MediaSource.RunTimeTicks;_e.setIsClear(u),c.RunTimeTicks&&_e.setKeyboardSteps(1e6*w.skipBackLength()/c.RunTimeTicks,1e6*w.skipForwardLength()/c.RunTimeTicks),-1===l.indexOf("ToggleFullscreen")||a.isLocalPlayer&&y.Z.tv&&s.O.isFullscreen(a)?e.querySelector(".btnFullscreen").classList.add("hide"):e.querySelector(".btnFullscreen").classList.remove("hide"),-1===l.indexOf("PictureInPicture")?e.querySelector(".btnPip").classList.add("hide"):e.querySelector(".btnPip").classList.remove("hide"),-1===l.indexOf("AirPlay")?e.querySelector(".btnAirPlay").classList.add("hide"):e.querySelector(".btnAirPlay").classList.remove("hide"),J()}(0,this,a),r=e.querySelector(".btnPreviousTrack"),o=e.querySelector(".btnNextTrack"),r.classList.remove("hide"),o.classList.remove("hide"),o.disabled=!1,r.disabled=!1,!0,e.removeEventListener("viewbeforehide",qe),s.O.isPlayingVideo(I)&&e.addEventListener("viewbeforehide",qe),function(e){var t=sessionStorage.getItem("playbackRateSpeed");null!==t&&e.setPlaybackRate(t)}(this))}function te(){D&&pe(this.paused())}function ne(){if(D){var e=this;ve(e,e.isMuted(),e.getVolume())}}function ie(e,t){console.debug("nowplaying event: "+e.type),ee.call(this,e,t),ae()}function ae(){M=!1,F&&(F.destroy(),F=null)}function re(t,n){De=null,ae(),console.debug("nowplaying event: "+t.type),"Video"!==n.NextMediaType&&(e.removeEventListener("viewbeforehide",qe),X.appRouter.back())}function se(){var e=s.O.getPlayerState(this);ee.call(this,{type:"init"},e)}function oe(){e.querySelector(".osdMediaStatus").classList.remove("hide")}function le(){e.querySelector(".osdMediaStatus").classList.add("hide")}function ce(e){if(e===I||(ue(),I=e,e)){var t=s.O.getPlayerState(e);ee.call(e,{type:"init"},t),v.Events.on(e,"playbackstart",ie),v.Events.on(e,"playbackstop",re),v.Events.on(e,"volumechange",ne),v.Events.on(e,"pause",te),v.Events.on(e,"unpause",te),v.Events.on(e,"timeupdate",de),v.Events.on(e,"fullscreenchange",J),v.Events.on(e,"mediastreamschange",se),v.Events.on(e,"beginFetch",oe),v.Events.on(e,"endFetch",le),ae(),e.isFetching&&oe()}}function ue(){we(),Se(),ae();var e=I;e&&(v.Events.off(e,"playbackstart",ie),v.Events.off(e,"playbackstop",re),v.Events.off(e,"volumechange",ne),v.Events.off(e,"pause",te),v.Events.off(e,"unpause",te),v.Events.off(e,"timeupdate",de),v.Events.off(e,"fullscreenchange",J),v.Events.off(e,"mediastreamschange",se),I=null)}function de(){if(D&&B){var t=(new Date).getTime();if(!(t-Be<700)){Be=t;var i=this;De=s.O.duration(i);var a=1e4*s.O.currentTime(i);be(a,De,s.O.playbackStartTime(i),s.O.getPlaybackRate(i),s.O.getBufferedRanges(i));var r=B;!function(e,t){if("TvChannel"===t.Type){var n=t.CurrentProgram;if(n&&n.EndDate)try{var i=f.ZP.parseISO8601Date(n.EndDate);if((new Date).getTime()>=i.getTime()){console.debug("program info needs to be refreshed");var a=s.O.getPlayerState(e);ee.call(e,{type:"init"},a)}}catch(e){console.error("error parsing date: "+n.EndDate)}}}(i,r),function(t,i,a,r){r&&a&&!M&&!A&&"Episode"===i.Type&&w.enableNextVideoInfoOverlay()&&a>=r-1e3*(r>=3e10?40:r>=24e9?35:30)*1e4&&r>=6e9&&r-a>=2e8&&function(t){n.e(3651).then(n.bind(n,13651)).then((function(n){var i=n.default;A||F||(A="upnext",M=!0,s.O.nextItem(t).then((function(n){F=new i({parent:e.querySelector(".upNextContainer"),player:t,nextItem:n}),v.Events.on(F,"hide",fe)}),fe))}))}(t)}(i,r,a,De)}}}function fe(){"upnext"===A&&(A=null)}function pe(t){var n,i,a=e.querySelector(".btnPause"),r=a.querySelector(".material-icons");r.classList.remove("play_arrow","pause"),t?(n="play_arrow",i=h.ZP.translate("Play")):(n="pause",i=h.ZP.translate("ButtonPause")),r.classList.add(n),c.ZP.setElementTitle(a,i+" (k)",i)}function me(e,t,n){return(n-e)/t*100}function be(e,t,n,i,a){if(H){if(_e&&!_e.dragging)if(Re&&He){var r=(n+(e||0))/1e4,s=He-Re;if(_e.value=me(Re,s,r),a.length){var o=me(Re,s,(n+(a[0].start||0))/1e4),l=me(Re,s,(n+(a[0].end||0))/1e4);_e.setBufferedRanges([{start:o,end:l}])}else _e.setBufferedRanges([])}else _e.value=0,_e.setBufferedRanges([]);Ve.innerHTML="",ze.innerHTML=""}else{if(_e&&!_e.dragging){if(t){var c=e/t;c*=100,_e.value=c}else _e.value=0;t&&null!=e&&De&&!H&&B.RunTimeTicks&&"Recording"!==B.Type&&null!==i?We.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;"+m.ZP.getEndsAtFromPosition(t,e,i,!0):We.innerHTML=""}_e&&_e.setBufferedRanges(a,t,e),e>=0?(he(Ve,e),Ve.classList.remove("hide")):Ve.classList.add("hide");var u=t-e;u>=0?(he(ze,u),ze.classList.remove("hide")):Ve.classList.add("hide")}}function ve(t,n,i){var a=Fe,r=!0,s=!0;-1===a.indexOf("Mute")&&(r=!1),-1===a.indexOf("SetVolume")&&(s=!1),t.isLocalPlayer&&g.M.supports("physicalvolumecontrol")&&(r=!1,s=!1);var o=e.querySelector(".buttonMute"),l=o.querySelector(".material-icons");l.classList.remove("volume_off","volume_up"),n?(o.setAttribute("title",h.ZP.translate("Unmute")+" (m)"),l.classList.add("volume_off")):(o.setAttribute("title",h.ZP.translate("Mute")+" (m)"),l.classList.add("volume_up")),r?o.classList.remove("hide"):o.classList.add("hide"),Ne&&(s?Ke.classList.remove("hide"):Ke.classList.add("hide"),Ne.dragging||(Ne.value=i||0))}function he(e,t,n){if(null!=t){var i=f.ZP.getDisplayRunningTime(t);n&&(i="&nbsp;/&nbsp;"+i),e.innerHTML=i}else e.innerHTML=""}function ge(e){if("stats"===e)ye();else if("suboffset"===e){var t=I;t&&(s.O.enableShowingSubtitleOffset(t),ke())}}function ye(){n.e(1392).then(n.bind(n,1392)).then((function(e){var t=e.default,n=I;n&&(N?N.toggle():N=new t({player:n}))}))}function we(){N&&(N.destroy(),N=null)}function ke(e){var t=I;Ie?Ie.toggle(e):t&&(Ie=new $(t))}function Se(){Ie&&(Ie.destroy(),Ie=null)}function Te(e){if(!e.target.contains(C))return e.preventDefault(),e.stopPropagation(),!1}function Pe(e){C=e.target;var t=k.ZP.getKeyName(e),n=e.ctrlKey||e.altKey||e.metaKey,i=Je.querySelector(".btnPause");if(32!==e.keyCode){if(y.Z.tv&&!A)switch(t){case"ArrowLeft":case"ArrowRight":return x(_e),void _e.dispatchEvent(new KeyboardEvent(e.type,e));case"Enter":return s.O.playPause(I),void x(i)}if(y.Z.tv&&k.ZP.isNavigationKey(t))x();else switch(t){case"Enter":x();break;case"Escape":case"Back":"osd"!==A||Y()||(L(),e.stopPropagation());break;case"k":s.O.playPause(I),x(i);break;case"ArrowUp":case"Up":s.O.volumeUp(I);break;case"ArrowDown":case"Down":s.O.volumeDown(I);break;case"l":case"ArrowRight":case"Right":s.O.fastForward(I),x($e);break;case"j":case"ArrowLeft":case"Left":s.O.rewind(I),x(Ge);break;case"f":e.ctrlKey||e.metaKey||s.O.toggleFullscreen(I);break;case"m":s.O.toggleMute(I);break;case"p":case"P":e.shiftKey&&s.O.previousTrack(I);break;case"n":case"N":e.shiftKey&&s.O.nextTrack(I);break;case"NavigationLeft":case"GamepadDPadLeft":case"GamepadLeftThumbstickLeft":document.hasFocus()&&(s.O.rewind(I),x(Ge));break;case"NavigationRight":case"GamepadDPadRight":case"GamepadLeftThumbstickRight":document.hasFocus()&&(s.O.fastForward(I),x($e));break;case"Home":s.O.seekPercent(0,I);break;case"End":s.O.seekPercent(100,I);break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":if(!n){var a=10*parseInt(t,10);s.O.seekPercent(a,I)}break;case">":s.O.increasePlaybackRate(I);break;case"<":s.O.decreasePlaybackRate(I);break;case"PageUp":s.O.nextChapter(I);break;case"PageDown":s.O.previousChapter(I)}}else"BUTTON"===e.target.tagName&&y.Z.tv?x():(s.O.playPause(I),x(i),e.preventDefault(),e.stopPropagation(),C=null)}function xe(){j()}function Le(e){C=e.target,P=!0,j()}function Oe(){P=!1,j()}function Ee(e){C=e.target,P=!0,j()}function Ze(){P=!1,j()}function Ce(){P=!1,j()}function qe(){if(s.O.isPlayingVideo()){_.Z.disableFullscreen(),clearTimeout(q);var t=I;e.removeEventListener("viewbeforehide",qe),ue(),s.O.stop(t)}}_.Z.enableFullscreen();var Ie,Me=this,Fe=[],De=0,Be=0,Re=0,He=0,Ae=0,Ne=e.querySelector(".osdVolumeSlider"),Ke=e.querySelector(".osdVolumeSliderContainer"),_e=e.querySelector(".osdPositionSlider"),Ve=e.querySelector(".osdPositionText"),ze=e.querySelector(".osdDurationText"),Ue=e.querySelector(".startTimeText"),je=e.querySelector(".endTimeText"),We=e.querySelector(".endsAtText"),Ge=e.querySelector(".btnRewind"),$e=e.querySelector(".btnFastForward"),Xe=c.ZP.whichTransitionEvent(),Ye=document.querySelector(".skinHeader"),Je=e.querySelector(".videoOsdBottom-maincontrols");_e.enableKeyboardDragging(),Ne.enableKeyboardDragging(),y.Z.tv&&_e.classList.add("focusable"),e.addEventListener("viewbeforeshow",(function(){Ye.classList.add("osdHeader"),X.appRouter.setTransparency("full")})),e.addEventListener("viewshow",(function(){try{v.Events.on(s.O,"playerchange",Q),ce(s.O.getCurrentPlayer()),c.ZP.addEventListener(document,window.PointerEvent?"pointermove":"mousemove",W,{passive:!0}),x(),u.default.on(window,G),document.addEventListener("keydown",Pe),c.ZP.addEventListener(document,"keydown",xe,{capture:!0,passive:!0}),c.ZP.addEventListener(window,window.PointerEvent?"pointerdown":"mousedown",Le,{capture:!0,passive:!0}),c.ZP.addEventListener(window,window.PointerEvent?"pointerup":"mouseup",Oe,{capture:!0,passive:!0}),c.ZP.addEventListener(window,"touchstart",Ee,{capture:!0,passive:!0}),["touchend","touchcancel"].forEach((function(e){c.ZP.addEventListener(window,e,Ze,{capture:!0,passive:!0})})),c.ZP.addEventListener(window,"dragend",Ce,{capture:!0,passive:!0}),(l.Z.firefox||l.Z.edge)&&c.ZP.addEventListener(document,"click",Te,{capture:!0})}catch(e){X.appRouter.goHome()}})),e.addEventListener("viewbeforehide",(function(){N&&N.enabled(!1),document.removeEventListener("keydown",Pe),c.ZP.removeEventListener(document,"keydown",xe,{capture:!0,passive:!0}),c.ZP.removeEventListener(window,window.PointerEvent?"pointerdown":"mousedown",Le,{capture:!0,passive:!0}),c.ZP.removeEventListener(window,window.PointerEvent?"pointerup":"mouseup",Oe,{capture:!0,passive:!0}),c.ZP.removeEventListener(window,"touchstart",Ee,{capture:!0,passive:!0}),["touchend","touchcancel"].forEach((function(e){c.ZP.removeEventListener(window,e,Ze,{capture:!0,passive:!0})})),c.ZP.removeEventListener(window,"dragend",Ce,{capture:!0,passive:!0}),(l.Z.firefox||l.Z.edge)&&c.ZP.removeEventListener(document,"click",Te,{capture:!0}),O(),Ye.classList.remove("osdHeader"),Ye.classList.remove("osdHeader-hidden"),c.ZP.removeEventListener(document,window.PointerEvent?"pointermove":"mousemove",W,{passive:!0}),u.default.off(window,G),v.Events.off(s.O,"playerchange",Q),ue()})),e.querySelector(".btnFullscreen").addEventListener("click",(function(){s.O.toggleFullscreen(I)})),e.querySelector(".btnPip").addEventListener("click",(function(){s.O.togglePictureInPicture(I)})),e.querySelector(".btnAirPlay").addEventListener("click",(function(){s.O.toggleAirPlay(I)})),e.querySelector(".btnVideoOsdSettings").addEventListener("click",(function(){var e=this;n.e(4268).then(n.bind(n,84268)).then((function(t){var n=I;if(n){var i,a=s.O.getPlayerState(n),r=s.O.supportSubtitleOffset(n)&&s.O.canHandleOffsetOnCurrentSubtitle(n);t.show({mediaType:"Video",player:n,positionTo:e,quality:null===(i=a.MediaSource)||void 0===i?void 0:i.SupportsTranscoding,stats:!0,suboffset:r,onOption:ge}).finally((function(){j()})),setTimeout(j,0)}}))})),e.addEventListener("viewhide",(function(){Ye.classList.remove("hide")})),e.addEventListener("viewdestroy",(function(){Me.touchHelper&&(Me.touchHelper.destroy(),Me.touchHelper=null),R&&(R.destroy(),R=null),we(),Se()}));var Qe=0;c.ZP.addEventListener(e,window.PointerEvent?"pointerdown":"click",(function(e){if(c.ZP.parentWithClass(e.target,["videoOsdBottom","upNextContainer"]))x();else{var t=e.pointerType||(y.Z.mobile?"touch":"mouse"),n=(new Date).getTime();switch(t){case"touch":n-Qe>300&&(Qe=n,"osd"===A?L():A||x());break;case"mouse":e.button||(q?(clearTimeout(q),q=0):q=setTimeout((function(){s.O.playPause(I),x(),q=0}),300));break;default:s.O.playPause(I),x()}}}),{passive:!0}),c.ZP.addEventListener(e,"dblclick",(function(t){t.target===e&&s.O.toggleFullscreen(I)})),e.querySelector(".buttonMute").addEventListener("click",(function(){s.O.toggleMute(I)})),Ne.addEventListener("input",(function(e){s.O.setVolume(e.target.value,I)})),_e.addEventListener("change",(function(){var e=I;if(e){var t=parseFloat(this.value);if(H){var n=t/100*(He-Re)*1e4;n+=1e4*Re,n-=Ae,s.O.seek(n,e)}else s.O.seekPercent(t,e)}})),_e.getBubbleHtml=function(e){if(x(),H){if(Re&&He){var t=He-Re;return t/=100,t*=e,t+=Re,'<h1 class="sliderBubbleText">'+S(new Date(parseInt(t)),!0)+"</h1>"}return"--:--"}if(!De)return"--:--";var n=De;n/=100,n*=e;var i=B;if(i&&i.Chapters&&i.Chapters.length&&i.Chapters[0].ImageTag){var r=function(e,t,n,i){for(var r,s=-1,o=0,l=n.length;o<l;o++){var c=n[o];i>=c.StartPositionTicks&&(r=c,s=o)}if(!r)return null;var u=function(e,t,n,i,a){return t.ImageTag?a.getScaledImageUrl(e.Id,{maxWidth:400,tag:t.ImageTag,type:"Chapter",index:n}):null}(t,r,s,0,e);if(u){var d='<div class="chapterThumbContainer">';return d+='<img class="chapterThumb" src="'+u+'" />',d+='<div class="chapterThumbTextContainer">',d+='<div class="chapterThumbText chapterThumbText-dim">',d+=a()(r.Name),d+="</div>",d+='<h2 class="chapterThumbText">',d+=f.ZP.getDisplayRunningTime(i),d+="</h2>",(d+="</div>")+"</div>"}return null}(K.Z.getApiClient(i.ServerId),i,i.Chapters,n);if(r)return r}return'<h1 class="sliderBubbleText">'+f.ZP.getDisplayRunningTime(n)+"</h1>"},e.querySelector(".btnPreviousTrack").addEventListener("click",(function(){s.O.previousTrack(I)})),e.querySelector(".btnPreviousChapter").addEventListener("click",(function(){s.O.previousChapter(I)})),e.querySelector(".btnPause").addEventListener("click",(function(){s.O.playPause(I)})),e.querySelector(".btnNextChapter").addEventListener("click",(function(){s.O.nextChapter(I)})),e.querySelector(".btnNextTrack").addEventListener("click",(function(){s.O.nextTrack(I)})),Ge.addEventListener("click",(function(){s.O.rewind(I)})),$e.addEventListener("click",(function(){s.O.fastForward(I)})),e.querySelector(".btnAudio").addEventListener("click",(function(){var e=I,t=s.O.audioTracks(e),i=s.O.getAudioStreamIndex(e),a=t.map((function(e){var t={name:e.DisplayTitle,id:e.Index};return e.Index===i&&(t.selected=!0),t})),r=this;Promise.resolve().then(n.bind(n,78407)).then((function(t){t.default.show({items:a,title:h.ZP.translate("Audio"),positionTo:r}).then((function(t){var n=parseInt(t);n!==i&&s.O.setAudioStreamIndex(n,e)})).finally((function(){j()})),setTimeout(j,0)}))})),e.querySelector(".btnSubtitles").addEventListener("click",(function(){var e=I,t=s.O.subtitleTracks(e),i=s.O.getSubtitleStreamIndex(e);null==i&&(i=-1),t.unshift({Index:-1,DisplayTitle:h.ZP.translate("Off")});var a=t.map((function(e){var t={name:e.DisplayTitle,id:e.Index};return e.Index===i&&(t.selected=!0),t})),r=this;Promise.resolve().then(n.bind(n,78407)).then((function(t){t.default.show({title:h.ZP.translate("Subtitles"),items:a,positionTo:r}).then((function(t){var n=parseInt(t);n!==i&&s.O.setSubtitleStreamIndex(n,e),ke()})).finally((function(){j()})),setTimeout(j,0)}))}));var et=function(t){var n="",i="",a="oneShotPulse",r=1500,s=e.querySelector("#syncPlayIcon");switch(t){case"schedule-play":n="sync spin",i="play_arrow centered",a="infinitePulse",r=-1,L();break;case"unpause":n="play_circle_outline";break;case"pause":n="pause_circle_outline",x();break;case"seek":n="update",a="infinitePulse",r=-1;break;case"buffering":n="schedule",a="infinitePulse",r=-1;break;case"wait-pause":n="schedule",i="pause shifted",a="infinitePulse",r=-1;break;case"wait-unpause":n="schedule",i="play_arrow shifted",a="infinitePulse",r=-1;break;default:return void(s.style.visibility="hidden")}s.setAttribute("class","syncPlayIconCircle "+a),s.querySelector(".primary-icon").setAttribute("class","primary-icon material-icons "+n),s.querySelector(".secondary-icon").setAttribute("class","secondary-icon material-icons "+i);var o=s.cloneNode(!0);o.style.visibility="visible",s.parentNode.replaceChild(o,s),r<0||setTimeout((function(){o.style.visibility="hidden"}),r)};v.Events.on(o.Z.Manager,"enabled",(function(t,n){n||(e.querySelector("#syncPlayIcon").style.visibility="hidden")})),v.Events.on(o.Z.Manager,"notify-osd",(function(e,t){et(t)})),v.Events.on(o.Z.Manager,"group-state-update",(function(e,t,n){"Playing"===t&&"Unpause"===n||"Playing"===t&&"Ready"===n?et("schedule-play"):"Paused"===t&&"Pause"===n?et("pause"):"Paused"===t&&"Ready"===n?et("clear"):"Waiting"===t&&"Seek"===n?et("seek"):"Waiting"===t&&"Buffer"===n?et("buffering"):"Waiting"===t&&"Pause"===n?et("wait-pause"):"Waiting"===t&&"Unpause"===n&&et("wait-unpause")}))}},79993:function(e,t,n){var i=n(54933),a=n.n(i),r=n(93476),s=n.n(r)()(a());s.push([e.id,".chapterThumbTextContainer,.videoOsdBottom{user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.videoOsdBottom{-webkit-touch-callout:none;background:linear-gradient(0deg,hsla(0,0%,6%,.75),hsla(0,0%,6%,0));bottom:0;color:#fff;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:center;justify-content:center;left:0;padding-bottom:1.75em;padding-top:7.5em;pointer-events:none;position:fixed;right:0;transition:opacity .3s ease-out;-webkit-user-select:none;-ms-user-select:none;user-select:none;will-change:opacity}.skinHeader-withBackground.osdHeader{-webkit-backdrop-filter:none;backdrop-filter:none;background:linear-gradient(180deg,hsla(0,0%,6%,.75),hsla(0,0%,6%,0));color:#eee;height:7.5em;pointer-events:none;position:relative;transition:opacity .3s ease-out;z-index:1}.osdHeader-hidden{opacity:0}.osdHeader .headerTop{max-height:3.5em;pointer-events:all}.osdHeader .headerButton:not(.headerBackButton):not(.headerCastButton):not(.headerSyncButton){display:none}.chapterThumbContainer{box-shadow:0 0 1.9vh #000;-webkit-flex-grow:1;flex-grow:1;position:relative}.chapterThumb{background-position:50%;background-repeat:no-repeat;background-size:contain;border:0;height:20vh;min-width:20vh}@media (orientation:portrait){.chapterThumb{height:30vw;min-width:30vw}}@media (max-height:50em)and (orientation:landscape){.chapterThumb{height:30vh;min-width:30vh}}.chapterThumbTextContainer{background:rgba(0,0,0,.7);bottom:0;left:0;padding:.25em .5em;position:absolute;right:0;-webkit-user-select:none;-ms-user-select:none;user-select:none}.chapterThumbText{margin:0;opacity:1;padding:.25em 0}.chapterThumbText-dim{opacity:.6}.videoOsdBottom-hidden{opacity:0}.osdControls{-webkit-flex-grow:1;flex-grow:1;padding:0 .8em;pointer-events:all}.layout-desktop .osdControls{max-width:175vh}.videoOsdBottom .buttons{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:.25em 0 0}.osdVolumeSliderContainer{-webkit-flex-grow:1;flex-grow:1;width:9em}.osdMediaInfo,.volumeButtons{-webkit-box-align:center;display:flex}.osdMediaInfo,.volumeButtons{-webkit-align-items:center;align-items:center;display:-webkit-flex}.volumeButtons{display:flex;margin:0 1em 0 .29em}.osdTimeText{margin-left:1em;margin-right:auto;-webkit-user-select:none;-ms-user-select:none;user-select:none}.osdTitle,.osdTitleSmall{margin:0 1em 0 0}.osdMediaInfo{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}.osdSecondaryMediaInfo{padding-left:.6em!important}.osdTextContainer{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;margin-bottom:.7em;padding-left:.5em;-webkit-user-select:none;-ms-user-select:none;user-select:none}.osdMainTextContainer{-webkit-align-items:baseline;align-items:baseline}.osdMediaStatus{margin-left:auto}@-webkit-keyframes spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.osdMediaStatus .animate{-webkit-animation:spin 4s linear infinite;animation:spin 4s linear infinite}@media (max-width:30em){.osdMediaInfo,.osdPoster{display:none!important}}@media (max-width:33.75em){.videoOsdBottom .paper-icon-button-light{margin:0}}@media (max-width:43em){.osdMediaStatus span,.videoOsdBottom .volumeButtons{display:none!important}}@media (max-width:50em){.videoOsdBottom .btnFastForward,.videoOsdBottom .btnRewind{display:none!important}}@media (max-width:75em){.videoOsdBottom .endsAtText{display:none!important}}.syncPlayContainer{-webkit-align-items:center;align-items:center;bottom:0;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;left:0;pointer-events:none;position:absolute;right:0;top:0}.primary-icon{-webkit-align-self:center;align-self:center;font-size:64px;position:absolute}.primary-icon.spin{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite;font-size:76px!important}.secondary-icon{font-size:24px;position:absolute}.secondary-icon.centered{-webkit-align-self:center;align-self:center;font-size:28px!important}.secondary-icon.shifted{bottom:0;font-size:52px;right:0}.syncPlayIconCircle{background:rgba(0,164,220,0);border-radius:50%;box-shadow:0 0 0 0 rgba(0,164,220,0);color:rgba(0,164,220,0);display:-webkit-flex;display:flex;height:96px;-webkit-justify-content:center;justify-content:center;margin:60px;position:relative;-webkit-transform:scale(1);transform:scale(1);visibility:hidden;width:96px}.syncPlayIconCircle.oneShotPulse{-webkit-animation:pulse 1.5s 1;animation:pulse 1.5s 1}.syncPlayIconCircle.infinitePulse{-webkit-animation:infinite-pulse 1.5s infinite;animation:infinite-pulse 1.5s infinite}@-webkit-keyframes pulse{0%{background:rgba(0,164,220,.3);box-shadow:0 0 0 0 rgba(0,164,220,.3);color:rgba(0,164,220,.7);-webkit-transform:scale(.95);transform:scale(.95)}70%{background:rgba(0,164,220,0);box-shadow:0 0 0 60px rgba(0,164,220,0);color:rgba(0,164,220,0);-webkit-transform:scale(1);transform:scale(1)}to{background:rgba(0,164,220,0);box-shadow:0 0 0 0 rgba(0,164,220,0);color:rgba(0,164,220,0);-webkit-transform:scale(.95);transform:scale(.95)}}@keyframes pulse{0%{background:rgba(0,164,220,.3);box-shadow:0 0 0 0 rgba(0,164,220,.3);color:rgba(0,164,220,.7);-webkit-transform:scale(.95);transform:scale(.95)}70%{background:rgba(0,164,220,0);box-shadow:0 0 0 60px rgba(0,164,220,0);color:rgba(0,164,220,0);-webkit-transform:scale(1);transform:scale(1)}to{background:rgba(0,164,220,0);box-shadow:0 0 0 0 rgba(0,164,220,0);color:rgba(0,164,220,0);-webkit-transform:scale(.95);transform:scale(.95)}}@-webkit-keyframes infinite-pulse{0%{background:rgba(0,164,220,.3);box-shadow:0 0 0 0 rgba(0,164,220,.3);color:rgba(0,164,220,.7);-webkit-transform:scale(.95);transform:scale(.95)}70%{background:rgba(0,164,220,0);box-shadow:0 0 0 60px rgba(0,164,220,0);color:rgba(0,164,220,.6);-webkit-transform:scale(1);transform:scale(1)}to{background:rgba(0,164,220,.3);box-shadow:0 0 0 0 rgba(0,164,220,0);color:rgba(0,164,220,.7);-webkit-transform:scale(.95);transform:scale(.95)}}@keyframes infinite-pulse{0%{background:rgba(0,164,220,.3);box-shadow:0 0 0 0 rgba(0,164,220,.3);color:rgba(0,164,220,.7);-webkit-transform:scale(.95);transform:scale(.95)}70%{background:rgba(0,164,220,0);box-shadow:0 0 0 60px rgba(0,164,220,0);color:rgba(0,164,220,.6);-webkit-transform:scale(1);transform:scale(1)}to{background:rgba(0,164,220,.3);box-shadow:0 0 0 0 rgba(0,164,220,0);color:rgba(0,164,220,.7);-webkit-transform:scale(.95);transform:scale(.95)}}@keyframes spin{to{-webkit-transform:rotate(-1turn);transform:rotate(-1turn)}}",""]),t.Z=s},34988:function(e,t,n){var i=n(54933),a=n.n(i),r=n(93476),s=n.n(r)()(a());s.push([e.id,".subtitleSync{position:absolute;width:100%}.subtitleSyncContainer{background:rgba(28,28,28,.8);border-radius:.3em;color:#fff;height:4.2em;margin-left:auto;margin-right:auto;min-width:18em;position:relative;width:40%}.subtitleSync-closeButton{color:#ccc;position:absolute;right:0;top:0;z-index:2}.subtitleSyncTextField{color:#fff;font-size:20px;left:0;margin-left:30%;margin-right:30%;position:absolute;text-align:center;top:.1em;width:40%;z-index:2}#prompt{-webkit-flex-shrink:0;flex-shrink:0}.subtitleSyncSliderContainer{border-radius:.3em;-webkit-flex-grow:1;flex-grow:1;height:1.4em;margin-left:1%;margin-right:1%;top:2.5em;width:98%;z-index:1}",""]),t.Z=s},25883:function(e,t,n){n.d(t,{Z:function(){return g}});var i=n(80369),a=n(97659),r=function(){return a.Z.Date.now()},s=/\s/,o=/^\s+/,l=function(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&s.test(e.charAt(t)););return t}(e)+1).replace(o,""):e},c=n(51934),u=n(18742),d=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,p=/^0o[0-7]+$/i,m=parseInt,b=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||(0,u.Z)(e)&&"[object Symbol]"==(0,c.Z)(e)}(e))return NaN;if((0,i.Z)(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=(0,i.Z)(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=l(e);var n=f.test(e);return n||p.test(e)?m(e.slice(2),n?2:8):d.test(e)?NaN:+e},v=Math.max,h=Math.min,g=function(e,t,n){var a,s,o,l,c,u,d=0,f=!1,p=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=a,i=s;return a=s=void 0,d=t,l=e.apply(i,n)}function y(e){return d=e,c=setTimeout(k,t),f?g(e):l}function w(e){var n=e-u;return void 0===u||n>=t||n<0||p&&e-d>=o}function k(){var e=r();if(w(e))return S(e);c=setTimeout(k,function(e){var n=t-(e-u);return p?h(n,o-(e-d)):n}(e))}function S(e){return c=void 0,m&&a?g(e):(a=s=void 0,l)}function T(){var e=r(),n=w(e);if(a=arguments,s=this,u=e,n){if(void 0===c)return y(u);if(p)return clearTimeout(c),c=setTimeout(k,t),g(u)}return void 0===c&&(c=setTimeout(k,t)),l}return t=b(t)||0,(0,i.Z)(n)&&(f=!!n.leading,o=(p="maxWait"in n)?v(b(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==c&&clearTimeout(c),d=0,a=u=s=c=void 0},T.flush=function(){return void 0===c?l:S(r())},T}}}]);