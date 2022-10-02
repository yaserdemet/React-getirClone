## Description

![Animation](https://user-images.githubusercontent.com/99739515/186932343-eaeeb885-ef78-4577-ae5e-24777bcb0a04.gif)

[🛒click here to see page](https://react-getir-clone-beta.vercel.app
)

## Problem Statement

- This project aims to create Getir's Landing Page with Material UI.


### At the end of the project, following topics are to be covered;

📌 Props and State Logic

📌 Js iteration methods

📌 Conditional Rendering

📌 React Flag Select

📌 React Hooks

📌 3rd Part Libraries ( Toastify, Axios )

📌 Helmet for SEO optimization 

📌 Material Ui (Slider,AppBar etc)

📌 React Bootstrap

📌 Deployment with Vercel and Netlify


### For Seo optimization Helmet Hook can be used in multiple page. But meta itemprop can be enough.

```
  <meta itemprop="description" content="Getir Landing Page with React.js and MUI">
  <meta itemprop="image"  content="image address here">
```

### To use React Select Flag;



- Hold a state selected country,
  - create an object as key use its abbreviation and as value its code

```

  const [selected, setSelected] = useState("TR");
  const phones = {
    US: "+1", CL: "+56",  CO: "+57",  AR: "+54",  MX: "+52", 
    IN: "+91",   IT: "+39",  ES: "+34",   FR: "+33", BR: "+55"
    TR: "+90",   CA: "+1", CN: "+86",    RU: "+7" 
  };
  
     <ReactFlagsSelect
            countries={Object.keys(phones)}
            //! burada bayrakları getirdi object.keys in içine objeyi at.
            customLabels={phones}
            placeholder="Select Language"
            onSelect={(code) => setSelected(code)}
            //* burada seçilen bayrağı set ediyor.
            selected={selected}
            className ="p-2"
          />
          
 ```
