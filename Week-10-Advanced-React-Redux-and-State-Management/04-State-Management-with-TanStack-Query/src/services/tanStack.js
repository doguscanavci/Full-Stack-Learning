import {
  getContactDetails,
  getContacts,
  deleteContact,
  addContact,
} from './api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'; // useQueryClient eklendi

export function useContacts() {
  return useQuery({
    queryKey: ['Contacts', 'List'],
    queryFn: getContacts,
  });
}

export function useContactDetails(id) {
  return useQuery({
    // id'yi string dışına çıkardık
    queryKey: ['Contacts', 'Detail', id],
    queryFn: () => getContactDetails(id),
    enabled: !!id, // id yoksa boşuna istek atma
  });
}

export function useDeleteContact() {
  const queryClient = useQueryClient(); // Mevcut cache'e ulaşmak için doğru yöntem

  return useMutation({
    mutationFn: (id) => deleteContact(id),
    onSuccess: async (data, id) => {
      // id burada direkt silinen numara/string
      await queryClient.invalidateQueries({
        queryKey: ['Contacts', 'Detail', id],
      });
      await queryClient.invalidateQueries({
        queryKey: ['Contacts', 'List'],
      });
    },
  });
}

export function useAddContact() {
  const queryClient = useQueryClient(); // Doğru hook kullanımı

  return useMutation({
    mutationFn: (data) => addContact(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['Contacts', 'List'],
      });
    },
  });
}
