function getPetugasPoliAccountLabel() {
    const poli = getPetugasPoliDefaultPoli();
    if (poli === 'DOKTER_UMUM') return 'POLIKLINIK UMUM';
    if (poli === 'SPESIALIS_ANAK') return 'POLIKLINIK ANAK';
    if (poli === 'SPESIALIS_PENYAKIT_DALAM') return 'POLIKLINIK PENYAKIT DALAM';
    return 'POLIKLINIK';
}

function formatAdminRoleLabel(role) {
    const value = String(role || '').trim().toLowerCase();
    if (value === 'supervisor') return 'Supervisor';
    if (value === 'admin_rme') return 'Admin RME';
    if (value === 'admin_pendaftaran') return 'Petugas Pendaftaran';
    if (value === 'admin_igd') return 'Petugas UGD';
    if (value === 'bidan') return 'Bidan';
    if (value === 'perawat') return 'Perawat';
    if (value === 'dokter') return 'Dokter';
    if (value === 'admin_farmasi' || value === 'petugas_farmasi' || value === 'petugas farmasi') return 'Petugas Farmasi';
    if (value === 'petugas_poli' || value === 'petugas poli') return getPetugasPoliAccountLabel();
    return value ? value.replace(/_/g, ' ') : 'Belum Diatur';
}

function normalizeStaffName(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
}

function formatLoketLabel(loket) {
    const value = String(loket || '').trim().toUpperCase();
    if (value === 'A' || value === 'LOKET_A') return 'Loket A';
    if (value === 'B' || value === 'LOKET_B') return 'Loket B';
    if (value === 'C' || value === 'LOKET_C') return 'Loket C';
    if (value === 'LOKET_1') return 'Loket A';
    if (value === 'LOKET_2') return 'Loket B';
    if (value === 'LOKET_3') return 'Loket C';
    if (value === 'SUPERVISOR') return 'Supervisor';
    return value ? value.replace(/_/g, ' ') : '-';
}

function normalizeLoketCode(value) {
    const raw = String(value || '').trim().toUpperCase();
    if (!raw) return '';
    if (raw === 'SUPERVISOR') return 'SUPERVISOR';
    if (raw === 'A' || raw === 'LOKET_A' || raw === 'LOKETA' || raw === 'LOKET-A') return 'A';
    if (raw === 'B' || raw === 'LOKET_B' || raw === 'LOKETB' || raw === 'LOKET-B') return 'B';
    if (raw === 'C' || raw === 'LOKET_C' || raw === 'LOKETC' || raw === 'LOKET-C') return 'C';
    if (raw === 'LOKET_1' || raw === 'LOKET1') return 'A';
    if (raw === 'LOKET_2' || raw === 'LOKET2') return 'B';
    if (raw === 'LOKET_3' || raw === 'LOKET3') return 'C';
    const match = raw.match(/\b([ABC])\b/);
    return match ? match[1] : raw;
}

function getLoketAliases(loketCode) {
    const code = normalizeLoketCode(loketCode);
    if (!code || code === 'SUPERVISOR') return [];
    if (code === 'A') return ['A', 'LOKET_1', 'LOKET_A'];
    if (code === 'B') return ['B', 'LOKET_2', 'LOKET_B'];
    if (code === 'C') return ['C', 'LOKET_3', 'LOKET_C'];
    return [code];
}

function isUgdValue(value) {
    const normalized = String(value || '').trim().toUpperCase();
    return normalized === 'UGD' || normalized === 'IGD';
}

function queueControlPrefix(unit) {
    if (unit === 'POLIKLINIK') return 'Poliklinik';
    if (unit === 'FARMASI') return 'Farmasi';
    return String(unit || '');
}

function isPrioritasNoAntrian(noAntrian) {
    return /^B-/i.test(String(noAntrian || '').trim());
}

function isPoliklinikRegulerNoAntrian(noAntrian) {
    return /^A-/i.test(String(noAntrian || '').trim());
}

function r_unitLabel(unit) {
    if (!unit) return '-';
    if (unit === 'FARMASI') return 'Farmasi';
    if (unit === 'POLIKLINIK') return 'Poliklinik';
    if (isUgdValue(unit)) return 'UGD';
    return unit;
}

function r_jenisPasienLabel(jenisPasien) {
    if (!jenisPasien) return '-';
    if (jenisPasien === 'BELUM_DITENTUKAN') return '-';
    if (jenisPasien === 'BPJS') return 'BPJS';
    if (jenisPasien === 'UMUM') return 'Umum';
    return jenisPasien;
}

function r_poliLabel(poli) {
    if (!poli) return '';
    if (poli === 'FARMASI') return '';
    if (isUgdValue(poli)) return 'UGD';
    if (poli === 'SPESIALIS_ANAK') return 'Poli Anak';
    if (poli === 'SPESIALIS_PENYAKIT_DALAM') return 'Poli Penyakit Dalam';
    if (poli === 'DOKTER_UMUM') return 'Poli Umum';
    return poli;
}
