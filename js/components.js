var popTrialHtml = `
      <div class="pop-wrap">
      <div class="pop-close">
        <img src="./images/close_icon.png" class="img-fluid" alt="" />
      </div>
      <div class="trial-form py-5">
        <form class="form-validate" id="formTrial">
          <div class="text-center mb-5">
            <h3>立刻申请试用并获取最新行业解决方案</h3>
          </div>
          <div class="h5">
            <div class="trial-item mb-4 position-relative">
              <div class="trial-item-icon">
                <img src="./images/phone_icon.png" alt="" class="img-fluid" />
              </div>
              <input type="text" placeholder="请输入手机号" maxlength="11" name="phone" class="form-control" />
            </div>
            <div class="trial-item mb-4 position-relative">
              <div class="trial-item-icon">
                <img src="./images/user_icon.png" alt="" class="img-fluid" />
              </div>
              <input type="text" placeholder="请输入姓名" name="userName" class="form-control" />
            </div>
            <div class="trial-item mb-4 position-relative">
              <div class="trial-item-icon">
                <img src="./images/frame_icon.png" alt="" class="img-fluid" />
              </div>
              <input type="text" placeholder="请输入识别码" name="identificationCode" class="form-control me-2" />
              <div class="text-nowrap trial-item-code flex-shrink-0 w-btn" id="btn-getcode">
                <button type="button" class="btn btn-primary h-100 w-100 d-block">获取识别码</button>
              </div>
            </div>
            <div class="trial-item mb-4 position-relative">
              <div class="trial-item-icon">
                <img src="./images/protect_icon.png" alt="" class="img-fluid" />
              </div>
              <input type="text" placeholder="请输入验证码" name="verificationCode" class="form-control me-2" />
              <div class="text-nowrap trial-item-code flex-shrink-0 w-btn d-block">
                <button type="button" class="btn h-100 w-100 trial-btn text-white" id="btn-countdown">获取验证码</button>
              </div>
            </div>
            <div class="trial-item mb-4 h5">
              <button type="submit" class="btn trial-btn w-100 text-white" id="btn-apply">立即申请</button>
            </div>
          </div>
        </form>
      </div>
    </div>
`;
$("#popTrial").html(popTrialHtml);

var popSuccessHtml = `
    <div class="pop-wrap d-flex align-items-center text-center">
      <div class="pop-close">
        <img src="./images/close_icon.png" class="img-fluid" alt="" />
      </div>
      <div class="w-100">
        <div>
          <img src="./images/righticon.png" alt="" class="img-fluid save_icon" />
        </div>
        <div class="py-xxl-5 py-md-4 py-5 line-height-2">
          <h3>提交成功<br /> 我们会在24小时内与您取得联系</h3>
        </div>
        <div class="">
          <button class="btn trial-btn text-white w-btn">确定</button>
        </div>
      </div>
    </div>
`;
$("#popSuccess").html(popSuccessHtml);
var popErrorHtml = `
     <div class="pop-wrap d-flex align-items-center text-center">
      <div class="pop-close">
        <img src="./images/close_icon.png" class="img-fluid" alt="" />
      </div>
      <div class="w-100">
        <div>
          <img src="./images/wrongicon.png " alt="" class="img-fluid error_icon" />
        </div>
        <div class="py-xxl-5 py-md-4 py-5 line-height-2">
          <h3>验证失败 <br /> 请重新输入验证码</h3>
        </div>
        <div class="">
          <button class="btn trial-btn text-white w-btn">确定</button>
        </div>
      </div>
    </div>
`;
$("#popError").html(popErrorHtml);
//让当前表单调用validate方法，实现表单验证功能
jQuery.validator.addMethod(
  "phoneUS",
  function (phone_number, element) {
    return (
      this.optional(element) ||
      /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(phone_number)
    );
  },
  "Invalid phone number."
);
$("#formTrial").validate({
  rules: {
    phone: {
      required: true,
      phoneUS: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
    },
    userName: {
      required: true,
    },

    identificationCode: {
      required: true,
    },
    verificationCode: {
      required: true,
    },
  },
  messages: {
    phone: {
      required: "请输入手机号",
      phoneUS: "请输入正确手机号",
    },
    userName: {
      required: "请输入姓名",
    },
    identificationCode: {
      required: "请输入识别码",
    },
    verificationCode: {
      required: "请输入验证码",
    },
  },
  submitHandler: function (form) {
   $('#popSuccess').show()
  },
});
