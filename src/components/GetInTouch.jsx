import React from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  alignitems: center;
  margin: 9 0px;
`;
const Button = styled.button`
  height: auto;
  padding: 2px 5px;
  border-radius: 0;
  border: 4px soild black;
  outline: none;
`;
const GetInTouch = () => {
  return (
    <section className="section__padding">
      <Container>
        <Button>
          <h4>Got any questions? Need help?</h4>
        </Button>
        <p className="text-black my-3">We are here to help. Get in touch!</p>
        <div className="w-60">
          <img src="https://mui.com/static/themes/onepirate/productBuoy.svg" alt='buoy'/>
        </div>
      </Container>
    </section>
  );
};

export default GetInTouch;
