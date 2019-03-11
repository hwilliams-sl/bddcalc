Feature: Addition

Scenario: Add 2 single digit numbers
    Given the numbers 1 and 3
    When they are added together 
    Then the result should be 4
	
Scenario: Add 2 double digit numbers
    Given the numbers 23 and 45
    When they are added together 
    Then the result should be 68

Scenario: Add 2 triple digit numbers
    Given the numbers 678 and 910
    When they are added together 
    Then the result should be 1588