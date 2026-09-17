/**
 * CASEVAULT Top Navigation Bar Component
 */

import { State } from '../state.js';
import { Toast } from './toast.js';

export const NavbarComponent = {
  render() {
    const unreadCount = State.notifications.filter(n => n.unread).length;

    return `
      <header class="topbar">
        <div class="topbar-left">
          <!-- Global Document & Case Search -->
          <div class="search-container">
            <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input 
              type="text" 
              class="global-search-input" 
              id="global-search-input" 
              placeholder="Search documents, case files, SHA-256 hashes, or investigators..." 
              autocomplete="off"
            />
            <span class="search-shortcut">/</span>
          </div>
        </div>

        <div class="topbar-right">
          <!-- Live System Security Status -->
          <div class="system-status-indicator" title="Cryptographic Health: 99.98% • FIPS 140-2 Validated">
            <div class="status-pulse-dot"></div>
            <span>System Secure</span>
            <span style="color: var(--text-dark);">|</span>
            <span style="font-family: var(--font-mono); font-size: 10px;">Backup: 12m ago</span>
          </div>

          <!-- Quick Interactive Role Switcher for Hackathon Demonstrators -->
          <div style="display: flex; align-items: center; gap: 6px; background: var(--bg-slate); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 4px 8px;">
            <span style="font-size: 10px; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Role:</span>
            <select id="navbar-role-switcher" style="background: transparent; border: none; color: var(--accent-cyan); font-size: 11px; font-weight: 700; outline: none; cursor: pointer;">
              ${State.roles.map(r => `
                <option value="${r}" ${State.currentUser.role === r ? 'selected' : ''} style="background: var(--bg-dark-blue); color: #fff;">
                  ${r}
                </option>
              `).join('')}
            </select>
          </div>

          <!-- Notifications Bell -->
          <div style="position: relative;">
            <button class="topbar-btn" id="notifications-bell-btn" title="Notifications">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              ${unreadCount > 0 ? `<div class="badge-dot"></div>` : ''}
            </button>

            <!-- Notifications Mini Dropdown -->
            <div id="notifications-dropdown" style="display: none; position: absolute; right: 0; top: 48px; width: 340px; background: var(--bg-dark-blue); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); box-shadow: var(--shadow-lg); z-index: 200; overflow: hidden;">
              <div style="padding: 12px 16px; border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between;">
                <span style="font-size: 12px; font-weight: 700; color: var(--text-white);">System Notifications</span>
                <span class="badge badge-cyan" style="font-size: 10px;">${unreadCount} New</span>
              </div>
              <div style="max-height: 280px; overflow-y: auto;">
                ${State.notifications.map(n => `
                  <div class="notification-item-compact" style="padding: 10px 14px; border-bottom: 1px solid rgba(148,163,184,0.06); cursor: pointer;" data-notif-link="${n.link}">
                    <div style="font-size: 12px; font-weight: 600; color: var(--text-white);">${n.title}</div>
                    <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">${n.message}</div>
                    <div style="font-size: 9px; color: var(--accent-cyan); margin-top: 4px; font-family: var(--font-mono);">${n.time}</div>
                  </div>
                `).join('')}
              </div>
              <div style="padding: 8px 14px; background: rgba(7, 17, 31, 0.4); text-align: center;">
                <a href="#" id="view-all-notifications-link" style="font-size: 11px; color: var(--accent-cyan); text-decoration: none; font-weight: 600;">View All Notifications →</a>
              </div>
            </div>
          </div>

          <!-- User Avatar Chip -->
          <div class="user-avatar" style="width: 32px; height: 32px; font-size: 11px; cursor: pointer;" title="${State.currentUser.name} (${State.currentUser.role})">
            ${State.currentUser.avatar}
          </div>
        </div>
      </header>
    `;
  },

  bindEvents(onNavigate, onSearch) {
    // Search input
    const searchInput = document.getElementById('global-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const q = e.target.value.trim();
        if (typeof onSearch === 'function') onSearch(q);
      });
    }

    // Role switcher live change
    const roleSwitcher = document.getElementById('navbar-role-switcher');
    if (roleSwitcher) {
      roleSwitcher.addEventListener('change', (e) => {
        const newRole = e.target.value;
        State.switchUserRole(newRole);
        Toast.info('Clearance Role Updated', `Active role switched to: ${newRole}`);
        if (typeof onNavigate === 'function') onNavigate(null, true); // re-render current view
      });
    }

    // Notifications toggle
    const bellBtn = document.getElementById('notifications-bell-btn');
    const notifDropdown = document.getElementById('notifications-dropdown');
    if (bellBtn && notifDropdown) {
      bellBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = notifDropdown.style.display === 'block';
        notifDropdown.style.display = isOpen ? 'none' : 'block';
      });

      document.addEventListener('click', (e) => {
        if (!notifDropdown.contains(e.target) && e.target !== bellBtn) {
          notifDropdown.style.display = 'none';
        }
      });
    }

    const viewAllLink = document.getElementById('view-all-notifications-link');
    if (viewAllLink) {
      viewAllLink.addEventListener('click', (e) => {
        e.preventDefault();
        notifDropdown.style.display = 'none';
        if (typeof onNavigate === 'function') onNavigate('notifications');
      });
    }

    // Handle clicking notification item in dropdown
    document.querySelectorAll('.notification-item-compact').forEach(item => {
      item.addEventListener('click', () => {
        const link = item.getAttribute('data-notif-link');
        notifDropdown.style.display = 'none';
        if (link && typeof onNavigate === 'function') onNavigate(link);
      });
    });
  }
};
