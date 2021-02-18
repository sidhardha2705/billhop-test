import React from "react";
import { Row, Col } from "antd";
import { Typography } from "antd";
import heroImage from "../assets/hero.png";

const { Title } = Typography;

const HeroLayout = (props) => {
  return (
    <div className="hero_wrapper">
      <Row style={{ height: "100%" }}>
        <Col className="util_flex_c" flex="50%">
          <div className="hero_text_wrapper">
            <Title className="hero_primary_text" level={1}>
              Pay bills with your credit card
            </Title>
            <Title className="hero_secondary_text" level={5}>
              Take advantage of the interest free payment period on your credit
              card - your supplier gets paid right away, without any strain on
              your liquidity
            </Title>
          </div>
        </Col>
        <Col className="util_flex_c" flex="auto">
          <img alt="Hero" className="hero_img" src={heroImage} />
        </Col>
      </Row>
    </div>
  );
};

export default HeroLayout;
