import React from "react";
import { Link } from "react-router-dom";
import SettingStyle from "./Set.module.css";
import Footer from "../../components/Footer/Footer";
import HistorySample from "../../components/History/History";
import { FaChevronRight } from "react-icons/fa";
import CustomSwitch from "../../components/buttons/CustomSwitch";

function Setting() {
  const onSelectSwitch = (val) => {};
  return (
    <div className={SettingStyle.container}>
      <div className={SettingStyle.backBtn}>
        <HistorySample></HistorySample>
      </div>
      <div className={SettingStyle.title}>설정</div>
      <div>
        <div className={SettingStyle.sub_title}>알림 설정</div>
        <div className={SettingStyle.toggle_box}>
          가계부 미작성 알림
          <CustomSwitch
            width={38}
            height={20}
            selectionMode={1}
            onSelectSwitch={onSelectSwitch}
            selectionColor={"white"}
            backgroundColor1={"#566479"}
            backgroundColor2={"#00C982"}
          />
        </div>
        <div className={SettingStyle.toggle_box}>
          이벤트 알림
          <CustomSwitch
            width={38}
            height={20}
            selectionMode={1}
            onSelectSwitch={onSelectSwitch}
            selectionColor={"white"}
            backgroundColor1={"#566479"}
            backgroundColor2={"#00C982"}
          />
        </div>
        <div className={SettingStyle.toggle_box}>
          환경의 날 알림
          <CustomSwitch
            width={38}
            height={20}
            selectionMode={1}
            onSelectSwitch={onSelectSwitch}
            selectionColor={"white"}
            backgroundColor1={"#566479"}
            backgroundColor2={"#00C982"}
          />
        </div>
      </div>

      <div>
        <div className={SettingStyle.sub_title2}>정보</div>
        <div className={SettingStyle.toggle_box2}>
          서비스 이용약관
          <Link to="/TermsOfUse">
            <FaChevronRight className={SettingStyle.info_icon} />
          </Link>
        </div>
      </div>

      <Footer activeMenu="setting">
        <div>설정</div>
      </Footer>
    </div>
  );
}

export default Setting;
