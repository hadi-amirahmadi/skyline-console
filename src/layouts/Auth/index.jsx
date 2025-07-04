// Copyright 2021 99cloud
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import renderRoutes from 'utils/RouterConfig';

import logo from 'asset/image/logo.png';
import styles from './index.less';
import bg from '../../asset/image/Background.png';

export class AuthLayout extends Component {
  constructor(props) {
    super(props);

    this.routes = props.route.routes;
  }

  renderRight() {
    return (
      <div className={styles.right}>
        <img alt="" className={styles['login-full-image']} src={bg} />
      </div>
    );
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.left} />
        {this.renderRight()}
        <div className={styles.main}>
          <div className={styles.top}>
            <div className={styles.header}>
              <img alt="logo" className={styles.logo} src={logo} />
            </div>
          </div>
          {renderRoutes(this.routes)}
        </div>
      </div>
    );
  }
}

export default inject('rootStore')(observer(AuthLayout));
