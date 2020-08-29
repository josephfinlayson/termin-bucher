export const appointmentPage = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="de" lang="de" dir="ltr">
<head>

  <meta http-equiv="expires" content="0" />
  <meta http-equiv="cache-control" content="no-cache" />
  <meta http-equiv="pragma" content="no-cache" />
  <meta name="robots" content="noindex, nofollow" />

  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="stylesheet" type="text/css" href="//service.berlin.de/i9f/v4/css/vendor.css?ts=1523486034"/>
  <!-- theme switch begin -->
  <link rel="stylesheet" type="text/css" href="//service.berlin.de/i9f/v4/css/bde-bootstrap.css?ts=1523486034"/>
  <link rel="stylesheet" type="text/css" href="//service.berlin.de/i9f/v4/css/bde-index.css?ts=1523486034"/>
  <link rel="shortcut icon" href="//service.berlin.de/i9f/images/favicon.ico" type="image/x-icon"/>
  <link rel="apple-touch-icon" href="//service.berlin.de/i9f/images/iphone.png" type="image/png"/>
  <!-- theme switch end -->
  <!--[if IE 7]>
      <link rel="stylesheet" type="text/css" href="//service.berlin.de/i9f/v4/css/berlin_ie7.css?ts=1523486034" />
  <![endif]-->
  <!--[if IE 8]>
      <link rel="stylesheet" type="text/css" href="//service.berlin.de/i9f/v4/css/berlin_ie8.css?ts=1523486034" />
  <![endif]-->
  <!--[if IE 9]>
      <link rel="stylesheet" type="text/css" href="//service.berlin.de/i9f/v4/css/berlin_ie9.css?ts=1523486034" />
  <![endif]-->

  <!-- "property" validiert nicht, nimm "name" -->
  <meta name="og:image" content="http://service.berlin.de/i9f/images/facebook_default_icon_land.png" />
  <meta name="og:image:secure_url" content="https://service.berlin.de/i9f/images/facebook_default_icon_land.png" />
  <script type="text/javascript" src="//service.berlin.de/i9f/v4/js/bo-head?ts=1523486034"></script>


  <!--
    layout: std
    url: /service.berlin.de/terminvereinbarung/__i9/std/head.inc  created on: Fri, 13 Apr 2018 20:16:21 +0200
  -->



  <!--<link rel="stylesheet" type="text/css" href="styles/i9f/stage/berlin.css" />-->
  <title>Terminvergabe - Auswahl des Tages</title>
</head>
<body>


<div class="container-wrapper container-portal-header">
  <!-- Werbung -->
  <div class="skyscraper hidden-phone">
    <!-- werbe einheit: beberlin -->
  </div>
  <div class="container">
    <div class="row">
      <div class="span12">
        <!-- NAVIGATION BEGIN: portal -->

        <div class="html5-header portal-header hidden-phone">
          <div class="red-line"></div>
          <div class="html5-figure main-image">
            <a href="https://www.berlin.de/">
              <img class="portal-logo hide-mobile" src="//service.berlin.de/i9f/images/berlin_de.png" alt="Zur Homepage von Berlin.de" />
            </a>
          </div><!-- /html5-figure -->

          <p class="navSkip hidden-phone osvnp">Navigiere direkt zu:</p>
          <ul class="navSkip hidden-phone">
            <li><a href="#aural_institutionssuche">Suche</a></li>
            <li><a href="#aural_maincontent">Inhalt</a></li>
          </ul>

          <nav aria-label="Portal Navigation">
            <h6 class="aural">Portal Navigation</h6>
            <p class="aural" id="bo-portalnavilinkslabel">Besuchen Sie auch unsere anderen Themen-Bereiche:</p>
            <ul class="portal-navi" id="bo-portalnavilinks" aria-labelledby="bo-portalnavilinkslabel">
              <li class="active"><a href="https://www.berlin.de/politik-verwaltung-buerger/">Politik, Verwaltung, B&#252;rger</a></li>
              <li><a href="https://www.berlin.de/kultur-und-tickets/">Kultur &#38; Ausgehen</a></li>
              <li><a href="https://www.berlin.de/tourismus/">Tourismus</a></li>
              <li><a href="https://www.berlin.de/wirtschaft/">Wirtschaft</a></li>
              <li><a href="https://www.berlin.de/special/">Themen</a></li>
              <li><a href="https://www.berlin.de/adressen/">BerlinFinder</a></li>
              <li><a href="https://www.berlin.de/stadtplan/">Stadtplan</a></li>
            </ul>
          </nav><!-- /html5-nav -->
        </div><!-- /html5-header -->
        <!-- NAVIGATION END: portal -->
      </div>
    </div>
  </div>
</div>


