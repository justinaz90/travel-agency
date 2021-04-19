import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {

  it('should render without crashing', () => {
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='trip summary' cost='999' days={123}/>);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });

  it('generates link to correct link address', () => {
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} image='image.jpg' name='trip summary' cost='999' days={123}/>);
    expect(component.find('Link').prop('to')).toEqual('/trip/' + expectedId);
  });

  it('should render iamge with correct src and alt', () => {
    const expectedImage = 'image.jpg';
    const expectedName = 'trip summary';
    const component = shallow(<TripSummary id='abc' image={expectedImage} name={expectedName} cost='999' days={123}/>);
    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedName);
  });

  it('should render correct props: name, cost, days', () => {
    const expectedName = 'trip summary';
    const expectedCost = '999';
    const expectedDays = 123;
    const component = shallow(<TripSummary id='abc' name={expectedName} cost={expectedCost} days={expectedDays} image='image.jpg'/>);
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('span').at(0).text()).toEqual(expectedDays + ' days');
    expect(component.find('span').at(1).text()).toEqual('from ' + expectedCost);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render correct tags', () => {
    const expectedTags = ['one', 'two', 'three'];
    const component = shallow(<TripSummary tags={expectedTags} image='image.jpg' name='trip summary' cost='999' days={123}/>);
    expect(component.find('.tag').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tag').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tag').at(2).text()).toEqual(expectedTags[2]);
  });

  it('should not render tags div if tags are false', () => {
    const expectedTags = [''];
    const component = shallow(<TripSummary  image='image.jpg' name='trip summary' cost='999' days={123} tags={expectedTags}/>);
    expect(component.hasClass('tags')).toBe(false);
  });

});
