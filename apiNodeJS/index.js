require('dotenv').config();   // Thêm dòng này để sử dụng dotenv
const mysql = require('mysql');
const express = require('express');
const app = express();
const cors = require('cors');
const crypto = require('crypto'); // để tạo OTP
const nodemailer = require('nodemailer');
app.use([cors(), express.json()]);

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost', 
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '', 
  port: process.env.DB_PORT || 3306, 
  database: process.env.DB_NAME || 'project1thuctap'
}); 
db.connect( err => { if (err) throw err; console.log('Da ket noi database') });



app.get('/spmoi/:sosp?', function(req, res) {
  let sosp = parseInt(req.params.sosp) || 8;
  if (sosp <= 1) {
      sosp = 8;
  }

  let sql = `SELECT sp.id , sp.id_loai, sp.ten_sp, sp.gia, sp.gia_km, sp.hinh, sp.ngay, sp.luot_xem, tt.ram, tt.dia_cung
              FROM san_pham sp
              LEFT JOIN thuoc_tinh tt ON sp.id = tt.id_sp
              WHERE sp.an_hien = 1
              ORDER BY sp.ngay DESC
              LIMIT ?`;

  db.query(sql, [sosp], (err, data) => {
      if (err) {
          res.json({"Thông báo": "Lỗi lấy danh sách sản phẩm", "error": err});
      } else {
          data.forEach(sp => {
              if (sp.gia && sp.gia_km) {
                  sp.phan_tram_gg = Math.round(((sp.gia - sp.gia_km) / sp.gia) * 100);
              } else {
                  sp.phan_tram_gg = 0;
              }
          });
          res.json(data);
      }
  });
});

app.get('/sphot', function(req, res) {
  let spxn = parseInt(req.params.spxn || 10);
  if (spxn <= 1){
      spxn = 9;
  }
    let sql = `SELECT * FROM san_pham WHERE luot_xem > 800`;
    db.query(sql,(err, data) => {
      if (err) res.json({"thongbao": "Lỗi lấy thông tin sản phẩm hót", err });
      else res.json(data);
    });   
  });
  

  app.get('/sp', function(req, res) {
    let sql = `SELECT * FROM san_pham` 
    db.query( sql, (err, data) => {
      if (err) res.json({"thongbao":"Lỗi lấy chi tiết sản phẩm", err })
      else res.json(data);
     });   
});
app.get('/spnoibat', function(req, res) {
    let sql = `SELECT * FROM san_pham WHERE hot = 1`;
    db.query(sql,(err, data) => {
      if (err) res.json({"thongbao": "Lỗi lấy thông tin sản phẩm hót", err });
      else res.json(data);
    });   
  });

app.get('/sanpham/:id', function(req, res) {
  let id = parseInt(req.params.id);      
    if ( isNaN(id) || id <= 0) { 
      res.json({"thong bao":"Không biết sp", "id": id});  return; 
    } 
  let sql = `SELECT id, id_loai, ten_sp, slug, gia, gia_km, hinh, ngay, luot_xem FROM san_pham WHERE id= ?` 

  db.query( sql,id, (err, data) => {
    if (err) res.json({"thongbao":"Lỗi lấy chi tiết sản phẩm", err })
    else res.json(data[0]);
   });   
});


// app.get('/sp/:id/:id_loai?', function(req, res) {
//   let id = parseInt(req.params.id || 0); 
//   let id_loai = parseInt(req.params.id_loai || 0);     
//   if (isNaN(id) || id <= 0 || isNaN(id_loai) || id_loai <= 0) { 
//       res.json({"thong_bao": "Không biết sản phẩm hoặc loại sản phẩm", "id": id, "id_loai": id_loai});  
//       return; 
//   } 

