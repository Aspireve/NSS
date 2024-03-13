import "../styles/Imagegallery/imagegallery.css";
import ReducedProjects from "../assets/project_gallery_reduced";
import Projects from "../assets/project_gallery";
import Image from "../containers/Image";

const CardList = ({ imageCards }) => {
  return (
    <div className="card-list">
      {imageCards.map((card, index) => {
        setTimeout(() => undefined, 500);
        return (
          <div className="image-card">
            <Image
              key={index}
              simple_image={card.ReducedImg}
              HD_image={card.ProjectImg}
              alt={"proj" + index}
            />
          </div>
        );
      })}
    </div>
  );
};

const ImageGallery = () => {
  const imageCards = [
    {
      ProjectImg: Projects.project1,
      ReducedImg: ReducedProjects.project_reduced1,
    },
    {
      ProjectImg: Projects.project2,
      ReducedImg: ReducedProjects.project_reduced2,
    },
    {
      ProjectImg: Projects.project3,
      ReducedImg: ReducedProjects.project_reduced3,
    },
    {
      ProjectImg: Projects.project4,
      ReducedImg: ReducedProjects.project_reduced4,
    },
    {
      ProjectImg: Projects.project5,
      ReducedImg: ReducedProjects.project_reduced5,
    },
    {
      ProjectImg: Projects.project6,
      ReducedImg: ReducedProjects.project_reduced6,
    },
    {
      ProjectImg: Projects.project7,
      ReducedImg: ReducedProjects.project_reduced7,
    },
    {
      ProjectImg: Projects.project8,
      ReducedImg: ReducedProjects.project_reduced8,
    },
    {
      ProjectImg: Projects.project9,
      ReducedImg: ReducedProjects.project_reduced9,
    },
    {
      ProjectImg: Projects.project10,
      ReducedImg: ReducedProjects.project_reduced10,
    },
    {
      ProjectImg: Projects.project11,
      ReducedImg: ReducedProjects.project_reduced11,
    },
    {
      ProjectImg: Projects.project12,
      ReducedImg: ReducedProjects.project_reduced12,
    },
    {
      ProjectImg: Projects.project13,
      ReducedImg: ReducedProjects.project_reduced13,
    },
    {
      ProjectImg: Projects.project14,
      ReducedImg: ReducedProjects.project_reduced14,
    },
    {
      ProjectImg: Projects.project15,
      ReducedImg: ReducedProjects.project_reduced15,
    },
    {
      ProjectImg: Projects.project16,
      ReducedImg: ReducedProjects.project_reduced16,
    },
    {
      ProjectImg: Projects.project17,
      ReducedImg: ReducedProjects.project_reduced17,
    },
    {
      ProjectImg: Projects.project18,
      ReducedImg: ReducedProjects.project_reduced18,
    },
    {
      ProjectImg: Projects.project19,
      ReducedImg: ReducedProjects.project_reduced19,
    },
    {
      ProjectImg: Projects.project20,
      ReducedImg: ReducedProjects.project_reduced20,
    },
    {
      ProjectImg: Projects.project21,
      ReducedImg: ReducedProjects.project_reduced21,
    },
    {
      ProjectImg: Projects.project22,
      ReducedImg: ReducedProjects.project_reduced22,
    },
    {
      ProjectImg: Projects.project23,
      ReducedImg: ReducedProjects.project_reduced23,
    },
    {
      ProjectImg: Projects.project24,
      ReducedImg: ReducedProjects.project_reduced24,
    },
    {
      ProjectImg: Projects.project25,
      ReducedImg: ReducedProjects.project_reduced25,
    },
    {
      ProjectImg: Projects.project26,
      ReducedImg: ReducedProjects.project_reduced26,
    },
    {
      ProjectImg: Projects.project27,
      ReducedImg: ReducedProjects.project_reduced27,
    },
    {
      ProjectImg: Projects.project28,
      ReducedImg: ReducedProjects.project_reduced28,
    },
    {
      ProjectImg: Projects.project29,
      ReducedImg: ReducedProjects.project_reduced29,
    },
    {
      ProjectImg: Projects.project30,
      ReducedImg: ReducedProjects.project_reduced30,
    },
    {
      ProjectImg: Projects.project31,
      ReducedImg: ReducedProjects.project_reduced31,
    },
    {
      ProjectImg: Projects.project32,
      ReducedImg: ReducedProjects.project_reduced32,
    },
    {
      ProjectImg: Projects.project33,
      ReducedImg: ReducedProjects.project_reduced33,
    },
    {
      ProjectImg: Projects.project34,
      ReducedImg: ReducedProjects.project_reduced34,
    },
    {
      ProjectImg: Projects.project35,
      ReducedImg: ReducedProjects.project_reduced35,
    },
    {
      ProjectImg: Projects.project36,
      ReducedImg: ReducedProjects.project_reduced36,
    },
    {
      ProjectImg: Projects.project37,
      ReducedImg: ReducedProjects.project_reduced37,
    },
    {
      ProjectImg: Projects.project38,
      ReducedImg: ReducedProjects.project_reduced38,
    },
    {
      ProjectImg: Projects.project39,
      ReducedImg: ReducedProjects.project_reduced39,
    },
    {
      ProjectImg: Projects.project40,
      ReducedImg: ReducedProjects.project_reduced40,
    },
    {
      ProjectImg: Projects.project41,
      ReducedImg: ReducedProjects.project_reduced41,
    },
    {
      ProjectImg: Projects.project42,
      ReducedImg: ReducedProjects.project_reduced42,
    },
    {
      ProjectImg: Projects.project43,
      ReducedImg: ReducedProjects.project_reduced43,
    },
    {
      ProjectImg: Projects.project44,
      ReducedImg: ReducedProjects.project_reduced44,
    },
    {
      ProjectImg: Projects.project45,
      ReducedImg: ReducedProjects.project_reduced45,
    },
    {
      ProjectImg: Projects.project46,
      ReducedImg: ReducedProjects.project_reduced46,
    },
    {
      ProjectImg: Projects.project47,
      ReducedImg: ReducedProjects.project_reduced47,
    },
    {
      ProjectImg: Projects.project48,
      ReducedImg: ReducedProjects.project_reduced48,
    },
    {
      ProjectImg: Projects.project49,
      ReducedImg: ReducedProjects.project_reduced49,
    },
    {
      ProjectImg: Projects.project50,
      ReducedImg: ReducedProjects.project_reduced50,
    },
    {
      ProjectImg: Projects.project51,
      ReducedImg: ReducedProjects.project_reduced51,
    },
    {
      ProjectImg: Projects.project52,
      ReducedImg: ReducedProjects.project_reduced52,
    },
    {
      ProjectImg: Projects.project53,
      ReducedImg: ReducedProjects.project_reduced53,
    },
    {
      ProjectImg: Projects.project54,
      ReducedImg: ReducedProjects.project_reduced54,
    },
    {
      ProjectImg: Projects.project55,
      ReducedImg: ReducedProjects.project_reduced55,
    },
    {
      ProjectImg: Projects.project56,
      ReducedImg: ReducedProjects.project_reduced56,
    },
    {
      ProjectImg: Projects.project57,
      ReducedImg: ReducedProjects.project_reduced57,
    },
    {
      ProjectImg: Projects.project58,
      ReducedImg: ReducedProjects.project_reduced58,
    },
    {
      ProjectImg: Projects.project59,
      ReducedImg: ReducedProjects.project_reduced59,
    },
    {
      ProjectImg: Projects.project60,
      ReducedImg: ReducedProjects.project_reduced60,
    },
    {
      ProjectImg: Projects.project61,
      ReducedImg: ReducedProjects.project_reduced61,
    },
    {
      ProjectImg: Projects.project62,
      ReducedImg: ReducedProjects.project_reduced62,
    },
    {
      ProjectImg: Projects.project63,
      ReducedImg: ReducedProjects.project_reduced63,
    },
    {
      ProjectImg: Projects.project64,
      ReducedImg: ReducedProjects.project_reduced64,
    },
    {
      ProjectImg: Projects.project65,
      ReducedImg: ReducedProjects.project_reduced65,
    },
    {
      ProjectImg: Projects.project66,
      ReducedImg: ReducedProjects.project_reduced66,
    },
    {
      ProjectImg: Projects.project67,
      ReducedImg: ReducedProjects.project_reduced67,
    },
    {
      ProjectImg: Projects.project68,
      ReducedImg: ReducedProjects.project_reduced68,
    },
    {
      ProjectImg: Projects.project69,
      ReducedImg: ReducedProjects.project_reduced69,
    },
    {
      ProjectImg: Projects.project70,
      ReducedImg: ReducedProjects.project_reduced70,
    },
    {
      ProjectImg: Projects.project71,
      ReducedImg: ReducedProjects.project_reduced71,
    },
    {
      ProjectImg: Projects.project72,
      ReducedImg: ReducedProjects.project_reduced72,
    },
    {
      ProjectImg: Projects.project73,
      ReducedImg: ReducedProjects.project_reduced73,
    },
    {
      ProjectImg: Projects.project74,
      ReducedImg: ReducedProjects.project_reduced74,
    },
    {
      ProjectImg: Projects.project75,
      ReducedImg: ReducedProjects.project_reduced75,
    },
    {
      ProjectImg: Projects.project76,
      ReducedImg: ReducedProjects.project_reduced76,
    },
    {
      ProjectImg: Projects.project77,
      ReducedImg: ReducedProjects.project_reduced77,
    },
    {
      ProjectImg: Projects.project78,
      ReducedImg: ReducedProjects.project_reduced78,
    },
    {
      ProjectImg: Projects.project79,
      ReducedImg: ReducedProjects.project_reduced79,
    },
    {
      ProjectImg: Projects.project80,
      ReducedImg: ReducedProjects.project_reduced80,
    },
    {
      ProjectImg: Projects.project81,
      ReducedImg: ReducedProjects.project_reduced81,
    },
    {
      ProjectImg: Projects.project82,
      ReducedImg: ReducedProjects.project_reduced82,
    },
    {
      ProjectImg: Projects.project83,
      ReducedImg: ReducedProjects.project_reduced83,
    },
    {
      ProjectImg: Projects.project84,
      ReducedImg: ReducedProjects.project_reduced84,
    },
    {
      ProjectImg: Projects.project85,
      ReducedImg: ReducedProjects.project_reduced85,
    },
    {
      ProjectImg: Projects.project86,
      ReducedImg: ReducedProjects.project_reduced86,
    },
    {
      ProjectImg: Projects.project87,
      ReducedImg: ReducedProjects.project_reduced87,
    },
    {
      ProjectImg: Projects.project88,
      ReducedImg: ReducedProjects.project_reduced88,
    },
    {
      ProjectImg: Projects.project89,
      ReducedImg: ReducedProjects.project_reduced89,
    },
    {
      ProjectImg: Projects.project90,
      ReducedImg: ReducedProjects.project_reduced90,
    },
    {
      ProjectImg: Projects.project91,
      ReducedImg: ReducedProjects.project_reduced91,
    },
    {
      ProjectImg: Projects.project92,
      ReducedImg: ReducedProjects.project_reduced92,
    },
    {
      ProjectImg: Projects.project93,
      ReducedImg: ReducedProjects.project_reduced93,
    },
    {
      ProjectImg: Projects.project94,
      ReducedImg: ReducedProjects.project_reduced94,
    },
    {
      ProjectImg: Projects.project95,
      ReducedImg: ReducedProjects.project_reduced95,
    },
    {
      ProjectImg: Projects.project96,
      ReducedImg: ReducedProjects.project_reduced96,
    },
    {
      ProjectImg: Projects.project97,
      ReducedImg: ReducedProjects.project_reduced97,
    },
    {
      ProjectImg: Projects.project98,
      ReducedImg: ReducedProjects.project_reduced98,
    },
    {
      ProjectImg: Projects.project99,
      ReducedImg: ReducedProjects.project_reduced99,
    },
    {
      ProjectImg: Projects.project100,
      ReducedImg: ReducedProjects.project_reduced100,
    },
    {
      ProjectImg: Projects.project101,
      ReducedImg: ReducedProjects.project_reduced101,
    },
    {
      ProjectImg: Projects.project102,
      ReducedImg: ReducedProjects.project_reduced102,
    },
    {
      ProjectImg: Projects.project103,
      ReducedImg: ReducedProjects.project_reduced103,
    },
    {
      ProjectImg: Projects.project104,
      ReducedImg: ReducedProjects.project_reduced104,
    },
    {
      ProjectImg: Projects.project105,
      ReducedImg: ReducedProjects.project_reduced105,
    },
    {
      ProjectImg: Projects.project106,
      ReducedImg: ReducedProjects.project_reduced106,
    },
    {
      ProjectImg: Projects.project107,
      ReducedImg: ReducedProjects.project_reduced107,
    },
    {
      ProjectImg: Projects.project108,
      ReducedImg: ReducedProjects.project_reduced108,
    },
    {
      ProjectImg: Projects.project109,
      ReducedImg: ReducedProjects.project_reduced109,
    },
    {
      ProjectImg: Projects.project110,
      ReducedImg: ReducedProjects.project_reduced110,
    },
    {
      ProjectImg: Projects.project111,
      ReducedImg: ReducedProjects.project_reduced111,
    },
    {
      ProjectImg: Projects.project112,
      ReducedImg: ReducedProjects.project_reduced112,
    },
    {
      ProjectImg: Projects.project113,
      ReducedImg: ReducedProjects.project_reduced113,
    },
    {
      ProjectImg: Projects.project114,
      ReducedImg: ReducedProjects.project_reduced114,
    },
    {
      ProjectImg: Projects.project115,
      ReducedImg: ReducedProjects.project_reduced115,
    },
    {
      ProjectImg: Projects.project116,
      ReducedImg: ReducedProjects.project_reduced116,
    },
    {
      ProjectImg: Projects.project117,
      ReducedImg: ReducedProjects.project_reduced117,
    },
    {
      ProjectImg: Projects.project118,
      ReducedImg: ReducedProjects.project_reduced118,
    },
    {
      ProjectImg: Projects.project119,
      ReducedImg: ReducedProjects.project_reduced119,
    },
    {
      ProjectImg: Projects.project120,
      ReducedImg: ReducedProjects.project_reduced120,
    },
    {
      ProjectImg: Projects.project121,
      ReducedImg: ReducedProjects.project_reduced121,
    },
    {
      ProjectImg: Projects.project122,
      ReducedImg: ReducedProjects.project_reduced122,
    },
    {
      ProjectImg: Projects.project123,
      ReducedImg: ReducedProjects.project_reduced123,
    },
    {
      ProjectImg: Projects.project124,
      ReducedImg: ReducedProjects.project_reduced124,
    },
    {
      ProjectImg: Projects.project125,
      ReducedImg: ReducedProjects.project_reduced125,
    },
    {
      ProjectImg: Projects.project126,
      ReducedImg: ReducedProjects.project_reduced126,
    },
    {
      ProjectImg: Projects.project127,
      ReducedImg: ReducedProjects.project_reduced127,
    },
    {
      ProjectImg: Projects.project128,
      ReducedImg: ReducedProjects.project_reduced128,
    },
    {
      ProjectImg: Projects.project129,
      ReducedImg: ReducedProjects.project_reduced129,
    },
    {
      ProjectImg: Projects.project130,
      ReducedImg: ReducedProjects.project_reduced130,
    },
    {
      ProjectImg: Projects.project131,
      ReducedImg: ReducedProjects.project_reduced131,
    },
    {
      ProjectImg: Projects.project132,
      ReducedImg: ReducedProjects.project_reduced132,
    },
    {
      ProjectImg: Projects.project133,
      ReducedImg: ReducedProjects.project_reduced133,
    },
    {
      ProjectImg: Projects.project134,
      ReducedImg: ReducedProjects.project_reduced134,
    },
    {
      ProjectImg: Projects.project135,
      ReducedImg: ReducedProjects.project_reduced135,
    },
    {
      ProjectImg: Projects.project136,
      ReducedImg: ReducedProjects.project_reduced136,
    },
    {
      ProjectImg: Projects.project137,
      ReducedImg: ReducedProjects.project_reduced137,
    },
    {
      ProjectImg: Projects.project138,
      ReducedImg: ReducedProjects.project_reduced138,
    },
    {
      ProjectImg: Projects.project139,
      ReducedImg: ReducedProjects.project_reduced139,
    },
    {
      ProjectImg: Projects.project140,
      ReducedImg: ReducedProjects.project_reduced140,
    },
    {
      ProjectImg: Projects.project141,
      ReducedImg: ReducedProjects.project_reduced141,
    },
    {
      ProjectImg: Projects.project142,
      ReducedImg: ReducedProjects.project_reduced142,
    },
    {
      ProjectImg: Projects.project143,
      ReducedImg: ReducedProjects.project_reduced143,
    },
    {
      ProjectImg: Projects.project144,
      ReducedImg: ReducedProjects.project_reduced144,
    },
    {
      ProjectImg: Projects.project145,
      ReducedImg: ReducedProjects.project_reduced145,
    },
    {
      ProjectImg: Projects.project146,
      ReducedImg: ReducedProjects.project_reduced146,
    },
    {
      ProjectImg: Projects.project147,
      ReducedImg: ReducedProjects.project_reduced147,
    },
    {
      ProjectImg: Projects.project148,
      ReducedImg: ReducedProjects.project_reduced148,
    },
    {
      ProjectImg: Projects.project149,
      ReducedImg: ReducedProjects.project_reduced149,
    },
    {
      ProjectImg: Projects.project150,
      ReducedImg: ReducedProjects.project_reduced150,
    },
    {
      ProjectImg: Projects.project151,
      ReducedImg: ReducedProjects.project_reduced151,
    },
    {
      ProjectImg: Projects.project152,
      ReducedImg: ReducedProjects.project_reduced152,
    },
    {
      ProjectImg: Projects.project153,
      ReducedImg: ReducedProjects.project_reduced153,
    },
    {
      ProjectImg: Projects.project154,
      ReducedImg: ReducedProjects.project_reduced154,
    },
    {
      ProjectImg: Projects.project155,
      ReducedImg: ReducedProjects.project_reduced155,
    },
    {
      ProjectImg: Projects.project156,
      ReducedImg: ReducedProjects.project_reduced156,
    },
    {
      ProjectImg: Projects.project157,
      ReducedImg: ReducedProjects.project_reduced157,
    },
    {
      ProjectImg: Projects.project158,
      ReducedImg: ReducedProjects.project_reduced158,
    },
    {
      ProjectImg: Projects.project159,
      ReducedImg: ReducedProjects.project_reduced159,
    },
    {
      ProjectImg: Projects.project160,
      ReducedImg: ReducedProjects.project_reduced160,
    },
    {
      ProjectImg: Projects.project161,
      ReducedImg: ReducedProjects.project_reduced161,
    },
    {
      ProjectImg: Projects.project162,
      ReducedImg: ReducedProjects.project_reduced162,
    },
    {
      ProjectImg: Projects.project163,
      ReducedImg: ReducedProjects.project_reduced163,
    },
    {
      ProjectImg: Projects.project164,
      ReducedImg: ReducedProjects.project_reduced164,
    },
    {
      ProjectImg: Projects.project165,
      ReducedImg: ReducedProjects.project_reduced165,
    },
    {
      ProjectImg: Projects.project166,
      ReducedImg: ReducedProjects.project_reduced166,
    },
    {
      ProjectImg: Projects.project167,
      ReducedImg: ReducedProjects.project_reduced167,
    },
  ];

  return (
    <div className="image-gallery-container">
      <h1>Projects Gallery</h1>
      <CardList imageCards={imageCards} />
    </div>
  );
};

export default ImageGallery;
