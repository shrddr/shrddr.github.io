import{_ as c,o as h,c as p,a as o,r as b,F as m,b as e,u as w,d as g,e as y,w as n,t as f,f as t,g as v,p as k,h as K}from"./index.05be4d32.js";const x={},q={class:"q"},j=e(" Q: "),z=e(" A: ");function S(s,u){return h(),p(m,null,[o("div",q,[j,b(s.$slots,"q",{},void 0,!0)]),o("div",null,[z,b(s.$slots,"default",{},void 0,!0)])],64)}const l=c(x,[["render",S],["__scopeId","data-v-02dd3424"]]),C={setup(){return{gameStore:w()}},props:{nodeKey:Number}};function P(s,u,r,d,ba,pa){const _=g("RouterLink");return h(),y(_,{tag:"a",to:{path:"./",hash:"#node"+r.nodeKey}},{default:n(()=>[e(f(d.gameStore.plantzoneName(r.nodeKey)),1)]),_:1},8,["to"])}const a=c(C,[["render",P]]),i=s=>(k("data-v-a8122b7e"),s=s(),K(),s),A={class:"about"},W=i(()=>o("h2",null,"Q&A",-1)),I=e(" What is the purpose of this project? "),M=e(" Optimize your "),B=i(()=>o("a",{href:"https://discord.com/channels/371035077037129729/404532586246045696"},"#worker-empire",-1)),H=e(" to bring more silver. "),E=e(" How to use? "),U=e(" First of all go to "),$=i(()=>o("strong",{class:"notranslate"},"Settings",-1)),L=e(", select your server and tax. After that, two options are available: "),T=i(()=>o("li",null,[e("Quick and simple: do nothing and just look at "),o("strong",{class:"notranslate"},"Plantzones"),e(" page - nodes at the top are good, nodes at the bottom are bad. Use Plantzones page if just starting out.")],-1)),R=i(()=>o("li",null,[e("Personalized and nuanced: go to "),o("strong",{class:"notranslate"},"Home"),e(" page, select a town, hire a worker, send to whatever node gives highest efficiency, repeat. Use Home page if you want to improve or rework an existing empire.")],-1)),V=e(" Is there any video or guide? "),N=i(()=>o("a",{href:"https://youtu.be/EknUHU1Lvq0"},"Setup and Usage by Yura",-1)),Y=e(", "),X=i(()=>o("a",{href:"https://youtu.be/sEHK7cX4SIE"},"Best Workers Video by Summer",-1)),D=e(" How do i make an empire optimized for cooking/alchemy? "),F=e(" Only difference is you don't tax cooking/alchemy mats (mark as Keep on "),G=i(()=>o("strong",{class:"notranslate"},"Settings",-1)),O=e(" page). You are still going to be recommended nodes with unwanted mats, just sell the output and use that $ to buy whatever you need. If you want to completely avoid some item put in 0 as its Custom Value. "),Q=e(" What does "),J=i(()=>o("strong",{class:"notranslate"},"+efficiency",-1)),Z=e(" column mean and why is it always negative for me? "),ee=e(" It shows the change in total efficiency (M$/day/CP) of the empire after starting this job with this worker. It being negative is good - means you already own all the best nodes, so remaining nodes reduce the current efficiency. You want to spend all available CP anyway, so just select those that are least negative (= highest in list). "),te=e(" I checked the plantzones page X months ago and it showed best worker is Y and now shows Z, why? "),ae=e(" Because market prices change over time. "),oe=e(" Why are node connections so bad? When building path from town "),ie=i(()=>o("strong",{class:"notranslate"},"A",-1)),ne=e(" to node "),se=i(()=>o("strong",{class:"notranslate"},"B",-1)),le=e(", it ignores the fact that there is already taken node "),de=i(()=>o("strong",{class:"notranslate"},"C",-1)),re=e(" on the way. "),ce=e(" Connections are resolved in same order the jobs were given. The worker who received the job first doesn't know yet about all others, and builds connection in a beeline. Each next worker sees and uses more and more connections made by previous workers in queue. You can push the worker at "),he=i(()=>o("strong",{class:"notranslate"},"B",-1)),ue=e(" to the end of queue by restarting his job in workerman (press "),be=i(()=>o("strong",{class:"notranslate"},"stop",-1)),pe=e(" and assign again). His connection will then be built last, with full knowledge of previous connections including the one that activated "),ge=i(()=>o("strong",{class:"notranslate"},"C",-1)),ve=e(". "),_e=e(" How does the giant bonus work? "),me=e(" https://discord.com/channels/371035077037129729/404532586246045696/1124952052892713062 "),we=e(" Where does the drop data come from and how old? "),ye=e(" 1. Unlucky drops up to Eternal Winter: from an anonymous source somewhere on the internet, timestamped late 2021. I checked ~50 top profit nodes ingame and they matched, so the rest are assumed good."),fe=i(()=>o("br",null,null,-1)),ke=e(" 2. Unlucky drops in Eternal Winter: observed near mid 2022."),Ke=i(()=>o("br",null,null,-1)),xe=e(" 3. Lucky drops across all regions: observed in june 2023."),qe=i(()=>o("br",null,null,-1)),je=e(" 4. Morning Land drops: observed at summer 2023 - regular nodes are fine, excavations are approximate, too rare to judge confidently (see "),ze=i(()=>o("a",{href:"https://discord.com/channels/371035077037129729/404532586246045696/1284834924381212704"},"table",-1)),Se=e(")."),Ce=i(()=>o("br",null,null,-1)),Pe=e(" 5. Seoul drops: observed non-thoroughly in september 2024, when in doubt picked values most similar to existing node drops from (1)."),Ae=i(()=>o("br",null,null,-1)),We=e(" All of the above are adjusted when relevant patchnotes come out (increased yields by X at Y). "),Ie=v('<h2 data-v-a8122b7e>Tips &amp; tricks</h2><ul style="padding-left:16px;" data-v-a8122b7e><li data-v-a8122b7e><details data-v-a8122b7e><summary data-v-a8122b7e>Anywhere you see a right facing triangle, click to expand</summary> after it turns downwards, click again to hide </details></li><li data-v-a8122b7e>Also hover over <abbr class="tooltip" title="water is wet" data-v-a8122b7e>\u2139\uFE0F</abbr>&#39;s and other <abbr class="tooltip" title="roses are blue" data-v-a8122b7e>dot-underlined</abbr> things to see useful info</li><li data-v-a8122b7e>Spend some time on item valuation on Settings page: set <strong class="notranslate" data-v-a8122b7e>Custom</strong> value above market price for bottlenecked stuff, reduce the value for mats you don&#39;t want</li><li data-v-a8122b7e>Home page &gt; <strong class="notranslate" data-v-a8122b7e>Empire</strong> pane has some useful stats. Get rid of <strong class="notranslate" data-v-a8122b7e>Worst Taken</strong> and acquire <strong class="notranslate" data-v-a8122b7e>Best Untaken</strong></li><li data-v-a8122b7e>Use <strong class="notranslate" data-v-a8122b7e>optimize</strong> button inside a working worker&#39;s editor and see what skills to roll to maximize profit, then <strong class="notranslate" data-v-a8122b7e>revert</strong> back</li><ul data-v-a8122b7e><li data-v-a8122b7e>if you&#39;re not max level though, level up with \u{1F815} button first to see what the &quot;endgame&quot; optimal skills are as opposed to currently optimal skills</li><li data-v-a8122b7e>you can also change the type of worker here and the stats will be recalculated as if levelled from scratch with same stat rolls</li></ul><li data-v-a8122b7e>If you have nodes invested for grinding, mark them with <strong class="notranslate" data-v-a8122b7e>zero-cost connection</strong> checkbox - this will make nearby plantzones more desirable</li><ul data-v-a8122b7e><li data-v-a8122b7e>just like with ordinary nodes, order matters - if they don&#39;t want to chain properly, try to reorder (ex: activate Olun before Crypt). Order is shown in <strong class="notranslate" data-v-a8122b7e>Total CP</strong> pane</li><li data-v-a8122b7e>if a zero-cost connects to a wrong town, assign a whole chain of zero-costs along the path you want (usually just 1 dummy halfway is enough)</li></ul><li data-v-a8122b7e>Use <strong class="notranslate" data-v-a8122b7e>import</strong> and <strong class="notranslate" data-v-a8122b7e>export</strong> buttons in <strong class="notranslate" data-v-a8122b7e>All towns/workers list</strong> to: <ul data-v-a8122b7e><li data-v-a8122b7e>compare different builds</li><li data-v-a8122b7e>restore to a known state when messed up</li><li data-v-a8122b7e>share your setup with other people</li><li data-v-a8122b7e>pull actual worker stats from your PC (ty @Aman, @Thell, @Sbreeng, @thirtyeight):</li><ul data-v-a8122b7e><li data-v-a8122b7e>download and install <a href="https://www.python.org/" data-v-a8122b7e>Python</a> 3.9+</li><li data-v-a8122b7e>download the <a href="https://pastebin.com/JahEcXHn" data-v-a8122b7e>Import Script</a>, and run it through Python</li><li data-v-a8122b7e>now head back to Workerman Home page &gt; All towns/workers list &gt; import the json file you just created by running the script</li></ul><li data-v-a8122b7e>warning: if the amount of workers you have ingame is outside the F2P town limits, enter P2W lodging in town config <u data-v-a8122b7e>before</u> importing, otherwise the housing will not resolve</li><li data-v-a8122b7e>note: the script doesn&#39;t really fetch <i data-v-a8122b7e>current</i> jobs, but the jobs associated with ingame &quot;restart job&quot; button of each worker. each restartable worker also has a reset button ingame that clears the cached job.</li></ul></li><li data-v-a8122b7e>Workloads (and therefore profits) depend on <strong class="notranslate" data-v-a8122b7e>Modifiers</strong>. The default value works well for highly contested nodes (they are popular for a reason - you probably want them too). Some niche nodes however can report up to 2x higher profit if you enter their real Modifiers. <ul data-v-a8122b7e><li data-v-a8122b7e>Each green bar ingame does not belong to single resource node, but to a piece of land (aka RegionGroup), which may can contain multiple resource nodes, so they share the modifier</li><li data-v-a8122b7e>If you want to be really meticulous about it, switch to floating modifiers (in Modifiers &gt; Advanced) and track the ingame modifiers change over time. More observations - more accuracy</li><ul data-v-a8122b7e><li data-v-a8122b7e>With floating modifier, daily profit is calculated via the chance of reaching relevant workload breakpoints on each cycle. Detailed view available in edit worker dialog</li><li data-v-a8122b7e>Workloads shown in ~XXX format refer to median (50% chance) value. This is for reference only and is not used in profit calculations, the whole dataset is</li><li data-v-a8122b7e>You can specify to use either constant or floating modifier for each RegionGroup</li></ul></ul></li></ul><h2 data-v-a8122b7e>Changelog</h2><li data-v-a8122b7e>Ctrl+F on Home page searches for items and node names, Esc to remove highlight. Access builtin Chrome search with F3</li><li data-v-a8122b7e>[2024-11-21 patch] updated Yukjo houses to have more lodging</li><li data-v-a8122b7e>worker seals don&#39;t require town storage space anymore</li><li data-v-a8122b7e>[2024-09-12 patch] added Seoul region with 19 nodes and a broken (houseless) town of Bukpo</li><li data-v-a8122b7e>can assign Personal Items in Muzgar &gt; config (do not enter too much, will show <strong data-v-a8122b7e>?</strong> in totals)</li><li data-v-a8122b7e>home &gt; selected plantzone &gt; added &quot;hire+assign&quot; section, which autosuggests best race</li><li data-v-a8122b7e>custom prices import/export</li><li data-v-a8122b7e>workshop tweaks</li><ul data-v-a8122b7e><li data-v-a8122b7e>worker packing skills now improve profit (please review <strong class="notranslate" data-v-a8122b7e>$/cycle</strong> column in \u{1F3ED}Workshops config, probaly needs to be reduced accordingly)</li><li data-v-a8122b7e>skill #1008 (refining) affects crate packing workspeed</li><li data-v-a8122b7e>added intracity distances for workshops (and improved intercity)</li><li data-v-a8122b7e>remote town workshop job requires (creates) a connection</li><li data-v-a8122b7e>Home page &gt; selected town pane has workshop section, sorted by type</li></ul><li data-v-a8122b7e>fixed unexpected lodging redirect when using &quot;send worker to&quot; dialog &gt; stash dropdown set to a remote town</li><li data-v-a8122b7e>added feed calc to Home &gt; Empire &gt; Daily yields (bottom)</li><li data-v-a8122b7e>map: added a setting to hide all inactive elements</li><li data-v-a8122b7e>if any of jobs originating in a town has negative income, this town lodgage costs will be split between jobs equally (not proportionally)</li><li data-v-a8122b7e>allowed storage use at oquilla, asparkan, velandir, muzgar (muzgar is also slightly upgradeable)</li><li data-v-a8122b7e>updated all trace plantzones to output same amount of item 5960</li><li data-v-a8122b7e>updated sack 1024 to contain 1x item 5205 and sack 1026 to contain 1x item 5960</li><li data-v-a8122b7e>changed plantzone 1560 to use Lumbering lucky drops despite having Gathering icon, tweaked a couple of trace droprates</li><li data-v-a8122b7e>[2023-05-31 patch] new luck drops (current version: 13 aka the final one. data collection stopped)</li><ul data-v-a8122b7e><li data-v-a8122b7e>all nodes of kind 4 (plant growing): all luck drops replaced with 0.3x item 1024</li><li data-v-a8122b7e>all nodes of kind 6 (plant gathering): all luck drops replaced with 0.13x item 1024</li><li data-v-a8122b7e>all nodes of kind 7 (mining): all luck drops replaced with 3.5x item 1025</li><li data-v-a8122b7e>all nodes of kind 8 (lumbering): all luck drops replaced with 1x item 5005, 0.5x 5006, 0.15x 5007, 2.1x 5008, 1x 5011</li><li data-v-a8122b7e>all nodes of kind 11 (dried fish): all luck drops replaced with 0.17x item 1027, 0.77x 6501</li><li data-v-a8122b7e>all nodes of kind 15 (excavation): all luck drops replaced with 4x item 1026</li><li data-v-a8122b7e>nodes 1675, 1677, 1776: unlucky drop increased to 8 (not mentioned in patch notes, maybe happened on an earlier date)</li><li data-v-a8122b7e>nodes 1565, 1779: added 2x luck procs</li></ul><li data-v-a8122b7e>added TW language</li><li data-v-a8122b7e>Plantzones page &gt; added town filter</li><li data-v-a8122b7e>[2024-01-31 patch] extended Ulukita region (still 0 plantzones)</li><li data-v-a8122b7e>added JP language</li>',26),Me=e("[2023-11-08 patch] replaced junk yields with ores at "),Be=i(()=>o("summary",null,"10 excavation nodes. yields are approximate",-1)),He=e(", "),Ee=e(", "),Ue=e(", "),$e=e(", "),Le=e(", "),Te=e(", "),Re=e(", "),Ve=e(", "),Ne=e(", "),Ye=e("[2023-11-08 patch] increased lumbering byproducts yields by set multipliers at "),Xe=i(()=>o("summary",null,"17 lumbering nodes",-1)),De=e(", "),Fe=e(", "),Ge=e(", "),Oe=e(", "),Qe=e(", "),Je=e(", "),Ze=e(", "),et=e(", "),tt=e(", "),at=e(", "),ot=e(", "),it=e(", "),nt=e(", "),st=e(", "),lt=e(", "),dt=e(", "),rt=i(()=>o("li",null,"[2023-11-01 patch] increased all trace yields",-1)),ct=i(()=>o("summary",null,"Main continent: x2",-1)),ht=e(", "),ut=e(", "),bt=e(", "),pt=e(", "),gt=e(", "),vt=e(", "),_t=e(", "),mt=e(", "),wt=e(", "),yt=e(", "),ft=e(", "),kt=e(", "),Kt=e(", "),xt=e(", "),qt=e(", "),jt=i(()=>o("summary",null,"Morning land: x5",-1)),zt=e(", "),St=e(", "),Ct=e(", "),Pt=e(", "),At=i(()=>o("li",null,"[2023-11-01 patch] increased all sap yields",-1)),Wt=i(()=>o("summary",null,"Maple & Pine Sap: x1.5",-1)),It=e(", "),Mt=e(", "),Bt=e(", "),Ht=i(()=>o("summary",null,"Snowfield Cedar Sap: x5",-1)),Et=e(", "),Ut=i(()=>o("summary",null,"Other Sap: x2",-1)),$t=e(", "),Lt=e(", "),Tt=e(", "),Rt=e(", "),Vt=e(", "),Nt=e(", "),Yt=e(", "),Xt=e(", "),Dt=e(", "),Ft=e(", "),Gt=e(", "),Ot=e(", "),Qt=e(", "),Jt=e(", "),Zt=e(", "),ea=e(", "),ta=e(", "),aa=e(", "),oa=e(", "),ia=e(", "),na=v('<li data-v-a8122b7e>implemented manual output redirection (available at any worker level for easier prototyping)</li><li data-v-a8122b7e>added separate VP setting to add 16 P2W slots to every town</li><li data-v-a8122b7e>[2023-08-23 patch] added new Ulukita region with 0 plantzones</li><li data-v-a8122b7e>added KR language</li><li data-v-a8122b7e>[2023-03-10 patch] item 4206 yields tripled at 3 plantzones</li><li data-v-a8122b7e>housing config &gt; items are now sorted exactly as ingame</li><li data-v-a8122b7e>home page &gt; added worker icon, level, and optional stat rank (also always shown in editor)</li><li data-v-a8122b7e>added lodgage costs to Empire &gt; Best Untaken</li><li data-v-a8122b7e>skip unknown (event?) plantzone jobs when importing - will display as an idle worker instead</li><li data-v-a8122b7e>Empire &gt; Best Untaken selects best species automatically</li><li data-v-a8122b7e>[2023-06-05 patch] added node 1833</li><li data-v-a8122b7e>[2023-05-31 patch] big rework</li><ul data-v-a8122b7e><li data-v-a8122b7e>level cap 40, +2 skill slots</li><li data-v-a8122b7e>humans got +3 luck</li><li data-v-a8122b7e>giants got +68.4% yield of <s data-v-a8122b7e>all</s> all unlucky drops, rounded down</li></ul><li data-v-a8122b7e>fixed warehouse slot calculations to require lucky items too + 1 slot required to be free</li><li data-v-a8122b7e>[2023-06-14 patch] added LotML region with 24 nodes</li><li data-v-a8122b7e>in darkmode, buttons are now actually dark</li><li data-v-a8122b7e>[2023-05-31 patch] added sack items with auto-calculated prices</li><ul data-v-a8122b7e><li data-v-a8122b7e>item 1024 = equal chance of 1x any fruit</li><li data-v-a8122b7e>item 1025 = equal chance of 1x any gem</li><li data-v-a8122b7e>item 1026 = equal chance of 1x any trace</li><li data-v-a8122b7e>item 1027 = equal chance of 1x any coral</li></ul><li data-v-a8122b7e>you don&#39;t buy houses anymore, optimal lodging &amp; storage provided automatically</li><ul data-v-a8122b7e><li data-v-a8122b7e>check town <strong class="notranslate" data-v-a8122b7e>config</strong> to see which houses to buy</li><li data-v-a8122b7e>be careful to not exceed the town limits, profits will show <strong class="notranslate" data-v-a8122b7e>NaN</strong>&#39;s and <strong class="notranslate" data-v-a8122b7e>?</strong>&#39;s if you do, and whole town marked red in town list</li><li data-v-a8122b7e>for easier prototyping, idle workers do not consume lodging</li></ul><li data-v-a8122b7e>[2023-05-03 patch] reduced 10 fences cost to 80 CP</li><li data-v-a8122b7e>reimplemented workshop jobs to stay after worker reimport</li><ul data-v-a8122b7e><li data-v-a8122b7e>each house can be set up in <strong class="notranslate" data-v-a8122b7e>Settings &gt; Workshops config</strong> and stored separately from worker data</li><li data-v-a8122b7e>previously assigned <strong class="notranslate" data-v-a8122b7e>\u{1F3ED}Workshop</strong> jobs have been converted into <strong class="notranslate" data-v-a8122b7e>\u270D\uFE0FCustom</strong> jobs</li></ul><li data-v-a8122b7e>on town/node click, map pans to its location</li><li data-v-a8122b7e>removed 13 nodes that are invisible ingame</li><li data-v-a8122b7e>added a ranking of untaken nodes in Empire pane</li><li data-v-a8122b7e>[2023-02-21 patch] updated node CP costs</li><li data-v-a8122b7e>job efficiency now includes lodging cost: eff = income / (connectionCost + lodgingCost)</li><ul data-v-a8122b7e><li data-v-a8122b7e>lodging costs are shared proportionally to job income values, same way as connections</li></ul><li data-v-a8122b7e>added more worker types + seamless transition between</li><li data-v-a8122b7e>can specify a zero-cost connection in node properties (when invested for droprate)</li><li data-v-a8122b7e>individual plantzone efficiency via cashflow</li><ul data-v-a8122b7e><li data-v-a8122b7e>ex: if a connection node is simultaneously used by a 4M$/day job and a 1M$/day job, they own it in 80/20 fashion</li></ul><li data-v-a8122b7e>added farming and workshop job types in Send Worker dialog</li><li data-v-a8122b7e>/plantzones page tweaks</li><ul data-v-a8122b7e><li data-v-a8122b7e>node name link navigates to its map location (upd: with permalinks)</li><li data-v-a8122b7e>item link navigates to its settings price row</li><li data-v-a8122b7e>shows item names to allow in-browser search</li><li data-v-a8122b7e>selects nearest town by CP instead of distance</li></ul><li data-v-a8122b7e>removed Blue Maned Lion&#39;s Manor</li><li data-v-a8122b7e>~floating modifiers support</li><li data-v-a8122b7e>selecting a node highlights connection path</li><li data-v-a8122b7e>worker job assignment moves to the end of connection queue</li><li data-v-a8122b7e>worker editor: added button to suggest best skills for current job</li><li data-v-a8122b7e>map: color active/inactive links</li><li data-v-a8122b7e>updated connection algorithm to encourage existing paths reuse</li><li data-v-a8122b7e>[2022-10-26 patch] updated house CP costs</li><li data-v-a8122b7e>worker revert button, plantzone luck effect indicator</li><li data-v-a8122b7e>configurable default worker for hire</li><li data-v-a8122b7e>send worker dialog: show worker stats</li><li data-v-a8122b7e>worker editor: when on job, show profit changes while editing</li><li data-v-a8122b7e>node info: show/edit the workload modifier</li><li data-v-a8122b7e>Ancado lodging now requires other town connection (nearest chosen automatically)</li><li data-v-a8122b7e>added nodes 911..914 &amp; 1604 (ty @Ayashi)</li><li data-v-a8122b7e>added total daily items summary</li><li data-v-a8122b7e>added workers+lodging import/export to json file</li><li data-v-a8122b7e>[2022-09-21 patch] updated several node distances</li><li data-v-a8122b7e>added worker management</li><li data-v-a8122b7e>combined repeated items in node 1035 (ty @Yazel)</li><li data-v-a8122b7e>[2022-08-31 patch] modified nodes 463 &amp; 487 for lucky drop 5422 instead of 5402</li><h2 data-v-a8122b7e>Todo</h2><li data-v-a8122b7e>[2024-11-21 patch] palace stuff maybe</li><li data-v-a8122b7e>add &quot;max P2W&quot; button to set all worker slots / storage space to max pearlable</li><li data-v-a8122b7e>worker ranks are in linear stat space, shows 98.55 giant as 56% rank when actually it is top 90% in &quot;chance of achieving&quot; space</li><li data-v-a8122b7e>for some reason mousemove while hovering a node triggers continuous recalculations</li><li data-v-a8122b7e>empire &gt; best untaken &gt; automatically try alternative stashes</li><li data-v-a8122b7e>change (again) the job resource sharing principle when negative profit jobs are involved</li><ul data-v-a8122b7e><li data-v-a8122b7e>when positive profit jobs A, B and negative profit jobs C, D are sharing the same resource, A and B should split half of the resource proprtionally to their profits, while C and D should split the remaining half of the resource equally </li></ul><li data-v-a8122b7e>more pronounced warning when unable to resolve housing</li><li data-v-a8122b7e>home &gt; on inactive plantzone hover show the profit estimate (with optimal worker from optimal town?)</li><li data-v-a8122b7e>need to rethink default &quot;random art gob&quot; hire since gobs are not BiS anymore</li><ul data-v-a8122b7e><li data-v-a8122b7e>a quick popup would be nice right after clicking <strong data-v-a8122b7e>hire</strong> asking \u{1F47A} or \u{1F422}</li><li data-v-a8122b7e>need to get a list of hireables per town to hire town-specific kind of \u{1F47A}</li><ul data-v-a8122b7e><li data-v-a8122b7e>investigate via worker registration items (id 64000+)</li></ul></ul><li data-v-a8122b7e>totals &gt; split out personal items storage CP</li><ul data-v-a8122b7e><li data-v-a8122b7e>make multiple queries to housecraft and compare</li></ul><li data-v-a8122b7e>handle lodging/storage in steps (like in AstroAllano&#39;s sheet) instead of linear sharing</li><ul data-v-a8122b7e><li data-v-a8122b7e>same idea with connections</li></ul><li data-v-a8122b7e>worker editor &gt; hide charkeys not hireable in current town</li><li data-v-a8122b7e>smart worker\u2194job rearrangement within a town</li><ul data-v-a8122b7e><li data-v-a8122b7e>take both innate stat, current skills and potential reroll prospects into account</li></ul><li data-v-a8122b7e>on first run, pick server using geoip</li><li data-v-a8122b7e>some of morningland workers&#39; levelup stats still unknown, using values from older regions</li><li data-v-a8122b7e>[2023-05-31 patch]</li><ul data-v-a8122b7e><li data-v-a8122b7e>implement species-restricted plantzones and workshops</li></ul><li data-v-a8122b7e>when exporting/importing, show what exactly is being -ported (maybe even choose?)</li><li data-v-a8122b7e>show real house positions in housecraft viewer</li><li data-v-a8122b7e>when optimizing skills, try to keep new skill of same type at same position as old one</li><ul data-v-a8122b7e><li data-v-a8122b7e>don&#39;t optimize +2 wspd into +2 wspd with no benefit</li></ul><li data-v-a8122b7e>find a consistent fast way to build optimal connections (orderless)</li><li data-v-a8122b7e>add lodgage support to workshop system</li><li data-v-a8122b7e>on item icon hover: show name and price</li><li data-v-a8122b7e>workerlist: show drops instead of pzname</li><li data-v-a8122b7e>grade towns/workers graphically with bar charts</li><li data-v-a8122b7e>map tweaks <ul data-v-a8122b7e><li data-v-a8122b7e>node hover: highlight potential path to town</li><li data-v-a8122b7e>save zoom too in addition to pos</li><li data-v-a8122b7e>deal with missing tiles</li></ul></li><li data-v-a8122b7e>profit calculation: include feed cost</li><li data-v-a8122b7e>map: optionally show RegionGroups</li><li data-v-a8122b7e>unify job description strings - node 1565 shold says &quot;silk production&quot; like ingame workerlist</li><li data-v-a8122b7e>introduce skill roll chances somehow</li><ul data-v-a8122b7e><li data-v-a8122b7e>help decide which skills should and should not be rerolled?</li><li data-v-a8122b7e>ex: for existing worker skill, show if it&#39;s going to get better or worse after 5 rerolls</li></ul><li data-v-a8122b7e>detect unsellable items using current market offers divided by lifetime volume</li><ul data-v-a8122b7e><li data-v-a8122b7e>different items have different lifetime though</li></ul><li data-v-a8122b7e>detect and apply price floors and ceilings (\xB17.5%)</li><li data-v-a8122b7e>show market fetch timestamp</li><h2 data-v-a8122b7e>Misc</h2>',100),sa=e("House Usage"),la=e("HouseCraft Viewer"),da=e("Droprates"),ra=e("Router Tests"),ca=e("Region Map"),ha=e("All Towns Lodging (deprecated)"),ua={__name:"AboutView",setup(s){return(u,r)=>{const d=g("RouterLink");return h(),p("div",A,[W,t(l,null,{q:n(()=>[I]),default:n(()=>[M,B,H]),_:1}),t(l,null,{q:n(()=>[E]),default:n(()=>[U,$,L,T,R]),_:1}),t(l,null,{q:n(()=>[V]),default:n(()=>[N,Y,X]),_:1}),t(l,null,{q:n(()=>[D]),default:n(()=>[F,G,O]),_:1}),t(l,null,{q:n(()=>[Q,J,Z]),default:n(()=>[ee]),_:1}),t(l,null,{q:n(()=>[te]),default:n(()=>[ae]),_:1}),t(l,null,{q:n(()=>[oe,ie,ne,se,le,de,re]),default:n(()=>[ce,he,ue,be,pe,ge,ve]),_:1}),t(l,null,{q:n(()=>[_e]),default:n(()=>[me]),_:1}),t(l,null,{q:n(()=>[we]),default:n(()=>[ye,fe,ke,Ke,xe,qe,je,ze,Se,Ce,Pe,Ae,We]),_:1}),Ie,o("li",null,[Me,o("details",null,[Be,t(a,{nodeKey:144}),He,t(a,{nodeKey:480}),Ee,t(a,{nodeKey:488}),Ue,t(a,{nodeKey:842}),$e,t(a,{nodeKey:902}),Le,t(a,{nodeKey:912}),Te,t(a,{nodeKey:1220}),Re,t(a,{nodeKey:1553}),Ve,t(a,{nodeKey:1687}),Ne,t(a,{nodeKey:1688})])]),o("li",null,[Ye,o("details",null,[Xe,t(a,{nodeKey:142}),De,t(a,{nodeKey:167}),Fe,t(a,{nodeKey:183}),Ge,t(a,{nodeKey:455}),Oe,t(a,{nodeKey:464}),Qe,t(a,{nodeKey:834}),Je,t(a,{nodeKey:855}),Ze,t(a,{nodeKey:905}),et,t(a,{nodeKey:908}),tt,t(a,{nodeKey:952}),at,t(a,{nodeKey:1212}),ot,t(a,{nodeKey:1215}),it,t(a,{nodeKey:1216}),nt,t(a,{nodeKey:1219}),st,t(a,{nodeKey:1777}),lt,t(a,{nodeKey:1820}),dt,t(a,{nodeKey:1821})])]),rt,o("ul",null,[o("li",null,[o("details",null,[ct,t(a,{nodeKey:144}),ht,t(a,{nodeKey:480}),ut,t(a,{nodeKey:488}),bt,t(a,{nodeKey:842}),pt,t(a,{nodeKey:902}),gt,t(a,{nodeKey:912}),vt,t(a,{nodeKey:1220}),_t,t(a,{nodeKey:1553}),mt,t(a,{nodeKey:1637}),wt,t(a,{nodeKey:1687}),yt,t(a,{nodeKey:1688}),ft,t(a,{nodeKey:1709}),kt,t(a,{nodeKey:1716}),Kt,t(a,{nodeKey:1720}),xt,t(a,{nodeKey:1770}),qt,t(a,{nodeKey:1778})])]),o("li",null,[o("details",null,[jt,t(a,{nodeKey:1807}),zt,t(a,{nodeKey:1808}),St,t(a,{nodeKey:1809}),Ct,t(a,{nodeKey:1823}),Pt,t(a,{nodeKey:1830})])])]),At,o("ul",null,[o("li",null,[o("details",null,[Wt,t(a,{nodeKey:443}),It,t(a,{nodeKey:910}),Mt,t(a,{nodeKey:1216}),Bt,t(a,{nodeKey:1685})])]),o("li",null,[o("details",null,[Ht,t(a,{nodeKey:1771}),Et,t(a,{nodeKey:1780})])]),o("li",null,[o("details",null,[Ut,t(a,{nodeKey:160}),$t,t(a,{nodeKey:840}),Lt,t(a,{nodeKey:901}),Tt,t(a,{nodeKey:903}),Rt,t(a,{nodeKey:907}),Vt,t(a,{nodeKey:1212}),Nt,t(a,{nodeKey:1215}),Yt,t(a,{nodeKey:1219}),Xt,t(a,{nodeKey:1502}),Dt,t(a,{nodeKey:1504}),Ft,t(a,{nodeKey:1512}),Gt,t(a,{nodeKey:1516}),Ot,t(a,{nodeKey:1526}),Qt,t(a,{nodeKey:1635}),Jt,t(a,{nodeKey:1638}),Zt,t(a,{nodeKey:1683}),ea,t(a,{nodeKey:1684}),ta,t(a,{nodeKey:1686}),aa,t(a,{nodeKey:1712}),oa,t(a,{nodeKey:1715}),ia,t(a,{nodeKey:1560})])])]),na,o("p",null,[t(d,{to:"/workshops"},{default:n(()=>[sa]),_:1})]),o("p",null,[t(d,{to:"/housecraft"},{default:n(()=>[la]),_:1})]),o("p",null,[t(d,{to:"/droprates"},{default:n(()=>[da]),_:1})]),o("p",null,[t(d,{to:"/routertests"},{default:n(()=>[ra]),_:1})]),o("p",null,[t(d,{to:"/regionmap"},{default:n(()=>[ca]),_:1})]),o("p",null,[t(d,{to:"/lodging"},{default:n(()=>[ha]),_:1})])])}}},va=c(ua,[["__scopeId","data-v-a8122b7e"]]);export{va as default};