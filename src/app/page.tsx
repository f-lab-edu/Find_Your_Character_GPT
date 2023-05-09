import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="game-wrapper">
        <div className="logo">logo</div>
        <div className="game-desc">
          <h2>게임 설명</h2>
          <p>해리포터 캐릭터 찾기 게임에 오신 여러분! 환영합니다.</p>
          <p>우리는 10가지의 테스트를 실시할 것이며 호그와트 캐릭터 중 하나를 배정받을 수 있습니다.</p>
          <p>재밌는 경험이 되길 바라며 게임을 시작하고싶다면 Game Start버튼을 눌러주세요!</p>
          <div className="start-button">
            <Link href="/stage1">Game Start</Link>
          </div>
        </div>
      </div>
    </>
  );
}