//   let sql = `
//     SELECT sp.id, sp.id_loai, sp.ten_sp, sp.slug, sp.gia, sp.gia_km, sp.hinh, sp.ngay, sp.luot_xem, 
//            tt.ram, tt.cpu, tt.dia_cung, tt.can_nang
//     FROM san_pham sp
//     LEFT JOIN thuoc_tinh tt ON sp.id = tt.id_sp
//     LEFT JOIN loai l ON sp.id_loai = l.id
//     WHERE sp.id = ? AND sp.id_loai = ?;
//   `
//   ;
//    db.query(sql, [id, id_loai], (err, data) => {
//     if (err) {
//         res.json({"Thông báo": "Lỗi lấy chi tiết sản phẩm", "error": err});
//     } else {
//         res.json(data[0]);
//     }
// });  
// });
app.get('/sp/:id', function(req, res) {
  let id = parseInt(req.params.id || 0);     
  if (isNaN(id) || id <= 0 ) { 
      res.json({"thong_bao": "Không biết sản phẩm hoặc loại sản phẩm", "id": id});  
      return; 
  } 

  let sql = `
  SELECT sp.id, sp.ten_sp, sp.id_loai, sp.slug, sp.gia, sp.gia_km, sp.hinh, sp.ngay, sp.luot_xem, sp.mo_ta,
           tt.ram, tt.cpu, tt.dia_cung, tt.can_nang, tt.mau_sac,
           l.ten_loai
    FROM san_pham sp
    LEFT JOIN thuoc_tinh tt ON sp.id = tt.id_sp
    LEFT JOIN loai l ON sp.id_loai = l.id
    WHERE sp.id = ?;
  `
  ;
   db.query(sql, id, (err, data) => {
    if (err) {
        res.json({"Thông báo": "Lỗi lấy chi tiết sản phẩm", "error": err});
    } else {
        res.json(data[0]);

    }
});  
});

app.get('/sptrongloai/:idloai', function(req, res) {
  let idloai = parseInt(req.params.idloai);
  
  if (isNaN(idloai) || idloai <= 0) {
      res.json({"thong bao": "Không biết loại", "id": idloai});
      return;
  }
  
  let sql = `SELECT id, id_loai, ten_sp, gia, gia_km, hinh, ngay, luot_xem 
             FROM san_pham 
             WHERE id_loai = ? AND an_hien = 1 
             ORDER BY id DESC`;
  
  db.query(sql, [idloai], (err, data) => {
      if (err) {
          res.json({"thongbao": "Lỗi lấy sản phẩm theo loại", err });
      } else {
          res.json(data);
      }
  });
});


app.get('/loai', function(req, res) {
    let sql = `SELECT * FROM loai` 
    db.query( sql, (err, data) => {
      if (err) res.json({"thongbao":"Lỗi lấy danh sách loại", err })
      else res.json(data);
     });   
});


app.get('/loai/:id_loai', function(req, res) {
    let id_loai = parseInt(req.params.id_loai);      
    if ( isNaN(id_loai) || id_loai <= 0) { 
      res.json({"thong bao":"Không biết loại", "id": id_loai});  return; 
    } 
    let sql = `SELECT id, ten_loai, img_loai FROM loai WHERE id = ?` ;
    db.query( sql , id_loai,  (err, data) => {
      if (err) res.json({"thongbao":"Lỗi lấy loai", err })
      else res.json(data[0]);
     });   
});

app.post('/luudonhang/', function(req, res) {
    let data = req.body;    
    let sql = `INSERT INTO don_hang SET ?` ;
    db.query( sql , data,  function(err, data) {
      if (err) res.json({"id_dh":-1 ,"thongbao":'Lỗi lưu đơn hàng', err })
      else {
           id_dh = data.insertId
           res.json({"id_dh": id_dh ,"thongbao":"Đã lưu đơn hàng" })
      }
     });   
});

app.post('/luugiohang/', function(req, res) {
    let data = req.body;    
    let sql = `INSERT INTO don_hang_chi_tiet SET ?` ;
    db.query( sql , data,  function(err, data) {
      if (err) res.json({"id_dh":-1 ,"thongbao":'Lỗi lưu sản phẩm', err })
      else
           res.json({"thongbao":'Đã lưu sp vào database', "id_sp": data.id_sp})
     });   
});


app.get('/admin/sp', function(req, res) {
  let sql = `
    SELECT sp.id, sp.id_loai, sp.ten_sp, sp.slug, sp.gia, sp.gia_km, sp.hinh, sp.ngay, sp.luot_xem, 
           tt.ram, tt.cpu, tt.dia_cung, tt.mau_sac,tt.can_nang,
           l.ten_loai
    FROM san_pham sp
    LEFT JOIN thuoc_tinh tt ON sp.id = tt.id_sp
    LEFT JOIN loai l ON sp.id_loai = l.id
    ORDER BY sp.id DESC
  `;
  
  db.query(sql, (err, data) => {
    if (err) {
      res.json({"Thông báo": "Lỗi lấy danh sách sản phẩm", "error": err});
    } else {
      res.json(data);
    }
  });
});




