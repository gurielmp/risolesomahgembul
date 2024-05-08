import Image from "next/image"
export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-black md:ml-24 text-[#bebdbd]">
      <aside>
        <span className="p-1">
          <Image
            src="https://res.cloudinary.com/dm03cwhat/image/upload/v1715142847/omahgembul/omah_gembul_k1t2kd.png"
            width={100}
            height={100}
            alt="Risoles Omah Gembul"
          ></Image>
        </span>

        <p className="font-light">
          Risoles Omah Gembul <br />
          Risoles Producer since 2018
        </p>
        <p className="font-bold">Copyright © 2024 - All right reserved</p>
      </aside>
    </footer>
  )
}
