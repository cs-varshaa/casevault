/**
 * CASEVAULT Modal Manager & Prebuilt Forensic Viewers
 */

import { Toast } from './toast.js';
import { State } from '../state.js';

class ModalManager {
  constructor() {
    this.activeModal = null;
    this.initGlobalListeners();
  }

  initGlobalListeners() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.activeModal) {
        this.close();
      }
    });
  }

  open({ title, bodyHtml, footerHtml = '', size = 'md', onClose = null }) {
    this.close();

    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.id = 'modal-active-backdrop';

    backdrop.innerHTML = `
      <div class="modal-content ${size === 'lg' ? 'modal-lg' : ''}" role="dialog">
        <div class="modal-header">
          <div class="modal-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            ${title}
          </div>
          <button class="modal-close-btn" id="modal-close-btn" aria-label="Close modal">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div class="modal-body">
          ${bodyHtml}
        </div>
        ${footerHtml ? `<div class="modal-footer">${footerHtml}</div>` : ''}
      </div>
    `;

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) this.close();
    });

    document.body.appendChild(backdrop);
    this.activeModal = { backdrop, onClose };

    document.getElementById('modal-close-btn').addEventListener('click', () => this.close());
  }

  close() {
    if (this.activeModal) {
      if (typeof this.activeModal.onClose === 'function') {
        this.activeModal.onClose();
      }
      this.activeModal.backdrop.remove();
      this.activeModal = null;
    }
  }

  /**
   * Opens the full-featured Document Details & Secure Viewer
   */
  openDocumentViewer(doc) {
    // Record view in audit log
    State.addAuditLog({
      action: 'VIEW',
      document: doc.name,
      docId: doc.id,
      caseId: doc.caseId,
      details: `Interactive viewer launched. Watermarked session token issued.`
    });

    const bodyHtml = `
      <div style="display: grid; grid-template-columns: 1.6fr 1fr; gap: 20px;">
        <!-- Left: Legal Document Preview with Watermark -->
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <span class="badge badge-classification class-${doc.classification.toLowerCase().replace(/\s+/g, '-')}">
              ${doc.classification}
            </span>
            <span class="badge badge-cyan" style="font-family: var(--font-mono);">
              CASE: ${doc.caseId}
            </span>
          </div>

          <div style="background: #0B1321; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 24px; min-height: 380px; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between;">
            <div class="watermark-overlay">CASEVAULT // CONFIDENTIAL</div>
            
            <div style="position: relative; z-index: 2;">
              <div style="display: flex; align-items: center; gap: 10px; border-bottom: 1px solid rgba(148, 163, 184, 0.15); padding-bottom: 12px; margin-bottom: 16px;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                </svg>
                <div>
                  <h4 style="font-size: 14px; color: var(--text-white);">${doc.name}</h4>
                  <p style="font-size: 11px; color: var(--text-muted); font-family: var(--font-mono);">${doc.id} • ${doc.fileSize} • ${doc.docType}</p>
                </div>
              </div>

              <div style="font-size: 12.5px; line-height: 1.7; color: #CBD5E1; font-family: var(--font-sans); background: rgba(7, 17, 31, 0.6); padding: 16px; border-radius: var(--radius-sm); border: 1px solid rgba(148, 163, 184, 0.08); white-space: pre-wrap;">
${doc.contentSnippet || 'LEGAL / FORENSIC RECORD CONTENTS ENCRYPTED IN REST STORAGE. EPHEMERAL DECRYPTION GRANTED FOR AUTHORIZED INVESTIGATOR SESSION.'}
              </div>
            </div>

            <div style="margin-top: 20px; padding-top: 12px; border-top: 1px solid rgba(148, 163, 184, 0.15); display: flex; align-items: center; justify-content: space-between; font-size: 11px; color: var(--text-dark); position: relative; z-index: 2;">
              <span>Cryptographic Session: TLS 1.3 / AES-256-GCM</span>
              <span>Watermark ID: CV-SEC-${doc.id.replace('DOC-', '')}</span>
            </div>
          </div>
        </div>

        <!-- Right: Forensic Metadata & Integrity Dossier -->
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <!-- Metadata Section -->
          <div style="background: var(--bg-slate); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 16px;">
            <h5 style="font-size: 11px; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.6px; margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              Document Metadata
            </h5>
            <div style="display: flex; flex-direction: column; gap: 8px; font-size: 12px;">
              <div style="display: flex; justify-content: space-between;"><span style="color: var(--text-muted);">Uploaded By:</span> <strong style="color: var(--text-white);">${doc.uploadedBy}</strong></div>
              <div style="display: flex; justify-content: space-between;"><span style="color: var(--text-muted);">Timestamp:</span> <span style="color: var(--text-white); font-family: var(--font-mono);">${doc.uploadDate}</span></div>
              <div style="display: flex; justify-content: space-between;"><span style="color: var(--text-muted);">Department:</span> <span style="color: var(--text-white);">${doc.department}</span></div>
              <div style="display: flex; justify-content: space-between;"><span style="color: var(--text-muted);">Classification:</span> <span style="color: var(--accent-cyan); font-weight: 600;">${doc.classification}</span></div>
            </div>
          </div>

          <!-- Integrity & Cryptographic Hash Section -->
          <div style="background: var(--bg-slate); border: 1px solid rgba(6, 182, 212, 0.3); border-radius: var(--radius-md); padding: 16px; box-shadow: 0 0 15px rgba(6, 182, 212, 0.08);">
            <h5 style="font-size: 11px; text-transform: uppercase; color: var(--accent-cyan); letter-spacing: 0.6px; margin-bottom: 10px; display: flex; align-items: center; gap: 6px;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Cryptographic Integrity
            </h5>
            <div style="margin-bottom: 8px;">
              <span style="font-size: 10px; color: var(--text-muted); display: block; margin-bottom: 4px;">SHA-256 MASTER HASH DIGEST:</span>
              <div class="hash-chip" style="width: 100%; justify-content: space-between; word-break: break-all; font-size: 10px;">
                <span>${doc.sha256}</span>
                <button class="copy-btn" id="copy-hash-btn" title="Copy SHA-256">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </button>
              </div>
            </div>
            
            <div style="margin-top: 10px; font-size: 11px; display: flex; flex-direction: column; gap: 6px;">
              <div style="display: flex; justify-content: space-between;">
                <span style="color: var(--text-muted);">PKI Signature:</span>
                <span style="color: var(--status-success); font-family: var(--font-mono); font-weight: 600;">✓ ${doc.digitalSignatureStatus}</span>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span style="color: var(--text-muted);">Signer Authority:</span>
                <span style="color: var(--text-white);">${doc.signer || 'Certified Forensic Examiner'}</span>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span style="color: var(--text-muted);">Last Verified:</span>
                <span style="color: var(--text-white); font-family: var(--font-mono);">${doc.lastVerified}</span>
              </div>
            </div>
          </div>

          <!-- Authorized Roles -->
          <div style="background: var(--bg-slate); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 14px;">
            <h5 style="font-size: 11px; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.6px; margin-bottom: 8px;">
              Authorized Clearances
            </h5>
            <div style="display: flex; flex-wrap: wrap; gap: 6px;">
              ${doc.authorizedRoles.map(r => `<span class="badge" style="background: rgba(37,99,235,0.15); color: #93C5FD; font-size: 10px;">${r}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    const footerHtml = `
      <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
        <button class="btn btn-outline btn-sm" id="modal-verify-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
          Verify Authenticity
        </button>
        <div style="display: flex; gap: 10px;">
          <button class="btn btn-secondary btn-sm" id="modal-share-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            Secure Share
          </button>
          <button class="btn btn-primary btn-sm" id="modal-download-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download Signed Copy
          </button>
        </div>
      </div>
    `;

    this.open({
      title: `Document Dossier: ${doc.id}`,
      bodyHtml,
      footerHtml,
      size: 'lg'
    });

    // Event bindings
    document.getElementById('copy-hash-btn').addEventListener('click', () => {
      navigator.clipboard.writeText(doc.sha256);
      Toast.success('Hash Copied', 'SHA-256 master digest copied to clipboard.');
    });

    document.getElementById('modal-verify-btn').addEventListener('click', () => {
      this.close();
      window.dispatchEvent(new CustomEvent('navigate-view', { detail: { view: 'verifier', docId: doc.id } }));
    });

    document.getElementById('modal-share-btn').addEventListener('click', () => {
      this.openShareModal(doc);
    });

    document.getElementById('modal-download-btn').addEventListener('click', () => {
      State.addAuditLog({
        action: 'DOWNLOAD',
        document: doc.name,
        docId: doc.id,
        caseId: doc.caseId,
        details: 'Watermarked legal copy exported with embedded digital signature token.'
      });
      Toast.success('Secure Download Initiated', `Audit entry logged for ${doc.name}`);
    });
  }

  /**
   * Share Document Modal with time-bound token generator
   */
  openShareModal(doc) {
    const bodyHtml = `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="background: rgba(6, 182, 212, 0.08); border: 1px solid rgba(6, 182, 212, 0.25); border-radius: var(--radius-sm); padding: 12px; font-size: 12px; color: var(--text-primary);">
          Sharing <strong>${doc.name}</strong> (${doc.id}). All external views and downloads are tracked in the immutable forensic audit log.
        </div>
        
        <div class="form-group">
          <label class="form-label">Authorized Recipient Email / Badge ID</label>
          <input type="text" class="form-input" id="share-recipient-input" placeholder="e.g., prosecutor.desk@prosecution.gov.in" value="a.deshmukh@prosecution.gov.in" />
        </div>

        <div class="form-group">
          <label class="form-label">Access Clearance Requirement</label>
          <select class="form-select" id="share-clearance-select">
            <option value="Confidential">Level 3 (Confidential)</option>
            <option value="Secret">Level 4 (Secret)</option>
            <option value="Top Secret">Level 5 (Top Secret)</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Access Token Expiration</label>
          <select class="form-select" id="share-expiry-select">
            <option value="24">24 Hours (Court Hearing Access)</option>
            <option value="48" selected>48 Hours (Standard Inter-Agency Review)</option>
            <option value="168">7 Days (Judicial Scrutiny Period)</option>
          </select>
        </div>

        <div style="display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--text-muted);">
          <input type="checkbox" id="share-watermark-check" checked />
          <label for="share-watermark-check">Enforce dynamic forensic watermark with recipient IP & timestamp</label>
        </div>
      </div>
    `;

    const footerHtml = `
      <button class="btn btn-secondary btn-sm" id="share-cancel-btn">Cancel</button>
      <button class="btn btn-primary btn-sm" id="share-generate-btn">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        Generate Encrypted Link
      </button>
    `;

    this.open({
      title: `Grant Secure Document Access`,
      bodyHtml,
      footerHtml,
      size: 'md'
    });

    document.getElementById('share-cancel-btn').addEventListener('click', () => this.close());
    document.getElementById('share-generate-btn').addEventListener('click', () => {
      const recipient = document.getElementById('share-recipient-input').value;
      const expiry = document.getElementById('share-expiry-select').value;
      State.addAuditLog({
        action: 'SHARE',
        document: doc.name,
        docId: doc.id,
        caseId: doc.caseId,
        details: `Issued ${expiry}-hour secure access token to ${recipient}. Watermarking enabled.`
      });
      Toast.success('Secure Token Generated', `Authorized access granted to ${recipient}`);
      this.close();
    });
  }

  /**
   * Custody Transfer Modal for Evidence Vault
   */
  openCustodyTransferModal(evidenceItem, onSuccess) {
    const bodyHtml = `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: var(--radius-sm); padding: 12px; font-size: 12px; color: var(--text-primary);">
          Transferring legal custody of Evidence Item <strong>${evidenceItem.evidenceId}</strong>: ${evidenceItem.name}.
        </div>

        <div class="form-group">
          <label class="form-label">Transfer To Authorized Recipient</label>
          <select class="form-select" id="custody-recipient-select">
            <option value="Adv. Ananya Deshmukh (Special Public Prosecutor)">Adv. Ananya Deshmukh (Special Public Prosecutor)</option>
            <option value="Dr. Rajesh Sharma (Chief Forensic Examiner)">Dr. Rajesh Sharma (Chief Forensic Examiner)</option>
            <option value="Judicial Custody Registrar, Special CBI Court">Judicial Custody Registrar, Special CBI Court</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Legal Justification / Dispatch Order</label>
          <input type="text" class="form-input" id="custody-reason-input" placeholder="e.g., Court production pursuant to order #4410/2026" value="Production before Hon'ble Special Court for mark of exhibits" />
        </div>

        <div class="form-group">
          <label class="form-label">Physical Sealing & Bag Verification Tag</label>
          <input type="text" class="form-input form-input-mono" id="custody-tag-input" value="EOW-TRANSFER-SEAL-${Math.floor(1000 + Math.random() * 9000)}" />
        </div>
      </div>
    `;

    const footerHtml = `
      <button class="btn btn-secondary btn-sm" id="custody-cancel-btn">Cancel</button>
      <button class="btn btn-cyan btn-sm" id="custody-confirm-btn">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Sign & Authorize Transfer
      </button>
    `;

    this.open({
      title: `Chain of Custody Transfer: ${evidenceItem.evidenceId}`,
      bodyHtml,
      footerHtml,
      size: 'md'
    });

    document.getElementById('custody-cancel-btn').addEventListener('click', () => this.close());
    document.getElementById('custody-confirm-btn').addEventListener('click', () => {
      const recipient = document.getElementById('custody-recipient-select').value;
      const reason = document.getElementById('custody-reason-input').value;
      const tag = document.getElementById('custody-tag-input').value;

      evidenceItem.currentHolder = recipient;
      evidenceItem.chainOfCustody.push({
        step: 'Transferred',
        title: 'Custody Transfer Logged',
        officer: `${State.currentUser.name} ➔ ${recipient}`,
        timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19) + ' IST',
        location: 'Patiala House Special Court Premises',
        terminalIp: 'Secure Handover Terminal (10.14.9.22)',
        action: `${reason}. Sealed with tag ${tag}.`,
        hashRef: evidenceItem.originalSha256
      });

      State.addAuditLog({
        action: 'PERMISSION_CHANGE',
        document: evidenceItem.name,
        docId: evidenceItem.evidenceId,
        caseId: evidenceItem.caseId,
        details: `Evidence custody transferred to ${recipient}. Seal Tag: ${tag}.`
      });

      Toast.success('Custody Transferred', `Evidence token updated. Handover signed.`);
      this.close();
      if (typeof onSuccess === 'function') onSuccess();
    });
  }

  /**
   * Forensic Audit Certificate (Printable Official Document)
   */
  openAuditCertificate() {
    const logs = State.auditLogs.slice(0, 8);
    const bodyHtml = `
      <div id="printable-certificate" style="background: #0B1321; border: 1px solid rgba(148, 163, 184, 0.2); padding: 30px; border-radius: var(--radius-md); font-family: var(--font-sans); color: var(--text-primary); position: relative;">
        <div class="watermark-overlay" style="font-size: 32px; opacity: 0.05;">NATIONAL FORENSIC REPOSITORY</div>
        
        <div style="text-align: center; border-bottom: 2px solid var(--accent-cyan); padding-bottom: 16px; margin-bottom: 20px;">
          <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: var(--accent-cyan);">Government of India • Directorate of Forensic Investigation</div>
          <h3 style="font-size: 18px; font-weight: 800; color: #fff; margin: 4px 0;">CERTIFICATE OF CRYPTOGRAPHIC INTEGRITY & CHAIN OF CUSTODY</h3>
          <p style="font-size: 11px; color: var(--text-muted); font-family: var(--font-mono);">Pursuant to Section 65B of the Indian Evidence Act / BNSS Standards</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; font-size: 12px; margin-bottom: 20px; background: rgba(7, 17, 31, 0.5); padding: 14px; border-radius: var(--radius-sm);">
          <div><strong>Certificate ID:</strong> <span style="font-family: var(--font-mono); color: var(--accent-cyan-light);">CERT-IN-2026-99482</span></div>
          <div><strong>Generation Timestamp:</strong> <span style="font-family: var(--font-mono);">${new Date().toISOString()}</span></div>
          <div><strong>Issuing Officer:</strong> ${State.currentUser.name} (${State.currentUser.role})</div>
          <div><strong>Digital PKI Signature:</strong> <span style="color: var(--status-success);">AUTHENTICATED (ECDSA P-256)</span></div>
        </div>

        <h5 style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.8px; color: var(--text-muted); margin-bottom: 10px;">Recent Cryptographic Ledger Milestones</h5>
        <div style="overflow-x: auto;">
          <table class="data-table" style="font-size: 11px;">
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>Action</th>
                <th>Document / Artifact</th>
                <th>Investigator</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${logs.map(l => `
                <tr>
                  <td style="font-family: var(--font-mono); font-size: 10px;">${l.timestamp}</td>
                  <td><span class="badge badge-cyan" style="font-size: 9px;">${l.action}</span></td>
                  <td>${l.document}</td>
                  <td>${l.user}</td>
                  <td><span class="badge badge-active" style="font-size: 9px;">${l.status}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div style="margin-top: 24px; padding-top: 14px; border-top: 1px dashed rgba(148, 163, 184, 0.2); display: flex; justify-content: space-between; align-items: flex-end; font-size: 11px;">
          <div>
            <div style="font-size: 10px; color: var(--text-dark);">Cryptographic Fingerprint:</div>
            <div style="font-family: var(--font-mono); font-size: 9px; color: var(--accent-cyan);">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</div>
          </div>
          <div style="text-align: right;">
            <div style="border-bottom: 1px solid #94A3B8; width: 140px; margin-bottom: 4px;"></div>
            <div style="font-weight: 700; color: #fff;">Authorized Digital Signatory</div>
            <div style="font-size: 10px; color: var(--text-muted);">Central Digital Forensics Unit</div>
          </div>
        </div>
      </div>
    `;

    const footerHtml = `
      <button class="btn btn-secondary btn-sm" id="cert-close-btn">Close</button>
      <button class="btn btn-primary btn-sm" id="cert-print-btn">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
        Print Official Certificate
      </button>
    `;

    this.open({
      title: 'Forensic Audit & Chain of Custody Certificate',
      bodyHtml,
      footerHtml,
      size: 'lg'
    });

    document.getElementById('cert-close-btn').addEventListener('click', () => this.close());
    document.getElementById('cert-print-btn').addEventListener('click', () => {
      window.print();
    });
  }
}

export const Modal = new ModalManager();
