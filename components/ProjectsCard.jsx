import React from 'react';
import { Icon } from '@iconify/react';
import { Badge, Card, CardBody, Col, Button, CardTitle, } from 'reactstrap';
import { Fade } from 'react-reveal';

const ProjectsCard = ({ data }) => {
  return (
    <Col lg="6">
      <Fade bottom duration={2000}>
        <Card className="shadow-lg--hover shadow mt-4">
          <CardBody>
            <div className="d-flex px-3">
              <div className="pl-4">
                <h3>{data.name}</h3>
                <p className="description mt-3">{data.desc}</p>
                <CardTitle>
                  {data.tech.map((skill, i) => {
                    return <Badge key={i} color="primary" className="mr-1" style={{ textTransform: 'none' }}>
                      {skill}
                    </Badge>;
                  })}
                </CardTitle>
                {data.github ? (
                  <Button
                    className="btn-icon"
                    color="github"
                    href={data.github}
                    target="_blank"
                    rel="noopener"
                    aria-label="Github"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-github" />
                    </span>
                  </Button>
                ) : null}
                {data.snaps ? (
                  <Button
                    href={data.snaps}
                    className="btn-icon"
                    color="info"
                    target="_blank"
                    rel="noopener"
                    aria-label="Twitter"
                  >
                    <span className="nav-link-inner--text ml-1">
                      <Icon
                        icon="bi:images"
                        data-inline="false"
                      ></Icon>
                    </span>
                  </Button>
                ) : null}
                {data.link ? (
                  <Button
                    className="btn-icon"
                    color="success"
                    href={data.link}
                    target="_blank"
                    rel="noopener"
                    aria-label="Twitter"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-arrow-right mr-2" />
                    </span>
                    <span className="nav-link-inner--text ml-1">Demo</span>
                  </Button>
                ) : null}
              </div>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ProjectsCard;
