# Car Insurance Server 

เป็น Sever และ เว็บ Admin ของเว็บซื้อประกันจากประกันของบริษัทเอเชียประกันภัย
<br/>
ซึ่งจัดทำขึ้นเพิ่อเป็นงานโปรเจ็คของวิชา SA และ Web-Tech

## วิธีการ Setup
* ติดตั้ง adonis ด้วยคำสั่ง
    ``` bash
    npm i -g @adonis/cli
    ```
* และทำการ install package ต่างๆด้วยคำสั่ง
    ``` bash
     adonis install หรือ npm install
    ```

* ทำการคัดลอกไฟล์ .env.example ไปสร้างไฟล์ใหม่
    <br/>
    โดยใช้ชื่อว่า .env

* จากนั้นทำการ generate secret key ด้วยคำสั่ง
    ```bash
     adonis key:generate
    ```

* เข้าไปแก้ไขข้อมูล Database ในไฟล์ .env 
    > DB_CONNECTION=mysql<br/>
    > DB_HOST=localhost<br/>
    > DB_PORT=<< Port of your Database Server >><br/>
    > DB_USER=<< Username for access your Database >><br/>
    > DB_PASSWORD=<< Password of Username >><br/>
    > DB_DATABASE=<< your Database Name >><br/>

* ทำการสร้าง Table ของ Database ด้วยคำสั่ง
    ```bash
     adonis migration:run 
    ```
    และในครั้งต่อๆไปให้ใช้คำสั่งนี้
    ```bash
     adonis migration:refresh
    ```
* ทำการสร้างข้อมูลเริ่มต้นด้วยคำสั่ง (ตามลำดับ)
    ```bash
     adonis seed --files UserSeeder.js
     adonis seed --files SellerSeeder.js
     adonis seed --files CarGroupSeeder.js
     adonis seed --files CarTypeSeeder.js
     adonis seed --files CarSerySeeder.js
     adonis seed --files ProtectionDetailSeeder.js
     adonis seed --files InsuranceTypeSeeder.js
     adonis seed --files RatePriceSeeder.js
    ```

## วิธีการ Run
```bash
 adonis serve --dev
```

## ข้อมูลที่ใช้ทดสอบ
> Email: admin@email.com
><br/>
> Password: admin