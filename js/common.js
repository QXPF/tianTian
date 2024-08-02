$(function () {
  $("#MobileHamburger").click(function () {
    $(this).toggleClass("hamburger-open");
    $("#headerNav").toggle();
  });
  $(".scene-item").click(function () {
    if ($(this).hasClass("active")) {
      return;
    }
    $(this).addClass("active").siblings().removeClass("active");
    const index = $(this).index();
    const sceneWbeHtml = ` 
      <div class="d-flex service-box justify-content-between">
            <div class="service-item p-md-2  mb-3 mb-md-0 ">
              <div class="position-relative">
                <div class="d-none d-md-block">
                  <img src="./images/service_pic001.png" class="img-fluid" />
                </div>
                <div class="d-block d-md-none">
                  <img src="./images/serviceM_pic001.png" class="img-fluid" />
                </div>
                <div class="service-item-cont px-4 py-1">
                  <a href="./solutionsDetails.html">
                    <h3 class="mb-2 mb-md-4 font-24">${index}二手车交易</h3>
                    <div>
                      <p class="font-18 mb-0">
                        推动二手车行业 合规的收集和使 用汽车数据， 促进行业发展
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="service-item p-md-2  mb-3 mb-md-0 service-item-two">
              <div class="position-relative">
                <div  class="d-none d-md-block">
                  <img src="./images/service_pic002.png" class="img-fluid" />
                </div>
                <div  class="d-block d-md-none">
                  <img src="./images/serviceM_pic002.png" class="img-fluid" />
                </div>
                <div class="service-item-cont px-4 py-1 px-md-0 py-md-0">
                  <a href="./solutionsDetails.html">
                    <h3 class="mb-2 mb-md-4 font-24">${index}新能源汽车</h3>
                    <div>
                      <p class="font-18 mb-0">
                        赋能新能源车企 助力车企在合规 的前提下收集和
                        处理汽车数据
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="service-item p-md-2  mb-3 mb-md-0">
              <div class="position-relative">
                <div  class="d-none d-md-block">
                  <img src="./images/service_pic003.png" class="img-fluid" />
                </div>
                <div  class="d-block d-md-none">
                  <img src="./images/serviceM_pic003.png" class="img-fluid" />
                </div>
                <div class="service-item-cont px-4 py-1 px-md-0 py-md-0">
                  <a href="./solutionsDetails.html">
                    <h3 class="mb-2 mb-md-4 font-24">${index}车联网</h3>
                    <div>
                      <p class="font-18 mb-0">
                        促进车联网企业合规 的收集和使用汽车相 关的数据，降低企业
                        经营风险
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>`;
    $("#serviceCont").html(sceneWbeHtml);
  });
  $("#applyBtn").click(function () {
    $("#popTrial").show();
  });
  $(".pop .pop-close").click(function () {
    $(".pop").hide();
  });
  // $("#btn-apply").click(function () {
  //   $(".pop").hide();
  //   $("#popSuccess").show();
  // });
  $("#btn-getcode").click(function () {
    $(".pop").hide();
    $("#popError").show();
  });
  $("#MbobileApply").click(function () {
    $(".pop").hide();
    $("#popTrial").show();
  });
  let countdown; // 倒计时计时器变量
  $("#btn-countdown").click(function () {
    let seconds = 60; // 这里可以根据需要设置倒计时的秒数
    const countdownBtn = document.getElementById("btn-countdown");
    // 禁用按钮防止重复点击
    countdownBtn.disabled = true;
    // 显示初始倒计时
    countdownBtn.textContent = seconds;

    // 开始倒计时
    countdown = setInterval(() => {
      seconds--;
      if (seconds >= 0) {
        countdownBtn.textContent = seconds;
      } else {
        clearInterval(countdown); // 清除计时器
        countdownBtn.disabled = false; // 启用按钮
        countdownBtn.textContent = "获取验证码";
      }
    }, 1000); // 每秒更新一次
  });
});
