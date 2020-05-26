import React from 'react';
import LargeCard from '../../component/card/large/LargeCard';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap'

class Numerous extends React.Component {
    render() {
        return (
            <Container fluid >
            <Row className="justify-content-center">
            <LargeCard Title="Numerous" Img={require('../../assets/Numerous.png')} Text="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan sollicitudin erat. Praesent at congue odio. Proin at elit lacus. Aliquam erat volutpat. Aliquam nec mauris quis nibh rutrum pellentesque. Donec lacinia lobortis nibh, in faucibus lorem laoreet in. Integer molestie arcu nec erat vestibulum, vitae tincidunt metus luctus. Suspendisse id consequat nibh. Sed euismod urna quis lacus rhoncus accumsan.

Cras maximus nisl ex, a mattis odio finibus ut. Integer non velit tincidunt, feugiat sem vulputate, pulvinar risus. Ut in tortor urna. Fusce tincidunt neque rhoncus nulla luctus, id luctus diam maximus. Integer sit amet scelerisque tortor. Proin vitae massa sit amet justo fringilla lacinia sit amet ac magna. Maecenas tristique ex in dui tempor convallis. Donec nec rhoncus tellus. Suspendisse lacinia turpis mi, in porttitor diam tristique ut. Ut laoreet lobortis felis ut sollicitudin. Integer luctus, felis eget sollicitudin semper, felis sapien sodales dui, eget placerat ex sem eget orci. Cras tempus est arcu.

Nam placerat metus eget ipsum molestie, nec maximus mi pellentesque. Etiam facilisis nec lorem vitae consectetur. Mauris ut aliquet urna. Suspendisse feugiat augue ac urna blandit, id mollis tortor accumsan. Maecenas ut massa ac quam venenatis interdum. Nullam eget hendrerit massa. Nulla sed tempor felis, at aliquam tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Donec vel justo sit amet erat tempor elementum. Nam eget placerat libero. Pellentesque tellus enim, suscipit vitae sem eget, faucibus consequat libero. Praesent rutrum felis ut elit laoreet, et dictum libero semper. Curabitur facilisis eget nisl sit amet aliquet. Proin quam diam, facilisis eu gravida cursus, iaculis id quam. Nullam efficitur lobortis scelerisque. Aenean a imperdiet enim. Praesent nec quam sed magna sodales interdum. Fusce ac tincidunt nibh. Nulla tincidunt orci leo. Cras nec tristique sapien, id fringilla augue. Curabitur aliquet ligula sed est facilisis, sit amet pharetra dui maximus. Proin erat nulla, faucibus sit amet ipsum in, hendrerit euismod urna. Duis odio sem, commodo eu vulputate sit amet, consequat non neque. Curabitur ultricies blandit purus.

Ut id lorem eu orci interdum tincidunt ut nec leo. Phasellus vel nulla vestibulum, porta massa dapibus, vehicula arcu. Etiam nunc enim, sodales et fringilla a, feugiat eu nisi. Praesent eget nisi rhoncus augue placerat efficitur. Sed pulvinar feugiat nunc ut malesuada. Vestibulum gravida leo ac eros suscipit, eget aliquet nisi aliquam. Vivamus porttitor eros ac fermentum faucibus. Nunc vitae pulvinar nisi, id vulputate diam. Vivamus in tempus mi. Nullam blandit auctor libero, eget malesuada ante egestas vitae." /></Row>
        </Container>
        );
    }
}

export default Numerous;
