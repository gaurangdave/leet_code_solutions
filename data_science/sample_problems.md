Vectorized Programming Practice: From Loops to NumPy/TF
The goal of these exercises is to train your brain to think in terms of whole arrays (vectors, matrices) instead of individual elements. For each problem, you'll see a "scalar" solution using a for loop. Your challenge is to find the equivalent "vectorized" solution using NumPy or TensorFlow operations, without any explicit loops.

Problem 1: Conditional Replacement (Easy)
Scenario: You have a vector of random numbers, and you want to create a new vector where all values less than 0.5 are replaced with 0, and all values greater than or equal to 0.5 are replaced with 1.

Scalar Approach (The for loop):

import numpy as np
data = np.random.rand(10)
result = np.zeros_like(data) # Create an empty array of the same shape

for i in range(len(data)):
    if data[i] < 0.5:
        result[i] = 0
    else:
        result[i] = 1

Your Challenge: How can you achieve the same result in a single, vectorized line of code without a loop?

Hint: Think about boolean masking. What happens when you apply a comparison operator (like <) to an entire NumPy array? What kind of array does it return? How can you use that array to select and modify elements?

Problem 2: Pairwise Distance Calculation (Medium)
Scenario: You have two sets of 2D points, A and B. You want to calculate the Euclidean distance between every point in A and every point in B. The final result should be a "distance matrix" where distance_matrix[i, j] is the distance between point A[i] and point B[j].

Scalar Approach (The for loop):

A = np.random.rand(5, 2) # 5 points in 2D
B = np.random.rand(8, 2) # 8 points in 2D
distance_matrix = np.zeros((5, 8))

for i in range(A.shape[0]):
    for j in range(B.shape[0]):
        # Calculate Euclidean distance: sqrt( (x1-x2)^2 + (y1-y2)^2 )
        dist = np.sqrt(np.sum((A[i] - B[j])**2))
        distance_matrix[i, j] = dist

Your Challenge: This is a classic problem. How can you solve this without loops, leveraging NumPy's broadcasting capabilities?

Hint: The core of the calculation is (A[i] - B[j]). To do this for all pairs at once, you need to reshape A and B in a clever way so that when you subtract them, NumPy's broadcasting creates a (5, 8, 2) tensor containing all the pairwise difference vectors. Once you have that, the rest of the calculation (sum and sqrt) can be applied along the correct axis.

Problem 3: Vectorized Overlap Check (Hard / Relevant to Your Project)
Scenario: You have a set of N existing bounding boxes and one current bounding box. You want to check if the current box overlaps with any of the N existing boxes. The result should be a single boolean (True if there's any overlap, False otherwise).

A box is defined by (x_min, y_min, x_max, y_max).

Scalar Approach (The for loop):

# N existing boxes, shape (N, 4)
existing_boxes = np.array([[5, 5, 10, 10], [20, 20, 25, 25]]) 
# 1 current box, shape (4,)
current_box = np.array([8, 8, 12, 12]) 

overlap_found = False
for i in range(existing_boxes.shape[0]):
    existing_box = existing_boxes[i]
    
    # Check for overlap on X-axis
    x_overlap = (current_box[0] <= existing_box[2] and current_box[2] >= existing_box[0])
    
    # Check for overlap on Y-axis
    y_overlap = (current_box[1] <= existing_box[3] and current_box[3] >= existing_box[1])
    
    if x_overlap and y_overlap:
        overlap_found = True
        break

Your Challenge: How can you perform this check for all N boxes at once in a vectorized way?

Hint: You can perform boolean comparisons on entire NumPy arrays. Start by slicing the columns to get all existing_x_min, existing_x_max, etc., as vectors of length N. Then, write the comparison logic using these vectors and the scalar values from current_box. The result of your comparisons will be boolean arrays of shape (N,). How can you combine these boolean arrays to find out if any of the boxes resulted in a True overlap?