<div id="top" class="container-wrapper container-content template-land_overview">
  <div class="container">
    <div class="row">
      <div class="span12">

        <!-- NAVIGATION BEGIN: horizontal-->
        <div class="row">
          <div class="span12">
            <!--NAVIGATION BEGIN: meta-->
            <div class="html5-header content-header ">
              <div class="row">
                <div class="span5">
                  <div class="html5-section section-logo without-logo">
                    <div class="html5-section text">
                      <a href="https://service.berlin.de/" title="Link zu: Startseite von &#34;Service-Portal Berlin&#34;"><span class="institution">Service-Portal</span>
                        <span class="title">Berlin</span></a>                </div>
                  </div>
                </div>

                <div class="span7">
                  <div class="html5-nav meta-navi">
                    <ul class="nav">
                    </ul>
                  </div>
                  <!--META BEGIN: SEARCH-->
                  <div class="html5-section search navbar">
                    <div class="navbar-inner">
                      <div class="nav-collapse search-collapse collapse">
                        <form class="institutionssuche" method="get" action="https://service.berlin.de/suche/stichwort/">
                          <div class="control-group searchform " role="search">
                            <label class="aural" id="aural_institutionssuche">
                              Suche auf der Internetseite &#39;Service-Portal Berlin&#39;:        </label>
                            <input type="search" placeholder="Suchbegriff"
                                   name="x" aria-labelledby="aural_institutionssuche"
                                   maxlength="255"
                                   title="Hier k&#246;nnen Sie einen Text eingeben, um die Internetseite &#39;Service-Portal Berlin&#39; zu durchsuchen"
                            />
                            <button class="btn global-search-submit" type="submit">
                              <span class="hidden-phone">Suchen</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <!--META END: SEARCH-->
                </div>
              </div>
            </div>
            <!-- NAVIGATION END: meta-->
          </div>
        </div>
        <div class="row">
          <div class="span12">
            <span class="mobile-blue-line hidden-desktop hidden-tablet"></span>
            <div class="content-navi-wrapper navbar hidden-phone">
              <div class="html5-nav content-navi-top navbar-inner">
                <nav class="nav-collapse mainnav-collapse collapse" aria-label="Hauptnavigation">
                  <h6 class="aural">Hauptnavigation</h6>
                  <ul class="nav level1"  >
                    <li class=" has-submenu">
                      <a href="https://service.berlin.de/dienstleistungen/" >Dienst&#173;leistungen</a>                    </li>
                    <li class=" has-submenu">
                      <a href="https://service.berlin.de/standorte/" >Standorte</a>            <ul class="nav"><li class="">
                      <a href="https://service.berlin.de/standorte/" >Standorte A-Z</a>                    </li>
                      <li class="">
                        <a href="https://service.berlin.de/behoerden/" >Beh&#246;rden A-Z</a>                    </li>
                      <li class="">
                        <a href="https://service.berlin.de/serviceatlas/" >Serviceatlas</a>                    </li>
                      <li class="">
                        <a href="https://service.berlin.de/standorte/auslandsamt/" >Ausl&#228;nder&#173;beh&#246;rde</a>                    </li>
                      <li class="">
                        <a href="https://service.berlin.de/standorte/buergeraemter/" >B&#252;rger&#228;mter</a>                    </li>
                      <li class="">
                        <a href="https://service.berlin.de/standorte/finanzaemter/" >Finanz&#228;mter</a>                    </li>
                      <li class="">
                        <a href="https://service.berlin.de/standorte/gesundheitsaemter/" >Gesundheits&#173;&#228;mter</a>                    </li>
                      <li class="">
                        <a href="https://service.berlin.de/standorte/kfz-zulassungsstellen/" >KFZ-Zulassungs&#173;stellen</a>                    </li>
                      <li class="">
                        <a href="https://service.berlin.de/standorte/jugendaemter/" >Jugend&#228;mter</a>                    </li>
                      <li class="">
                        <a href="https://service.berlin.de/standorte/ordnungsaemter/" >Ordnungs&#228;mter</a>                    </li>
                      <li class="">
                        <a href="https://service.berlin.de/standorte/sozialaemter/" >Sozial&#228;mter</a>                    </li>
                      <li class="">
                        <a href="https://service.berlin.de/standorte/standesaemter/" >Standes&#228;mter</a>                    </li>
                      <li class="">
                        <a href="https://service.berlin.de/standorte/weitere/" >Weitere Standorte</a>                    </li></ul>        </li>
                    <li class=" active has-submenu">
                      <a href="https://service.berlin.de/terminvereinbarung/" >Termin&#173;vereinbarung</a>            <ul class="nav"><li class="">
                      <a href="https://service.berlin.de/terminvereinbarung/hinweise/" >Hinweise</a>                    </li>
                      <li class="">
                        <a href="https://service.berlin.de/terminvereinbarung/termin/terminaendern.php" >Termin &#228;ndern</a>                    </li>
                      <li class="">
                        <a href="https://service.berlin.de/terminvereinbarung/datenschutzerklaerung/" >Datenschutz&#173;erkl&#228;rung</a>                    </li></ul>        </li>
                    <li class=" has-submenu">
                      <a href="https://service.berlin.de/onlineverfahren-onlinedienstleistungen/" >Online-Verfahren</a>                    </li>
                    <li class=" has-submenu">
                      <a href="https://service.berlin.de/app/" >App</a>            <ul class="nav"><li class="">
                      <a href="https://service.berlin.de/app/datenschutzerklaerung/" >Daten&#173;schutz&#173;erkl&#228;rung</a>                    </li></ul>        </li>
                    <li class=" has-submenu">
                      <a href="https://service.berlin.de/themen/" >Themen</a>                    </li>
                  </ul>
                  <div class="beberlin"><img alt="Logo beBerlin" title="beBerlin" src="//service.berlin.de/i9f/v4/css/images/logo_beberlin_darkblue.png" /></div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <!--NAVIGATION END: horizontal-->

        <!-- content start -->
        <!-- row - span12 -->

        <!-- NAVIGATION BEGIN: breadcrumb -->
        <div class="row row-breadcrumb">
          <div class="span10">

            <nav class="html5-section breadcrumb" aria-label="Breadcrumb">
              <p id="aural_breadcrumblabel" class="aural">Sie befinden sich hier:</p>
              <ul aria-labelledby="aural_breadcrumblabel">
                <li class="odd pos0"><a href="https://service.berlin.de/" class="homehaus">service.berlin.de</a></li><li class="even pos1"><a href="https://service.berlin.de/terminvereinbarung/" >Termin&#173;vereinbarung</a></li>        <li class="aural">Terminvereinbarung bei Berliner Beh&#246;rden</li>
              </ul>
            </nav>
          </div>
          <div class="span2"></div>
        </div>
        <!-- NAVIGATION END: breadcrumb -->

        <div class="row">
          <div class="span2 column-left">
            <!-- NAVIGATION BEGIN: vertical -->
            <div class="html5-nav content-navigation-left navbar">
              <div class="navbar-inner">
                <nav class="hidden-phone nav-collapse collapse" aria-label="Sekund&#228;re Navigation">
                  <h6 class="aural">Sekund&#228;re Navigation</h6>
                  <ul class="nav level-0">
                    <li class="active"><a href="https://service.berlin.de/terminvereinbarung/" >Termin&#173;vereinbarung</a>                    <ul class="level-1" ><li >
                      <a href="https://service.berlin.de/terminvereinbarung/hinweise/" >Hinweise</a>    </li>
                      <li >
                        <a href="https://service.berlin.de/terminvereinbarung/termin/terminaendern.php" >Termin &#228;ndern</a>    </li>
                      <li >
                        <a href="https://service.berlin.de/terminvereinbarung/datenschutzerklaerung/" >Datenschutz&#173;erkl&#228;rung</a>    </li>
                    </ul>                </li>
                  </ul>
                </nav>
              </div>
            </div>
            <!-- NAVIGATION END: vertical -->
          </div>

          <div class="span7 column-content">
            <h6 class="aural" id="aural_maincontent">Inhaltsspalte</h6>
            <div class="html5-section article" role="main">

              <!--anker:allris-->


              <div id="hhibody" class="zms"> <!-- HHI BODY Begin: all HHI contents ////////////////////////////////////////////////////// -->

                <!-- BREADCRUMB Begin  ////////////////////////////////////////////////////// -->
                <!-- BREADCRUMB End  ////////////////////////////////////////////////////// -->


                <!-- OPENER Begin -->
                <div class="html5-header header">
                  <h1 class="title">Terminvereinbarung
                  </h1>
                </div>
                <!-- OPENER End  -->

                <!-- MERKZETTEL Begin  ////////////////////////////////////////////////////// -->
                <!-- MERKZETTEL Begin  ////////////////////////////////////////////////////// -->
                <div class="collapsible-group closed">
                  <div class="collapsible-heading row-fluid">
                    <div class="collapsible-toggle">
                      <div class="table-cell collapsible-counter span1">
                        1                        </div>
                      <div class="table-cell collapsible-title span3">
                        Dienst&shy;leis&shy;tung                        </div>
                      <div class="table-cell collapsible-description span7">
                        <div class="bullet"> Anmeldung einer Wohnung </div>                        </div>
                      <div class="table-cell collapsible-options span1">
                        <a class="edit icon-pencil" href="https://service.berlin.de/dienstleistungen/?zms=1" accesskey="1" title="Zur Dienstleistungsauswahl" tabindex="13">&auml;ndern</a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- MERKZETTEL End  ////////////////////////////////////////////////////// -->
                <!-- MERKZETTEL End  -->


                <!-- TASK Begin  ////////////////////////////////////////////////////// -->
                <div class="collapsible-group">

                  <div class="collapsible-heading row-fluid">
                    <div class="collapsible-toggle">
                      <span class="table-cell collapsible-counter span1">2</span>
                      <span class="table-cell collapsible-title span11">Datum</span>
                    </div>
                  </div>

                  <div class="collapsible-body">

                    <div class="calendar-table">

                      <div class="calendar-head">
                        <h2 class="title">Bitte w&auml;hlen Sie ein Datum:</h2>
                        <div class="calendar-legend right">
                          <span class="legend-element"><span class="legend-color buchbar">&nbsp;</span>verf&uuml;gbar</span>
                          <span class="legend-element"><span class="legend-color nichtbuchbar">&nbsp;</span>ausgebucht</span>
                        </div>
                      </div>
                      <div class="row-fluid">
                        <div class="calendar-month-table span6">
                          <table cellspacing="0">
                            <thead>
                            <tr class="controll">
                              <th class="prev">
                              </th>
                              <th class="month" colspan="5">
                                April 2018                                        </th>
                              <th class="next">
                                <a title="n&auml;chster Monat" href="tag.php?id=&amp;buergerID=&amp;buergername=&amp;absagecode=&amp;Datum=1522533600&amp;anliegen%5B%5D=120686&amp;dienstleister%5B%5D=122210&amp;dienstleister%5B%5D=122217&amp;dienstleister%5B%5D=122219&amp;dienstleister%5B%5D=122227&amp;dienstleister%5B%5D=122231&amp;dienstleister%5B%5D=122238&amp;dienstleister%5B%5D=122243&amp;dienstleister%5B%5D=122252&amp;dienstleister%5B%5D=122260&amp;dienstleister%5B%5D=122262&amp;dienstleister%5B%5D=122254&amp;dienstleister%5B%5D=122271&amp;dienstleister%5B%5D=122273&amp;dienstleister%5B%5D=122277&amp;dienstleister%5B%5D=122280&amp;dienstleister%5B%5D=122282&amp;dienstleister%5B%5D=122284&amp;dienstleister%5B%5D=122291&amp;dienstleister%5B%5D=122285&amp;dienstleister%5B%5D=122286&amp;dienstleister%5B%5D=122296&amp;dienstleister%5B%5D=150230&amp;dienstleister%5B%5D=122301&amp;dienstleister%5B%5D=122297&amp;dienstleister%5B%5D=122294&amp;dienstleister%5B%5D=122312&amp;dienstleister%5B%5D=122314&amp;dienstleister%5B%5D=122304&amp;dienstleister%5B%5D=122311&amp;dienstleister%5B%5D=122309&amp;dienstleister%5B%5D=317869&amp;dienstleister%5B%5D=324433&amp;dienstleister%5B%5D=325341&amp;dienstleister%5B%5D=324434&amp;dienstleister%5B%5D=122281&amp;dienstleister%5B%5D=324414&amp;dienstleister%5B%5D=122283&amp;dienstleister%5B%5D=122279&amp;dienstleister%5B%5D=122276&amp;dienstleister%5B%5D=122274&amp;dienstleister%5B%5D=122267&amp;dienstleister%5B%5D=122246&amp;dienstleister%5B%5D=122251&amp;dienstleister%5B%5D=122257&amp;dienstleister%5B%5D=122208&amp;dienstleister%5B%5D=122226&amp;dienstleister%5B%5D=121646&amp;herkunft=http://service.berlin.de/dienstleistung/120686/">»</a>                                        </th>
                            </tr>
                            <tr class="dayname">
                              <th>Mo</th>
                              <th>Di</th>
                              <th>Mi</th>
                              <th>Do</th>
                              <th>Fr</th>
                              <th>Sa</th>
                              <th><span class="sonnfeiertag">So</span></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td><span class="sonnfeiertag"><span>1</span></span></td>
                            </tr><tr>
                              <td><span class="sonnfeiertag"><span>2</span></span></td>
                              <td><span>3</span></td>
                              <td><span>4</span></td>
                              <td><span>5</span></td>
                              <td><span>6</span></td>
                              <td><span>7</span></td>
                              <td><span class="sonnfeiertag"><span>8</span></span></td>
                            </tr><tr>
                              <td><span>9</span></td>
                              <td><span>10</span></td>
                              <td><span>11</span></td>
                              <td><span>12</span></td>
                              <td class="nichtbuchbar  heutemarkierung"><span>13</span></td>
                              <td class="nichtbuchbar "><span>14</span></td>
                              <td><span class="sonnfeiertag"><span>15</span></span></td>
                            </tr><tr>
                              <td class="nichtbuchbar "><span>16</span></td>
                              <td class="nichtbuchbar "><span>17</span></td>
                              <td class="nichtbuchbar "><span>18</span></td>
                              <td class="nichtbuchbar "><span>19</span></td>
                              <td class="nichtbuchbar "><span>20</span></td>
                              <td class="nichtbuchbar "><span>21</span></td>
                              <td><span class="sonnfeiertag"><span>22</span></span></td>
                            </tr><tr>
                              <td class="nichtbuchbar "><span>23</span></td>
                              <td class="nichtbuchbar "><span>24</span></td>
                              <td class="nichtbuchbar "><span>25</span></td>
                              <td class="buchbar "><a class="tagesauswahl" href="termin.php?buergerID=&amp;buergername=&amp;OID=638472%2C638532%2C638460%2C636930%2C636936%2C636942%2C636948%2C636954%2C638121%2C639045%2C639051%2C638478%2C638781%2C633468%2C633474%2C633477%2C637473%2C417009%2C637476%2C635388%2C417069%2C635406%2C635490%2C417162%2C635496%2C638235%2C638241%2C638247%2C634155%2C634125%2C634161%2C637194%2C637200%2C637206%2C638562%2C638610%2C638694%2C593847%2C592791%2C592794%2C592797%2C593577%2C593580%2C597198%2C638190%2C628194%2C628200%2C628206%2C628212%2C638544%2C638889%2C638907%2C638385%2C638391%2C638397%2C638403%2C638409%2C638415%2C638421%2C638427%2C638433%2C637914%2C637917%2C637920%2C637923%2C637935%2C638649%2C637263%2C637521%2C638790%2C633375%2C440457%2C629655%2C446232%2C638514%2C638508%2C634998%2C635004%2C638520%2C638526%2C638181%2C638259%2C638262%2C638265%2C637782%2C637785%2C637788%2C637791%2C638355%2C638358%2C638361%2C638364%2C638367%2C638643%2C627792%2C637335%2C627804%2C637893%2C637899%2C637905%2C637911&amp;datum=2018-04-26&amp;behoerde=&amp;slots=&amp;anliegen%5B%5D=120686&amp;dienstleister%5B%5D=122210&amp;dienstleister%5B%5D=122217&amp;dienstleister%5B%5D=122219&amp;dienstleister%5B%5D=122227&amp;dienstleister%5B%5D=122231&amp;dienstleister%5B%5D=122238&amp;dienstleister%5B%5D=122243&amp;dienstleister%5B%5D=122252&amp;dienstleister%5B%5D=122260&amp;dienstleister%5B%5D=122262&amp;dienstleister%5B%5D=122254&amp;dienstleister%5B%5D=122271&amp;dienstleister%5B%5D=122273&amp;dienstleister%5B%5D=122277&amp;dienstleister%5B%5D=122280&amp;dienstleister%5B%5D=122282&amp;dienstleister%5B%5D=122284&amp;dienstleister%5B%5D=122291&amp;dienstleister%5B%5D=122285&amp;dienstleister%5B%5D=122286&amp;dienstleister%5B%5D=122296&amp;dienstleister%5B%5D=150230&amp;dienstleister%5B%5D=122301&amp;dienstleister%5B%5D=122297&amp;dienstleister%5B%5D=122294&amp;dienstleister%5B%5D=122312&amp;dienstleister%5B%5D=122314&amp;dienstleister%5B%5D=122304&amp;dienstleister%5B%5D=122311&amp;dienstleister%5B%5D=122309&amp;dienstleister%5B%5D=317869&amp;dienstleister%5B%5D=324433&amp;dienstleister%5B%5D=325341&amp;dienstleister%5B%5D=324434&amp;dienstleister%5B%5D=122281&amp;dienstleister%5B%5D=324414&amp;dienstleister%5B%5D=122283&amp;dienstleister%5B%5D=122279&amp;dienstleister%5B%5D=122276&amp;dienstleister%5B%5D=122274&amp;dienstleister%5B%5D=122267&amp;dienstleister%5B%5D=122246&amp;dienstleister%5B%5D=122251&amp;dienstleister%5B%5D=122257&amp;dienstleister%5B%5D=122208&amp;dienstleister%5B%5D=122226&amp;dienstleister%5B%5D=121646&amp;herkunft=http%3A%2F%2Fservice.berlin.de%2Fdienstleistung%2F120686%2F" title="An diesem Tag einen Termin buchen " tabindex="3"><u><span>26</span></u></a></td>
                              <td class="nichtbuchbar "><span>27</span></td>
                              <td class="nichtbuchbar "><span>28</span></td>
                              <td><span class="sonnfeiertag"><span>29</span></span></td>
                            </tr><tr>
                              <td class="nichtbuchbar "><span>30</span></td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            </tbody>
                          </table>
                        </div> <!-- /calendar-month-table END -->
                        <div class="calendar-month-table span6">
                          <table cellspacing="0">
                            <thead>
                            <tr class="controll">
                              <th class="prev">
                              </th>
                              <th class="month" colspan="5">
                                Mai 2018                                        </th>
                              <th class="next">
                                <a title="n&auml;chster Monat" href="tag.php?id=&amp;buergerID=&amp;buergername=&amp;absagecode=&amp;Datum=1525125600&amp;anliegen%5B%5D=120686&amp;dienstleister%5B%5D=122210&amp;dienstleister%5B%5D=122217&amp;dienstleister%5B%5D=122219&amp;dienstleister%5B%5D=122227&amp;dienstleister%5B%5D=122231&amp;dienstleister%5B%5D=122238&amp;dienstleister%5B%5D=122243&amp;dienstleister%5B%5D=122252&amp;dienstleister%5B%5D=122260&amp;dienstleister%5B%5D=122262&amp;dienstleister%5B%5D=122254&amp;dienstleister%5B%5D=122271&amp;dienstleister%5B%5D=122273&amp;dienstleister%5B%5D=122277&amp;dienstleister%5B%5D=122280&amp;dienstleister%5B%5D=122282&amp;dienstleister%5B%5D=122284&amp;dienstleister%5B%5D=122291&amp;dienstleister%5B%5D=122285&amp;dienstleister%5B%5D=122286&amp;dienstleister%5B%5D=122296&amp;dienstleister%5B%5D=150230&amp;dienstleister%5B%5D=122301&amp;dienstleister%5B%5D=122297&amp;dienstleister%5B%5D=122294&amp;dienstleister%5B%5D=122312&amp;dienstleister%5B%5D=122314&amp;dienstleister%5B%5D=122304&amp;dienstleister%5B%5D=122311&amp;dienstleister%5B%5D=122309&amp;dienstleister%5B%5D=317869&amp;dienstleister%5B%5D=324433&amp;dienstleister%5B%5D=325341&amp;dienstleister%5B%5D=324434&amp;dienstleister%5B%5D=122281&amp;dienstleister%5B%5D=324414&amp;dienstleister%5B%5D=122283&amp;dienstleister%5B%5D=122279&amp;dienstleister%5B%5D=122276&amp;dienstleister%5B%5D=122274&amp;dienstleister%5B%5D=122267&amp;dienstleister%5B%5D=122246&amp;dienstleister%5B%5D=122251&amp;dienstleister%5B%5D=122257&amp;dienstleister%5B%5D=122208&amp;dienstleister%5B%5D=122226&amp;dienstleister%5B%5D=121646&amp;herkunft=http://service.berlin.de/dienstleistung/120686/">»</a>                                        </th>
                            </tr>
                            <tr class="dayname">
                              <th>Mo</th>
                              <th>Di</th>
                              <th>Mi</th>
                              <th>Do</th>
                              <th>Fr</th>
                              <th>Sa</th>
                              <th><span class="sonnfeiertag">So</span></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <td>&nbsp;</td>
                              <td><span class="sonnfeiertag"><span>1</span></span></td>
                              <td class="nichtbuchbar "><span>2</span></td>
                              <td class="nichtbuchbar "><span>3</span></td>
                              <td class="nichtbuchbar "><span>4</span></td>
                              <td class="nichtbuchbar "><span>5</span></td>
                              <td><span class="sonnfeiertag"><span>6</span></span></td>
                            </tr><tr>
                              <td class="nichtbuchbar "><span>7</span></td>
                              <td class="nichtbuchbar "><span>8</span></td>
                              <td class="nichtbuchbar "><span>9</span></td>
                              <td><span class="sonnfeiertag"><span>10</span></span></td>
                              <td class="nichtbuchbar "><span>11</span></td>
                              <td><span>12</span></td>
                              <td><span class="sonnfeiertag"><span>13</span></span></td>
                            </tr><tr>
                              <td class="buchbar "><a class="tagesauswahl" href="termin.php?buergerID=&amp;buergername=&amp;OID=635466%2C635256%2C635442%2C635079%2C635085%2C629601%2C635091%2C639003%2C639009%2C639015%2C634842%2C633441%2C633444%2C633447%2C455958%2C455424%2C592401%2C635265%2C417039%2C635271%2C635412%2C417090%2C635430%2C647004%2C647010%2C647016%2C634170%2C634173%2C634176%2C639213%2C639219%2C639225%2C635373%2C635424%2C635400%2C635436%2C625881%2C626139%2C626142%2C626151%2C626628%2C626631%2C626433%2C638862%2C598191%2C598197%2C598209%2C598215%2C635352%2C637239%2C637245%2C637257%2C638943%2C638949%2C638955%2C638961%2C638967%2C638973%2C638979%2C639069%2C639072%2C639075%2C639078%2C639081%2C437979%2C635193%2C635331%2C638817%2C635244%2C638145%2C172439%2C68421%2C151427%2C647043%2C446223%2C635319%2C634971%2C635382%2C637806%2C637815%2C637812%2C637809%2C637740%2C637743%2C637746%2C638316%2C638319%2C638322&amp;datum=2018-05-14&amp;behoerde=&amp;slots=&amp;anliegen%5B%5D=120686&amp;dienstleister%5B%5D=122210&amp;dienstleister%5B%5D=122217&amp;dienstleister%5B%5D=122219&amp;dienstleister%5B%5D=122227&amp;dienstleister%5B%5D=122231&amp;dienstleister%5B%5D=122238&amp;dienstleister%5B%5D=122243&amp;dienstleister%5B%5D=122252&amp;dienstleister%5B%5D=122260&amp;dienstleister%5B%5D=122262&amp;dienstleister%5B%5D=122254&amp;dienstleister%5B%5D=122271&amp;dienstleister%5B%5D=122273&amp;dienstleister%5B%5D=122277&amp;dienstleister%5B%5D=122280&amp;dienstleister%5B%5D=122282&amp;dienstleister%5B%5D=122284&amp;dienstleister%5B%5D=122291&amp;dienstleister%5B%5D=122285&amp;dienstleister%5B%5D=122286&amp;dienstleister%5B%5D=122296&amp;dienstleister%5B%5D=150230&amp;dienstleister%5B%5D=122301&amp;dienstleister%5B%5D=122297&amp;dienstleister%5B%5D=122294&amp;dienstleister%5B%5D=122312&amp;dienstleister%5B%5D=122314&amp;dienstleister%5B%5D=122304&amp;dienstleister%5B%5D=122311&amp;dienstleister%5B%5D=122309&amp;dienstleister%5B%5D=317869&amp;dienstleister%5B%5D=324433&amp;dienstleister%5B%5D=325341&amp;dienstleister%5B%5D=324434&amp;dienstleister%5B%5D=122281&amp;dienstleister%5B%5D=324414&amp;dienstleister%5B%5D=122283&amp;dienstleister%5B%5D=122279&amp;dienstleister%5B%5D=122276&amp;dienstleister%5B%5D=122274&amp;dienstleister%5B%5D=122267&amp;dienstleister%5B%5D=122246&amp;dienstleister%5B%5D=122251&amp;dienstleister%5B%5D=122257&amp;dienstleister%5B%5D=122208&amp;dienstleister%5B%5D=122226&amp;dienstleister%5B%5D=121646&amp;herkunft=http%3A%2F%2Fservice.berlin.de%2Fdienstleistung%2F120686%2F" title="An diesem Tag einen Termin buchen " tabindex="3"><u><span>14</span></u></a></td>
                              <td class="buchbar "><a class="tagesauswahl" href="termin.php?buergerID=&amp;buergername=&amp;OID=432846%2C637380%2C637368%2C637326%2C636930%2C636936%2C636942%2C636948%2C636954%2C638121%2C639045%2C639051%2C638478%2C638781%2C633450%2C633453%2C633456%2C522303%2C416982%2C454761%2C635298%2C417048%2C635307%2C635460%2C417102%2C635472%2C635145%2C635151%2C635157%2C634131%2C634137%2C634143%2C634881%2C634887%2C634893%2C636891%2C637101%2C637173%2C637179%2C625884%2C626160%2C626175%2C626184%2C626634%2C626637%2C626436%2C638190%2C628194%2C628200%2C628206%2C628212%2C638544%2C638202%2C638214%2C638385%2C638391%2C638397%2C638403%2C638409%2C638415%2C638421%2C638427%2C638433%2C637914%2C637917%2C637920%2C637923%2C637935%2C638835%2C637263%2C637521%2C638790%2C635229%2C624954%2C172454%2C122250%2C639063%2C446223%2C638514%2C638508%2C634998%2C635004%2C638520%2C638526%2C638148%2C638154%2C638160%2C638163%2C637749%2C637752%2C637755%2C637758%2C638325%2C638328%2C638331%2C638334%2C638337&amp;datum=2018-05-15&amp;behoerde=&amp;slots=&amp;anliegen%5B%5D=120686&amp;dienstleister%5B%5D=122210&amp;dienstleister%5B%5D=122217&amp;dienstleister%5B%5D=122219&amp;dienstleister%5B%5D=122227&amp;dienstleister%5B%5D=122231&amp;dienstleister%5B%5D=122238&amp;dienstleister%5B%5D=122243&amp;dienstleister%5B%5D=122252&amp;dienstleister%5B%5D=122260&amp;dienstleister%5B%5D=122262&amp;dienstleister%5B%5D=122254&amp;dienstleister%5B%5D=122271&amp;dienstleister%5B%5D=122273&amp;dienstleister%5B%5D=122277&amp;dienstleister%5B%5D=122280&amp;dienstleister%5B%5D=122282&amp;dienstleister%5B%5D=122284&amp;dienstleister%5B%5D=122291&amp;dienstleister%5B%5D=122285&amp;dienstleister%5B%5D=122286&amp;dienstleister%5B%5D=122296&amp;dienstleister%5B%5D=150230&amp;dienstleister%5B%5D=122301&amp;dienstleister%5B%5D=122297&amp;dienstleister%5B%5D=122294&amp;dienstleister%5B%5D=122312&amp;dienstleister%5B%5D=122314&amp;dienstleister%5B%5D=122304&amp;dienstleister%5B%5D=122311&amp;dienstleister%5B%5D=122309&amp;dienstleister%5B%5D=317869&amp;dienstleister%5B%5D=324433&amp;dienstleister%5B%5D=325341&amp;dienstleister%5B%5D=324434&amp;dienstleister%5B%5D=122281&amp;dienstleister%5B%5D=324414&amp;dienstleister%5B%5D=122283&amp;dienstleister%5B%5D=122279&amp;dienstleister%5B%5D=122276&amp;dienstleister%5B%5D=122274&amp;dienstleister%5B%5D=122267&amp;dienstleister%5B%5D=122246&amp;dienstleister%5B%5D=122251&amp;dienstleister%5B%5D=122257&amp;dienstleister%5B%5D=122208&amp;dienstleister%5B%5D=122226&amp;dienstleister%5B%5D=121646&amp;herkunft=http%3A%2F%2Fservice.berlin.de%2Fdienstleistung%2F120686%2F" title="An diesem Tag einen Termin buchen " tabindex="3"><u><span>15</span></u></a></td>
                              <td class="buchbar "><a class="tagesauswahl" href="termin.php?buergerID=&amp;buergername=&amp;OID=633759%2C638130%2C637833%2C636912%2C636918%2C621126%2C636924%2C636999%2C639033%2C639039%2C637965%2C637017%2C633459%2C633462%2C633465%2C637467%2C456852%2C637470%2C635361%2C449991%2C635367%2C635478%2C417111%2C635484%2C637428%2C634149%2C634899%2C633576%2C633585%2C625890%2C626196%2C626640%2C626643%2C626442%2C638550%2C619344%2C619350%2C619356%2C619362%2C638847%2C638490%2C638502%2C638598%2C638658%2C638664%2C638670%2C638676%2C638682%2C638688%2C638805%2C638811%2C638823%2C638826%2C638829%2C437994%2C637827%2C637515%2C624792%2C635223%2C230333%2C634050%2C172463%2C265671%2C639060%2C638484%2C446226%2C637875%2C634992%2C637887%2C638166%2C638169%2C638175%2C637761%2C637764%2C637767%2C638340%2C638343%2C638346&amp;datum=2018-05-16&amp;behoerde=&amp;slots=&amp;anliegen%5B%5D=120686&amp;dienstleister%5B%5D=122210&amp;dienstleister%5B%5D=122217&amp;dienstleister%5B%5D=122219&amp;dienstleister%5B%5D=122227&amp;dienstleister%5B%5D=122231&amp;dienstleister%5B%5D=122238&amp;dienstleister%5B%5D=122243&amp;dienstleister%5B%5D=122252&amp;dienstleister%5B%5D=122260&amp;dienstleister%5B%5D=122262&amp;dienstleister%5B%5D=122254&amp;dienstleister%5B%5D=122271&amp;dienstleister%5B%5D=122273&amp;dienstleister%5B%5D=122277&amp;dienstleister%5B%5D=122280&amp;dienstleister%5B%5D=122282&amp;dienstleister%5B%5D=122284&amp;dienstleister%5B%5D=122291&amp;dienstleister%5B%5D=122285&amp;dienstleister%5B%5D=122286&amp;dienstleister%5B%5D=122296&amp;dienstleister%5B%5D=150230&amp;dienstleister%5B%5D=122301&amp;dienstleister%5B%5D=122297&amp;dienstleister%5B%5D=122294&amp;dienstleister%5B%5D=122312&amp;dienstleister%5B%5D=122314&amp;dienstleister%5B%5D=122304&amp;dienstleister%5B%5D=122311&amp;dienstleister%5B%5D=122309&amp;dienstleister%5B%5D=317869&amp;dienstleister%5B%5D=324433&amp;dienstleister%5B%5D=325341&amp;dienstleister%5B%5D=324434&amp;dienstleister%5B%5D=122281&amp;dienstleister%5B%5D=324414&amp;dienstleister%5B%5D=122283&amp;dienstleister%5B%5D=122279&amp;dienstleister%5B%5D=122276&amp;dienstleister%5B%5D=122274&amp;dienstleister%5B%5D=122267&amp;dienstleister%5B%5D=122246&amp;dienstleister%5B%5D=122251&amp;dienstleister%5B%5D=122257&amp;dienstleister%5B%5D=122208&amp;dienstleister%5B%5D=122226&amp;dienstleister%5B%5D=121646&amp;herkunft=http%3A%2F%2Fservice.berlin.de%2Fdienstleistung%2F120686%2F" title="An diesem Tag einen Termin buchen " tabindex="3"><u><span>16</span></u></a></td>
                              <td class="buchbar "><a class="tagesauswahl" href="termin.php?buergerID=&amp;buergername=&amp;OID=638472%2C638532%2C638460%2C636930%2C636936%2C636942%2C636948%2C636954%2C638121%2C639045%2C639051%2C638478%2C638781%2C633468%2C633474%2C633477%2C637473%2C417009%2C637476%2C635388%2C417069%2C635406%2C635490%2C417162%2C635496%2C638235%2C638241%2C638247%2C634155%2C634125%2C634161%2C637194%2C637200%2C637206%2C638562%2C638610%2C638694%2C625896%2C626208%2C626229%2C626238%2C626646%2C626649%2C626445%2C638190%2C628194%2C628200%2C628206%2C628212%2C638544%2C638889%2C638907%2C638385%2C638391%2C638397%2C638403%2C638409%2C638415%2C638421%2C638427%2C638433%2C637914%2C637917%2C637920%2C637923%2C637935%2C638835%2C637263%2C637521%2C638790%2C635229%2C634056%2C440457%2C629658%2C446232%2C638514%2C638508%2C634998%2C635004%2C638520%2C638526%2C638181%2C638259%2C638262%2C638265%2C637782%2C637785%2C637788%2C637791%2C638355%2C638358%2C638361%2C638364%2C638367&amp;datum=2018-05-17&amp;behoerde=&amp;slots=&amp;anliegen%5B%5D=120686&amp;dienstleister%5B%5D=122210&amp;dienstleister%5B%5D=122217&amp;dienstleister%5B%5D=122219&amp;dienstleister%5B%5D=122227&amp;dienstleister%5B%5D=122231&amp;dienstleister%5B%5D=122238&amp;dienstleister%5B%5D=122243&amp;dienstleister%5B%5D=122252&amp;dienstleister%5B%5D=122260&amp;dienstleister%5B%5D=122262&amp;dienstleister%5B%5D=122254&amp;dienstleister%5B%5D=122271&amp;dienstleister%5B%5D=122273&amp;dienstleister%5B%5D=122277&amp;dienstleister%5B%5D=122280&amp;dienstleister%5B%5D=122282&amp;dienstleister%5B%5D=122284&amp;dienstleister%5B%5D=122291&amp;dienstleister%5B%5D=122285&amp;dienstleister%5B%5D=122286&amp;dienstleister%5B%5D=122296&amp;dienstleister%5B%5D=150230&amp;dienstleister%5B%5D=122301&amp;dienstleister%5B%5D=122297&amp;dienstleister%5B%5D=122294&amp;dienstleister%5B%5D=122312&amp;dienstleister%5B%5D=122314&amp;dienstleister%5B%5D=122304&amp;dienstleister%5B%5D=122311&amp;dienstleister%5B%5D=122309&amp;dienstleister%5B%5D=317869&amp;dienstleister%5B%5D=324433&amp;dienstleister%5B%5D=325341&amp;dienstleister%5B%5D=324434&amp;dienstleister%5B%5D=122281&amp;dienstleister%5B%5D=324414&amp;dienstleister%5B%5D=122283&amp;dienstleister%5B%5D=122279&amp;dienstleister%5B%5D=122276&amp;dienstleister%5B%5D=122274&amp;dienstleister%5B%5D=122267&amp;dienstleister%5B%5D=122246&amp;dienstleister%5B%5D=122251&amp;dienstleister%5B%5D=122257&amp;dienstleister%5B%5D=122208&amp;dienstleister%5B%5D=122226&amp;dienstleister%5B%5D=121646&amp;herkunft=http%3A%2F%2Fservice.berlin.de%2Fdienstleistung%2F120686%2F" title="An diesem Tag einen Termin buchen " tabindex="3"><u><span>17</span></u></a></td>
                              <td class="buchbar "><a class="tagesauswahl" href="termin.php?buergerID=&amp;buergername=&amp;OID=432852%2C638901%2C592200%2C638913%2C636960%2C636966%2C625098%2C639087%2C637035%2C637041%2C639057%2C638991%2C637056%2C633480%2C633483%2C633486%2C637479%2C417021%2C637482%2C635418%2C417081%2C635448%2C635502%2C417123%2C635508%2C638256%2C634167%2C637212%2C619284%2C433566%2C433560%2C638856%2C638868%2C625899%2C626250%2C626655%2C626658%2C626448%2C638550%2C619344%2C619350%2C619356%2C619362%2C638847%2C635169%2C635181%2C638598%2C638658%2C638664%2C638670%2C638676%2C638682%2C638688%2C638805%2C638811%2C638823%2C638826%2C638829%2C437994%2C582504%2C423141%2C638985%2C423123%2C628353%2C632109%2C172457%2C446229%2C638934%2C635010%2C638919%2C638268%2C638271%2C637797%2C637800%2C638349%2C638352&amp;datum=2018-05-18&amp;behoerde=&amp;slots=&amp;anliegen%5B%5D=120686&amp;dienstleister%5B%5D=122210&amp;dienstleister%5B%5D=122217&amp;dienstleister%5B%5D=122219&amp;dienstleister%5B%5D=122227&amp;dienstleister%5B%5D=122231&amp;dienstleister%5B%5D=122238&amp;dienstleister%5B%5D=122243&amp;dienstleister%5B%5D=122252&amp;dienstleister%5B%5D=122260&amp;dienstleister%5B%5D=122262&amp;dienstleister%5B%5D=122254&amp;dienstleister%5B%5D=122271&amp;dienstleister%5B%5D=122273&amp;dienstleister%5B%5D=122277&amp;dienstleister%5B%5D=122280&amp;dienstleister%5B%5D=122282&amp;dienstleister%5B%5D=122284&amp;dienstleister%5B%5D=122291&amp;dienstleister%5B%5D=122285&amp;dienstleister%5B%5D=122286&amp;dienstleister%5B%5D=122296&amp;dienstleister%5B%5D=150230&amp;dienstleister%5B%5D=122301&amp;dienstleister%5B%5D=122297&amp;dienstleister%5B%5D=122294&amp;dienstleister%5B%5D=122312&amp;dienstleister%5B%5D=122314&amp;dienstleister%5B%5D=122304&amp;dienstleister%5B%5D=122311&amp;dienstleister%5B%5D=122309&amp;dienstleister%5B%5D=317869&amp;dienstleister%5B%5D=324433&amp;dienstleister%5B%5D=325341&amp;dienstleister%5B%5D=324434&amp;dienstleister%5B%5D=122281&amp;dienstleister%5B%5D=324414&amp;dienstleister%5B%5D=122283&amp;dienstleister%5B%5D=122279&amp;dienstleister%5B%5D=122276&amp;dienstleister%5B%5D=122274&amp;dienstleister%5B%5D=122267&amp;dienstleister%5B%5D=122246&amp;dienstleister%5B%5D=122251&amp;dienstleister%5B%5D=122257&amp;dienstleister%5B%5D=122208&amp;dienstleister%5B%5D=122226&amp;dienstleister%5B%5D=121646&amp;herkunft=http%3A%2F%2Fservice.berlin.de%2Fdienstleistung%2F120686%2F" title="An diesem Tag einen Termin buchen " tabindex="3"><u><span>18</span></u></a></td>
                              <td><span>19</span></td>
                              <td><span class="sonnfeiertag"><span>20</span></span></td>
                            </tr><tr>
                              <td><span class="sonnfeiertag"><span>21</span></span></td>
                              <td class="buchbar "><a class="tagesauswahl" href="termin.php?buergerID=&amp;buergername=&amp;OID=432846%2C637380%2C637368%2C637326%2C636930%2C636936%2C636942%2C636948%2C636954%2C638121%2C639045%2C639051%2C638478%2C638781%2C633450%2C633453%2C633456%2C522303%2C416982%2C454761%2C635298%2C417048%2C635307%2C635460%2C417102%2C635472%2C635145%2C635151%2C635157%2C634131%2C634137%2C634143%2C634881%2C634887%2C634893%2C636891%2C637101%2C637173%2C637179%2C625902%2C630018%2C630021%2C630039%2C626661%2C626664%2C629388%2C638190%2C628194%2C628200%2C628206%2C628212%2C638544%2C638202%2C638214%2C638385%2C638391%2C638397%2C638403%2C638409%2C638415%2C638421%2C638427%2C638433%2C637914%2C637917%2C637920%2C637923%2C637935%2C638835%2C637263%2C637521%2C638790%2C635229%2C624954%2C172454%2C122250%2C639063%2C632127%2C446223%2C638514%2C638508%2C634998%2C635004%2C638520%2C638526%2C638148%2C638154%2C638160%2C638163%2C637749%2C637752%2C637755%2C637758%2C638325%2C638328%2C638331%2C638334%2C638337&amp;datum=2018-05-22&amp;behoerde=&amp;slots=&amp;anliegen%5B%5D=120686&amp;dienstleister%5B%5D=122210&amp;dienstleister%5B%5D=122217&amp;dienstleister%5B%5D=122219&amp;dienstleister%5B%5D=122227&amp;dienstleister%5B%5D=122231&amp;dienstleister%5B%5D=122238&amp;dienstleister%5B%5D=122243&amp;dienstleister%5B%5D=122252&amp;dienstleister%5B%5D=122260&amp;dienstleister%5B%5D=122262&amp;dienstleister%5B%5D=122254&amp;dienstleister%5B%5D=122271&amp;dienstleister%5B%5D=122273&amp;dienstleister%5B%5D=122277&amp;dienstleister%5B%5D=122280&amp;dienstleister%5B%5D=122282&amp;dienstleister%5B%5D=122284&amp;dienstleister%5B%5D=122291&amp;dienstleister%5B%5D=122285&amp;dienstleister%5B%5D=122286&amp;dienstleister%5B%5D=122296&amp;dienstleister%5B%5D=150230&amp;dienstleister%5B%5D=122301&amp;dienstleister%5B%5D=122297&amp;dienstleister%5B%5D=122294&amp;dienstleister%5B%5D=122312&amp;dienstleister%5B%5D=122314&amp;dienstleister%5B%5D=122304&amp;dienstleister%5B%5D=122311&amp;dienstleister%5B%5D=122309&amp;dienstleister%5B%5D=317869&amp;dienstleister%5B%5D=324433&amp;dienstleister%5B%5D=325341&amp;dienstleister%5B%5D=324434&amp;dienstleister%5B%5D=122281&amp;dienstleister%5B%5D=324414&amp;dienstleister%5B%5D=122283&amp;dienstleister%5B%5D=122279&amp;dienstleister%5B%5D=122276&amp;dienstleister%5B%5D=122274&amp;dienstleister%5B%5D=122267&amp;dienstleister%5B%5D=122246&amp;dienstleister%5B%5D=122251&amp;dienstleister%5B%5D=122257&amp;dienstleister%5B%5D=122208&amp;dienstleister%5B%5D=122226&amp;dienstleister%5B%5D=121646&amp;herkunft=http%3A%2F%2Fservice.berlin.de%2Fdienstleistung%2F120686%2F" title="An diesem Tag einen Termin buchen " tabindex="3"><u><span>22</span></u></a></td>
                              <td class="buchbar "><a class="tagesauswahl" href="termin.php?buergerID=&amp;buergername=&amp;OID=633759%2C638130%2C637833%2C636912%2C636918%2C621126%2C636924%2C636999%2C639033%2C639039%2C637965%2C637017%2C633459%2C633462%2C633465%2C637467%2C456852%2C637470%2C635361%2C449991%2C635367%2C635478%2C417111%2C635484%2C637428%2C634149%2C634899%2C628389%2C433566%2C433560%2C633576%2C633585%2C629328%2C630024%2C629508%2C629511%2C629394%2C638550%2C619344%2C619350%2C619356%2C619362%2C638847%2C638490%2C638502%2C638598%2C638658%2C638664%2C638670%2C638676%2C638682%2C638688%2C638805%2C638811%2C638823%2C638826%2C638829%2C437994%2C637827%2C637515%2C624792%2C635223%2C593460%2C634050%2C172463%2C265671%2C639060%2C638484%2C446226%2C637875%2C634992%2C637887%2C638166%2C638169%2C638175%2C637761%2C637764%2C637767%2C638340%2C638343%2C638346&amp;datum=2018-05-23&amp;behoerde=&amp;slots=&amp;anliegen%5B%5D=120686&amp;dienstleister%5B%5D=122210&amp;dienstleister%5B%5D=122217&amp;dienstleister%5B%5D=122219&amp;dienstleister%5B%5D=122227&amp;dienstleister%5B%5D=122231&amp;dienstleister%5B%5D=122238&amp;dienstleister%5B%5D=122243&amp;dienstleister%5B%5D=122252&amp;dienstleister%5B%5D=122260&amp;dienstleister%5B%5D=122262&amp;dienstleister%5B%5D=122254&amp;dienstleister%5B%5D=122271&amp;dienstleister%5B%5D=122273&amp;dienstleister%5B%5D=122277&amp;dienstleister%5B%5D=122280&amp;dienstleister%5B%5D=122282&amp;dienstleister%5B%5D=122284&amp;dienstleister%5B%5D=122291&amp;dienstleister%5B%5D=122285&amp;dienstleister%5B%5D=122286&amp;dienstleister%5B%5D=122296&amp;dienstleister%5B%5D=150230&amp;dienstleister%5B%5D=122301&amp;dienstleister%5B%5D=122297&amp;dienstleister%5B%5D=122294&amp;dienstleister%5B%5D=122312&amp;dienstleister%5B%5D=122314&amp;dienstleister%5B%5D=122304&amp;dienstleister%5B%5D=122311&amp;dienstleister%5B%5D=122309&amp;dienstleister%5B%5D=317869&amp;dienstleister%5B%5D=324433&amp;dienstleister%5B%5D=325341&amp;dienstleister%5B%5D=324434&amp;dienstleister%5B%5D=122281&amp;dienstleister%5B%5D=324414&amp;dienstleister%5B%5D=122283&amp;dienstleister%5B%5D=122279&amp;dienstleister%5B%5D=122276&amp;dienstleister%5B%5D=122274&amp;dienstleister%5B%5D=122267&amp;dienstleister%5B%5D=122246&amp;dienstleister%5B%5D=122251&amp;dienstleister%5B%5D=122257&amp;dienstleister%5B%5D=122208&amp;dienstleister%5B%5D=122226&amp;dienstleister%5B%5D=121646&amp;herkunft=http%3A%2F%2Fservice.berlin.de%2Fdienstleistung%2F120686%2F" title="An diesem Tag einen Termin buchen " tabindex="3"><u><span>23</span></u></a></td>
                              <td class="buchbar "><a class="tagesauswahl" href="termin.php?buergerID=&amp;buergername=&amp;OID=638472%2C638532%2C638460%2C636930%2C636936%2C636942%2C636948%2C636954%2C638121%2C639045%2C639051%2C638478%2C638781%2C633468%2C633474%2C633477%2C637473%2C417009%2C637476%2C635388%2C417069%2C635406%2C635490%2C417162%2C635496%2C638235%2C638241%2C638247%2C634155%2C634125%2C634161%2C637194%2C637200%2C637206%2C638610%2C638694%2C629490%2C630027%2C630042%2C630030%2C629514%2C629520%2C629397%2C638190%2C628194%2C628200%2C628206%2C628212%2C638544%2C638889%2C638907%2C638385%2C638391%2C638397%2C638403%2C638409%2C638415%2C638421%2C638427%2C638433%2C637914%2C637917%2C637920%2C637923%2C637935%2C638835%2C637263%2C637521%2C638790%2C635229%2C440457%2C446232%2C638514%2C638508%2C634998%2C635004%2C638520%2C638526%2C638181%2C638259%2C638262%2C638265%2C637782%2C637785%2C637788%2C637791%2C638355%2C638358%2C638361%2C638364%2C638367&amp;datum=2018-05-24&amp;behoerde=&amp;slots=&amp;anliegen%5B%5D=120686&amp;dienstleister%5B%5D=122210&amp;dienstleister%5B%5D=122217&amp;dienstleister%5B%5D=122219&amp;dienstleister%5B%5D=122227&amp;dienstleister%5B%5D=122231&amp;dienstleister%5B%5D=122238&amp;dienstleister%5B%5D=122243&amp;dienstleister%5B%5D=122252&amp;dienstleister%5B%5D=122260&amp;dienstleister%5B%5D=122262&amp;dienstleister%5B%5D=122254&amp;dienstleister%5B%5D=122271&amp;dienstleister%5B%5D=122273&amp;dienstleister%5B%5D=122277&amp;dienstleister%5B%5D=122280&amp;dienstleister%5B%5D=122282&amp;dienstleister%5B%5D=122284&amp;dienstleister%5B%5D=122291&amp;dienstleister%5B%5D=122285&amp;dienstleister%5B%5D=122286&amp;dienstleister%5B%5D=122296&amp;dienstleister%5B%5D=150230&amp;dienstleister%5B%5D=122301&amp;dienstleister%5B%5D=122297&amp;dienstleister%5B%5D=122294&amp;dienstleister%5B%5D=122312&amp;dienstleister%5B%5D=122314&amp;dienstleister%5B%5D=122304&amp;dienstleister%5B%5D=122311&amp;dienstleister%5B%5D=122309&amp;dienstleister%5B%5D=317869&amp;dienstleister%5B%5D=324433&amp;dienstleister%5B%5D=325341&amp;dienstleister%5B%5D=324434&amp;dienstleister%5B%5D=122281&amp;dienstleister%5B%5D=324414&amp;dienstleister%5B%5D=122283&amp;dienstleister%5B%5D=122279&amp;dienstleister%5B%5D=122276&amp;dienstleister%5B%5D=122274&amp;dienstleister%5B%5D=122267&amp;dienstleister%5B%5D=122246&amp;dienstleister%5B%5D=122251&amp;dienstleister%5B%5D=122257&amp;dienstleister%5B%5D=122208&amp;dienstleister%5B%5D=122226&amp;dienstleister%5B%5D=121646&amp;herkunft=http%3A%2F%2Fservice.berlin.de%2Fdienstleistung%2F120686%2F" title="An diesem Tag einen Termin buchen " tabindex="3"><u><span>24</span></u></a></td>
                              <td class="buchbar "><a class="tagesauswahl" href="termin.php?buergerID=&amp;buergername=&amp;OID=432852%2C638901%2C592200%2C638913%2C636960%2C636966%2C625098%2C639087%2C637035%2C637041%2C639057%2C638991%2C637056%2C633480%2C633483%2C633486%2C637479%2C417021%2C637482%2C635418%2C417081%2C635448%2C635502%2C417123%2C635508%2C638256%2C634167%2C637212%2C433566%2C433560%2C638856%2C638868%2C629496%2C630036%2C629523%2C629529%2C629400%2C638550%2C619344%2C619350%2C619356%2C619362%2C638847%2C635169%2C635181%2C638598%2C638658%2C638664%2C638670%2C638676%2C638682%2C638688%2C638805%2C638811%2C638823%2C638826%2C638829%2C437994%2C582504%2C423141%2C638985%2C423123%2C628353%2C172457%2C446229%2C638934%2C635010%2C638919%2C638268%2C638271%2C637797%2C637800%2C638349%2C638352&amp;datum=2018-05-25&amp;behoerde=&amp;slots=&amp;anliegen%5B%5D=120686&amp;dienstleister%5B%5D=122210&amp;dienstleister%5B%5D=122217&amp;dienstleister%5B%5D=122219&amp;dienstleister%5B%5D=122227&amp;dienstleister%5B%5D=122231&amp;dienstleister%5B%5D=122238&amp;dienstleister%5B%5D=122243&amp;dienstleister%5B%5D=122252&amp;dienstleister%5B%5D=122260&amp;dienstleister%5B%5D=122262&amp;dienstleister%5B%5D=122254&amp;dienstleister%5B%5D=122271&amp;dienstleister%5B%5D=122273&amp;dienstleister%5B%5D=122277&amp;dienstleister%5B%5D=122280&amp;dienstleister%5B%5D=122282&amp;dienstleister%5B%5D=122284&amp;dienstleister%5B%5D=122291&amp;dienstleister%5B%5D=122285&amp;dienstleister%5B%5D=122286&amp;dienstleister%5B%5D=122296&amp;dienstleister%5B%5D=150230&amp;dienstleister%5B%5D=122301&amp;dienstleister%5B%5D=122297&amp;dienstleister%5B%5D=122294&amp;dienstleister%5B%5D=122312&amp;dienstleister%5B%5D=122314&amp;dienstleister%5B%5D=122304&amp;dienstleister%5B%5D=122311&amp;dienstleister%5B%5D=122309&amp;dienstleister%5B%5D=317869&amp;dienstleister%5B%5D=324433&amp;dienstleister%5B%5D=325341&amp;dienstleister%5B%5D=324434&amp;dienstleister%5B%5D=122281&amp;dienstleister%5B%5D=324414&amp;dienstleister%5B%5D=122283&amp;dienstleister%5B%5D=122279&amp;dienstleister%5B%5D=122276&amp;dienstleister%5B%5D=122274&amp;dienstleister%5B%5D=122267&amp;dienstleister%5B%5D=122246&amp;dienstleister%5B%5D=122251&amp;dienstleister%5B%5D=122257&amp;dienstleister%5B%5D=122208&amp;dienstleister%5B%5D=122226&amp;dienstleister%5B%5D=121646&amp;herkunft=http%3A%2F%2Fservice.berlin.de%2Fdienstleistung%2F120686%2F" title="An diesem Tag einen Termin buchen " tabindex="3"><u><span>25</span></u></a></td>
                              <td class="nichtbuchbar "><span>26</span></td>
                              <td><span class="sonnfeiertag"><span>27</span></span></td>
                            </tr><tr>
                              <td class="buchbar "><a class="tagesauswahl" href="termin.php?buergerID=&amp;buergername=&amp;OID=635466%2C635256%2C635442%2C635079%2C635085%2C629601%2C635091%2C639003%2C639009%2C639015%2C634842%2C633441%2C633444%2C633447%2C455958%2C455424%2C592401%2C635265%2C417039%2C635271%2C635412%2C417090%2C635430%2C647004%2C647010%2C647016%2C634170%2C634173%2C634176%2C639213%2C639219%2C639225%2C635424%2C635400%2C222485%2C632034%2C633297%2C633300%2C633303%2C632364%2C632367%2C633882%2C638862%2C598191%2C598197%2C598209%2C598215%2C635352%2C637239%2C637245%2C637257%2C638943%2C638949%2C638955%2C638961%2C638967%2C638973%2C638979%2C639069%2C639072%2C639075%2C639078%2C639081%2C437979%2C635193%2C635331%2C638817%2C635244%2C172439%2C446223%2C635319%2C634971%2C635382%2C637806%2C637815%2C637812%2C637809%2C637740%2C637743%2C637746%2C638316%2C638319%2C638322&amp;datum=2018-05-28&amp;behoerde=&amp;slots=&amp;anliegen%5B%5D=120686&amp;dienstleister%5B%5D=122210&amp;dienstleister%5B%5D=122217&amp;dienstleister%5B%5D=122219&amp;dienstleister%5B%5D=122227&amp;dienstleister%5B%5D=122231&amp;dienstleister%5B%5D=122238&amp;dienstleister%5B%5D=122243&amp;dienstleister%5B%5D=122252&amp;dienstleister%5B%5D=122260&amp;dienstleister%5B%5D=122262&amp;dienstleister%5B%5D=122254&amp;dienstleister%5B%5D=122271&amp;dienstleister%5B%5D=122273&amp;dienstleister%5B%5D=122277&amp;dienstleister%5B%5D=122280&amp;dienstleister%5B%5D=122282&amp;dienstleister%5B%5D=122284&amp;dienstleister%5B%5D=122291&amp;dienstleister%5B%5D=122285&amp;dienstleister%5B%5D=122286&amp;dienstleister%5B%5D=122296&amp;dienstleister%5B%5D=150230&amp;dienstleister%5B%5D=122301&amp;dienstleister%5B%5D=122297&amp;dienstleister%5B%5D=122294&amp;dienstleister%5B%5D=122312&amp;dienstleister%5B%5D=122314&amp;dienstleister%5B%5D=122304&amp;dienstleister%5B%5D=122311&amp;dienstleister%5B%5D=122309&amp;dienstleister%5B%5D=317869&amp;dienstleister%5B%5D=324433&amp;dienstleister%5B%5D=325341&amp;dienstleister%5B%5D=324434&amp;dienstleister%5B%5D=122281&amp;dienstleister%5B%5D=324414&amp;dienstleister%5B%5D=122283&amp;dienstleister%5B%5D=122279&amp;dienstleister%5B%5D=122276&amp;dienstleister%5B%5D=122274&amp;dienstleister%5B%5D=122267&amp;dienstleister%5B%5D=122246&amp;dienstleister%5B%5D=122251&amp;dienstleister%5B%5D=122257&amp;dienstleister%5B%5D=122208&amp;dienstleister%5B%5D=122226&amp;dienstleister%5B%5D=121646&amp;herkunft=http%3A%2F%2Fservice.berlin.de%2Fdienstleistung%2F120686%2F" title="An diesem Tag einen Termin buchen " tabindex="3"><u><span>28</span></u></a></td>
                              <td class="buchbar "><a class="tagesauswahl" href="termin.php?buergerID=&amp;buergername=&amp;OID=432846%2C637380%2C637368%2C637326%2C636930%2C636936%2C636942%2C636948%2C636954%2C638121%2C639045%2C639051%2C638478%2C638781%2C633450%2C633453%2C633456%2C522303%2C416982%2C454761%2C635298%2C417048%2C635307%2C635460%2C417102%2C635472%2C635145%2C635151%2C635157%2C634131%2C634137%2C634143%2C634881%2C634887%2C634893%2C637101%2C637173%2C637179%2C632040%2C633306%2C633309%2C633312%2C632370%2C632373%2C633885%2C638190%2C628194%2C628200%2C628206%2C628212%2C638544%2C638202%2C638214%2C638385%2C638391%2C638397%2C638403%2C638409%2C638415%2C638421%2C638427%2C638433%2C637914%2C637917%2C637920%2C637923%2C637935%2C638835%2C637263%2C637521%2C638790%2C635229%2C172454%2C446223%2C638514%2C638508%2C634998%2C635004%2C638520%2C638526%2C638148%2C638154%2C638160%2C638163%2C637749%2C637752%2C637755%2C637758%2C638325%2C638328%2C638331%2C638334%2C638337&amp;datum=2018-05-29&amp;behoerde=&amp;slots=&amp;anliegen%5B%5D=120686&amp;dienstleister%5B%5D=122210&amp;dienstleister%5B%5D=122217&amp;dienstleister%5B%5D=122219&amp;dienstleister%5B%5D=122227&amp;dienstleister%5B%5D=122231&amp;dienstleister%5B%5D=122238&amp;dienstleister%5B%5D=122243&amp;dienstleister%5B%5D=122252&amp;dienstleister%5B%5D=122260&amp;dienstleister%5B%5D=122262&amp;dienstleister%5B%5D=122254&amp;dienstleister%5B%5D=122271&amp;dienstleister%5B%5D=122273&amp;dienstleister%5B%5D=122277&amp;dienstleister%5B%5D=122280&amp;dienstleister%5B%5D=122282&amp;dienstleister%5B%5D=122284&amp;dienstleister%5B%5D=122291&amp;dienstleister%5B%5D=122285&amp;dienstleister%5B%5D=122286&amp;dienstleister%5B%5D=122296&amp;dienstleister%5B%5D=150230&amp;dienstleister%5B%5D=122301&amp;dienstleister%5B%5D=122297&amp;dienstleister%5B%5D=122294&amp;dienstleister%5B%5D=122312&amp;dienstleister%5B%5D=122314&amp;dienstleister%5B%5D=122304&amp;dienstleister%5B%5D=122311&amp;dienstleister%5B%5D=122309&amp;dienstleister%5B%5D=317869&amp;dienstleister%5B%5D=324433&amp;dienstleister%5B%5D=325341&amp;dienstleister%5B%5D=324434&amp;dienstleister%5B%5D=122281&amp;dienstleister%5B%5D=324414&amp;dienstleister%5B%5D=122283&amp;dienstleister%5B%5D=122279&amp;dienstleister%5B%5D=122276&amp;dienstleister%5B%5D=122274&amp;dienstleister%5B%5D=122267&amp;dienstleister%5B%5D=122246&amp;dienstleister%5B%5D=122251&amp;dienstleister%5B%5D=122257&amp;dienstleister%5B%5D=122208&amp;dienstleister%5B%5D=122226&amp;dienstleister%5B%5D=121646&amp;herkunft=http%3A%2F%2Fservice.berlin.de%2Fdienstleistung%2F120686%2F" title="An diesem Tag einen Termin buchen " tabindex="3"><u><span>29</span></u></a></td>
                              <td class="buchbar "><a class="tagesauswahl" href="termin.php?buergerID=&amp;buergername=&amp;OID=633759%2C638130%2C637833%2C636912%2C636918%2C621126%2C636924%2C636999%2C639033%2C639039%2C637965%2C637017%2C633459%2C633462%2C633465%2C637467%2C456852%2C637470%2C635361%2C449991%2C635367%2C635478%2C417111%2C635484%2C637428%2C634149%2C634899%2C433566%2C433560%2C633576%2C633585%2C632046%2C633315%2C632376%2C632379%2C633888%2C638550%2C619344%2C619350%2C619356%2C619362%2C638847%2C638490%2C638502%2C638598%2C638658%2C638664%2C638670%2C638676%2C638682%2C638688%2C638805%2C638811%2C638823%2C638826%2C638829%2C437994%2C637827%2C637515%2C624792%2C635223%2C637875%2C634992%2C637887%2C638166%2C638169%2C638175%2C637761%2C637764%2C637767%2C638340%2C638343%2C638346&amp;datum=2018-05-30&amp;behoerde=&amp;slots=&amp;anliegen%5B%5D=120686&amp;dienstleister%5B%5D=122210&amp;dienstleister%5B%5D=122217&amp;dienstleister%5B%5D=122219&amp;dienstleister%5B%5D=122227&amp;dienstleister%5B%5D=122231&amp;dienstleister%5B%5D=122238&amp;dienstleister%5B%5D=122243&amp;dienstleister%5B%5D=122252&amp;dienstleister%5B%5D=122260&amp;dienstleister%5B%5D=122262&amp;dienstleister%5B%5D=122254&amp;dienstleister%5B%5D=122271&amp;dienstleister%5B%5D=122273&amp;dienstleister%5B%5D=122277&amp;dienstleister%5B%5D=122280&amp;dienstleister%5B%5D=122282&amp;dienstleister%5B%5D=122284&amp;dienstleister%5B%5D=122291&amp;dienstleister%5B%5D=122285&amp;dienstleister%5B%5D=122286&amp;dienstleister%5B%5D=122296&amp;dienstleister%5B%5D=150230&amp;dienstleister%5B%5D=122301&amp;dienstleister%5B%5D=122297&amp;dienstleister%5B%5D=122294&amp;dienstleister%5B%5D=122312&amp;dienstleister%5B%5D=122314&amp;dienstleister%5B%5D=122304&amp;dienstleister%5B%5D=122311&amp;dienstleister%5B%5D=122309&amp;dienstleister%5B%5D=317869&amp;dienstleister%5B%5D=324433&amp;dienstleister%5B%5D=325341&amp;dienstleister%5B%5D=324434&amp;dienstleister%5B%5D=122281&amp;dienstleister%5B%5D=324414&amp;dienstleister%5B%5D=122283&amp;dienstleister%5B%5D=122279&amp;dienstleister%5B%5D=122276&amp;dienstleister%5B%5D=122274&amp;dienstleister%5B%5D=122267&amp;dienstleister%5B%5D=122246&amp;dienstleister%5B%5D=122251&amp;dienstleister%5B%5D=122257&amp;dienstleister%5B%5D=122208&amp;dienstleister%5B%5D=122226&amp;dienstleister%5B%5D=121646&amp;herkunft=http%3A%2F%2Fservice.berlin.de%2Fdienstleistung%2F120686%2F" title="An diesem Tag einen Termin buchen " tabindex="3"><u><span>30</span></u></a></td>
                              <td class="buchbar "><a class="tagesauswahl" href="termin.php?buergerID=&amp;buergername=&amp;OID=638472%2C638532%2C638460%2C636930%2C636936%2C636942%2C636948%2C636954%2C638121%2C639045%2C639051%2C638478%2C638781%2C633468%2C633474%2C633477%2C637473%2C417009%2C637476%2C635388%2C417069%2C635406%2C635490%2C417162%2C635496%2C638235%2C638241%2C638247%2C634155%2C634125%2C634161%2C637194%2C637200%2C637206%2C638610%2C638694%2C633897%2C633318%2C633321%2C633324%2C633999%2C634002%2C633891%2C638190%2C628194%2C628200%2C628206%2C628212%2C638544%2C638889%2C638907%2C638385%2C638391%2C638397%2C638403%2C638409%2C638415%2C638421%2C638427%2C638433%2C637914%2C637917%2C637920%2C637923%2C637935%2C638835%2C637263%2C637521%2C638790%2C635229%2C440457%2C446232%2C638514%2C638508%2C634998%2C635004%2C638520%2C638526%2C638181%2C638259%2C638262%2C638265%2C637782%2C637785%2C637788%2C637791%2C638355%2C638358%2C638361%2C638364%2C638367&amp;datum=2018-05-31&amp;behoerde=&amp;slots=&amp;anliegen%5B%5D=120686&amp;dienstleister%5B%5D=122210&amp;dienstleister%5B%5D=122217&amp;dienstleister%5B%5D=122219&amp;dienstleister%5B%5D=122227&amp;dienstleister%5B%5D=122231&amp;dienstleister%5B%5D=122238&amp;dienstleister%5B%5D=122243&amp;dienstleister%5B%5D=122252&amp;dienstleister%5B%5D=122260&amp;dienstleister%5B%5D=122262&amp;dienstleister%5B%5D=122254&amp;dienstleister%5B%5D=122271&amp;dienstleister%5B%5D=122273&amp;dienstleister%5B%5D=122277&amp;dienstleister%5B%5D=122280&amp;dienstleister%5B%5D=122282&amp;dienstleister%5B%5D=122284&amp;dienstleister%5B%5D=122291&amp;dienstleister%5B%5D=122285&amp;dienstleister%5B%5D=122286&amp;dienstleister%5B%5D=122296&amp;dienstleister%5B%5D=150230&amp;dienstleister%5B%5D=122301&amp;dienstleister%5B%5D=122297&amp;dienstleister%5B%5D=122294&amp;dienstleister%5B%5D=122312&amp;dienstleister%5B%5D=122314&amp;dienstleister%5B%5D=122304&amp;dienstleister%5B%5D=122311&amp;dienstleister%5B%5D=122309&amp;dienstleister%5B%5D=317869&amp;dienstleister%5B%5D=324433&amp;dienstleister%5B%5D=325341&amp;dienstleister%5B%5D=324434&amp;dienstleister%5B%5D=122281&amp;dienstleister%5B%5D=324414&amp;dienstleister%5B%5D=122283&amp;dienstleister%5B%5D=122279&amp;dienstleister%5B%5D=122276&amp;dienstleister%5B%5D=122274&amp;dienstleister%5B%5D=122267&amp;dienstleister%5B%5D=122246&amp;dienstleister%5B%5D=122251&amp;dienstleister%5B%5D=122257&amp;dienstleister%5B%5D=122208&amp;dienstleister%5B%5D=122226&amp;dienstleister%5B%5D=121646&amp;herkunft=http%3A%2F%2Fservice.berlin.de%2Fdienstleistung%2F120686%2F" title="An diesem Tag einen Termin buchen " tabindex="3"><u><span>31</span></u></a></td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            </tbody>
                          </table>
                        </div> <!-- /calendar-month-table END -->
                      </div> <!-- /row-fluid END -->
                    </div> <!-- /calendar-table END -->
                    <div style="clear:left; background:url(blank.png);">
                      An blau unterlegten und unterstrichenen Tagen sind noch Termine verf&uuml;gbar.<br>
                      An rot unterlegten Tagen sind alle Termine ausgebucht.<br>
                      An wei&szlig; unterlegten Tagen sind noch keine Termine zur Buchung freigegeben.
                    </div>
                  </div> <!-- /collapsible-body End -->
                </div> <!-- /collapsible-group  End  ////////////////////////////////////////////////////// -->




              </div> <!-- HHI BODY End: all HHI contents  -->
              <br /><br />


            </div><!-- /html5-section -->

          </div>

          <!-- INCLUDE BEGIN: Infocolumn -->

          <div class="span3 column-right html5-aside" role="complementary">
            <h2 class="aural">Es folgen die Inhalte der rechten Seitenspalte</h2>
            <div class="html5-section content-marginal">



              <!-- FLEX BEGIN: ContactInclude --><div class="html5-section modul-contactinclude"><!--FLEX BEGIN: Text/Bild-->
              <div class="html5-section block modul-text_bild float">    <div class="html5-header header">
                <h3 class="title">Bürgertelefon 115</h3>    </div>
                <div class="html5-figure image main-image type-teaser" style="">
                  <img
                    src="https://service.berlin.de/converjon/?ts=1435756104&#38;width=166&#38;height=125&#38;url=https%3A%2F%2Fservice.berlin.de%2Flandalle9%2F_assets%2F115_logo_contact.png&#38;mime=image%2Fpng"
                    alt="Logo B&#252;rgertelefon 115"
                    title="Logo B&#252;rgertelefon 115"
                  />


                  <div class="caption">



                    <span class="copyright">Bild: BMI</span>

                  </div>


                </div>
                <div class="html5-section body">
                  <div class="text ">
                    <div class="textile">
                      <p>
                        Ihr zentraler Zugang zur Verwaltung
                      </p>
                      <p>
                        Telefon: (030) 115
                      </p>
                      <p>
                        Montag &#8211; Freitag von<br />
                        07:00 bis 18:00 Uhr
                      </p>
                      <ul>
                        <li>
                          <a href="http://www.berlin.de/115">Bürgertelefon 115</a>
                        </li>
                        <li>
                          <a href="https://service.berlin.de/virtueller-assistent/virtueller-assistent-606279.php"
                             title="Betaversion des virtuellen Assistenten">Virtueller
                            Assistent (beta)</a>
                        </li>
                      </ul>
                    </div>        </div>
                </div>
              </div>
              <!--FLEX END: Text/Bild-->
            </div><!-- FLEX END: ContactInclude --><!-- FLEX BEGIN: ContactInclude --><div class="html5-section modul-contactinclude"><!--FLEX BEGIN: Text/Bild-->
              <div class="html5-section block modul-text_bild float">    <div class="html5-header header">
                <h3 class="title">Diensteanbieter</h3>    </div>
                <div class="html5-figure image main-image type-teaser" style="">
                  <a href="http://www.itdz-berlin.de/" target="_blank" title="Detailseite (&#214;ffnet in neuem Fenster)">    <img
                    src="https://service.berlin.de/converjon/?ts=1396904914&#38;width=166&#38;height=125&#38;url=https%3A%2F%2Fservice.berlin.de%2F_assets%2Flogo_itdz.png&#38;mime=image%2Fpng"
                    alt="Link zu: Detailseite"
                    title="Detailseite"
                  />
                  </a>

                </div>
                <div class="html5-section body">
                  <div class="text ">
                    <div class="textile">
                      <p>
                        Das <span class="caps">ITDZ</span> Berlin &#8211; der
                        Lösungspartner für die moderne Verwaltung
                      </p>
                    </div>        </div>
                </div>
              </div>
              <!--FLEX END: Text/Bild-->
            </div><!-- FLEX END: ContactInclude -->
            </div>
          </div>

          <!-- INCLUDE END: Infocolumn -->
        </div>

        <!--    container-wrapper + container + row + span12 -->

        <div class="row">
          <div class="span12">
            <div class="html5-footer content-footer" role="contentinfo">
              <!-- NAVIGATION BEGIN: footer -->

              <div class="html5-nav">
                <ul class="nav">
                  <li><a href="https://www.berlin.de/sen/inneres/impressum/index.php" class="ic-fa-impressum">Impressum</a></li>
                  <li class="right"><a class="ic-fa-print" href="javascript:window.print();">Druckversion</a></li>
                  <li class="right"><a class="ic-fa-totop" href="#top">zum Seitenanfang</a></li>
                </ul>
              </div>

              <!-- NAVIGATION END: footer -->
              <div class="section_splitter hidden-desktop hidden-tablet"></div>
              <div class="html5-nav meta-navi hidden-desktop hidden-tablet">
                <ul class="nav">
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- NAVIGATION BEGIN: Feedback -->
<div id="feedback-footer">
  <div id="feedback-form" class="feedform-simple">
    <div class="feed-bar">
      <ul class="feed-tabs" id="id-feedtabs">
        <li class="feed-feedback" style="width:100%" title="Feedback-Formular"><a href="#">Feedback</a></li>
      </ul>
    </div>
    <div id="feed-response">
      <div id="feed-feedback" class="feed-box">
        <span class="close" title="Schlie&#223;en">&times;</span>
        <form id="feed-form-kommentar" method="post" action="https://service.berlin.de/formular.feedback/terminvereinbarung/__i9/std/foot.inc">
          <div>
            <label for="feed-form-kommentar_message_f">
              <strong>Nachricht</strong>
              <textarea id="feed-form-kommentar_message_f" rows="7" cols="50" name="message"></textarea>
            </label>
          </div>
          <div>
            <label class="input feedback-show-email checkbox" for="feed-form-kommentar_email">W&#252;nschen Sie eine Antwort?                            <input id="feed-form-kommentar_email" class="feedback-show-email" type="checkbox" value="1" name="show_email">
            </label>
          </div>
          <div class="email-hide" style="display:none">
            <label for="feed-form-kommentar_email_f">
              <strong>Ihre E-Mail-Adresse</strong>
              <input id="feed-form-kommentar_email_f" class="fehler_email" type="text" name="email" disabled="disabled">
            </label>
          </div>
          <input type="hidden" value="kommentar" name="type">
            <button class="btn submit" type="submit">Senden</button>
        </form>
      </div>
    </div>
  </div>
