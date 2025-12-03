import React from "react";
import MainLayout from "../layouts/MainLayout";

{/* CHANGE HERE Template*/}
const Template = () => {
  return (
    <MainLayout>
      <ol className="breadcrumb float-xl-end">
        <li className="breadcrumb-item"><a href="javascript:;">Home</a></li>
        <li className="breadcrumb-item active">Template</li>
      </ol>

      <h1 className="page-header">
        {/* CHANGE HERE Template*/}
        Template <small>header small text goes here...</small>
      </h1>

      <div className="row">

        {/* ADD HERE IF YOU WANT TO INSERT CONTENT */}

      </div>
    </MainLayout>
  );
};

export default Template;
