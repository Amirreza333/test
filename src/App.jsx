import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Body from "./components/Body/Body";
import Card from "./components/Card/Card";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import Card2 from "./components/Card with picture/Card2";
import Comments from "./components/Comment Section/Comments";
import Question from "./components/soal section/Question";
import Contact from "./components/ContactSection/ContactSection";
import ServiceConstruction from "./components/pages/Service/ServiceConstruction";
import InteriorDesign from "./components/pages/Service/interior-design/InteriorDesign";
import Consulting from "./components/pages/Service/moshavere/Consulting";
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./components/admin/Dashboard";
import ProjectList from "./components/admin/ProjectList";
import ClientList from "./components/admin/ClientList";
import Login from "./components/admin/Login";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import CommentList from "./components/Admin/CommentList";
import ContactList from "./components/admin/ContactList";
import Stats from "./components/admin/Stats";
import Settings from "./components/admin/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <>
              <Body />
              <Card />
              <WhyChooseUs />
              <ProjectsSection />
              <Card2 />
              <Comments />
              <Question />
              <Contact />
            </>
          }
        />
        <Route path="/ServiceConstruction" element={<ServiceConstruction />} />
        <Route path="/InteriorDesign" element={<InteriorDesign />} />
        <Route path="/consulting" element={<Consulting />} />
      </Route>

      <Route path="/admin/login" element={<Login />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/projects"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <ProjectList />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/clients"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <ClientList />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/comments"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <CommentList />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/contacts"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <ContactList />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/stats"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <Stats />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/settings"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <Settings />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;