</div>

<script type="text/javascript">
  jQuery('<input type="hidden">').attr('name', 'sala'+'mi').val('lecker').appendTo(jQuery('#feed-form-kommentar'))
  jQuery('#feed-form-kommentar').on('click', function(f) { var i = $('input[name='+'sala'+'mi]'); i.attr('name', i.attr('name')+'brot').val(''); return true; });
</script>
<!-- NAVIGATION END: Feedback -->

<!-- MOBILE NAVIGATION START -->
<div class="navigation-mobile hidden-desktop hidden-tablet" role="navigation">
  <p class="navSkip">Navigiere direkt zu:</p>
  <ul class="navSkip">
    <li><a href="#mobile-nav-toggle" tabindex="1" id="hiddenNavToggler">Navigation <!-- append text per css here --></a></li>
  </ul>
  <div class="sticky-header bde-gradient">
    <div class="red-line"></div>
    <div class="portal-logo">
      <a title="Link f&#252;hrt zur Startseite von Berlin.de" href="http://www.berlin.de" >
        <img title="Link f&#252;hrt zur Startseite von Berlin.de" alt="Bild zeigt: Berlin.de Logo" src="//service.berlin.de/i9f/images/berlin_de.png" />
      </a>
    </div>
    <button class="btn nav-toggle" id="mobile-nav-toggle" title="Mobile Navigation" aria-labelledby="hiddenNavToggler">
      <span class="aural"></span>
      <span class="icon-menu"> 
                        <span class="line line-1"></span>
                        <span class="line line-2"></span>
                        <span class="line line-3"></span>
                    </span>
    </button>
  </div>
  <div class="wrapper">
    <div class="sticky-container-head">
      <div class="offcanvas-search">
        <form class="institutionssuche institutionssuche-mobile" method="get" action="https://service.berlin.de/suche/stichwort/">
          <div class="control-group searchform mobile" role="search">
            <label class="aural" id="aural_institutionssuche_mobile">
              Suche auf der Internetseite &#39;Service-Portal Berlin&#39;:        </label>
            <input type="search" placeholder="Suchbegriff"
                   name="x" aria-labelledby="aural_institutionssuche_mobile"
                   maxlength="255"
                   title="Hier k&#246;nnen Sie einen Text eingeben, um die Internetseite &#39;Service-Portal Berlin&#39; zu durchsuchen"
            />
            <button class="btn global-search-submit" type="submit">
              <span class="hidden-phone">Suchen</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="nav-container">
      <div class="nav-container-body">
        <ul class="nav-menu menu">
          <li class="menu-item has-dropdown ">
            <a href="#!" class="menu-link">
              Service-Portal Berlin                                </a>
            <!-- HIER 0 -->
            <ul class="nav-dropdown menu ">
              <li class="menu-item">
                <a href="https://service.berlin.de/" class="menu-link" title="Link zu: Startseite von &#34;Service-Portal Berlin&#34;">Service-Portal Berlin: Startseite</a>                                        <ul class="nav"><li class=" menu-item">
                <a href="https://service.berlin.de/dienstleistungen/" class=" menu-link">Dienst&#173;leistungen</a>                    </li>
                <li class=" menu-item">
                  <a href="https://service.berlin.de/standorte/" class=" menu-link">Standorte</a>                    </li>
                <li class=" menu-item active">
                  <a href="https://service.berlin.de/terminvereinbarung/" class=" menu-link">Termin&#173;vereinbarung</a>                    </li>
                <li class=" menu-item">
                  <a href="https://service.berlin.de/onlineverfahren-onlinedienstleistungen/" class=" menu-link">Online-Verfahren</a>                    </li>
                <li class=" menu-item">
                  <a href="https://service.berlin.de/app/" class=" menu-link">App</a>                    </li>
                <li class=" menu-item">
                  <a href="https://service.berlin.de/themen/" class=" menu-link">Themen</a>                    </li></ul>                                    </li>
            </ul>
            <!-- HIER 1 -->

            <ul class="sub crumbs1">
              <li class="menu-item has-no-dropdown">
                <a href="https://service.berlin.de/terminvereinbarung/" class="menu-link">Termin&#173;vereinbarung</a><ul class="sub level-1">
                <li class="menu-item has-no-dropdown">
                  <a href="https://service.berlin.de/terminvereinbarung/hinweise/" class="menu-link">Hinweise</a>
                </li>
                <li class="menu-item has-no-dropdown">
                  <a href="https://service.berlin.de/terminvereinbarung/termin/terminaendern.php" class="menu-link">Termin &#228;ndern</a>
                </li>
                <li class="menu-item has-no-dropdown">
                  <a href="https://service.berlin.de/terminvereinbarung/datenschutzerklaerung/" class="menu-link">Datenschutz&#173;erkl&#228;rung</a>
                </li>
              </ul><!-- class="sub level-1" -->
              </li>
            </ul><!-- crumbs1 -->
            <!-- HIER 2 -->
          </li>
        </ul>

      </div>
    </div>
  </div>
