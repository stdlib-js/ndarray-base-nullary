// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-iteration-order@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-minmax-view-buffer-index@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ndarraylike2object@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-nullary-loop-interchange-order@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-nullary-tiling-block-size@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-vind2bind@esm/index.mjs";var d=[function(r,o){r.data[r.offset]=o()},function(r,o){var f,s,e,t,a;for(e=r.shape[0],s=r.strides[0],t=r.offset,f=r.data,a=0;a<e;a++)f[t]=o(),t+=s},function(r,o){var f,s,e,t,a,d,i,n,c,h;for(t=r.shape,i=r.strides,"row-major"===r.order?(a=t[1],d=t[0],s=i[1],e=i[0]-a*i[1]):(a=t[0],d=t[1],s=i[0],e=i[1]-a*i[0]),n=r.offset,f=r.data,h=0;h<d;h++){for(c=0;c<a;c++)f[n]=o(),n+=s;n+=e}},function(r,o){var f,s,e,t,a,d,i,n,c,h,p,u,v;for(a=r.shape,c=r.strides,"row-major"===r.order?(d=a[2],i=a[1],n=a[0],s=c[2],e=c[1]-d*c[2],t=c[0]-i*c[1]):(d=a[0],i=a[1],n=a[2],s=c[0],e=c[1]-d*c[0],t=c[2]-i*c[1]),h=r.offset,f=r.data,v=0;v<n;v++){for(u=0;u<i;u++){for(p=0;p<d;p++)f[h]=o(),h+=s;h+=e}h+=t}},function(r,o){var f,s,e,t,a,d,i,n,c,h,p,u,v,m,j,l;for(d=r.shape,p=r.strides,"row-major"===r.order?(i=d[3],n=d[2],c=d[1],h=d[0],s=p[3],e=p[2]-i*p[3],t=p[1]-n*p[2],a=p[0]-c*p[1]):(i=d[0],n=d[1],c=d[2],h=d[3],s=p[0],e=p[1]-i*p[0],t=p[2]-n*p[1],a=p[3]-c*p[2]),u=r.offset,f=r.data,l=0;l<h;l++){for(j=0;j<c;j++){for(m=0;m<n;m++){for(v=0;v<i;v++)f[u]=o(),u+=s;u+=e}u+=t}u+=a}},function(r,o){var f,s,e,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w;for(i=r.shape,v=r.strides,"row-major"===r.order?(n=i[4],c=i[3],h=i[2],p=i[1],u=i[0],s=v[4],e=v[3]-n*v[4],t=v[2]-c*v[3],a=v[1]-h*v[2],d=v[0]-p*v[1]):(n=i[0],c=i[1],h=i[2],p=i[3],u=i[4],s=v[0],e=v[1]-n*v[0],t=v[2]-c*v[1],a=v[3]-h*v[2],d=v[4]-p*v[3]),m=r.offset,f=r.data,w=0;w<u;w++){for(y=0;y<p;y++){for(x=0;x<h;x++){for(l=0;l<c;l++){for(j=0;j<n;j++)f[m]=o(),m+=s;m+=e}m+=t}m+=a}m+=d}},function(r,o){var f,s,e,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w,b,g,P;for(n=r.shape,j=r.strides,"row-major"===r.order?(c=n[5],h=n[4],p=n[3],u=n[2],v=n[1],m=n[0],s=j[5],e=j[4]-c*j[5],t=j[3]-h*j[4],a=j[2]-p*j[3],d=j[1]-u*j[2],i=j[0]-v*j[1]):(c=n[0],h=n[1],p=n[2],u=n[3],v=n[4],m=n[5],s=j[0],e=j[1]-c*j[0],t=j[2]-h*j[1],a=j[3]-p*j[2],d=j[4]-u*j[3],i=j[5]-v*j[4]),l=r.offset,f=r.data,P=0;P<m;P++){for(g=0;g<v;g++){for(b=0;b<u;b++){for(w=0;w<p;w++){for(y=0;y<h;y++){for(x=0;x<c;x++)f[l]=o(),l+=s;l+=e}l+=t}l+=a}l+=d}l+=i}},function(r,o){var f,s,e,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w,b,g,P,k,z,q;for(c=r.shape,x=r.strides,"row-major"===r.order?(h=c[6],p=c[5],u=c[4],v=c[3],m=c[2],j=c[1],l=c[0],s=x[6],e=x[5]-h*x[6],t=x[4]-p*x[5],a=x[3]-u*x[4],d=x[2]-v*x[3],i=x[1]-m*x[2],n=x[0]-j*x[1]):(h=c[0],p=c[1],u=c[2],v=c[3],m=c[4],j=c[5],l=c[6],s=x[0],e=x[1]-h*x[0],t=x[2]-p*x[1],a=x[3]-u*x[2],d=x[4]-v*x[3],i=x[5]-m*x[4],n=x[6]-j*x[5]),y=r.offset,f=r.data,q=0;q<l;q++){for(z=0;z<j;z++){for(k=0;k<m;k++){for(P=0;P<v;P++){for(g=0;g<u;g++){for(b=0;b<p;b++){for(w=0;w<h;w++)f[y]=o(),y+=s;y+=e}y+=t}y+=a}y+=d}y+=i}y+=n}},function(r,o){var f,s,e,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w,b,g,P,k,z,q,A,B,C;for(h=r.shape,w=r.strides,"row-major"===r.order?(p=h[7],u=h[6],v=h[5],m=h[4],j=h[3],l=h[2],x=h[1],y=h[0],s=w[7],e=w[6]-p*w[7],t=w[5]-u*w[6],a=w[4]-v*w[5],d=w[3]-m*w[4],i=w[2]-j*w[3],n=w[1]-l*w[2],c=w[0]-x*w[1]):(p=h[0],u=h[1],v=h[2],m=h[3],j=h[4],l=h[5],x=h[6],y=h[7],s=w[0],e=w[1]-p*w[0],t=w[2]-u*w[1],a=w[3]-v*w[2],d=w[4]-m*w[3],i=w[5]-j*w[4],n=w[6]-l*w[5],c=w[7]-x*w[6]),b=r.offset,f=r.data,C=0;C<y;C++){for(B=0;B<x;B++){for(A=0;A<l;A++){for(q=0;q<j;q++){for(z=0;z<m;z++){for(k=0;k<v;k++){for(P=0;P<u;P++){for(g=0;g<p;g++)f[b]=o(),b+=s;b+=e}b+=t}b+=a}b+=d}b+=i}b+=n}b+=c}},function(r,o){var f,s,e,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w,b,g,P,k,z,q,A,B,C,D,E,F;for(p=r.shape,g=r.strides,"row-major"===r.order?(u=p[8],v=p[7],m=p[6],j=p[5],l=p[4],x=p[3],y=p[2],w=p[1],b=p[0],s=g[8],e=g[7]-u*g[8],t=g[6]-v*g[7],a=g[5]-m*g[6],d=g[4]-j*g[5],i=g[3]-l*g[4],n=g[2]-x*g[3],c=g[1]-y*g[2],h=g[0]-w*g[1]):(u=p[0],v=p[1],m=p[2],j=p[3],l=p[4],x=p[5],y=p[6],w=p[7],b=p[8],s=g[0],e=g[1]-u*g[0],t=g[2]-v*g[1],a=g[3]-m*g[2],d=g[4]-j*g[3],i=g[5]-l*g[4],n=g[6]-x*g[5],c=g[7]-y*g[6],h=g[8]-w*g[7]),P=r.offset,f=r.data,F=0;F<b;F++){for(E=0;E<w;E++){for(D=0;D<y;D++){for(C=0;C<x;C++){for(B=0;B<l;B++){for(A=0;A<j;A++){for(q=0;q<m;q++){for(z=0;z<v;z++){for(k=0;k<u;k++)f[P]=o(),P+=s;P+=e}P+=t}P+=a}P+=d}P+=i}P+=n}P+=c}P+=h}},function(r,o){var f,s,e,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w,b,g,P,k,z,q,A,B,C,D,E,F,G,H,I;for(u=r.shape,k=r.strides,"row-major"===r.order?(v=u[9],m=u[8],j=u[7],l=u[6],x=u[5],y=u[4],w=u[3],b=u[2],g=u[1],P=u[0],s=k[9],e=k[8]-v*k[9],t=k[7]-m*k[8],a=k[6]-j*k[7],d=k[5]-l*k[6],i=k[4]-x*k[5],n=k[3]-y*k[4],c=k[2]-w*k[3],h=k[1]-b*k[2],p=k[0]-g*k[1]):(v=u[0],m=u[1],j=u[2],l=u[3],x=u[4],y=u[5],w=u[6],b=u[7],g=u[8],P=u[9],s=k[0],e=k[1]-v*k[0],t=k[2]-m*k[1],a=k[3]-j*k[2],d=k[4]-l*k[3],i=k[5]-x*k[4],n=k[6]-y*k[5],c=k[7]-w*k[6],h=k[8]-b*k[7],p=k[9]-g*k[8]),z=r.offset,f=r.data,I=0;I<P;I++){for(H=0;H<g;H++){for(G=0;G<b;G++){for(F=0;F<w;F++){for(E=0;E<y;E++){for(D=0;D<x;D++){for(C=0;C<l;C++){for(B=0;B<j;B++){for(A=0;A<m;A++){for(q=0;q<v;q++)f[z]=o(),z+=s;z+=e}z+=t}z+=a}z+=d}z+=i}z+=n}z+=c}z+=h}z+=p}}],i=[function(r,o){r.accessors[1](r.data,r.offset,o())},function(r,o){var f,s,e,t,a,d;for(t=r.shape[0],e=r.strides[0],a=r.offset,f=r.data,s=r.accessors[1],d=0;d<t;d++)s(f,a,o()),a+=e},function(r,o){var f,s,e,t,a,d,i,n,c,h,p;for(a=r.shape,n=r.strides,"row-major"===r.order?(d=a[1],i=a[0],e=n[1],t=n[0]-d*n[1]):(d=a[0],i=a[1],e=n[0],t=n[1]-d*n[0]),c=r.offset,f=r.data,s=r.accessors[1],p=0;p<i;p++){for(h=0;h<d;h++)s(f,c,o()),c+=e;c+=t}},function(r,o){var f,s,e,t,a,d,i,n,c,h,p,u,v,m;for(d=r.shape,h=r.strides,"row-major"===r.order?(i=d[2],n=d[1],c=d[0],e=h[2],t=h[1]-i*h[2],a=h[0]-n*h[1]):(i=d[0],n=d[1],c=d[2],e=h[0],t=h[1]-i*h[0],a=h[2]-n*h[1]),p=r.offset,f=r.data,s=r.accessors[1],m=0;m<c;m++){for(v=0;v<n;v++){for(u=0;u<i;u++)s(f,p,o()),p+=e;p+=t}p+=a}},function(r,o){var f,s,e,t,a,d,i,n,c,h,p,u,v,m,j,l,x;for(i=r.shape,u=r.strides,"row-major"===r.order?(n=i[3],c=i[2],h=i[1],p=i[0],e=u[3],t=u[2]-n*u[3],a=u[1]-c*u[2],d=u[0]-h*u[1]):(n=i[0],c=i[1],h=i[2],p=i[3],e=u[0],t=u[1]-n*u[0],a=u[2]-c*u[1],d=u[3]-h*u[2]),v=r.offset,f=r.data,s=r.accessors[1],x=0;x<p;x++){for(l=0;l<h;l++){for(j=0;j<c;j++){for(m=0;m<n;m++)s(f,v,o()),v+=e;v+=t}v+=a}v+=d}},function(r,o){var f,s,e,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w,b;for(n=r.shape,m=r.strides,"row-major"===r.order?(c=n[4],h=n[3],p=n[2],u=n[1],v=n[0],e=m[4],t=m[3]-c*m[4],a=m[2]-h*m[3],d=m[1]-p*m[2],i=m[0]-u*m[1]):(c=n[0],h=n[1],p=n[2],u=n[3],v=n[4],e=m[0],t=m[1]-c*m[0],a=m[2]-h*m[1],d=m[3]-p*m[2],i=m[4]-u*m[3]),j=r.offset,f=r.data,s=r.accessors[1],b=0;b<v;b++){for(w=0;w<u;w++){for(y=0;y<p;y++){for(x=0;x<h;x++){for(l=0;l<c;l++)s(f,j,o()),j+=e;j+=t}j+=a}j+=d}j+=i}},function(r,o){var f,s,e,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w,b,g,P,k;for(c=r.shape,l=r.strides,"row-major"===r.order?(h=c[5],p=c[4],u=c[3],v=c[2],m=c[1],j=c[0],e=l[5],t=l[4]-h*l[5],a=l[3]-p*l[4],d=l[2]-u*l[3],i=l[1]-v*l[2],n=l[0]-m*l[1]):(h=c[0],p=c[1],u=c[2],v=c[3],m=c[4],j=c[5],e=l[0],t=l[1]-h*l[0],a=l[2]-p*l[1],d=l[3]-u*l[2],i=l[4]-v*l[3],n=l[5]-m*l[4]),x=r.offset,f=r.data,s=r.accessors[1],k=0;k<j;k++){for(P=0;P<m;P++){for(g=0;g<v;g++){for(b=0;b<u;b++){for(w=0;w<p;w++){for(y=0;y<h;y++)s(f,x,o()),x+=e;x+=t}x+=a}x+=d}x+=i}x+=n}},function(r,o){var f,s,e,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w,b,g,P,k,z,q,A;for(h=r.shape,y=r.strides,"row-major"===r.order?(p=h[6],u=h[5],v=h[4],m=h[3],j=h[2],l=h[1],x=h[0],e=y[6],t=y[5]-p*y[6],a=y[4]-u*y[5],d=y[3]-v*y[4],i=y[2]-m*y[3],n=y[1]-j*y[2],c=y[0]-l*y[1]):(p=h[0],u=h[1],v=h[2],m=h[3],j=h[4],l=h[5],x=h[6],e=y[0],t=y[1]-p*y[0],a=y[2]-u*y[1],d=y[3]-v*y[2],i=y[4]-m*y[3],n=y[5]-j*y[4],c=y[6]-l*y[5]),w=r.offset,f=r.data,s=r.accessors[1],A=0;A<x;A++){for(q=0;q<l;q++){for(z=0;z<j;z++){for(k=0;k<m;k++){for(P=0;P<v;P++){for(g=0;g<u;g++){for(b=0;b<p;b++)s(f,w,o()),w+=e;w+=t}w+=a}w+=d}w+=i}w+=n}w+=c}},function(r,o){var f,s,e,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w,b,g,P,k,z,q,A,B,C,D;for(p=r.shape,b=r.strides,"row-major"===r.order?(u=p[7],v=p[6],m=p[5],j=p[4],l=p[3],x=p[2],y=p[1],w=p[0],e=b[7],t=b[6]-u*b[7],a=b[5]-v*b[6],d=b[4]-m*b[5],i=b[3]-j*b[4],n=b[2]-l*b[3],c=b[1]-x*b[2],h=b[0]-y*b[1]):(u=p[0],v=p[1],m=p[2],j=p[3],l=p[4],x=p[5],y=p[6],w=p[7],e=b[0],t=b[1]-u*b[0],a=b[2]-v*b[1],d=b[3]-m*b[2],i=b[4]-j*b[3],n=b[5]-l*b[4],c=b[6]-x*b[5],h=b[7]-y*b[6]),g=r.offset,f=r.data,s=r.accessors[1],D=0;D<w;D++){for(C=0;C<y;C++){for(B=0;B<x;B++){for(A=0;A<l;A++){for(q=0;q<j;q++){for(z=0;z<m;z++){for(k=0;k<v;k++){for(P=0;P<u;P++)s(f,g,o()),g+=e;g+=t}g+=a}g+=d}g+=i}g+=n}g+=c}g+=h}},function(r,o){var f,s,e,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w,b,g,P,k,z,q,A,B,C,D,E,F,G;for(u=r.shape,P=r.strides,"row-major"===r.order?(v=u[8],m=u[7],j=u[6],l=u[5],x=u[4],y=u[3],w=u[2],b=u[1],g=u[0],e=P[8],t=P[7]-v*P[8],a=P[6]-m*P[7],d=P[5]-j*P[6],i=P[4]-l*P[5],n=P[3]-x*P[4],c=P[2]-y*P[3],h=P[1]-w*P[2],p=P[0]-b*P[1]):(v=u[0],m=u[1],j=u[2],l=u[3],x=u[4],y=u[5],w=u[6],b=u[7],g=u[8],e=P[0],t=P[1]-v*P[0],a=P[2]-m*P[1],d=P[3]-j*P[2],i=P[4]-l*P[3],n=P[5]-x*P[4],c=P[6]-y*P[5],h=P[7]-w*P[6],p=P[8]-b*P[7]),k=r.offset,f=r.data,s=r.accessors[1],G=0;G<g;G++){for(F=0;F<b;F++){for(E=0;E<w;E++){for(D=0;D<y;D++){for(C=0;C<x;C++){for(B=0;B<l;B++){for(A=0;A<j;A++){for(q=0;q<m;q++){for(z=0;z<v;z++)s(f,k,o()),k+=e;k+=t}k+=a}k+=d}k+=i}k+=n}k+=c}k+=h}k+=p}},function(r,o){var f,s,e,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w,b,g,P,k,z,q,A,B,C,D,E,F,G,H,I,J;for(v=r.shape,z=r.strides,"row-major"===r.order?(m=v[9],j=v[8],l=v[7],x=v[6],y=v[5],w=v[4],b=v[3],g=v[2],P=v[1],k=v[0],e=z[9],t=z[8]-m*z[9],a=z[7]-j*z[8],d=z[6]-l*z[7],i=z[5]-x*z[6],n=z[4]-y*z[5],c=z[3]-w*z[4],h=z[2]-b*z[3],p=z[1]-g*z[2],u=z[0]-P*z[1]):(m=v[0],j=v[1],l=v[2],x=v[3],y=v[4],w=v[5],b=v[6],g=v[7],P=v[8],k=v[9],e=z[0],t=z[1]-m*z[0],a=z[2]-j*z[1],d=z[3]-l*z[2],i=z[4]-x*z[3],n=z[5]-y*z[4],c=z[6]-w*z[5],h=z[7]-b*z[6],p=z[8]-g*z[7],u=z[9]-P*z[8]),q=r.offset,f=r.data,s=r.accessors[1],J=0;J<k;J++){for(I=0;I<P;I++){for(H=0;H<g;H++){for(G=0;G<b;G++){for(F=0;F<w;F++){for(E=0;E<y;E++){for(D=0;D<x;D++){for(C=0;C<l;C++){for(B=0;B<j;B++){for(A=0;A<m;A++)s(f,q,o()),q+=e;q+=t}q+=a}q+=d}q+=i}q+=n}q+=c}q+=h}q+=p}q+=u}}],n=[function(r,o){var f,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y;for(n=(y=s(r.shape,r.strides)).sh,p=y.sx,f=e(r.dtype),u=r.offset,t=r.data,a=p[0],x=n[1];x>0;)for(x<f?(h=x,x=0):(h=f,x-=f),i=u+x*p[1],l=n[0];l>0;)for(l<f?(c=l,l=0):(c=f,l-=f),v=i+l*p[0],d=p[1]-c*p[0],j=0;j<h;j++){for(m=0;m<c;m++)t[v]=o(),v+=a;v+=d}},function(r,o){var f,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w,b,g,P,k;for(h=(k=s(r.shape,r.strides)).sh,m=k.sx,f=e(r.dtype),j=r.offset,t=r.data,a=m[0],P=h[2];P>0;)for(P<f?(v=P,P=0):(v=f,P-=f),c=j+P*m[2],g=h[1];g>0;)for(g<f?(u=g,g=0):(u=f,g-=f),i=m[2]-u*m[1],n=c+g*m[1],b=h[0];b>0;)for(b<f?(p=b,b=0):(p=f,b-=f),l=n+b*m[0],d=m[1]-p*m[0],w=0;w<v;w++){for(y=0;y<u;y++){for(x=0;x<p;x++)t[l]=o(),l+=a;l+=d}l+=i}},function(r,o){var f,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w,b,g,P,k,z,q,A,B,C;for(u=(C=s(r.shape,r.strides)).sh,x=C.sx,f=e(r.dtype),y=r.offset,t=r.data,a=x[0],B=u[3];B>0;)for(B<f?(l=B,B=0):(l=f,B-=f),p=y+B*x[3],A=u[2];A>0;)for(A<f?(j=A,A=0):(j=f,A-=f),n=x[3]-j*x[2],h=p+A*x[2],q=u[1];q>0;)for(q<f?(m=q,q=0):(m=f,q-=f),i=x[2]-m*x[1],c=h+q*x[1],z=u[0];z>0;)for(z<f?(v=z,z=0):(v=f,z-=f),w=c+z*x[0],d=x[1]-v*x[0],k=0;k<l;k++){for(P=0;P<j;P++){for(g=0;g<m;g++){for(b=0;b<v;b++)t[w]=o(),w+=a;w+=d}w+=i}w+=n}},function(r,o){var f,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w,b,g,P,k,z,q,A,B,C,D,E,F,G,H;for(m=(H=s(r.shape,r.strides)).sh,b=H.sx,f=e(r.dtype),g=r.offset,t=r.data,a=b[0],G=m[4];G>0;)for(G<f?(w=G,G=0):(w=f,G-=f),v=g+G*b[4],F=m[3];F>0;)for(F<f?(y=F,F=0):(y=f,F-=f),c=b[4]-y*b[3],u=v+F*b[3],E=m[2];E>0;)for(E<f?(x=E,E=0):(x=f,E-=f),n=b[3]-x*b[2],p=u+E*b[2],D=m[1];D>0;)for(D<f?(l=D,D=0):(l=f,D-=f),i=b[2]-l*b[1],h=p+D*b[1],C=m[0];C>0;)for(C<f?(j=C,C=0):(j=f,C-=f),P=h+C*b[0],d=b[1]-j*b[0],B=0;B<w;B++){for(A=0;A<y;A++){for(q=0;q<x;q++){for(z=0;z<l;z++){for(k=0;k<j;k++)t[P]=o(),P+=a;P+=d}P+=i}P+=n}P+=c}},function(r,o){var f,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w,b,g,P,k,z,q,A,B,C,D,E,F,G,H,I,J,K,L,M;for(l=(M=s(r.shape,r.strides)).sh,k=M.sx,f=e(r.dtype),z=r.offset,t=r.data,a=k[0],L=l[5];L>0;)for(L<f?(P=L,L=0):(P=f,L-=f),j=z+L*k[5],K=l[4];K>0;)for(K<f?(g=K,K=0):(g=f,K-=f),h=k[5]-g*k[4],m=j+K*k[4],J=l[3];J>0;)for(J<f?(b=J,J=0):(b=f,J-=f),c=k[4]-b*k[3],v=m+J*k[3],I=l[2];I>0;)for(I<f?(w=I,I=0):(w=f,I-=f),n=k[3]-w*k[2],u=v+I*k[2],H=l[1];H>0;)for(H<f?(y=H,H=0):(y=f,H-=f),i=k[2]-y*k[1],p=u+H*k[1],G=l[0];G>0;)for(G<f?(x=G,G=0):(x=f,G-=f),q=p+G*k[0],d=k[1]-x*k[0],F=0;F<P;F++){for(E=0;E<g;E++){for(D=0;D<b;D++){for(C=0;C<w;C++){for(B=0;B<y;B++){for(A=0;A<x;A++)t[q]=o(),q+=a;q+=d}q+=i}q+=n}q+=c}q+=h}},function(r,o){var f,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w,b,g,P,k,z,q,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,Q,R,S;for(y=(S=s(r.shape,r.strides)).sh,A=S.sx,f=e(r.dtype),B=r.offset,t=r.data,a=A[0],R=y[6];R>0;)for(R<f?(q=R,R=0):(q=f,R-=f),x=B+R*A[6],Q=y[5];Q>0;)for(Q<f?(z=Q,Q=0):(z=f,Q-=f),p=A[6]-z*A[5],l=x+Q*A[5],O=y[4];O>0;)for(O<f?(k=O,O=0):(k=f,O-=f),h=A[5]-k*A[4],j=l+O*A[4],N=y[3];N>0;)for(N<f?(P=N,N=0):(P=f,N-=f),c=A[4]-P*A[3],m=j+N*A[3],M=y[2];M>0;)for(M<f?(g=M,M=0):(g=f,M-=f),n=A[3]-g*A[2],v=m+M*A[2],L=y[1];L>0;)for(L<f?(b=L,L=0):(b=f,L-=f),i=A[2]-b*A[1],u=v+L*A[1],K=y[0];K>0;)for(K<f?(w=K,K=0):(w=f,K-=f),C=u+K*A[0],d=A[1]-w*A[0],J=0;J<q;J++){for(I=0;I<z;I++){for(H=0;H<k;H++){for(G=0;G<P;G++){for(F=0;F<g;F++){for(E=0;E<b;E++){for(D=0;D<w;D++)t[C]=o(),C+=a;C+=d}C+=i}C+=n}C+=c}C+=h}C+=p}},function(r,o){var f,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w,b,g,P,k,z,q,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X;for(b=(X=s(r.shape,r.strides)).sh,D=X.sx,f=e(r.dtype),E=r.offset,t=r.data,a=D[0],W=b[7];W>0;)for(W<f?(C=W,W=0):(C=f,W-=f),w=E+W*D[7],V=b[6];V>0;)for(V<f?(B=V,V=0):(B=f,V-=f),u=D[7]-B*D[6],y=w+V*D[6],U=b[5];U>0;)for(U<f?(A=U,U=0):(A=f,U-=f),p=D[6]-A*D[5],x=y+U*D[5],T=b[4];T>0;)for(T<f?(q=T,T=0):(q=f,T-=f),h=D[5]-q*D[4],l=x+T*D[4],S=b[3];S>0;)for(S<f?(z=S,S=0):(z=f,S-=f),c=D[4]-z*D[3],j=l+S*D[3],R=b[2];R>0;)for(R<f?(k=R,R=0):(k=f,R-=f),n=D[3]-k*D[2],m=j+R*D[2],Q=b[1];Q>0;)for(Q<f?(P=Q,Q=0):(P=f,Q-=f),i=D[2]-P*D[1],v=m+Q*D[1],O=b[0];O>0;)for(O<f?(g=O,O=0):(g=f,O-=f),F=v+O*D[0],d=D[1]-g*D[0],N=0;N<C;N++){for(M=0;M<B;M++){for(L=0;L<A;L++){for(K=0;K<q;K++){for(J=0;J<z;J++){for(I=0;I<k;I++){for(H=0;H<P;H++){for(G=0;G<g;G++)t[F]=o(),F+=a;F+=d}F+=i}F+=n}F+=c}F+=h}F+=p}F+=u}},function(r,o){var f,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w,b,g,P,k,z,q,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr;for(P=(rr=s(r.shape,r.strides)).sh,G=rr.sx,f=e(r.dtype),H=r.offset,t=r.data,a=G[0],_=P[8];_>0;)for(_<f?(F=_,_=0):(F=f,_-=f),g=H+_*G[8],$=P[7];$>0;)for($<f?(E=$,$=0):(E=f,$-=f),v=G[8]-E*G[7],b=g+$*G[7],Z=P[6];Z>0;)for(Z<f?(D=Z,Z=0):(D=f,Z-=f),u=G[7]-D*G[6],w=b+Z*G[6],Y=P[5];Y>0;)for(Y<f?(C=Y,Y=0):(C=f,Y-=f),p=G[6]-C*G[5],y=w+Y*G[5],X=P[4];X>0;)for(X<f?(B=X,X=0):(B=f,X-=f),h=G[5]-B*G[4],x=y+X*G[4],W=P[3];W>0;)for(W<f?(A=W,W=0):(A=f,W-=f),c=G[4]-A*G[3],l=x+W*G[3],V=P[2];V>0;)for(V<f?(q=V,V=0):(q=f,V-=f),n=G[3]-q*G[2],j=l+V*G[2],U=P[1];U>0;)for(U<f?(z=U,U=0):(z=f,U-=f),i=G[2]-z*G[1],m=j+U*G[1],T=P[0];T>0;)for(T<f?(k=T,T=0):(k=f,T-=f),I=m+T*G[0],d=G[1]-k*G[0],S=0;S<F;S++){for(R=0;R<E;R++){for(Q=0;Q<D;Q++){for(O=0;O<C;O++){for(N=0;N<B;N++){for(M=0;M<A;M++){for(L=0;L<q;L++){for(K=0;K<z;K++){for(J=0;J<k;J++)t[I]=o(),I+=a;I+=d}I+=i}I+=n}I+=c}I+=h}I+=p}I+=u}I+=v}},function(r,o){var f,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w,b,g,P,k,z,q,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,fr,sr,er,tr;for(z=(tr=s(r.shape,r.strides)).sh,J=tr.sx,f=e(r.dtype),K=r.offset,t=r.data,a=J[0],er=z[9];er>0;)for(er<f?(I=er,er=0):(I=f,er-=f),k=K+er*J[9],sr=z[8];sr>0;)for(sr<f?(H=sr,sr=0):(H=f,sr-=f),m=J[9]-H*J[8],P=k+sr*J[8],fr=z[7];fr>0;)for(fr<f?(G=fr,fr=0):(G=f,fr-=f),v=J[8]-G*J[7],g=P+fr*J[7],or=z[6];or>0;)for(or<f?(F=or,or=0):(F=f,or-=f),u=J[7]-F*J[6],b=g+or*J[6],rr=z[5];rr>0;)for(rr<f?(E=rr,rr=0):(E=f,rr-=f),p=J[6]-E*J[5],w=b+rr*J[5],_=z[4];_>0;)for(_<f?(D=_,_=0):(D=f,_-=f),h=J[5]-D*J[4],y=w+_*J[4],$=z[3];$>0;)for($<f?(C=$,$=0):(C=f,$-=f),c=J[4]-C*J[3],x=y+$*J[3],Z=z[2];Z>0;)for(Z<f?(B=Z,Z=0):(B=f,Z-=f),n=J[3]-B*J[2],l=x+Z*J[2],Y=z[1];Y>0;)for(Y<f?(A=Y,Y=0):(A=f,Y-=f),i=J[2]-A*J[1],j=l+Y*J[1],X=z[0];X>0;)for(X<f?(q=X,X=0):(q=f,X-=f),L=j+X*J[0],d=J[1]-q*J[0],W=0;W<I;W++){for(V=0;V<H;V++){for(U=0;U<G;U++){for(T=0;T<F;T++){for(S=0;S<E;S++){for(R=0;R<D;R++){for(Q=0;Q<C;Q++){for(O=0;O<B;O++){for(N=0;N<A;N++){for(M=0;M<q;M++)t[L]=o(),L+=a;L+=d}L+=i}L+=n}L+=c}L+=h}L+=p}L+=u}L+=v}L+=m}}],c=[function(r,o){var f,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w;for(c=(w=s(r.shape,r.strides)).sh,u=w.sx,f=e(r.dtype),v=r.offset,t=r.data,d=u[0],a=r.accessors[1],y=c[1];y>0;)for(y<f?(p=y,y=0):(p=f,y-=f),n=v+y*u[1],x=c[0];x>0;)for(x<f?(h=x,x=0):(h=f,x-=f),m=n+x*u[0],i=u[1]-h*u[0],l=0;l<p;l++){for(j=0;j<h;j++)a(t,m,o()),m+=d;m+=i}},function(r,o){var f,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w,b,g,P,k,z;for(p=(z=s(r.shape,r.strides)).sh,j=z.sx,f=e(r.dtype),l=r.offset,t=r.data,d=j[0],a=r.accessors[1],k=p[2];k>0;)for(k<f?(m=k,k=0):(m=f,k-=f),h=l+k*j[2],P=p[1];P>0;)for(P<f?(v=P,P=0):(v=f,P-=f),n=j[2]-v*j[1],c=h+P*j[1],g=p[0];g>0;)for(g<f?(u=g,g=0):(u=f,g-=f),x=c+g*j[0],i=j[1]-u*j[0],b=0;b<m;b++){for(w=0;w<v;w++){for(y=0;y<u;y++)a(t,x,o()),x+=d;x+=i}x+=n}},function(r,o){var f,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w,b,g,P,k,z,q,A,B,C,D;for(v=(D=s(r.shape,r.strides)).sh,y=D.sx,f=e(r.dtype),w=r.offset,t=r.data,d=y[0],a=r.accessors[1],C=v[3];C>0;)for(C<f?(x=C,C=0):(x=f,C-=f),u=w+C*y[3],B=v[2];B>0;)for(B<f?(l=B,B=0):(l=f,B-=f),c=y[3]-l*y[2],p=u+B*y[2],A=v[1];A>0;)for(A<f?(j=A,A=0):(j=f,A-=f),n=y[2]-j*y[1],h=p+A*y[1],q=v[0];q>0;)for(q<f?(m=q,q=0):(m=f,q-=f),b=h+q*y[0],i=y[1]-m*y[0],z=0;z<x;z++){for(k=0;k<l;k++){for(P=0;P<j;P++){for(g=0;g<m;g++)a(t,b,o()),b+=d;b+=i}b+=n}b+=c}},function(r,o){var f,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w,b,g,P,k,z,q,A,B,C,D,E,F,G,H,I;for(j=(I=s(r.shape,r.strides)).sh,g=I.sx,f=e(r.dtype),P=r.offset,t=r.data,d=g[0],a=r.accessors[1],H=j[4];H>0;)for(H<f?(b=H,H=0):(b=f,H-=f),m=P+H*g[4],G=j[3];G>0;)for(G<f?(w=G,G=0):(w=f,G-=f),h=g[4]-w*g[3],v=m+G*g[3],F=j[2];F>0;)for(F<f?(y=F,F=0):(y=f,F-=f),c=g[3]-y*g[2],u=v+F*g[2],E=j[1];E>0;)for(E<f?(x=E,E=0):(x=f,E-=f),n=g[2]-x*g[1],p=u+E*g[1],D=j[0];D>0;)for(D<f?(l=D,D=0):(l=f,D-=f),k=p+D*g[0],i=g[1]-l*g[0],C=0;C<b;C++){for(B=0;B<w;B++){for(A=0;A<y;A++){for(q=0;q<x;q++){for(z=0;z<l;z++)a(t,k,o()),k+=d;k+=i}k+=n}k+=c}k+=h}},function(r,o){var f,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w,b,g,P,k,z,q,A,B,C,D,E,F,G,H,I,J,K,L,M,N;for(x=(N=s(r.shape,r.strides)).sh,z=N.sx,f=e(r.dtype),q=r.offset,t=r.data,d=z[0],a=r.accessors[1],M=x[5];M>0;)for(M<f?(k=M,M=0):(k=f,M-=f),l=q+M*z[5],L=x[4];L>0;)for(L<f?(P=L,L=0):(P=f,L-=f),p=z[5]-P*z[4],j=l+L*z[4],K=x[3];K>0;)for(K<f?(g=K,K=0):(g=f,K-=f),h=z[4]-g*z[3],m=j+K*z[3],J=x[2];J>0;)for(J<f?(b=J,J=0):(b=f,J-=f),c=z[3]-b*z[2],v=m+J*z[2],I=x[1];I>0;)for(I<f?(w=I,I=0):(w=f,I-=f),n=z[2]-w*z[1],u=v+I*z[1],H=x[0];H>0;)for(H<f?(y=H,H=0):(y=f,H-=f),A=u+H*z[0],i=z[1]-y*z[0],G=0;G<k;G++){for(F=0;F<P;F++){for(E=0;E<g;E++){for(D=0;D<b;D++){for(C=0;C<w;C++){for(B=0;B<y;B++)a(t,A,o()),A+=d;A+=i}A+=n}A+=c}A+=h}A+=p}},function(r,o){var f,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w,b,g,P,k,z,q,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,Q,R,S,T;for(w=(T=s(r.shape,r.strides)).sh,B=T.sx,f=e(r.dtype),C=r.offset,t=r.data,d=B[0],a=r.accessors[1],S=w[6];S>0;)for(S<f?(A=S,S=0):(A=f,S-=f),y=C+S*B[6],R=w[5];R>0;)for(R<f?(q=R,R=0):(q=f,R-=f),u=B[6]-q*B[5],x=y+R*B[5],Q=w[4];Q>0;)for(Q<f?(z=Q,Q=0):(z=f,Q-=f),p=B[5]-z*B[4],l=x+Q*B[4],O=w[3];O>0;)for(O<f?(k=O,O=0):(k=f,O-=f),h=B[4]-k*B[3],j=l+O*B[3],N=w[2];N>0;)for(N<f?(P=N,N=0):(P=f,N-=f),c=B[3]-P*B[2],m=j+N*B[2],M=w[1];M>0;)for(M<f?(g=M,M=0):(g=f,M-=f),n=B[2]-g*B[1],v=m+M*B[1],L=w[0];L>0;)for(L<f?(b=L,L=0):(b=f,L-=f),D=v+L*B[0],i=B[1]-b*B[0],K=0;K<A;K++){for(J=0;J<q;J++){for(I=0;I<z;I++){for(H=0;H<k;H++){for(G=0;G<P;G++){for(F=0;F<g;F++){for(E=0;E<b;E++)a(t,D,o()),D+=d;D+=i}D+=n}D+=c}D+=h}D+=p}D+=u}},function(r,o){var f,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w,b,g,P,k,z,q,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y;for(g=(Y=s(r.shape,r.strides)).sh,E=Y.sx,f=e(r.dtype),F=r.offset,t=r.data,d=E[0],a=r.accessors[1],X=g[7];X>0;)for(X<f?(D=X,X=0):(D=f,X-=f),b=F+X*E[7],W=g[6];W>0;)for(W<f?(C=W,W=0):(C=f,W-=f),v=E[7]-C*E[6],w=b+W*E[6],V=g[5];V>0;)for(V<f?(B=V,V=0):(B=f,V-=f),u=E[6]-B*E[5],y=w+V*E[5],U=g[4];U>0;)for(U<f?(A=U,U=0):(A=f,U-=f),p=E[5]-A*E[4],x=y+U*E[4],T=g[3];T>0;)for(T<f?(q=T,T=0):(q=f,T-=f),h=E[4]-q*E[3],l=x+T*E[3],S=g[2];S>0;)for(S<f?(z=S,S=0):(z=f,S-=f),c=E[3]-z*E[2],j=l+S*E[2],R=g[1];R>0;)for(R<f?(k=R,R=0):(k=f,R-=f),n=E[2]-k*E[1],m=j+R*E[1],Q=g[0];Q>0;)for(Q<f?(P=Q,Q=0):(P=f,Q-=f),G=m+Q*E[0],i=E[1]-P*E[0],O=0;O<D;O++){for(N=0;N<C;N++){for(M=0;M<B;M++){for(L=0;L<A;L++){for(K=0;K<q;K++){for(J=0;J<z;J++){for(I=0;I<k;I++){for(H=0;H<P;H++)a(t,G,o()),G+=d;G+=i}G+=n}G+=c}G+=h}G+=p}G+=u}G+=v}},function(r,o){var f,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w,b,g,P,k,z,q,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or;for(k=(or=s(r.shape,r.strides)).sh,H=or.sx,f=e(r.dtype),I=r.offset,t=r.data,d=H[0],a=r.accessors[1],rr=k[8];rr>0;)for(rr<f?(G=rr,rr=0):(G=f,rr-=f),P=I+rr*H[8],_=k[7];_>0;)for(_<f?(F=_,_=0):(F=f,_-=f),m=H[8]-F*H[7],g=P+_*H[7],$=k[6];$>0;)for($<f?(E=$,$=0):(E=f,$-=f),v=H[7]-E*H[6],b=g+$*H[6],Z=k[5];Z>0;)for(Z<f?(D=Z,Z=0):(D=f,Z-=f),u=H[6]-D*H[5],w=b+Z*H[5],Y=k[4];Y>0;)for(Y<f?(C=Y,Y=0):(C=f,Y-=f),p=H[5]-C*H[4],y=w+Y*H[4],X=k[3];X>0;)for(X<f?(B=X,X=0):(B=f,X-=f),h=H[4]-B*H[3],x=y+X*H[3],W=k[2];W>0;)for(W<f?(A=W,W=0):(A=f,W-=f),c=H[3]-A*H[2],l=x+W*H[2],V=k[1];V>0;)for(V<f?(q=V,V=0):(q=f,V-=f),n=H[2]-q*H[1],j=l+V*H[1],U=k[0];U>0;)for(U<f?(z=U,U=0):(z=f,U-=f),J=j+U*H[0],i=H[1]-z*H[0],T=0;T<G;T++){for(S=0;S<F;S++){for(R=0;R<E;R++){for(Q=0;Q<D;Q++){for(O=0;O<C;O++){for(N=0;N<B;N++){for(M=0;M<A;M++){for(L=0;L<q;L++){for(K=0;K<z;K++)a(t,J,o()),J+=d;J+=i}J+=n}J+=c}J+=h}J+=p}J+=u}J+=v}J+=m}},function(r,o){var f,t,a,d,i,n,c,h,p,u,v,m,j,l,x,y,w,b,g,P,k,z,q,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,fr,sr,er,tr,ar;for(q=(ar=s(r.shape,r.strides)).sh,K=ar.sx,f=e(r.dtype),L=r.offset,t=r.data,d=K[0],a=r.accessors[1],tr=q[9];tr>0;)for(tr<f?(J=tr,tr=0):(J=f,tr-=f),z=L+tr*K[9],er=q[8];er>0;)for(er<f?(I=er,er=0):(I=f,er-=f),j=K[9]-I*K[8],k=z+er*K[8],sr=q[7];sr>0;)for(sr<f?(H=sr,sr=0):(H=f,sr-=f),m=K[8]-H*K[7],P=k+sr*K[7],fr=q[6];fr>0;)for(fr<f?(G=fr,fr=0):(G=f,fr-=f),v=K[7]-G*K[6],g=P+fr*K[6],or=q[5];or>0;)for(or<f?(F=or,or=0):(F=f,or-=f),u=K[6]-F*K[5],b=g+or*K[5],rr=q[4];rr>0;)for(rr<f?(E=rr,rr=0):(E=f,rr-=f),p=K[5]-E*K[4],w=b+rr*K[4],_=q[3];_>0;)for(_<f?(D=_,_=0):(D=f,_-=f),h=K[4]-D*K[3],y=w+_*K[3],$=q[2];$>0;)for($<f?(C=$,$=0):(C=f,$-=f),c=K[3]-C*K[2],x=y+$*K[2],Z=q[1];Z>0;)for(Z<f?(B=Z,Z=0):(B=f,Z-=f),n=K[2]-B*K[1],l=x+Z*K[1],Y=q[0];Y>0;)for(Y<f?(A=Y,Y=0):(A=f,Y-=f),M=l+Y*K[0],i=K[1]-A*K[0],X=0;X<J;X++){for(W=0;W<I;W++){for(V=0;V<H;V++){for(U=0;U<G;U++){for(T=0;T<F;T++){for(S=0;S<E;S++){for(R=0;R<D;R++){for(Q=0;Q<C;Q++){for(O=0;O<B;O++){for(N=0;N<A;N++)a(t,M,o()),M+=d;M+=i}M+=n}M+=c}M+=h}M+=p}M+=u}M+=v}M+=m}M+=j}}],h=d.length-1;function p(s,e){var p,u,v,m,j,l,x,y,w,b,g;if(0===(p=(v=(w=f(s[0])).shape).length))return w.accessorProtocol?i[p](w,e):d[p](w,e);for(j=1,y=0,g=0;g<p;g++)j*=b=v[g],1===b&&(y+=1);if(0!==j){if(1===p)return w.accessorProtocol?i[p](w,e):d[p](w,e);if(l=w.strides,y===p-1){for(g=0;g<p&&1===v[g];g++);return w.shape=[v[g]],w.strides=[l[g]],w.accessorProtocol?i[1](w,e):d[1](w,e)}if(0!==(m=r(l))){if(j===(u=o(v,l,w.offset))[1]-u[0]+1)return x=1===m?u[0]:u[1],w.shape=[j],w.strides=[m],w.offset=x,w.accessorProtocol?i[1](w,e):d[1](w,e);if(p<=h)return w.accessorProtocol?i[p](w,e):d[p](w,e)}return p<=h?w.accessorProtocol?c[p-2](w,e):n[p-2](w,e):w.accessorProtocol?function(r,o){var f,s,e,d,i,n,c,h;for(i=r.shape,e=t(i),f=r.data,n=r.strides,c=r.offset,s=r.order,d=r.accessors[1],h=0;h<e;h++)d(f,a(i,n,c,s,h,"throw"),o())}(w,e):void function(r,o){var f,s,e,d,i,n,c;for(d=r.shape,e=t(d),f=r.data,i=r.strides,n=r.offset,s=r.order,c=0;c<e;c++)f[a(d,i,n,s,c,"throw")]=o()}(w,e)}}export{p as default};
//# sourceMappingURL=index.mjs.map
