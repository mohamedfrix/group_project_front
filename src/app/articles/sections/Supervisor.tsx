export default function SupervisorPage({ num }: { num: number }) {
  return <div className={`${num === 0 ? "hidden" : "" } absolute top-0 left-0`}>This page shows supervisors</div>;
}
