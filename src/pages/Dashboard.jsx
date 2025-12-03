import React from "react";
import MainLayout from "../layouts/MainLayout";

// Charts
import AnalyticsChart from "../components/AnalyticsChart";
import Sparkline from "../components/Sparkline";

const Dashboard = () => {
  // Sparkline sample data
  const sparklineData = {
    uniqueVisitor: [10, 15, 14, 20, 18, 25, 22],
    bounceRate: [30, 28, 32, 29, 27, 31, 28],
    totalPageViews: [120, 150, 180, 160, 200, 220, 250],
    avgTimeOnSite: [2, 3, 2.5, 3.2, 3.5, 3, 3.8],
    newVisits: [40, 42, 39, 43, 45, 44, 42],
    returnVisitors: [65, 68, 70, 72, 73, 75, 74],
  };

  return (
    <MainLayout>
      {/* Breadcrumb */}
      <ol className="breadcrumb float-xl-end">
        <li className="breadcrumb-item"><a href="javascript:;">Home</a></li>
        <li className="breadcrumb-item active">Dashboard</li>
      </ol>

      {/* Page Header */}
      <h1 className="page-header">
        Dashboard <small>Student Information Analytics</small>
      </h1>

      {/* TOP WIDGETS */}
      <div className="row">
        
        <div className="col-xl-3 col-md-6">
          <div className="widget widget-stats bg-blue">
            <div className="stats-icon"><i className="fa fa-desktop"></i></div>
            <div className="stats-info">
              <h4>TOTAL VISITORS</h4>
              <p>3,291,922</p>
            </div>
            <div className="stats-link">
              <a href="javascript:;">
                View Detail <i className="fa fa-arrow-alt-circle-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="widget widget-stats bg-info">
            <div className="stats-icon"><i className="fa fa-link"></i></div>
            <div className="stats-info">
              <h4>BOUNCE RATE</h4>
              <p>20.44%</p>
            </div>
            <div className="stats-link">
              <a href="javascript:;">
                View Detail <i className="fa fa-arrow-alt-circle-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="widget widget-stats bg-orange">
            <div className="stats-icon"><i className="fa fa-users"></i></div>
            <div className="stats-info">
              <h4>UNIQUE VISITORS</h4>
              <p>1,291,922</p>
            </div>
            <div className="stats-link">
              <a href="javascript:;">
                View Detail <i className="fa fa-arrow-alt-circle-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="widget widget-stats bg-red">
            <div className="stats-icon"><i className="fa fa-clock"></i></div>
            <div className="stats-info">
              <h4>AVG TIME ON SITE</h4>
              <p>00:12:23</p>
            </div>
            <div className="stats-link">
              <a href="javascript:;">
                View Detail <i className="fa fa-arrow-alt-circle-right"></i>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* ANALYTICS ROW */}
      <div className="row mt-4">

        {/* LEFT: MAIN ANALYTICS CHART */}
        <div className="col-xl-8">
          <div className="panel panel-inverse" data-sortable-id="index-1">
            <div className="panel-heading d-flex align-items-center justify-content-between">
              <h4 className="panel-title">Website Analytics (Last 7 Days)</h4>

              <div className="panel-heading-btn">
                <a href="javascript:;" className="btn btn-xs btn-icon btn-default" data-toggle="panel-expand">
                  <i className="fa fa-expand"></i>
                </a>
                <a href="javascript:;" className="btn btn-xs btn-icon btn-success" data-toggle="panel-reload">
                  <i className="fa fa-redo"></i>
                </a>
                <a href="javascript:;" className="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse">
                  <i className="fa fa-minus"></i>
                </a>
                <a href="javascript:;" className="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove">
                  <i className="fa fa-times"></i>
                </a>
              </div>
            </div>

            <div className="panel-body pe-1">
              <AnalyticsChart />
            </div>
          </div>
        </div>

        {/* RIGHT: ANALYTICS DETAILS SPARKLINE TABLE */}
        <div className="col-xl-4">
          <div className="panel panel-inverse" data-sortable-id="index-6">
            <div className="panel-heading d-flex align-items-center justify-content-between">
              <h4 className="panel-title">Analytics Details</h4>

              <div className="panel-heading-btn">
                <a href="javascript:;" className="btn btn-xs btn-icon btn-default" data-toggle="panel-expand">
                  <i className="fa fa-expand"></i>
                </a>
                <a href="javascript:;" className="btn btn-xs btn-icon btn-success" data-toggle="panel-reload">
                  <i className="fa fa-redo"></i>
                </a>
                <a href="javascript:;" className="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse">
                  <i className="fa fa-minus"></i>
                </a>
                <a href="javascript:;" className="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove">
                  <i className="fa fa-times"></i>
                </a>
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-panel align-middle mb-0">
                <thead>
                  <tr>
                    <th>Source</th>
                    <th>Total</th>
                    <th>Trend</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td><label className="badge bg-danger">Unique Visitor</label></td>
                    <td>13,203 <span className="text-success"><i className="fa fa-arrow-up"></i></span></td>
                    <td><Sparkline data={sparklineData.uniqueVisitor} color="#dc3545" /></td>
                  </tr>

                  <tr>
                    <td><label className="badge bg-warning">Bounce Rate</label></td>
                    <td>28.2%</td>
                    <td><Sparkline data={sparklineData.bounceRate} color="#ffc107" /></td>
                  </tr>

                  <tr>
                    <td><label className="badge bg-success">Total Page Views</label></td>
                    <td>1,230,030</td>
                    <td><Sparkline data={sparklineData.totalPageViews} color="#198754" /></td>
                  </tr>

                  <tr>
                    <td><label className="badge bg-primary">Avg Time On Site</label></td>
                    <td>00:03:45</td>
                    <td><Sparkline data={sparklineData.avgTimeOnSite} color="#0d6efd" /></td>
                  </tr>

                  <tr>
                    <td><label className="badge bg-secondary">% New Visits</label></td>
                    <td>40.5%</td>
                    <td><Sparkline data={sparklineData.newVisits} color="#6c757d" /></td>
                  </tr>

                  <tr>
                    <td><label className="badge bg-dark">Return Visitors</label></td>
                    <td>73.4%</td>
                    <td><Sparkline data={sparklineData.returnVisitors} color="#000" /></td>
                  </tr>

                </tbody>

              </table>
            </div>

          </div>
        </div>

      </div>
    </MainLayout>
  );
};

export default Dashboard;
