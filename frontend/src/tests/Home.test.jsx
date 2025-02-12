import axios from 'axios';

describe('Home page', () => {
  beforeAll(() => {
    jest.spyOn(axios, 'get').mockImplementation();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('returns the mocked response in the Hero section', async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          title: 'Lorem ipsum',
          subtitle: 'dolor sit amet',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
      ],
    });
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/hero`);
    expect(res).toEqual({
      data: [
        {
          id: 1,
          title: 'Lorem ipsum',
          subtitle: 'dolor sit amet',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
      ],
    });
  });
});
