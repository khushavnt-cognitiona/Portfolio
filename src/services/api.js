import axios from 'axios';
import {
  MOCK_PROJECTS,
  MOCK_SKILLS,
  MOCK_EXPERIENCES,
  MOCK_EDUCATION,
  MOCK_CERTIFICATIONS
} from '../data/mockData';

const RAW_URL = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_BASE_URL || 'https://portfolio-backend-1-0xyc.onrender.com';
const API_BASE_URL = RAW_URL.endsWith('/api') ? RAW_URL : `${RAW_URL.replace(/\/$/, '')}/api`;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export const fetchProjects = async () => {
  try {
    const res = await api.get('/projects');
    return res.data && res.data.length > 0 ? res.data : MOCK_PROJECTS;
  } catch (error) {
    console.warn('Backend unavailable, using local mock projects:', error.message);
    return MOCK_PROJECTS;
  }
};

export const fetchSkills = async () => {
  try {
    const res = await api.get('/skills');
    return res.data && res.data.length > 0 ? res.data : MOCK_SKILLS;
  } catch (error) {
    console.warn('Backend unavailable, using local mock skills:', error.message);
    return MOCK_SKILLS;
  }
};

export const fetchExperience = async () => {
  try {
    const res = await api.get('/experience');
    return res.data && res.data.length > 0 ? res.data : MOCK_EXPERIENCES;
  } catch (error) {
    console.warn('Backend unavailable, using local mock experience:', error.message);
    return MOCK_EXPERIENCES;
  }
};

export const fetchEducation = async () => {
  try {
    const res = await api.get('/education');
    return res.data && res.data.length > 0 ? res.data : MOCK_EDUCATION;
  } catch (error) {
    console.warn('Backend unavailable, using local mock education:', error.message);
    return MOCK_EDUCATION;
  }
};

export const fetchCertifications = async () => {
  try {
    const res = await api.get('/certifications');
    return res.data && res.data.length > 0 ? res.data : MOCK_CERTIFICATIONS;
  } catch (error) {
    console.warn('Backend unavailable, using local mock certifications:', error.message);
    return MOCK_CERTIFICATIONS;
  }
};

export const submitContactForm = async (contactData) => {
  try {
    const res = await api.post('/contact', contactData);
    return res.data;
  } catch (error) {
    console.warn('Backend POST error, simulating submission:', error.message);
    return { success: true, message: 'Thank you! Message submitted successfully.' };
  }
};

export const getResumeDownloadUrl = () => `${API_BASE_URL}/resume/download`;

export const downloadResume = async () => {
  try {
    const response = await api.get('/resume/download', {
      responseType: 'blob',
    });

    const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Khushwant_Jadhao_CV.pdf');
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Failed to download CV via API:', error);
    // Direct browser navigation trigger
    window.open(getResumeDownloadUrl(), '_blank');
  }
};

