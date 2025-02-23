import Image from "next/image";
import { Divider } from "../page";

export default function GalleryPage() {
  const gallery = [
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/2959176293_dac11390e4_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4154362210_93f67aab1e_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4160922682_874f61dbc3_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4164254544_e639b2fcd7_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4167334845_4073a0b7f5_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4167338743_3306a67a67_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4167379259_0fccb5f4ee_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4160922894_c220a46c44_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/5149270517_21bbd8cb71_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4168100582_8fb64a7c8b_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4168127918_f0b00b7951_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179004555_d75f6672b4_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179019159_68ffc1cb05_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179017449_0812658b86_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179020101_f5070cf846_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179764206_621953d41c_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179766410_5b7fe89b35_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179769294_5598c154cf_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179776462_ee383b2ea7_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179784274_b1305b6516_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179777290_84462eee93_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179781456_9fc221c32f_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4200611652_c1c42218a9_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4963623781_5dd6ae1f1a_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4964224446_4e468503c4_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/5004809505_ed9e630b55_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/5005421938_d8cca30865_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/5172809794_f034df2918_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/6396960639_8bc3773c19_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/6405448953_610472021c_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/6411248101_cfe6569905_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/6415204765_3c90261f25_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179010913_f11f6df2ae_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179770592_d5d9c04fa3_o.jpg",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/IMG_2678.PNG",
    "https://tcah-v2-images.s3.us-east-1.amazonaws.com/IMG_2679.PNG",
  ];

  return (
    <div className="min-h-screen bg-background mt-12">
      <h2 className="text-3xl font-bold text-center mb-4 text-primary">Gallery</h2>
      <Divider />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {gallery.map((image, index) => (
                <Image key={index} src={image} alt="Gallery Image" className="w-full object-cover rounded-md" width={100} height={100} quality={75} />
              ))}
            </div>
        </div>
    )
}