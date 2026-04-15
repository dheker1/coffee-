@echo off
REM Sedna Coffee - Full Stack Setup Script

echo.
echo ========================================
echo   Sedna Coffee - Setup Script
echo ========================================
echo.

echo [1/4] Cleaning build artifacts...
rmdir /s /q .next 2>nul
rmdir /s /q backend\node_modules 2>nul
echo ✓ Cleaned

echo.
echo [2/4] Installing frontend dependencies...
call npm install --legacy-peer-deps
echo ✓ Frontend dependencies installed

echo.
echo [3/4] Installing backend dependencies...
cd backend
call npm install
cd ..
echo ✓ Backend dependencies installed

echo.
echo [4/4] Building frontend...
call npm run build
echo ✓ Frontend build complete

echo.
echo ========================================
echo   Setup Complete!
echo ========================================
echo.
echo Next Steps:
echo.
echo Terminal 1 - Start Frontend:
echo   npm run dev
echo   Visit: http://localhost:3000
echo.
echo Terminal 2 - Start Backend:
echo   cd backend
echo   npm start
echo   API: http://localhost:5000/api
echo.
echo For GitHub setup, see: GITHUB_SETUP.md
echo.
pause
