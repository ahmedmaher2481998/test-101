export function detectPlatform(headers: Headers) {
    return headers.get('X-Platform') || 'desktop';
  }