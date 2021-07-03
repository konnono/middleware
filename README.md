# 伺服器接收請求紀錄及回應時間
顯示伺服器接收請求紀錄及回應時間

## 功能
- 伺服器收到任何來自瀏覽器的 request 時，都會自動把資訊紀錄到 server log 裡，包括：以當地時間顯示的時間戳記、請求的 HTTP 方法及URL
- 伺服器回應所需的時間，以ms呈現

## 安裝方式
複製檔案
```
git clone https://github.com/konnono/middleware.git
```

執行程式:
```
npm run start
```

以開發模式執行程式(nodemon):
```
npm run dev
```