app.get('/admin/sp/:id', function(req, res) {
  let id = parseInt(req.params.id || 0);

  if (isNaN(id) || id <= 0) { 
    res.json({"thong_bao": "ID sản phẩm không hợp lệ", "id": id});  
    return; 
  }

  let sql = `
    SELECT sp.id, sp.id_loai, sp.ten_sp, sp.slug, sp.gia, sp.gia_km, sp.hinh, sp.ngay, sp.luot_xem, 
           tt.ram, tt.cpu, tt.dia_cung, tt.mau_sac, tt.can_nang,
           l.ten_loai
    FROM san_pham sp
    INNER JOIN thuoc_tinh tt ON sp.id = tt.id_sp
    INNER JOIN loai l ON sp.id_loai = l.id
    WHERE sp.id = ?;
  `;
  
  db.query(sql, [id], (err, data) => {
    if (err) {
      res.json({"Thông báo": "Lỗi lấy chi tiết sản phẩm", "error": err});
    } else {
      if (data.length === 0) {
        res.json({"thong_bao": "Không tìm thấy sản phẩm", "id": id});
      } else {
        res.json(data[0]);
      }
    }
  });
});

app.get('/admin/users', function(req, res) {
  let sql = `SELECT * FROM users ORDER BY id DESC` 
  db.query( sql, (err, data) => {
    if (err) res.json({"thongbao":"Lỗi lấy thông tin tài khoản!", err })
    else res.json(data);
   });   
});


// POST - Thêm sản phẩm mới


app.post('/admin/sp', (req, res) => {
  const san_pham = {
    id_loai: req.body.id_loai,
    ten_sp: req.body.ten_sp,
    slug: req.body.slug,
    gia: req.body.gia,
    gia_km: req.body.gia_km,
    hinh: req.body.hinh,
    ngay: req.body.ngay,
    luot_xem: req.body.luot_xem
  };

  const thuoc_tinh = {
    ram: req.body.ram,
    cpu: req.body.cpu,
    dia_cung: req.body.dia_cung,
    mau_sac: req.body.mau_sac,
    can_nang: req.body.can_nang
  };

  // Chèn vào bảng `san_pham`
  const san_phamSQL = 'INSERT INTO san_pham SET ?';
  db.query(san_phamSQL, san_pham, (err, result) => {
    if (err) {
      console.error("Lỗi chèn 1 sp:", err);
      res.json({ "thongbao": "Lỗi chèn 1 sản phẩm", err });
    } else {
      const newIdSP = result.insertId;

      const thuoc_tinhSQL = 'INSERT INTO thuoc_tinh SET ?';
      const thuoc_tinhIDSP = { ...thuoc_tinh, id_sp: newIdSP };

      db.query(thuoc_tinhSQL, thuoc_tinhIDSP, (err, result) => {
        if (err) {
          console.error("Lỗi chèn 1 thuộc tính:", err);
          res.json({ "thongbao": "Lỗi chèn thuộc tính sản phẩm", err });
        } else {
          console.log("Thêm thành công:", result);
          res.json({ "thongbao": "Đã chèn 1 sản phẩm và thuộc tính", "id": newIdSP });
        }
      });
    }
  });
});

