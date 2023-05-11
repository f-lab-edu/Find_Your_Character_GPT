import Link from "next/link";
import React from "react";

export default function Stage1() {
  return (
    <div className="game-wrapper">
      <div className="logo">logo</div>
      <div className="game-desc">
        <h2>Stage1</h2>
        <p>다음 질문에 맞춰 4가지 선택지 중 하나를 선택해주세요</p>
        <p>설명~~</p>
        <p>설명~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
        <div className="select-box">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </div>
      </div>
    </div>
  );
}
