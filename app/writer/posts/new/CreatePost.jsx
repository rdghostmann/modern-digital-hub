'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardLayout from '@/components/dashboard-layout';
import { addPost } from '@/controllers/addPost'; // server action

// Dynamically import ReactQuill to prevent SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// Define Quill modules and formats
const quillModules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
    ['clean'],
  ],
};

const quillFormats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'link',
  'image',
];

export default function CreatePost({ categories, user }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    image: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.excerpt || !formData.content || !formData.category) {
      toast.error('All fields are required');
      return;
    }

    if (!user?.id || !user?.username) {
      toast.error('User is not authenticated properly.');
      return;
    }

    startTransition(async () => {
      const result = await addPost({
        ...formData,
        authorId: user.id,
        authorName: user.username,
      });

      if (result?.success) {
        toast.success('Post created successfully');
        router.push('/writer/posts');
      } else {
        toast.error(result?.error || 'Failed to create post');
      }
    });
  };

  return (
    <DashboardLayout role="writer">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Create New Post</h1>
          <p className="text-gray-600 dark:text-gray-400">Write and publish a new blog post</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Post Details</CardTitle>
            <CardDescription>Fill in the information for your new blog post</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter post title"
                  required
                />
              </div>

              <div>
                <Label htmlFor="excerpt">Excerpt</Label>
                <Input
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="Brief description of your post"
                  required
                />
              </div>

              <div>
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat._id} value={cat.name}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="image">Featured Image URL</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className='h-48'>
                <Label htmlFor="content">Content</Label>
                <ReactQuill
                  className='max-h-full'
                  theme="snow"
                  value={formData.content}
                  onChange={(value) => setFormData({ ...formData, content: value })}
                  modules={quillModules}
                  formats={quillFormats}
                  placeholder="Write your blog post content here..."
                />
              </div>

              <div className="flex space-x-4">
                <Button type="submit" disabled={isPending}>
                  {isPending ? 'Creating...' : 'Create Post'}
                </Button>
                <Button type="button" variant="outline" onClick={() => router.push('/writer/posts')}>
                  Cancel
                </Button>
                <Button type="button" variant="outline" onClick={() => { }}>
                  Draft
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