</div>
<!-- MOBILE NAVIGATION END -->

<div class="container-wrapper container-footer">
  <div class="container">
    <div class="row">
      <div class="span12">

        <!-- template start: portal-footer -->
        <div class="html5-footer portal-footer">
          <div>
            <div class="textile">
              <p>
                Diese Seiten werden verantwortet durch die Senatskanzlei des
                Regierenden Bürgermeisters.
              </p>
            </div>        <p>
            Berlin.de ist ein Angebot des Landes Berlin und der BerlinOnline Stadtportal GmbH &#38; Co. KG.            Weitere Informationen hierzu finden Sie im <a href="http://www.berlin.de/wir-ueber-uns-be/impressum/">Impressum</a>.        </p>
          </div>
          <div class="html5-nav">
            <ul class="nav">
              <li>Weitere Metropol-Webseiten:</li>
              <li><a href="http://www.hamburg.de/">Hamburg</a></li>
              <li><a href="http://www.muenchen.de/">M&#252;nchen</a></li>
              <li><a href="http://www.koeln.de/">K&#246;ln</a></li>
            </ul>
          </div><!-- /html5-nav -->
        </div><!-- /html5-footer -->
        <!-- /template end: portal-footer -->
      </div>
    </div>
  </div>
</div>

<script type="text/javascript" src="//service.berlin.de/i9f/v4/js/bo-foot?ts=1523486034"></script>


