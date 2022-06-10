import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => { 
  return (
    <div>
      <div className={s.item}> 
        < NavLink to="/1" className = {s.active}><img src='https://2.downloader.disk.yandex.ru/preview/08542f199b1fe7e404455a9592ee299fd557f3b74d1c976ed5f025d86e5c2bc7/inf/w57UcSxKUDBj9XU2bZLbmEfaf-LV8SUaYygty_N8ZtfoRl8uaS4hE9dfeQBXXMDjp89bcfPi38L4BpI7Ts5ugA%3D%3D?uid=1206894008&filename=1new.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1206894008&tknv=v2&size=1898x870' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/2"><img src='https://4.downloader.disk.yandex.ru/preview/18268a0ad234a644d67d38973681ee6c26c9eb038262267875c366f05d783ede/inf/KAEda6woVVVeLHoolibA7czbz4xeZhoUpIF79JtTNM8faRfTyXYCHsqWJxP9teP-oqkLB_AoCkTZQ5z8wwoLhg%3D%3D?uid=1206894008&filename=2new.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1206894008&tknv=v2&size=1898x870' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/3"><img src='https://3.downloader.disk.yandex.ru/preview/9c939eed7ea84b89928c32bdbb633562c29f22da1a449660793793c4d2e2590e/inf/N2nt-3-RSLFFL1YIKPe22Mzbz4xeZhoUpIF79JtTNM8hhfmA60THEVaZ6sUYFAX7zok7FInq3I4Zq4ydnwFxAQ%3D%3D?uid=1206894008&filename=3new.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1206894008&tknv=v2&size=1898x870' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/4"><img src='https://3.downloader.disk.yandex.ru/preview/e92a257a42e870db966884b19750b320eea2b2be83f967b143e0876ac35cf641/inf/b4suhTdEfCCetcIMMVpsKszbz4xeZhoUpIF79JtTNM9QnNCUZhgM1GLZoaMA1nfK72_l24i77So0bjonif_dAQ%3D%3D?uid=1206894008&filename=4new.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1206894008&tknv=v2&size=1898x870' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/5"><img src='https://4.downloader.disk.yandex.ru/preview/b4a732665663fc7dec8030577479a8da04403dc01bdd0f59bdc7a96f40130da2/inf/MQgv0VgL8SuSwSdH2jL-IMzbz4xeZhoUpIF79JtTNM-2X53g5ih7alN_ClmXSNxpzdXQ9ZzD9m26n9a3cNjaeA%3D%3D?uid=1206894008&filename=5new.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1206894008&tknv=v2&size=1898x870' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/6"><img src='https://3.downloader.disk.yandex.ru/preview/1f312d2d9dcb2a58db43dfc7f533e44fa47882d432b7510a0c219f22d825e1a5/inf/jUX3h8atEX9gA_UY9T0e0szbz4xeZhoUpIF79JtTNM-Phb_LbdTmOw2BgW2iXv7FBC3AgNrUGLm9ZifpmpkDUg%3D%3D?uid=1206894008&filename=6new.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1206894008&tknv=v2&size=1898x870' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/7"><img src='https://1.downloader.disk.yandex.ru/preview/01883e07e0f7f27ec673c20bb73a0e6bc4d930a915a30bedfddcf34e2c4e3a04/inf/RXzJDaqSy3NUMbpbJxrOb8zbz4xeZhoUpIF79JtTNM9bs0ZCekBj3v52chTEqyVA0MNGqRStHf3gJniE7iKxLg%3D%3D?uid=1206894008&filename=7new.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1206894008&tknv=v2&size=1898x870' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/8"><img src='https://4.downloader.disk.yandex.ru/preview/5b684cb85581b1f313e5c41e3a95ef1397d75836dbda4b73f175509ec7a446ce/inf/c72mIVFsUmG0531OjUESfVIs-AEcNTP5CaIplUPx8-R3s-NIJZhSRTDRD2pdPGfr_Dls3OkhXRTodk0ju48HNg%3D%3D?uid=1206894008&filename=8new.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1206894008&tknv=v2&size=1898x870' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/9"><img src='https://1.downloader.disk.yandex.ru/preview/6f6606cad65dbdb61ea0125486faff5430117a9fb62ebc2fad52c1230ba5d135/inf/evVQR1kLG6mWZdGiHwpdGVIs-AEcNTP5CaIplUPx8-RM4NNCUAeCEzcln2a2uGgbigxlAzBzr_zLS2VtkOoflQ%3D%3D?uid=1206894008&filename=9new.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1206894008&tknv=v2&size=1898x870' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/10"><img src='https://3.downloader.disk.yandex.ru/preview/3cf2bbd90d8bf968446b1f23f771487cba1fdafd92421c1379605f13d45137c1/inf/Ot6r0bXA6-Ch77wwqULU4qjV-g0TpNhIRxUIjRxpx0nGvi99bRcSnYdhQxaAxWovl-47PXw8cPE8WdMyb07P7Q%3D%3D?uid=1206894008&filename=10new.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1206894008&tknv=v2&size=1898x870' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/11"><img src='https://1.downloader.disk.yandex.ru/preview/2152ec62933ecc226725e3b602f5520b73f18c48fd1e1a2f1fb8e01c912622f2/inf/HLXJiPxT67ty9-xS1O10GFIs-AEcNTP5CaIplUPx8-TaeyQ_n7Aufp4L7IcGpFPbgMGX67SgFY-Ud3-4GXVWow%3D%3D?uid=1206894008&filename=11new.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1206894008&tknv=v2&size=1898x870' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/12"><img src='https://2.downloader.disk.yandex.ru/preview/1a6cd0c71885cbecdebe65e7d07ca7ff05c21c027c4246e3e7fb93e2cb828b15/inf/-cJ40SqywSTH4XYsgYwwI1Is-AEcNTP5CaIplUPx8-R_WbP9bDqych_4nKILClz5GOrvtPCuIsGqVoGWzlh6XA%3D%3D?uid=1206894008&filename=12new.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1206894008&tknv=v2&size=1898x870' /></NavLink>
      </div>
      </div>
  );
}

export default Navbar;