import { Button, Grid, Typography } from "@material-ui/core";

import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }
  render() {
    if (this.state.hasError) {
      //   setTimeout(() => {
      //     history.push('/');
      //   }, 4000);

      return (
        <>
          <Grid container>
            <Grid item xs={12} style={{ marginBottom: "60px" }}>
              {/* <TopBar /> */}
            </Grid>
            <Grid item xs={2}>
              {/* <AdminSidebar /> */}
            </Grid>
            <Grid item xs={10}>
              <div className="container">
                Some error occured on this page. Please contact the developers.
              </div>
            </Grid>
          </Grid>
        </>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
