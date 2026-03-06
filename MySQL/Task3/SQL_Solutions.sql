--Japanese Cities' Name
SELECT NAME 
FROM CITY 
WHERE COUNTRYCODE = 'JPN';

--Weather Observation Station 2
SELECT ROUND(SUM(LAT_N), 2), ROUND(SUM(LONG_W), 2) 
FROM STATION;

--Weather Observation Station 9
SELECT DISTINCT CITY 
FROM STATION 
WHERE CITY NOT REGEXP '^[aeiou]';

--Weather Observation Station 10
SELECT DISTINCT CITY 
FROM STATION 
WHERE CITY NOT REGEXP '[aeiou]$';

--Weather Observation Station 12
SELECT DISTINCT CITY 
FROM STATION 
WHERE CITY NOT REGEXP '^[aeiou]' AND CITY NOT REGEXP '[aeiou]$';
--Average Population
SELECT FLOOR(AVG(POPULATION)) 
FROM CITY;

--The Company
SELECT c.company_code, c.founder, 
    COUNT(DISTINCT l.lead_manager_code), 
    COUNT(DISTINCT s.senior_manager_code), 
    COUNT(DISTINCT m.manager_code), 
    COUNT(DISTINCT e.employee_code)
FROM Company c
JOIN Lead_Manager l ON c.company_code = l.company_code
JOIN Senior_Manager s ON l.lead_manager_code = s.lead_manager_code
JOIN Manager m ON s.senior_manager_code = m.senior_manager_code
JOIN Employee e ON m.manager_code = e.manager_code
GROUP BY c.company_code, c.founder
ORDER BY c.company_code;

--Harry Potter and Wands
SELECT w.id, wp.age, w.coins_needed, w.power
FROM Wands w
JOIN Wands_Property wp ON w.code = wp.code
WHERE wp.is_evil = 0 
AND w.coins_needed = (
    SELECT MIN(coins_needed)
    FROM Wands w1
    JOIN Wands_Property wp1 ON w1.code = wp1.code
    WHERE w1.power = w.power AND wp1.age = wp.age
)
ORDER BY w.power DESC, wp.age DESC;

--The Report
SELECT IF(g.Grade < 8, NULL, s.Name), g.Grade, s.Marks 
FROM Students s 
JOIN Grades g ON s.Marks BETWEEN g.Min_Mark AND g.Max_Mark 
ORDER BY g.Grade DESC, s.Name ASC, s.Marks ASC;

--Symmetric Pairs
SELECT f1.X, f1.Y
FROM Functions f1
JOIN Functions f2 ON f1.X = f2.Y AND f1.Y = f2.X
GROUP BY f1.X, f1.Y
HAVING COUNT(*) > 1 OR f1.X < f1.Y
ORDER BY f1.X;