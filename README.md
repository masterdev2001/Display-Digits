# display-digit

Build a simple web app to display the digits.
![image](./images/image.png)

## Tasks

1. Display number (initially 0).
2. Button 1:
   If the user clicks `Button 1`, the number is changing every 0.5s like the following: 0 -> 1 -> 2 -> ... -> 9 -> 0 -> 1 -> 2 -> ...
   If the user clicks `Button 1` again, stops changing
   If the user clicks `Button 1` again, starts changing again
   ...
3. Button 2:
   If the user clicks `Button 2`, the number is changing to a random integer from 0 - 9 every 0.5s (Key point: The random number shouldn't be in the previous numbers. There are 10 distinct integers from 0 - 9. So the entire process will be stopped after 5 (= 0.5 \* 10) seconds.)
   If the user clicks `Button 2` again, stops changing
   If the user clicks `Button 2` again, starts changing (saving all the history: previous numbers)
   ...
4. Button 3:
   Clear the history of previous numbers.

## Environment

- Windows 11
- Node v20.15.1
- Npm 10.7.0

## Tech Stacks

- Vite + React + Typescript

## Steps to run program

1. Install node modules

   ```shell
   npm install
   ```

2. Run project
   ```shell
   npm run dev
   ```
   This will host the project on http://localhost:5173.
