from django.db import models

class Student(models.Model):
    BRANCH_CHOICES = [
        ('CSE', 'Computer Science'),
        ('IT', 'Information Technology'),
        ('ECE', 'Electronics & Communication'),
        ('EEE', 'Electrical & Electronics'),
        ('ME', 'Mechanical'),
        ('CE', 'Civil'),
        ('AI', 'Artificial Intelligence'),
        ('DS', 'Data Science'),
        ('BIO', 'BioTech'),
        ('AUTO', 'Automobile'),
    ]
    YEAR_CHOICES = [
        ('FY', 'First Year'),
        ('SY', 'Second Year'),
        ('TY', 'Third Year'),
        ('BTech', 'B.Tech Final Year'),
    ]

    name = models.CharField(max_length=100)
    roll_number = models.CharField(max_length=20, unique=True)
    branch = models.CharField(max_length=10, choices=BRANCH_CHOICES)
    year = models.CharField(max_length=10, choices=YEAR_CHOICES)
    email = models.EmailField(unique=True)
    contact_number = models.CharField(max_length=15, unique=True)

    def __str__(self):
        return f"{self.name} ({self.roll_number})"