function computeAgeYears(dateString) {
    const raw = String(dateString || '').trim();
    if (!raw) return '';
    const birth = new Date(raw + 'T00:00:00');
    if (Number.isNaN(birth.getTime())) return '';
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age -= 1;
    }
    if (!Number.isFinite(age) || age < 0) age = 0;
    return String(age);
}

function formatSequentialNumber(number) {
    const safeNumber = Number.isFinite(Number(number)) && Number(number) > 0 ? Number(number) : 1;
    return String(Math.trunc(safeNumber)).padStart(6, '0');
}

function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function normalizeExternalUrl(url) {
    const raw = String(url || '').trim();
    if (!raw) return '';
    if (/^https?:\/\//i.test(raw)) return raw;
    return 'https://' + raw;
}

function formatDateSlash(isoOrDate) {
    if (!isoOrDate) return '';
    const d = new Date(isoOrDate);
    if (Number.isNaN(d.getTime())) {
        const raw = String(isoOrDate);
        const match = raw.match(/^(\d{4})-(\d{2})-(\d{2})$/);
        if (match) return `${match[3]}/${match[2]}/${match[1]}`;
        return raw;
    }
    const pad2 = (n) => String(n).padStart(2, '0');
    return `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}/${d.getFullYear()}`;
}

function formatLocalDateTime(date) {
    const pad2 = (n) => String(n).padStart(2, '0');
    const dd = pad2(date.getDate());
    const mm = pad2(date.getMonth() + 1);
    const yyyy = date.getFullYear();
    const hh = pad2(date.getHours());
    const min = pad2(date.getMinutes());
    return `${dd}-${mm}-${yyyy} ${hh}:${min}`;
}

function digitsOnly(value) {
    return String(value || '').replace(/\D/g, '');
}

function formatGeneralConsentDate(value) {
    if (!value) return '';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return String(value);
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
}

function sanitizePhoneDigits(value) {
    return String(value || '').replace(/\D+/g, '');
}

function formatTriaseDate(date = new Date()) {
    const d = date instanceof Date ? date : new Date();
    if (Number.isNaN(d.getTime())) return '';
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
}

function formatTriaseTime(date = new Date()) {
    const d = date instanceof Date ? date : new Date();
    if (Number.isNaN(d.getTime())) return '';
    const hh = String(d.getHours()).padStart(2, '0');
    const min = String(d.getMinutes()).padStart(2, '0');
    return `${hh}:${min}`;
}