<!-- Zaehlpixel -->

<div id="cp">
  <script type="text/javascript">/*<![CDATA[*/
    if (typeof(DartIvwKategorie) == "undefined") DartIvwKategorie="beberlin";

    // mobile-browser erkannt, ivw-Pixel tagge bis 1.7.13, danach analog aber ueber das ioam/mobberde
    DartIvwKategorie = "szmmobil_" + DartIvwKategorie;

    var CP = location.protocol+"//boss.berlinonline.de/cp.php?a=berlin&amp;r="+escape(document.referrer)+"&amp;cat="+DartIvwKategorie+"&amp;p="+escape(document.location)+"&amp;d="+(Math.random()*100000);
    document.write("<img src=\""+CP+"\" width=\"1\" height=\"1\" alt=\"\" id=\"cp_pixel\" style=\"position:absolute;width:1px;height:1px;\" />");
  /*]]>*/</script>
<noscript><img src="https://boss.berlinonline.de/cp.php?a=berlin&amp;p=https%3A%2F%2Fservice.berlin.de%2Fservice.berlin.de%2Fterminvereinbarung%2F__i9%2Fstd%2Ffoot.inc&amp;r=https%3A%2F%2Fservice.berlin.de%2Fterminvereinbarung%2Ftermin%2Ftag.php%3Fid%3D%26buergerID%3D%26buergername%3D%26absagecode%3D%26Datum%3D1525125600%26anliegen%255B%255D%3D121151%26dienstleister%255B%255D%3D122285%26herkunft%3D1" alt="" /></noscript>

