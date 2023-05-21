import {v4} from "uuid";

const item = {
  id: v4(),
  name: "Make some features"
}

const item2 = {
  id: v4(),
  name: "Add delete button for cards"
}
const data = [
    {
      id: v4(),
      name: 'BUGHIVE',
      tabs: [
        {
          id: v4(),
          title: 'To do',
          items: [
            {
              id: v4(),
              title: 'Change padding ',
              
              description: 'In the main section I see some wrong paddings should be',
              purpose: 'Purpose 1',
              assigned_from: 'QA1',
              assigned_to: 'front-dev',
              type: 'Type 1',
              comments: [
                {
                  id: v4(),
                  user:'someone',
                  title: 'in the main section still see some wrong paddings should be...'
                },
                {
                  id: v4(),
                  user:'team worker',
                  title: 'I will try to solve it'
                }
              ]
            },
            {
              id: v4(),
              title: 'Add Log in ',
              description: 'Description 2',
              purpose: 'Purpose 2',
              assigned_from: 'QA1',
              assigned_to: 'front-dev',
              type: 'Type 1',
              comments: [
                {
                  id: v4(),
                  user:'someone',
                  title: 'in the main section still see some wrong paddings should be...'
                },
                {
                  id: v4(),
                  user:'team worker',
                  title: 'I will try to solve it'
                }
              ]
            },
          ],
        },
        {
          id: v4(),
          title: 'In progress',
          items: [
            {
              id: v4(),
              title: 'Add popup on click',
              items: [item, item2],
              description: 'Description 3',
              purpose: 'Purpose 3',
              assigned_from: 'QA1',
              assigned_to: 'front-dev',
              type: 'Type 1',
              comments: [
                {
                  id: v4(),
                  user:'someone',
                  title: 'in the main section still see some wrong paddings should be...'
                },
                {
                  id: v4(),
                  user:'team worker',
                  title: 'I will try to solve it'
                }
              ]
            },
            {
              id: v4(),
              title: 'Add project`s coop icons ',
              items: [item, item2],
              description: 'Description 4',
              purpose: 'Purpose 4',
              assigned_from: 'QA1',
              assigned_to: 'front-dev',
              type: 'Type 1',
              comments: [
                {
                  id: v4(),
                  user:'someone',
                  title: 'in the main section still see some wrong paddings should be...'
                },
                {
                  id: v4(),
                  user:'team worker',
                  title: 'I will try to solve it'
                }
              ]
            },
          ],
        },
      ],
    },
    {
      id: v4(), // Updated the id to 2
      name: 'Project 1',
      tabs: [
        {
          id: v4(),
          title: 'Tab 1',
          items: [
            {
              id: v4(),
              title: 'Item 1',
              description: 'Description 1',
              purpose: 'Purpose 1',
              assigned_from: 'QA1',
              assigned_to: 'front-dev',
              type: 'Type 1',
              comments: [
                {
                  id: v4(),
                  user:'someone',
                  title: 'in the main section still see some wrong paddings should be...'
                },
                {
                  id: v4(),
                  user:'team worker',
                  title: 'I will try to solve it'
                }
              ]
            },
            {
              id: v4(),
              title: 'Item 2',
              description: 'Description 2',
              purpose: 'Purpose 2',
              assigned_from: 'QA1',
              assigned_to: 'front-dev',
              type: 'Type 1',
              comments: [
                {
                  id: v4(),
                  user:'someone',
                  title: 'in the main section still see some wrong paddings should be...'
                },
                {
                  id: v4(),
                  user:'team worker',
                  title: 'I will try to solve it'
                }
              ]
            },
          ],
        },
        {
          id: v4(),
          title: 'Tab 2',
          items: [
            {
              id: v4(),
              title: 'Item 3',
              description: 'Description 3',
              purpose: 'Purpose 3',
              assigned_from: 'QA1',
              assigned_to: 'front-dev',
              type: 'Type 1',
              comments: [
                {
                  id: v4(),
                  user:'someone',
                  title: 'in the main section still see some wrong paddings should be...'
                },
                {
                  id: v4(),
                  user:'team worker',
                  title: 'I will try to solve it'
                }
              ]
            },
            {
              id: v4(),
              title: 'some staff',
              description: 'Description 4',
              purpose: 'Purpose 4',
              assigned_from: 'QA1',
              assigned_to: 'front-dev',
              type: 'Type 1',
              comments: [
                {
                  id: v4(),
                  user:'someone',
                  title: 'in the main section still see some wrong paddings should be...'
                },
                {
                  id: v4(),
                  user:'team worker',
                  title: 'I will try to solve it'
                }
              ]
            },
          ],
        },
      ],
    },
  ];
  
  export default data;

  