app.put('/admin/sp/:id', (req, res) => {
  const id = req.params.id;

  const san_pham = {
    id_loai: req.body.id_loai,
    ten_sp: req.body.ten_sp,
    slug: req.body.slug,
    gia: req.body.gia,
    gia_km: req.body.gia_km,
    hinh: req.body.hinh,
    ngay: req.body.ngay,
    luot_xem: req.body.luot_xem
  };

  const thuoc_tinh = {
    ram: req.body.ram,
    cpu: req.body.cpu,
    dia_cung: req.body.dia_cung,
    mau_sac: req.body.mau_sac,
    can_nang: req.body.can_nang,

  };

  const updateSanPhamSQL = 'UPDATE san_pham SET ? WHERE id = ?';
  db.query(updateSanPhamSQL, [san_pham, id], (err, result) => {
    if (err) {
      console.error("Lỗi cập nhật sản phẩm:", err);
      res.json({ "thongbao": "Lỗi cập nhật sản phẩm", err });
    } else {
      const updateThuocTinhSQL = 'UPDATE thuoc_tinh SET ? WHERE id_sp = ?';
      db.query(updateThuocTinhSQL, [thuoc_tinh, id], (err, result) => {
        if (err) {
          console.error("Lỗi cập nhật thuộc tính:", err);
          res.json({ "thongbao": "Lỗi cập nhật thuộc tính sản phẩm", err });
        } else {
          res.json({ "thongbao": "Đã cập nhật sản phẩm và thuộc tính" });
        }
      });
    }
  });
});



// PUT - Cập nhật sản phẩm
app.put('/admin/sp/:id', (req, res) => {
  const data = req.body;
  const id = req.params.id;
  const sql = 'UPDATE san_pham SET ? WHERE id = ?';
  db.query(sql, [data, id], (err, result) => {
      if (err) {
          res.json({ "thongbao": "Lỗi cập nhật sp", err });
      } else {
          res.json({ "thongbao": "Đã cập nhật sp" });
      }
  });
});

// DELETE - Xóa sản phẩm
app.delete('/admin/sp/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM san_pham WHERE id = ?';
  db.query(sql, id, (err) => {
      if (err) {
          res.json({ "thongbao": "Lỗi khi xóa sp", err });
      } else {
          res.json({ "thongbao": "Đã xóa sp" });
      }
  });
});

app.get('/admin/users/:id', function(req, res) {
  const id = req.params.id;
  const sql = 'SELECT * FROM users WHERE id = ?';
  
  db.query(sql, [id], (err, data) => {
    if (err) {
      res.json({"thongbao": "Lỗi lấy thông tin tài khoản!", err });
    } else {
      res.json(data[0]);
    }
  });
});

app.post('/admin/users', (req, res) => {
  const data = req.body;
  const sql = 'INSERT INTO users SET ?';
  db.query(sql, data, (err, result) => {
      if (err) {
          console.error("Error during insertion:", err);  
          res.json({ "thongbao": "Lỗi chèn 1 tài khoản", err });
      } else {
          console.log("Insertion successful, result:", result); 
          res.json({ "thongbao": "Đã chèn 1 tài khoản", "id": result.insertId });
      }
  });
});


app.put('/admin/users/:id', (req, res) => {
  const data = req.body;
  const id = req.params.id;
  const sql = 'UPDATE users SET ? WHERE id = ?';
  db.query(sql, [data, id], (err) => {
      if (err) {
          res.json({ "thongbao": "Lỗi cập nhật tài khoản", err });
      } else {
          res.json({ "thongbao": "Đã cập nhật tài khoản" });
      }
  });
});

app.delete('/admin/users/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM users WHERE id = ?';
  db.query(sql, id, (err) => {
      if (err) {
          res.json({ "thongbao": "Lỗi khi xóa tài khoản", err });
      } else {
          res.json({ "thongbao": "Đã xóa tài khoản" });
      }
  });
});

const jwt = require('jsonwebtoken');
const fs = require('fs');
const PRIVATE_KEY = fs.readFileSync('private-key.txt');

app.post("/login", function(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  checkUserPass(email, password, (err, userInfo) => {
    if (err) {
      res.status(520).json({ thongbao: "Đã xảy ra lỗi khi xử lý yêu cầu của bạn." });
    } else if (userInfo) {
          const jwtBearToken = jwt.sign({}, 
          PRIVATE_KEY, { algorithm: "RS256", expiresIn: "120s", subject: userInfo.id.toString() }
      );
      res.status(200).json({ token: jwtBearToken, expiresIn: 120, userInfo: userInfo });
    } else {
      res.status(401).json({ thongbao: "Email hoặc mật khẩu không đúng" });
    }
  });
});

const checkUserPass = (email, password, callback) => {
  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      callback(err, null);
    } else if (results.length > 0) {
      const user = results[0];
      callback(null, { id: user.id, name: user.name, dia_chi: user.dia_chi, dien_thoai: user.dien_thoai, hinh: user.hinh, role: user.role });
    } else {
      callback(null, null);
    }
  });
};

