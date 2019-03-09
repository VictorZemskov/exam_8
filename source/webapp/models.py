from django.db import models
from django.urls import reverse


class SoftDeleteManager(models.Manager):
    def active(self):
        return self.filter(is_deleted=False)

    def deleted(self):
        return self.filter(is_deleted=True)


STATUS_CHOICES = [
    ('turn', 'Очередь'),
    ('in_work', 'В работе'),
    ('done', 'Сделано'),
]


class Task(models.Model):
    summary = models.CharField(max_length=255)
    description = models.TextField(max_length=2000, null=True, blank=True)
    due_date = models.DateTimeField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='turn')
    time_planned = models.DecimalField(max_digits=6, decimal_places=1)
    is_deleted = models.BooleanField(default=False)

    objects = SoftDeleteManager()

    def get_absolute_url(self):
        return reverse('api_v1:task-detail', kwargs={'pk': self.pk})

    def __str__(self):
        return '%s %s' % (self.summary, self.description)

