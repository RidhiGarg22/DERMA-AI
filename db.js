import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const initialDb = {
  users: [
    {
      id: 'usr_admin',
      email: 'admin@skinhealth.ai',
      username: 'Administrator',
      passwordHash: '$2a$10$eE/2n/rWd9g1gQ8C0xPzOu1bEw/0k/o.2E1J2K3L4M5N6O7P8Q9R0S', // 'admin123'
      role: 'admin',
      bio: 'Lead AI & Medical Researcher',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
      lifestyleDefaults: {
        age: 26,
        gender: 'female',
        sleep_hours: 7.5,
        sleep_quality: 8,
        stress_level: 4,
        water_intake: 2.5,
        diet_type: 1,
        screen_time: 5,
        exercise_minutes: 45,
        skincare_routine: 1,
        alcohol_smoking: 0
      },
      createdAt: new Date().toISOString()
    },
    {
      id: 'usr_ridhi',
      email: '22ridhig@gmail.com',
      username: 'Ridhi Garg',
      passwordHash: '$2a$10$eE/2n/rWd9g1gQ8C0xPzOu1bEw/0k/o.2E1J2K3L4M5N6O7P8Q9R0S', // 'user123'
      role: 'user',
      bio: 'Lead Author & Researcher - Skin Health AI IEEE Paper',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250',
      lifestyleDefaults: {
        age: 24,
        gender: 'female',
        sleep_hours: 8,
        sleep_quality: 9,
        stress_level: 3,
        water_intake: 2.8,
        diet_type: 1,
        screen_time: 4,
        exercise_minutes: 40,
        skincare_routine: 1,
        alcohol_smoking: 0
      },
      createdAt: new Date().toISOString()
    }
  ],
  predictions: [],
  chatHistory: [],
  notifications: [
    { id: 'notif_1', userId: 'usr_ridhi', title: 'Hydration Reminder', message: 'Time to drink a glass of water!', type: 'water', time: '10:00 AM', enabled: true },
    { id: 'notif_2', userId: 'usr_ridhi', title: 'Skincare Routine', message: 'Evening SPF & moisturizer check', type: 'skincare', time: '09:00 PM', enabled: true }
  ],
  reports: []
};

// Initialize DB if file does not exist
if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify(initialDb, null, 2), 'utf-8');
}

export function readDb() {
  try {
    const raw = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    return initialDb;
  }
}

export function writeDb(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to write DB file:', err);
  }
}
