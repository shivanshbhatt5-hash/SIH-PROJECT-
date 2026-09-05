import React, { useState } from 'react';
import Header from './components/Header';
import IndustrialistDashboard from './components/IndustrialistDashboard';
import OfficialDashboard from './components/OfficialDashboard';
import PermissionApplicationModal from './components/PermissionApplicationModal';
import ApplicationDetailModal from './components/ApplicationDetailModal';
import OfficialReviewModal from './components/OfficialReviewModal';
import CertificateModal from './components/CertificateModal';
import AIChatbot from './components/AIChatbot';
import DocuRenewAssistant from './components/DocuRenewAssistant';
import { 
  INITIAL_PROJECTS, 
  INITIAL_APPLICATIONS, 
  PERMISSIONS_MASTER 
} from './data/mockData';

export default function App() {
  const [persona, setPersona] = useState('industrialist'); // 'industrialist' | 'official'
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [selectedProject, setSelectedProject] = useState(INITIAL_PROJECTS[0]);
  const [selectedAuthority, setSelectedAuthority] = useState('ALL');
  const [applications, setApplications] = useState(INITIAL_APPLICATIONS);

  // Modals state
  const [applyModalPerm, setApplyModalPerm] = useState(null);
  const [detailModalApp, setDetailModalApp] = useState(null);
  const [reviewModalApp, setReviewModalApp] = useState(null);
  const [certificateModalData, setCertificateModalData] = useState(null); // { app, perm }
  const [showAIChatbot, setShowAIChatbot] = useState(false);
  const [showDocuRenew, setShowDocuRenew] = useState(false);

  // Handlers for Industrialist submit
  const handleAddNewApplication = (newApp) => {
    setApplications(prev => [newApp, ...prev]);
  };

  // Handler for query response from Industrialist
  const handleRespondQuery = (appId, responseText) => {
    setApplications(prev => prev.map(app => {
      if (app.id === appId) {
        return {
          ...app,
          status: 'IN_REVIEW',
          remarks: `Applicant Response Received: "${responseText}". Re-submitted for officer scrutiny.`,
          timeline: [
            ...app.timeline,
            {
              step: "Applicant Clarification Received",
              date: new Date().toLocaleString(),
              status: "completed",
              note: responseText
            }
          ]
        };
      }
      return app;
    }));

    if (detailModalApp?.id === appId) {
      setDetailModalApp(null);
    }
  };

  // Handler for Official status update (Approve, Query, Inspection)
  const handleUpdateAppStatus = (updatedApp) => {
    setApplications(prev => prev.map(app => app.id === updatedApp.id ? updatedApp : app));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-body selection:bg-indigo-500 selection:text-white flex flex-col">
      
      {/* Header Bar */}
      <Header
        persona={persona}
        setPersona={setPersona}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        projects={projects}
        selectedAuthority={selectedAuthority}
        setSelectedAuthority={setSelectedAuthority}
        onOpenRenewSentinel={() => setShowDocuRenew(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {persona === 'industrialist' ? (
          <IndustrialistDashboard
            project={selectedProject}
            applications={applications}
            onOpenApplyModal={(perm) => setApplyModalPerm(perm)}
            onOpenDetailModal={(app, perm) => setDetailModalApp({ app, perm })}
            onOpenCertificateModal={(app, perm) => setCertificateModalData({ app, perm })}
          />
        ) : (
          <OfficialDashboard
            applications={applications}
            selectedAuthority={selectedAuthority}
            setSelectedAuthority={setSelectedAuthority}
            onOpenReviewModal={(app, perm) => setReviewModalApp({ app, perm })}
            onOpenCertificateModal={(app, perm) => setCertificateModalData({ app, perm })}
          />
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-slate-300 font-heading">MahaClear Single Window Portal</span>
            <span>•</span>
            <span>State Industrial & Investment Facilitation Cell</span>
          </div>
          <div className="text-[11px] text-slate-500 font-mono">
            Direct Authorities: MIDC | Fire Dept | Water Board | Pollution Board | Electricity Board
          </div>
        </div>
      </footer>

      {/* MODALS */}
      
      {/* Apply Modal (Industrialist) */}
      {applyModalPerm && (
        <PermissionApplicationModal
          permission={applyModalPerm}
          project={selectedProject}
          onClose={() => setApplyModalPerm(null)}
          onSubmitApplication={handleAddNewApplication}
        />
      )}

      {/* Detail / Status Tracker Modal */}
      {detailModalApp && (
        <ApplicationDetailModal
          application={detailModalApp.app}
          permission={detailModalApp.perm}
          onClose={() => setDetailModalApp(null)}
          onOpenCertificateModal={(app, perm) => {
            setDetailModalApp(null);
            setCertificateModalData({ app, perm });
          }}
          onRespondQuery={handleRespondQuery}
        />
      )}

      {/* Official Review & Action Modal (Government Official) */}
      {reviewModalApp && (
        <OfficialReviewModal
          application={reviewModalApp.app}
          permission={reviewModalApp.perm}
          onClose={() => setReviewModalApp(null)}
          onUpdateAppStatus={handleUpdateAppStatus}
        />
      )}

      {/* Printable Certificate Generator Modal */}
      {certificateModalData && (
        <CertificateModal
          application={certificateModalData.app}
          permission={certificateModalData.perm}
          onClose={() => setCertificateModalData(null)}
        />
      )}

      {/* Floating 24/7 AI Statutory Chatbot */}
      <AIChatbot
        project={selectedProject}
        applications={applications}
        isOpen={showAIChatbot}
        onToggleOpen={() => setShowAIChatbot(prev => !prev)}
      />

      {/* Floating 24/7 Document Expiry & Renewal Sentinel Assistant */}
      <DocuRenewAssistant
        project={selectedProject}
        applications={applications}
        isOpen={showDocuRenew}
        onToggleOpen={() => setShowDocuRenew(prev => !prev)}
      />

    </div>
  );
}