<div id="ivw">

  <!-- szm pixel mobile variante -->
  <!-- SZM VERSION="2.0" -->
  <script type="text/javascript" src="https://script.ioam.de/iam"></script>
  <script type="text/javascript">
    var iam_data = {"mg":"yes","cp":DartIvwKategorie,"oc":DartIvwKategorie,"st":"mobberde","sv":(location.pathname=="/"?"ke":"mo"),"co":"mobile "+location.hostname}
    iom.c(iam_data,1);
  </script>
  <!-- /SZM -->

</div>
</div>


<!-- Piwik -->
<script type="text/javascript">
  var _paq = _paq || [];
  _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
  _paq.push(["setCookieDomain", "*.berlinonline.de"]);
  _paq.push(["trackPageView"]);
  _paq.push(["enableLinkTracking"]);

  (function() {
  var u=(("https:" == document.location.protocol) ? "https" : "http") + "://piwik.berlinonline.de/";
  _paq.push(["setTrackerUrl", u+"piwik.php"]);
  _paq.push(["setSiteId", document.location.hostname.match(/service\.berlin\.de$/) ? "6" : "1"]);
  var d=document, g=d.createElement("script"), s=d.getElementsByTagName("script")[0]; g.type="text/javascript";
  g.defer=true; g.async=true; g.src=u+"piwik"; s.parentNode.insertBefore(g,s);
})();
</script>
<!-- End Piwik Code -->




</body>
</html>`