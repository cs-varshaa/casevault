/**
 * CASEVAULT Main Dashboard View
 */

import { State } from '../state.js';
import { Modal } from '../components/modal.js';

export const DashboardView = {
  render() {
    const recentCases = State.cases.slice(0, 4);
    const recentActivity = State.auditLogs.slice(0, 6);

    return `
      <div class="view-animate-in">
        <!-- Breadcrumb & Header -->
        <div class="breadcrumb-bar">
          <span class="breadcrumb-item" data-view="dashboard">Operations</span>
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-current">National Investigation Dashboard</span>
        </div>

        <div class="page-header">
          <div class="page-title-group">
            <h1>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
              </svg>
              Investigation Command Dashboard
            </h1>
            <p class="page-subtitle">
              Welcome back, <strong>${State.currentUser.name}</strong> • ${State.currentUser.department} • Clearance: <strong>${State.currentUser.clearance}</strong>
            </p>
          </div>

          <div class="page-actions">
            <button class="btn btn-secondary btn-sm" id="dash-quick-verify">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              Verify Hash
            </button>
            <button class="btn btn-primary btn-sm" id="dash-quick-upload">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              Upload Secure Document
            </button>
          </div>
        </div>

        <!-- 1. High-Density KPI Metrics Grid -->
        <div class="metrics-grid">
          <div class="stat-card">
            <div class="stat-card-header">
              <span class="stat-label">Total Documents</span>
              <div class="stat-icon-wrapper">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
            </div>
            <div class="stat-value">12,458</div>
            <div class="stat-trend positive">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              +8.4% this month
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-card-header">
              <span class="stat-label">Active Cases</span>
              <div class="stat-icon-wrapper" style="background: rgba(6, 182, 212, 0.12); color: var(--accent-cyan);">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
              </div>
            </div>
            <div class="stat-value">284</div>
            <div class="stat-trend neutral">4 High Priority</div>
          </div>

          <div class="stat-card">
            <div class="stat-card-header">
              <span class="stat-label">Verified Documents</span>
              <div class="stat-icon-wrapper" style="background: rgba(34, 197, 94, 0.12); color: var(--status-success);">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
            </div>
            <div class="stat-value">11,932</div>
            <div class="stat-trend positive">95.8% Hash Anchored</div>
          </div>

          <div class="stat-card">
            <div class="stat-card-header">
              <span class="stat-label">Pending Review</span>
              <div class="stat-icon-wrapper" style="background: rgba(245, 158, 11, 0.12); color: var(--status-warning);">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
            </div>
            <div class="stat-value">126</div>
            <div class="stat-trend warning">Requires forensic sign-off</div>
          </div>

          <div class="stat-card">
            <div class="stat-card-header">
              <span class="stat-label">Shared Tokens</span>
              <div class="stat-icon-wrapper" style="background: rgba(168, 85, 247, 0.12); color: #C084FC;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
              </div>
            </div>
            <div class="stat-value">1,489</div>
            <div class="stat-trend neutral">Time-bound access</div>
          </div>

          <div class="stat-card">
            <div class="stat-card-header">
              <span class="stat-label">Security Alerts</span>
              <div class="stat-icon-wrapper" style="background: rgba(34, 197, 94, 0.12); color: var(--status-success);">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
            </div>
            <div class="stat-value" style="color: var(--status-success);">0</div>
            <div class="stat-trend positive">Zero Critical Incidents</div>
          </div>
        </div>

        <!-- 2. Security Overview Strip -->
        <div class="security-overview-banner">
          <div class="sec-metric-item">
            <div class="sec-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <div class="sec-details">
              <h5>Encryption Status</h5>
              <div class="sec-val"><span style="color: var(--status-success);">●</span> Active (AES-256)</div>
            </div>
          </div>

          <div class="sec-metric-item">
            <div class="sec-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
            </div>
            <div class="sec-details">
              <h5>Authentication</h5>
              <div class="sec-val"><span style="color: var(--status-success);">●</span> MFA Protected</div>
            </div>
          </div>

          <div class="sec-metric-item">
            <div class="sec-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            </div>
            <div class="sec-details">
              <h5>Access Control</h5>
              <div class="sec-val"><span style="color: var(--status-success);">●</span> RBAC Strict</div>
            </div>
          </div>

          <div class="sec-metric-item">
            <div class="sec-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <div class="sec-details">
              <h5>Integrity Rate</h5>
              <div class="sec-val" style="color: var(--accent-cyan);">99.98%</div>
            </div>
          </div>

          <div class="sec-metric-item">
            <div class="sec-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
            </div>
            <div class="sec-details">
              <h5>Last Security Scan</h5>
              <div class="sec-val">14m ago</div>
            </div>
          </div>

          <div class="sec-metric-item">
            <div class="sec-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </div>
            <div class="sec-details">
              <h5>Immutable Backup</h5>
              <div class="sec-val">12m ago</div>
            </div>
          </div>
        </div>

        <!-- 3. Two-Column Operations View: Recent Cases & Live Activity Timeline -->
        <div class="dashboard-grid-cases-activity">
          <!-- Recent Cases Table -->
          <div class="card">
            <div class="card-header">
              <span class="card-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                Priority Investigation Cases
              </span>
              <button class="btn btn-outline btn-sm" id="view-all-cases-btn">View All Cases →</button>
            </div>
            <div class="table-responsive">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Case ID</th>
                    <th>Case Name</th>
                    <th>Department</th>
                    <th>Docs</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${recentCases.map(c => `
                    <tr>
                      <td class="code-cell">${c.id}</td>
                      <td>
                        <strong style="color: var(--text-white); display: block;">${c.name}</strong>
                        <span style="font-size: 11px; color: var(--text-muted);">${c.type}</span>
                      </td>
                      <td style="font-size: 12px;">${c.department}</td>
                      <td><span class="badge badge-cyan" style="font-size: 10px;">${c.documentCount}</span></td>
                      <td>
                        <span class="badge ${c.status === 'Active' ? 'badge-active' : c.status === 'Under Review' ? 'badge-review' : 'badge-closed'}">
                          ${c.status}
                        </span>
                      </td>
                      <td>
                        <button class="btn btn-secondary btn-sm open-case-btn" data-case-id="${c.id}">
                          Open
                        </button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Forensic Document Activity Timeline -->
          <div class="card">
            <div class="card-header">
              <span class="card-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                Real-Time Document Activity
              </span>
              <span class="badge badge-active" style="font-size: 9px;">LIVE FEED</span>
            </div>
            <div class="card-body">
              <div class="timeline-track">
                ${recentActivity.map(act => `
                  <div class="timeline-event">
                    <div class="timeline-pin">
                      <div class="timeline-pin-inner"></div>
                    </div>
                    <div class="timeline-meta">${act.timestamp.substring(11)} • ${act.user.split(' ')[0]}</div>
                    <div class="timeline-title">
                      <span class="badge badge-cyan" style="font-size: 9px; margin-right: 4px;">${act.action}</span>
                      ${act.document.length > 28 ? act.document.substring(0, 26) + '...' : act.document}
                    </div>
                    <div class="timeline-desc">${act.details}</div>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="card-footer">
              <a href="#" id="view-audit-trail-link" style="font-size: 12px; color: var(--accent-cyan); text-decoration: none; font-weight: 600;">
                Inspect Complete Forensic Audit Ledger →
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  bindEvents(onNavigate) {
    document.getElementById('dash-quick-upload')?.addEventListener('click', () => {
      if (typeof onNavigate === 'function') onNavigate('upload');
    });

    document.getElementById('dash-quick-verify')?.addEventListener('click', () => {
      if (typeof onNavigate === 'function') onNavigate('verifier');
    });

    document.getElementById('view-all-cases-btn')?.addEventListener('click', () => {
      if (typeof onNavigate === 'function') onNavigate('cases');
    });

    document.getElementById('view-audit-trail-link')?.addEventListener('click', (e) => {
      e.preventDefault();
      if (typeof onNavigate === 'function') onNavigate('audit');
    });

    document.querySelectorAll('.open-case-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const caseId = btn.getAttribute('data-case-id');
        if (typeof onNavigate === 'function') onNavigate('cases', false, { caseId });
      });
    });
  }
};