app.post('/updatepass', (req, res) => {
  const { userId, passhientai, newPassword } = req.body;

  // Kiểm tra mật khẩu hiện tại
  db.query('SELECT password FROM users WHERE id = ?', [userId], (err, results) => {
    if (err) return res.status(500).json({ thongbao: 'Lỗi database' });

    if (results.length === 0) {
      return res.status(404).json({ thongbao: 'User not found' });
    }
    const user = results[0];
    if (user.password !== passhientai) {
      return res.status(400).json({ thongbao: 'Mật khẩu hiện tại không chính xác' });
    }

    db.query('UPDATE users SET password = ? WHERE id = ?', [newPassword, userId], (err) => {
      if (err) return res.status(500).json({ thongbao: 'Lỗi database' });

      res.status(200).json({ thongbao: 'Đổi mật khẩu thành công!' });
    });
  });
});




// đăng ký tài khoản customer

app.post('/dangky', (req, res) => {
  const data = req.body;
  const sql = 'INSERT INTO users SET ?';
  db.query(sql, data, (err, result) => {
      if (err) {
          console.error("Error during insertion:", err);  
          res.json({ "thongbao": "Lỗi đăng ký tài khoản!", err });
      } else {
          console.log("Insertion successful, result:", result); 
          res.json({ "thongbao": "Đã đăng ký tài khoản thành công!", "id": result.insertId });
      }
  });
});

app.post('/admin/category', (req, res) => {
  const data = req.body;
  const sql = 'INSERT INTO loai SET ? ';
  db.query(sql, data, (err, result) => {
      if (err) {
          console.error("Error during insertion:", err);  
          res.json({ "thongbao": "Lỗi thêm danh mục!", err });
      } else {
          console.log("Insertion successful, result:", result); 
          res.json({ "thongbao": "Thêm danh mục thành công!", "id": result.insertId });
      }
  });
});
app.get('/admin/category', function(req, res) {
  let sql = `SELECT * FROM loai ORDER BY id DESC` 
  db.query( sql, (err, data) => {
    if (err) res.json({"thongbao":"Lỗi lấy danh sách loại", err })
    else res.json(data);
   });   
});
app.get('/admin/category/:id', function(req, res) {
  const id = req.params.id;
  const sql = 'SELECT * FROM loai WHERE id = ?';
  
  db.query(sql, [id], (err, data) => {
    if (err) {
      res.json({"thongbao": "Lỗi lấy thông tin danh mục!", err });
    } else {
      res.json(data[0]);
    }
  });
});

app.delete('/admin/category/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM loai WHERE id = ?';
  db.query(sql, id, (err) => {
      if (err) {
          res.json({ "thongbao": "Lỗi khi xóa danh mục", err });
      } else {
          res.json({ "thongbao": "Đã xóa danh mục!" });
      }
  });
});

// Thi
app.get('/admin/sanpham', function(req, res) {
  let sql = `SELECT * FROM san_pham ORDER BY id DESC` 
  db.query( sql, (err, data) => {
    if (err) res.json({"thongbao":"Lỗi lấy danh sách sản phẩm", err })
    else res.json(data);
   });   
});

app.get('/admin/sanpham/:id', function(req, res) {
  const id = req.params.id;
  let sql = `SELECT id, id_loai, ten_sp, gia, gia_km, hinh, ngay, luot_xem FROM san_pham WHERE id = ?` 
  db.query( sql,id, (err, data) => {
    if (err) res.json({"thongbao":"Lỗi lấy thông tin của 1 sản phẩm!", err })
    else res.json(data[0]);
   });   
});

app.post('/admin/sanpham', (req, res) => {
  const data = req.body;
  const sql = 'INSERT INTO san_pham SET ?';
  db.query(sql, data, (err, result) => {
      if (err) {
          console.error("Error during insertion:", err);  
          res.json({ "thongbao": "Lỗi Thêm 1 sản phẩm", err });
      } else {
          console.log("Insertion successful, result:", result); 
          res.json({ "thongbao": "Đã thêm sản phẩm thành công!", "id": result.insertId });
      }
  });
});





