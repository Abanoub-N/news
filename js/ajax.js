var generalData = [];
var healthData = [];
var scienceData = [];
var businessData = [];
var technologyData = [];
var home_r = document.getElementById("home_R");
var home_l = document.getElementById("home_L");
var healthSection = document.getElementById("slider1");
var scienceSection = document.getElementById("slider2");
var businessSection = document.getElementById("slider3");
var technologySection = document.getElementById("technology");
var mostPopular = document.getElementById("most_popular");
var mostViewed = document.getElementById("most_viewed");
var lastModifiedPosts = document.getElementById("last_modified_posts");
var lastModifiedPostsConact = document.getElementById(
  "last_modified_posts_conact"
);

function getGeneralData() {
  //sports
  var httpReq = new XMLHttpRequest(); // nos5a

  httpReq.open(
    "GET",
    "http://newsapi.org/v2/top-headlines?country=eg&category=general&apiKey=cc0459ac621a47d089a9c7f5a20cfd76"
  ); // bft7 kobri

  httpReq.send(); // b5li el ragil yro7

  httpReq.onreadystatechange = function () {
    // fire kol mra , dg elmo5ber bta3i

    // readyState , status
    if (httpReq.readyState == 4 && httpReq.status == 200) {
      // radi 3n el data
      generalData = JSON.parse(httpReq.response); // convert from string to json "array of objects"
      generalData = generalData.articles;

      displayGeneralData();
      //   displayTitle();
    }
  };
}

getGeneralData();

function displayGeneralData() {
  var home_L = ``;
  for (var i = 0; i < 4; i++) {
    home_L +=
      `
    <div class="col-md-6 col-6 paddding animate-box" data-animate-effect="fadeIn">
       <div class="fh5co_suceefh5co_height_2"><img src="` +
      generalData[i].urlToImage +
      `" alt="img"/>
           <div class="fh5co_suceefh5co_height_position_absolute_font_2">
               <div class=""><a href="` +
      generalData[i].url +
      `" target="_blank" class="fh5co_good_font_2">` +
      generalData[i].title +
      `</a></div>
           </div>
       </div>
    </div>
    `;

    var home_R =
      `
    <div class="home-left">
       <div class="fh5co_suceefh5co_height_2"><img src="` +
      generalData[4].urlToImage +
      `" alt="img"/>
           <div class="fh5co_suceefh5co_height_position_absolute_font_2">
               <div class=""><a href="` +
      generalData[i].url +
      `" target="_blank" class="fh5co_good_font_2">` +
      generalData[4].title +
      `</a></div>
           </div>
       </div>
    </div>
    `;
  }
  home_l.innerHTML = home_L;
  home_r.innerHTML = home_R;
  var popular = ``;
  for (var i = 4; i < 11; i++) {
    popular +=
      `
      <div class="row pb-3">
      <div class="col-7 paddding">
        <div class="most_fh5co_treding_font">
        <a href="` +
      generalData[i].url +
      `" target="_blank" class="most_title_font">` +
      generalData[4].title +
      `</a>
        </div>
        <div class="most_fh5co_treding_font_123">` +
      generalData[i].publishedAt +
      `</div>
      </div>
      <div class="col-5 align-self-center">
      <img
        src="` +
      generalData[i].urlToImage +
      `"
        alt="img"
        class="fh5co_most_trading"
      />
    </div>
    </div>
    `;
  }
  mostPopular.innerHTML = popular;

  var most = ``;
  for (var i = 11; i < 14; i++) {
    most +=
      `
    <div class="post">
      <div class="footer_makes_sub_font">` +
      generalData[i].publishedAt +
      `</div>
      <a href="` +
      generalData[i].url +
      `" target="_blank" class="footer_post pb-4">
        ` +
      generalData[i].title +
      `
      </a>
    </div>
    `;
  }
  mostViewed.innerHTML = most;
}

function getHealthData() {
  //sports
  var httpReq = new XMLHttpRequest(); // nos5a

  httpReq.open(
    "GET",
    "http://newsapi.org/v2/top-headlines?country=eg&category=health&apiKey=cc0459ac621a47d089a9c7f5a20cfd76"
  ); // bft7 kobri

  httpReq.send(); // b5li el ragil yro7

  httpReq.onreadystatechange = function () {
    // fire kol mra , dg elmo5ber bta3i

    // readyState , status
    if (httpReq.readyState == 4 && httpReq.status == 200) {
      // radi 3n el data
      healthData = JSON.parse(httpReq.response); // convert from string to json "array of objects"
      healthData = healthData.articles;

      displayHealthData();
      //   displayTitle();
    }
  };
}
getHealthData();

function displayHealthData() {
  var health = ``;
  for (var i = 0; i < 4; i++) {
    health +=
      `
        <div class="item px-2 col-lg-3">
        <div class="fh5co_latest_trading_img_position_relative">
          <div class="fh5co_latest_trading_img">
            <img
              src="` +
      healthData[i].urlToImage +
      `"
              alt=""
              class="fh5co_img_special_relative"
            />
          </div>
          <div class="fh5co_latest_trading_img_position_absolute"></div>
          <h5 class="fh5co_latest_trading_img_position_absolute_1">
            <a href="` +
      healthData[i].url +
      `" target="_blank" class="text-white">
            ` +
      healthData[i].title +
      `
            </a>
          </h5>
        </div>
      </div>
      `;
  }
  healthSection.innerHTML = health;

  var last = ``;
  for (var i = 4; i < 13; i++) {
    last +=
      `<span class="last-posts">
      <a href="` +
      healthData[i].url +
      `" target="_blank" class="footer_img_post_6"
        ><img src="` +
      healthData[i].urlToImage +
      `" alt="img"
      /></a>
    </span>
    `;
  }
  lastModifiedPosts.innerHTML = last;
  lastModifiedPostsConact.innerHTML = last;
}

