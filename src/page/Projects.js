import React from 'react';
import { Container, Card, CardColumns } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';

function Projects() {


  return (
    <Container fluid className="light-bg page justify-content-center">
      <CardColumns style={{ padding: "3vh" }}>
        <Card>
          <Card.Body>
            <Card.Title>Numerous</Card.Title>
            <Card.Text>
              Numerous is a free app that helps you control your personal data, use it to make money and find great deals from brands you’ll love.
            </Card.Text>
            <SocialIcon url="https://www.numerous.app/" />
            <SocialIcon url="https://play.google.com/store/apps/details?id=com.numerous.yoy" />
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Backend, frontend &amp; mobile.</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Payment Help</Card.Title>
            <Card.Text>
              Payment Help provides payment support services to customers for a range of products, including Device Tracker Plus and Blokkr.
            </Card.Text>
            <SocialIcon url="https://www.paymenthelp.org/" />
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Backend &amp; frontend.</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Device Tracker Plus</Card.Title>
            <Card.Text>
              Device tracker plus is a simple yet effective tracking app, it has helped over 1m people around the world keep their phones and their loved ones safe.
            </Card.Text>
            <SocialIcon url="https://www.devicetrackerplus.com/" />
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Backend, frontend &amp; mobile.</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Notes</Card.Title>
            <Card.Text>
              Notes gives you a quick and simple notepad editing experience where you can write notes, to do lists, checklist, shopping lists, reminders &amp; memos. The simple application makes it easy to write notes at anytime &amp; anywhere. Notes was built with Xamarin forms &amp; was mainly to give me some insight into how to deploy mobile apps to the google play store.
            </Card.Text>
            <SocialIcon className="social-icon" url="https://github.com/CameronFullerDev/notes" />
            <SocialIcon className="social-icon" url="https://play.google.com/store/apps/details?id=com.fuller.notes" />
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Mobile.</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>YoRecipe</Card.Title>
            <Card.Text>
              (Coming soon)
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Backend, frontend &amp; mobile.</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>My website</Card.Title>
            <Card.Text>
              This website was created using React JS, it's hosted with github pages. The idea was to create a simple, clean site where I can post my projects, bit's about me &amp; build on my knowledge of React JS.
            </Card.Text>
            <SocialIcon className="social-icon" url="https://github.com/CameronFullerDev/CameronFullerDev.github.io" />
            <SocialIcon className="social-icon" url="https://cameron-fuller.com" />
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Frontend.</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Counters</Card.Title>
            <Card.Text>
              Counters is a simple counter app for android. You can create multiple counters with their owns names &amp; values, adding or subtracting from them right on the home screen. This was another simple project to become more familar with the google play store.
            </Card.Text>
            <SocialIcon className="social-icon" url="https://github.com/CameronFullerDev/counter" />
            <SocialIcon className="social-icon" url="https://play.google.com/store/apps/details?id=com.fuller.counters" />
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Mobile.</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Roam</Card.Title>
            <Card.Text>
              (Coming soon)
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Backend, frontend &amp; mobile.</small>
          </Card.Footer>
        </Card>
      </CardColumns>
    </Container>
  );
}

export default Projects;
