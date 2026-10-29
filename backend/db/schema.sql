-- ==============================================================================
-- La Crown Luxury Aesthetic Clinic - Neon PostgreSQL Database Schema
-- Compatible with Neon Serverless Postgres (AWS / GCP)
-- ==============================================================================

-- 1. Private Appointments Table
CREATE TABLE IF NOT EXISTS appointments (
    id SERIAL PRIMARY KEY,
    reference VARCHAR(32) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    service VARCHAR(255) NOT NULL,
    doctor VARCHAR(255) DEFAULT 'Any Specialist',
    preferred_date VARCHAR(50) NOT NULL,
    preferred_time VARCHAR(50) NOT NULL,
    notes TEXT,
    status VARCHAR(50) DEFAULT 'Pending Concierge Call',
    email_sent BOOLEAN DEFAULT FALSE,
    email_id VARCHAR(100),
    ip_address VARCHAR(50),
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Franchise Expressions of Interest Table
CREATE TABLE IF NOT EXISTS franchise_enquiries (
    id SERIAL PRIMARY KEY,
    reference VARCHAR(32) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    city VARCHAR(255) NOT NULL,
    investment VARCHAR(100) NOT NULL,
    message TEXT,
    status VARCHAR(50) DEFAULT 'New Prospectus Requested',
    email_sent BOOLEAN DEFAULT FALSE,
    email_id VARCHAR(100),
    ip_address VARCHAR(50),
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. General Patient & Clinic Contact Messages Table
CREATE TABLE IF NOT EXISTS contact_messages (
    id SERIAL PRIMARY KEY,
    reference VARCHAR(32) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    subject VARCHAR(255),
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'Unread',
    email_sent BOOLEAN DEFAULT FALSE,
    email_id VARCHAR(100),
    ip_address VARCHAR(50),
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Academy Training & Course Enquiries Table
CREATE TABLE IF NOT EXISTS academy_enquiries (
    id SERIAL PRIMARY KEY,
    reference VARCHAR(32) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    course VARCHAR(255) NOT NULL,
    training_programme VARCHAR(255),
    preferred_batch VARCHAR(100),
    preferred_start_date VARCHAR(100),
    education_qualification VARCHAR(255),
    experience TEXT,
    message TEXT,
    status VARCHAR(50) DEFAULT 'New Enquiry',
    email_sent BOOLEAN DEFAULT FALSE,
    email_id VARCHAR(100),
    notification_status VARCHAR(50) DEFAULT 'pending',
    ip_address VARCHAR(50),
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Request Email Notification Audit Logs Table
CREATE TABLE IF NOT EXISTS notification_logs (
    id SERIAL PRIMARY KEY,
    reference VARCHAR(32) NOT NULL,
    category VARCHAR(50) NOT NULL,
    recipient VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL,
    provider_message_id VARCHAR(100),
    error_message TEXT,
    retry_count INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Safe Schema Migrations (Add missing columns if tables already exist)
ALTER TABLE appointments ADD COLUMN IF NOT EXISTS notification_status VARCHAR(50) DEFAULT 'pending';
ALTER TABLE appointments ADD COLUMN IF NOT EXISTS branch VARCHAR(255) DEFAULT 'Jayanagar, Bengaluru';
ALTER TABLE appointments ADD COLUMN IF NOT EXISTS service_category VARCHAR(255);

ALTER TABLE franchise_enquiries ADD COLUMN IF NOT EXISTS notification_status VARCHAR(50) DEFAULT 'pending';
ALTER TABLE franchise_enquiries ADD COLUMN IF NOT EXISTS business_name VARCHAR(255);
ALTER TABLE franchise_enquiries ADD COLUMN IF NOT EXISTS state VARCHAR(100);
ALTER TABLE franchise_enquiries ADD COLUMN IF NOT EXISTS location VARCHAR(255);
ALTER TABLE franchise_enquiries ADD COLUMN IF NOT EXISTS business_details TEXT;
ALTER TABLE franchise_enquiries ADD COLUMN IF NOT EXISTS business_experience TEXT;

ALTER TABLE contact_messages ADD COLUMN IF NOT EXISTS notification_status VARCHAR(50) DEFAULT 'pending';

-- Optimized Performance Indexes
CREATE INDEX IF NOT EXISTS idx_appointments_ref ON appointments(reference);
CREATE INDEX IF NOT EXISTS idx_appointments_created ON appointments(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_franchise_ref ON franchise_enquiries(reference);
CREATE INDEX IF NOT EXISTS idx_franchise_created ON franchise_enquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_ref ON contact_messages(reference);
CREATE INDEX IF NOT EXISTS idx_academy_ref ON academy_enquiries(reference);
CREATE INDEX IF NOT EXISTS idx_academy_created ON academy_enquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_notifications_ref ON notification_logs(reference);
CREATE INDEX IF NOT EXISTS idx_notifications_cat ON notification_logs(category);
CREATE INDEX IF NOT EXISTS idx_notifications_created ON notification_logs(created_at DESC);
