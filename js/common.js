$(function () {
  $("#MobileHamburger").click(function () {
    $(this).toggleClass("hamburger-open");
    $("#headerNav").toggle();
  });
  $(".scene-item").click(function () {
    if ($(this).hasClass("active")) {
      return
    }
    $(this).addClass("active").siblings().removeClass("active");
    const index = $(this).index();
    const pageWidth = window.innerWidth;
    if (pageWidth > 768) {
      // web端
      const sceneWbeHtml = `          
      <div class="d-flex justify-content-between">
            <div class="service-item p-2 border rounded">
              <div class="position-relative">
                <img src="./images/service_pic001.png" class="img-fluid" />
                <div class="service-item-cont">
                  <a href="./complianceDetails.html" class="text-white">
                    <h3 class="mb-4 font-24">${index}二手车交易</h3>
                    <div>
                      <p class="font-18 line-height-2">
                        推动二手车行业 合规的收集和使 用汽车数据， 促进行业发展
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="service-item p-2 border rounded">
              <div class="position-relative">
                <img src="./images/service_pic002.png" class="img-fluid" />
                <div class="service-item-cont">
                  <a href="./complianceDetails.html" class="text-white">
                    <h3 class="mb-4 font-24">${index}新能源汽车</h3>
                    <div>
                      <p class="font-18 line-height-2">
                        赋能新能源车企 助力车企在合规 的前提下收集和
                        处理汽车数据
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="service-item p-2 border rounded">
              <div class="position-relative">
                <img src="./images/service_pic003.png" class="img-fluid" />
                <div class="service-item-cont">
                  <a href="./complianceDetails.html" class="text-white">
                    <h3 class="mb-4">${index}车联网</h3>
                    <div>
                      <p class="h5">
                        促进车联网企业合规 的收集和使用汽车相 关的数据，降低企业
                        经营风险
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>`;
      $("#serviceWeb").html(sceneWbeHtml);
    } else {
      const servicePhoneHtml = `
        <div class="d-block d-md-none">
          <div>
            <div class="service-item mb-2">
              <div class="position-relative">
                <img src="./images/serviceM_pic001.png" class="img-fluid" />
                <div class="service-item-cont d-flex align-items-center px-4 py-2">
                  <div>
                    <a href="./complianceDetails.html" class="text-dark">
                      <h3 class="mb-3">${index}二手车交易</h3>
                      <div>
                        <span>
                          推动二手车行业 合规的收集和使 用汽车数据，
                          促进行业发展
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="service-item mb-2">
              <div class="position-relative">
                <img src="./images/serviceM_pic002.png" class="img-fluid" />
                <div class="service-item-cont d-flex align-items-center px-4 py-2">
                  <div>
                    <a href="./complianceDetails.html" class="text-dark">
                      <h3 class="mb-3">${index}新能源汽车</h3>
                      <div>
                        <span>
                          赋能新能源车企 助力车企在合规 的前提下收集和
                          处理汽车数据
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="service-item mb-2">
              <div class="position-relative">
                <img src="./images/serviceM_pic003.png" class="img-fluid" />
                <div class="service-item-cont d-flex align-items-center px-4 py-2">
                  <div>
                    <a href="./complianceDetails.html" class="text-dark">
                      <h3 class="mb-3">${index}车联网</h3>
                      <div>
                        <span>
                          促进车联网企业合规 的收集和使用汽车相
                          关的数据，降低企业 经营风险
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      // web端
      $("#servicePhone").html(servicePhoneHtml);
      return;
    }
  });
});
