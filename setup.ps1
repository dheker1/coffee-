# Sedna Coffee - Full Stack Setup Script (PowerShell)

Write-Host "`n========================================"
Write-Host "  Sedna Coffee - Setup Script"
Write-Host "========================================`n"

Write-Host "[1/4] Cleaning build artifacts..." -ForegroundColor Cyan
Remove-Item -Path ".\.next" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path ".\backend\node_modules" -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "✓ Cleaned" -ForegroundColor Green

Write-Host "`n[2/4] Installing frontend dependencies..." -ForegroundColor Cyan
npm install --legacy-peer-deps
Write-Host "✓ Frontend dependencies installed" -ForegroundColor Green

Write-Host "`n[3/4] Installing backend dependencies..." -ForegroundColor Cyan
Set-Location backend
npm install
Set-Location ..
Write-Host "✓ Backend dependencies installed" -ForegroundColor Green

Write-Host "`n[4/4] Building frontend..." -ForegroundColor Cyan
npm run build
Write-Host "✓ Frontend build complete" -ForegroundColor Green

Write-Host "`n========================================"
Write-Host "  Setup Complete!"
Write-Host "========================================`n"

Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host ""
Write-Host "Terminal 1 - Start Frontend:" -ForegroundColor Cyan
Write-Host "  npm run dev"
Write-Host "  Visit: http://localhost:3000"
Write-Host ""
Write-Host "Terminal 2 - Start Backend:" -ForegroundColor Cyan
Write-Host "  cd backend"
Write-Host "  npm start"
Write-Host "  API: http://localhost:5000/api"
Write-Host ""
Write-Host "For GitHub setup, see: GITHUB_SETUP.md" -ForegroundColor Green
Write-Host ""
Write-Host "Press Enter to exit..."
$null = Read-Host
