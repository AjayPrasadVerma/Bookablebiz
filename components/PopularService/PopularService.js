import PopularItem from "./PopularItem";
import classes from "./PopularService.module.css";

const dummy_item = [
  {
    id: 1,
    imageURL:
      "https://s3-alpha-sig.figma.com/img/a1eb/31f5/28213b602e3669ff572fe8138aa63fae?Expires=1688342400&Signature=FAvDT1I2GmC9vw2BEpxnGTH22Uu0oqk9udukUsMGSePAf-gKYuY8ENOcHUpFae1VFucBNH7ippxKrfd1Vl4MQ3IhF~WjcP4tLrQehzVeGKgkQlMyzorJocWMm-xNdb0~v715YwSJrM0M~7scy98L-CJQ1I6ID88O6fNk5wqBUxeRE1tSsX2pYgnOG04GHpH1BtzkmzKzYQPS4lkGyThoVdmqAzuPqUa00tu5Co8LBHXvfR6mr294RjsRc7LtpOOksTaRSaY~RBxZCeTjAMTQhP9P~XB4-8RG7O24QxfFFrZNHx8z8qpWXlHrPAwluU4eVJDaqWFkpT635rhUVp3I6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Hair straitening",
    time: 30,
    code: "P0002L86D8",
    price: 55.0,
    discount: 7.5,
  },
  {
    id: 2,
    imageURL:
      "https://s3-alpha-sig.figma.com/img/eb38/0010/aaff7d452a560f191fe4abbf4eb8b397?Expires=1688342400&Signature=e7HDb7NOr39QaakOXdjxxgu9ZykvbLdFbGDOJ82e6yOmQLdbjS6hm~CVLUGpZ2U8PkSDR8ymxh~78wi-cMjTelxUYCry~-NpVUOX8GTxLyRaG46O8XbGWZriCvQVxlBW2Zvx5DHNoar0JcFYgqd~z1vk2xI9uZwXCsf8-ANtI82siXFGCYoGj3iaMQBUO2deaffqnvncAmjk87en91FwrCylf6UYYwzjdJJdxtKqVrOweWU4gy6PVyHDOMUgouMUXMdo0JBafCwG8TGK5TBadXQ~pc15TFDztsqYpBVhqDUK9F7aWBCdW8~zqqDX7VBdvbhySdrK3JzXjJ2suyrLyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Hair straitening",
    time: 30,
    code: "P0002L86D8",
    price: 60.0,
    discount: 6.5,
  },
  {
    id: 3,
    imageURL:
      "https://s3-alpha-sig.figma.com/img/bf7e/c16e/740e413a8683a711d4d104c96cb59b1d?Expires=1688342400&Signature=leZZX02dg6zo1Du1bjxgpDgFfCXsd5Y8mnxWP6dmO~8H8oTUTY1c1Bmi5LWR6paccV4RRibFnulUqxZIKsIONozOekQA25wErWpcwgmBB6iNK-8MRsXjxPVMuB~PYW3461Fqndm8GAzgk7zJK2ntM37yXCdRSnTiZ8srx8ERCUjs9Uz8~uGF8Tlk6lmd~6ApuXYEODK~5K8hzoibb9IVRiLrsZoZvt-MkPucr7K1B-CIkGGGtaUSJdTdVNQIBY5sNvbzZZOZHldoRxYrrO4QcWjl70h5q6qsDaX4n16zFUcjZifViLB2JS2cM-LWNQfDaLGBOE8leVD1MB7ZK3EwHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Hair straitening",
    time: 30,
    code: "P0002L86D8",
    price: 55.0,
    discount: 7.5,
  },
];

const PopularService = () => {
  return (
    <>
      <div>
        <h4 className={classes.info}>Other Popular services by ABC Saloon</h4>
      </div>
      <div className={classes.content}>
        <PopularItem items={dummy_item} />
      </div>
    </>
  );
};

export default PopularService;
