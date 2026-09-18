import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const GOOGLE_SCRIPT_URL =
  process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
  "https://script.google.com/macros/s/AKfycbzGcFwgHqw2fQIoJJXhMhyMi13ZkWYtYigYUD-JxQrgM-98Fw5dW8T7EV0GpvJgscwJ/exec";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const entry = {
      timestamp: new Date().toISOString(),
      type: body.type || "Admissions",
      parentName: body.parentName || body.name || "",
      studentName: body.studentName || "-",
      grade: body.grade || "-",
      branch: body.branch || "Either Branch",
      phone: body.phone || "",
      email: body.email || "",
      message: body.message || "",
    };

    // 1. Local Safety Backup: Save to local JSON so no enquiry is EVER lost
    try {
      const backupDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }
      const backupFile = path.join(backupDir, "enquiries-backup.json");
      let currentBackup = [];
      if (fs.existsSync(backupFile)) {
        try {
          currentBackup = JSON.parse(fs.readFileSync(backupFile, "utf-8"));
        } catch {
          currentBackup = [];
        }
      }
      currentBackup.push(entry);
      fs.writeFileSync(backupFile, JSON.stringify(currentBackup, null, 2), "utf-8");
    } catch (backupError) {
      console.error("Local backup write error:", backupError);
    }

    // 2. Forward to Google Sheets Webhook
    let googleResponse = null;
    if (GOOGLE_SCRIPT_URL) {
      try {
        const res = await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(entry),
          redirect: "follow",
        });
        const text = await res.text();
        googleResponse = text;
      } catch (sheetError) {
        console.error("Google Sheets forward error:", sheetError);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry recorded successfully",
      googleResponse,
    });
  } catch (error) {
    console.error("Error in /api/enquiry:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process enquiry" },
      { status: 500 }
    );
  }
}