app.get('/admin/danhmuc', function(req, res) {
  let sql = `SELECT * FROM loai ORDER BY id DESC` 
  db.query( sql, (err, data) => {
    if (err) res.json({"thongbao":"Lỗi lấy danh sách sản phẩm", err })
    else res.json(data);
   });   
});


app.get('/admin/danhmuc/:id', function(req, res) {
  const id = req.params.id;
  let sql = `SELECT id, ten_loai, img_loai FROM loai WHERE id = ?`;
  db.query( sql,id, (err, data) => {
    if (err) res.json({"thongbao":"Lỗi lấy thông tin của 1 loại!", err })
    else res.json(data[0]);
   });   
});



app.get('/thongke/sp', function(req, res) {
  let sql = `SELECT COUNT(*) AS total_sanpham FROM san_pham`;
  db.query(sql, (err, data) => {
      if (err) {
          res.json({"thongbao": "Lỗi đếm số sản phẩm", err });
      } else {
          res.json(data[0]);
      }
  });
});

// Kiểm tra email và gửi OTP

app.post('/auth/v1/check-email', (req, res) => {
  const { email, name, password } = req.body; // Lấy email, name, và password từ req.body

  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (error, results) => {
    if (error) {
      console.error('Lỗi:', error);
      return res.status(400).json({ message: 'Đã có lỗi xảy ra' });
    }

    const otp = Math.floor(100000 + Math.random() * 900000); // Tạo mã OTP (6 chữ số)

    if (results.length === 0) {
      // Email không tồn tại trong DB, thực hiện thêm email mới
      const insertQuery = 'INSERT INTO users (email, name, password, otp) VALUES (?, ?, ?, ?)';
      db.query(insertQuery, [email, name, password, otp], (insertError) => {
        if (insertError) {
          console.error('Lỗi:', insertError);
          return res.status(400).json({ message: 'Đã có lỗi xảy ra' });
        }
        sendOtpEmail(email, otp, res);
      });
    } else {
      // Email đã tồn tại, cập nhật OTP
      const updateQuery = 'UPDATE users SET otp = ? WHERE email = ?';
      db.query(updateQuery, [otp, email], (updateError) => {
        if (updateError) {
          console.error('Lỗi:', updateError);
          return res.status(400).json({ message: 'Đã có lỗi xảy ra' });
        }
        sendOtpEmail(email, otp, res);
      });
    }
  });
});



function sendOtpEmail(email, otp, res) {
  try {
    // Kiểm tra nếu các biến môi trường không được đặt
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('Missing EMAIL_USER or EMAIL_PASS'); // Log ra thông báo chi tiết để debug
      return res.status(500).json({
        message: 'Email không được cấu hình đúng',
        error: 'Thiếu thông tin xác thực EMAIL_USER hoặc EMAIL_PASS'
      });
    }

    // Tạo transporter để gửi email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Tạo thông tin email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Mã OTP của bạn',
      text: `Mã OTP để đăng ký của bạn là: ${otp}`,
    };

    // Gửi email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Lỗi gửi email:', error);
        return res.status(400).json({
          message: 'Đã có lỗi xảy ra khi gửi email',
          error: error.message
        });
      }
      console.log('Email sent: ' + info.response);
      return res.status(200).json({ message: 'OTP đã được gửi đến email của bạn' });
    });

  } catch (err) {
    console.error('Internal server error:', err);
    return res.status(500).json({
      message: 'The server encountered an internal error',
      error: err.message // Chỉ trả về thông tin chung để tránh lộ thông tin chi tiết.
    });
  }
}






// API kiểm tra số điện thoại

app.post('/auth/v1/check-phone', async (req, res) => {
  const { phone } = req.body;

  try {
    // Kiểm tra xem số điện thoại đã tồn tại trong cơ sở dữ liệu chưa
    const [result] = await db.query('SELECT * FROM users WHERE dien_thoai = ?', [phone]);

    if (result.length > 0) {
      return res.status(400).json({ message: 'Số điện thoại đã tồn tại!' });
    }

    // Nếu số điện thoại chưa tồn tại, trả về thành công
    return res.status(200).json({ message: 'Số điện thoại hợp lệ.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Đã có lỗi xảy ra khi kiểm tra số điện thoại.' });
  }
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});