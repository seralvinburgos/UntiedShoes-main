from shoes.models import Shoe, ShoeGender
from django.views.generic import ListView, DetailView, TemplateView
from django.views.generic.edit import (
    CreateView,
    UpdateView,
    DeleteView,
)
from django.contrib.auth.mixins import (
    LoginRequiredMixin,
    UserPassesTestMixin,
)
from django.urls import reverse_lazy


class PageHomeView(TemplateView):
    template_name = 'pages/home.html'


class PageAboutView(TemplateView):
    template_name = 'pages/about.html'


class ShoesListView(LoginRequiredMixin, UserPassesTestMixin, ListView):
    model = Shoe
    template_name = 'shoes/list.html'
    context_object_name = 'shoes'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        gender_male = ShoeGender.objects.get(name='men')
        gender_women = ShoeGender.objects.get(name='women')

        context['men_shoes'] = Shoe.objects.filter(
            gender=gender_male,
        ).order_by('createdAt').reverse()

        context['women_shoes'] = Shoe.objects.filter(
            gender=gender_women,
        ).order_by('createdAt').reverse()

        return context

    def test_func(self):
        return self.request.user.role.is_staff


class ShoeDetailView(LoginRequiredMixin, UserPassesTestMixin, DetailView):
    model = Shoe
    template_name = 'shoes/detail.html'
    context_object_name = 'shoe'

    def test_func(self):
        return self.request.user.role.is_staff


class ShoeEditView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Shoe
    fields = ('model', 'brand', 'price', 'description', 'image')
    template_name = 'shoes/edit.html'

    def test_func(self):
        return self.request.user.role.name == 'admin'


class ShoeDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = Shoe
    template_name = 'shoes/delete.html'
    success_url = reverse_lazy('shoes')

    def test_func(self):
        return self.request.user.role.name == 'admin'


class ShoeCreateView(LoginRequiredMixin, UserPassesTestMixin, CreateView):
    model = Shoe
    fields = ('model', 'brand', 'price', 'description', 'image')
    template_name = 'shoes/create.html'

    def test_func(self):
        return self.request.user.role.name == 'admin'
