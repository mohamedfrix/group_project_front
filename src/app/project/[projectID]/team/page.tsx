"use client"

import Layout from "./components/LayoutM";
import HeaderSection from "./components/HeaderSection";
import TeamCard from "./components/TeamCard";
import "./styles/custom.css";

export default function Home() {
  return (
    <Layout>
    <main className="container">
      <HeaderSection />

      <section>
        <h2 className="section-title">Supervisors</h2>
        <div className="card-grid">
          <TeamCard
            name="Dr. Lina Yacoub"
            role="ENSIA AI Department"
            email="yacoub@uds.edu"
            borderColor="#0f766e"
          />
          <TeamCard
            name="Dr. Lina Yacoub"
            role="ENSIA AI Department"
            email="lina.yacoub@uds.edu"
            borderColor="#0f766e"
          />
        </div>
      </section>

      <section>
        <h2 className="section-title">Team Members</h2>
        <div className="card-grid">
          <TeamCard
            name="Rahmani Houda"
            role="ENSIA Third Year Student"
            email="houda@ensia.edu.dz"
            label="Reviewer"
          
          />
          <TeamCard
            name="Alioua Maissa"
            role="ENSIA Third Year Student"
            email="maissa@ensia.edu.dz"
            label="Assistant"
            
          />
          <TeamCard
            name="Frihaoui Mohamed"
            role="ENSIA Third Year Student"
            email="mohamed@ensia.edu.dz"
            label="Leader"

          />
          <TeamCard
            name="Moulay"
            role="ENSIA Third Year Student"
            email="moulay@ensia.edu.dz"
            label="Assistant"
            
          />
        </div>
      </section>
    </main>
    </Layout>
  );
}
