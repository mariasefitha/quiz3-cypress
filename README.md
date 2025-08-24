# Quiz 3 - Cypress Automation Testing  
Automation testing untuk fitur **Login OrangeHRM** menggunakan **Cypress**.

Bootcamp QA Batch 69 - Sanbercode

cypress/e2e/login.spec.js → test case
cypress/fixtures/users.json → data user
cypress/pages/loginPage.js → page object
cypress/support/commands.js → custom command
cypress.config.js → config baseUrl
package.json → untuk dependensi Cypress
  

## 📌 Deskripsi
Project ini dibuat untuk memenuhi tugas Quiz 3 Bootcamp QA Automation.  
Fitur yang diuji: **Login OrangeHRM** dengan berbagai skenario valid dan invalid.  
Semua test case ditulis dalam format `it block` pada Cypress.  


## 📄 Struktur Folder
orangehrm-cypress/
├─ package.json
├─ cypress.config.js
├─ .gitignore
├─ README.md
├─ cypress/
│  ├─ e2e/
│  │  └─ login.spec.js
│  ├─ fixtures/
│  │  └─ users.json
│  ├─ support/
│  │  ├─ commands.js
│  │  └─ e2e.js
│  └─ pages/
│     └─ loginPage.js
└─ .github/
   └─ workflows/
      └─ cypress.yml

cypress/e2e/login.spec.js → test case
cypress/fixtures/users.json → data user
cypress/pages/loginPage.js → page object
cypress/support/commands.js → custom command
cypress.config.js → config baseUrl
package.json → untuk dependensi Cypress


## 🧪 Test Cases
1. **TC-01**: Login berhasil dengan username & password valid  
2. **TC-02**: Login gagal dengan password salah  
3. **TC-03**: Login gagal dengan username salah  
4. **TC-04**: Login gagal jika username & password kosong  
5. **TC-05**: Login gagal jika hanya username yang diisi  
6. **TC-06**: Login gagal jika hanya password yang diisi  
7. **TC-07**: Login gagal dengan input SQL Injection  

Total test case: **7**  
Semua test case **PASSED ✅**  


## ⚙️ Setup & Install
1. Clone repository:
   ```bash
   git clone https://github.com/mariasefitha/quiz3-cypress.git
   cd quiz3-cypress
2. Install dependencies:
   npm install
3. Jalankan Cypress (GUI):
   npx cypress open
   --atau headless mode:
   npx cypress run


## 👩‍💻 Tools
1. Cypress v15+
2. Node.js LTS
3. Git & GitHub