function getScienceData() {
  //sports
  var httpReq = new XMLHttpRequest(); // nos5a

  httpReq.open(
    "GET",
    "http://newsapi.org/v2/top-headlines?country=eg&category=science&apiKey=cc0459ac621a47d089a9c7f5a20cfd76"
  ); // bft7 kobri

  httpReq.send(); // b5li el ragil yro7

  httpReq.onreadystatechange = function () {
    // fire kol mra , dg elmo5ber bta3i

    // readyState , status
    if (httpReq.readyState == 4 && httpReq.status == 200) {
      // radi 3n el data
      scienceData = JSON.parse(httpReq.response); // convert from string to json "array of objects"
      scienceData = scienceData.articles;

      displayScienceData();
      //   displayTitle();
    }
  };
}
getScienceData();

function displayScienceData() {
  var science = ``;
  for (var i = 0; i < 6; i++) {
    science +=
      `
          <div class="item px-2 col-lg-4 mb-3">
          <div class="fh5co_latest_trading_img_position_relative">
            <div class="fh5co_latest_trading_img">
              <img
                src="` +
      scienceData[i].urlToImage +
      `"
                alt=""
                class="fh5co_img_special_relative"
              />
            </div>
            <div class="fh5co_latest_trading_img_position_absolute"></div>
            <h5 class="fh5co_latest_trading_img_position_absolute_1">
              <a href="` +
      scienceData[i].url +
      `" target="_blank" class="text-white">
              ` +
      scienceData[i].title +
      `
              </a>
            </h5>
          </div>
        </div>
        `;
  }
  scienceSection.innerHTML = science;
}

function getBusinessData() {
  //sports
  var httpReq = new XMLHttpRequest(); // nos5a

  httpReq.open(
    "GET",
    "http://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=cc0459ac621a47d089a9c7f5a20cfd76"
  ); // bft7 kobri

  httpReq.send(); // b5li el ragil yro7

  httpReq.onreadystatechange = function () {
    // fire kol mra , dg elmo5ber bta3i

    // readyState , status
    if (httpReq.readyState == 4 && httpReq.status == 200) {
      // radi 3n el data
      businessData = JSON.parse(httpReq.response); // convert from string to json "array of objects"
      businessData = businessData.articles;

      displayBusinessData();
      //   displayTitle();
    }
  };
}
getBusinessData();

function displayBusinessData() {
  var business = ``;
  for (var i = 0; i < 4; i++) {
    business +=
      `
            <div class="item px-2 col-lg-3">
            <div class="fh5co_latest_trading_img_position_relative">
              <div class="fh5co_latest_trading_img">
                <img
                  src="` +
      businessData[i].urlToImage +
      `"
                  alt=""
                  class="fh5co_img_special_relative"
                />
              </div>
              <div class="fh5co_latest_trading_img_position_absolute"></div>
              <h5 class="fh5co_latest_trading_img_position_absolute_1">
                <a href="` +
      businessData[i].url +
      `" target="_blank" class="text-white">
                ` +
      businessData[i].title +
      `
                </a>
              </h5>
            </div>
          </div>
          `;
  }
  businessSection.innerHTML = business;
}

function getTechnologyData() {
  //sports
  var httpReq = new XMLHttpRequest(); // nos5a

  httpReq.open(
    "GET",
    "http://newsapi.org/v2/top-headlines?country=eg&category=technology&apiKey=cc0459ac621a47d089a9c7f5a20cfd76"
  ); // bft7 kobri

  httpReq.send(); // b5li el ragil yro7

  httpReq.onreadystatechange = function () {
    // fire kol mra , dg elmo5ber bta3i

    // readyState , status
    if (httpReq.readyState == 4 && httpReq.status == 200) {
      // radi 3n el data
      technologyData = JSON.parse(httpReq.response); // convert from string to json "array of objects"
      technologyData = technologyData.articles;

      displayTechnologyData();
      //   displayTitle();
    }
  };
}
getTechnologyData();

function displayTechnologyData() {
  var technology = ``;
  for (var i = 0; i < 4; i++) {
    technology +=
      `
        <div class="row pb-4">
        <div class="col-md-7 animate-box">
          <div>
          <a href="` +
      technologyData[i].url +
      `" target="_blank" class="fh5co_magna py-2">
          ` +
      technologyData[i].title +
      `
        </a>
          </div>
          <a href="` +
      technologyData[i].url +
      `" target="_blank" class="fh5co_mini_time py-3">
          ` +
      technologyData[i].publishedAt +
      `
        </a>
          <div class="fh5co_consectetur">
            ` +
      technologyData[i].description +
      `.
          </div>
        </div>
        <div class="col-md-5">
        <div class="fh5co_hover_news_img">
          <div class="fh5co_news_img">
            <img src="` +
      technologyData[i].urlToImage +
      `" alt="" />
          </div>
          <div></div>
        </div>
      </div>
      </div>`;
  }
  technologySection.innerHTML = technology;
}
