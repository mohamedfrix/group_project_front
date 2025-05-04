export default function ResearchTeams({ num }: { num: number }) {
  return <div className={`${num === 0 ? "hidden" : "" } absolute top-0 left-0` }>The page shows research teams</div>;
}
