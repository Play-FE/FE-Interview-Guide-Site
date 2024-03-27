import{_ as l,c as i,o,a2 as t}from"./chunks/framework.CQ12TVIp.js";const c=JSON.parse('{"title":"应用层（Application Layer）","description":"","frontmatter":{},"headers":[],"relativePath":"network/application-layer.md","filePath":"network/application-layer.md","lastUpdated":1711527929000}'),e={name:"network/application-layer.md"},p=t('<h1 id="应用层-application-layer" tabindex="-1">应用层（Application Layer） <a class="header-anchor" href="#应用层-application-layer" aria-label="Permalink to &quot;应用层（Application Layer）&quot;">​</a></h1><p>应用层是网络体系结构的最顶层，负责为用户提供网络服务，并处理用户和应用程序之间的交互。</p><h2 id="http" tabindex="-1">HTTP <a class="header-anchor" href="#http" aria-label="Permalink to &quot;HTTP&quot;">​</a></h2><p>HTTP（超文本传输协议）是一种用于在 Web 浏览器和 Web 服务器之间传输数据的应用层协议。它是建立在 TCP/IP 协议之上的，基于客户端 - 服务器模型。</p><p>HTTP 的工作原理如下：</p><ol><li><p><strong>建立连接</strong></p><ul><li>客户端（通常是 Web 浏览器）向服务器发送一个 HTTP 请求。</li><li>客户端通过 TCP 连接与服务器建立连接，通常是在默认端口 80 上进行。</li></ul></li><li><p><strong>发送请求</strong></p><ul><li>客户端向服务器发送 HTTP 请求，包括请求行、请求头和请求体。</li><li>请求行包含请求方法（GET、POST 等）、请求的 URL 和 HTTP 协议的版本。</li><li>请求头包含关于客户端的信息、请求的数据类型等。</li><li>请求体（对于 POST 请求）包含要发送给服务器的数据。</li></ul></li><li><p><strong>处理请求</strong></p><ul><li>服务器接收到 HTTP 请求后，解析请求，确定请求的资源。</li><li>服务器根据请求执行相应的处理逻辑，可能是获取请求的资源、处理数据等。</li></ul></li><li><p><strong>发送响应</strong></p><ul><li>服务器将处理结果封装成 HTTP 响应发送回客户端。</li><li>响应包括响应状态行、响应头和响应体。</li><li>响应状态行包含响应的状态码（如 200 表示成功、404 表示未找到资源等）和 HTTP 协议的版本。</li><li>响应头包含响应的一些元信息，如内容类型、内容长度等。</li><li>响应体包含实际的响应数据，如 HTML 页面、图片、JSON 数据等。</li></ul></li><li><p><strong>关闭连接</strong></p><ul><li>客户端接收到响应后，根据需要处理响应数据。</li><li>客户端和服务器根据协议约定决定是否关闭连接，通常在非持久连接（HTTP/1.0）中会关闭连接，而持久连接（HTTP/1.1）会保持连接以便复用。</li></ul></li></ol><p>通过这个过程，客户端和服务器之间可以进行有效的通信，实现 Web 页面的加载、资源的获取和数据的交互。</p><h2 id="http-2" tabindex="-1">HTTP/2 <a class="header-anchor" href="#http-2" aria-label="Permalink to &quot;HTTP/2&quot;">​</a></h2><p>HTTP/2 是 HTTP 协议的第二个主要版本，旨在改进 HTTP/1.x 的性能和效率。它于 2015 年作为 RFC 7540 发布。HTTP/2 的设计基于 Google 的 SPDY 协议，并在此基础上进行了扩展和标准化。</p><p>以下是HTTP/2的一些重要特性和改进：</p><ol><li><p><strong>多路复用（Multiplexing）</strong></p><p>HTTP/2引入了多路复用机制，允许客户端在单个连接上同时发送多个请求。这消除了HTTP/1.x中的串行请求限制，显著提高了资源的加载速度。</p></li><li><p><strong>头部压缩（Header Compression）</strong></p><p>HTTP/2 使用 HPACK 算法对 HTTP 头部进行压缩，减少了请求和响应中传输的头部大小。这降低了网络流量，并减少了延迟。</p></li><li><p><strong>服务器推送（Server Push）</strong></p><p>HTTP/2 允许服务器在客户端请求之前将资源推送给客户端，从而减少了客户端的等待时间。服务器可以根据客户端的请求预测并主动推送相关资源，提高了页面加载速度。</p></li><li><p><strong>流量控制（Flow Control）</strong></p><p>HTTP/2 引入了流量控制机制，允许客户端和服务器在传输数据时进行流量控制，以防止过载和拥塞。</p></li><li><p><strong>服务器端请求优先级（Prioritization）</strong></p><p>HTTP/2 支持将请求划分为多个优先级，客户端可以指定请求的优先级，服务器可以根据优先级调整资源的传输顺序，以优化页面的加载。</p></li><li><p><strong>二进制协议（Binary Protocol）</strong></p><p>HTTP/2 将 HTTP 消息封装为二进制帧进行传输，而不是像 HTTP/1.x 那样使用文本形式的数据流。这种二进制格式更高效地进行了编码和解析。</p></li></ol><p>HTTP/2 的引入旨在提高 Web 性能，减少延迟和资源消耗，从而改善用户体验。它已经被广泛采用，并且在现代 Web 开发中被认为是一种标准。</p><h2 id="http-1-和-http-2-的区别" tabindex="-1">HTTP/1 和 HTTP/2 的区别 <a class="header-anchor" href="#http-1-和-http-2-的区别" aria-label="Permalink to &quot;HTTP/1 和 HTTP/2 的区别&quot;">​</a></h2><ol><li><p><strong>多路复用（Multiplexing）</strong></p><ul><li>HTTP/1：基于文本的协议，使用串行方式发送请求，每个请求都需要等待前一个请求的响应返回后才能发送下一个请求。</li><li>HTTP/2：引入了多路复用机制，可以在单个连接上同时发送多个请求和响应，消除了HTTP/1中的串行请求限制，提高了资源的加载速度。</li></ul></li><li><p><strong>头部压缩（Header Compression）</strong></p><ul><li>HTTP/1：每个请求和响应都会携带一系列的 HTTP 头部信息，这些头部信息在每次请求和响应时都会被发送，导致了不必要的重复传输。</li><li>HTTP/2：引入了头部压缩机制，使用 HPACK 算法对 HTTP 头部进行压缩，减少了传输的头部大小，降低了网络流量和延迟。</li></ul></li><li><p><strong>服务器推送（Server Push）</strong></p><ul><li>HTTP/1：客户端需要在收到HTML响应后解析 HTML 文档，发现其中需要的资源后再发送额外的请求获取这些资源。</li><li>HTTP/2：服务器可以在客户端请求之前将相关资源推送给客户端，减少了客户端的等待时间，提高了页面加载速度。</li></ul></li><li><p><strong>流量控制（Flow Control）</strong></p><ul><li>HTTP/1：基于 TCP 的流量控制机制，但缺乏对 HTTP 层面的流量控制。</li><li>HTTP/2：引入了自身的流量控制机制，允许客户端和服务器在传输数据时进行流量控制，以防止过载和拥塞。</li></ul></li><li><p><strong>服务器端请求优先级（Prioritization）</strong></p><ul><li>HTTP/1：不支持对请求的优先级进行明确控制，导致可能出现低优先级请求阻塞高优先级请求的情况。</li><li>HTTP/2：支持将请求划分为多个优先级，服务器可以根据优先级调整资源的传输顺序，优化页面的加载顺序，提高性能。</li></ul></li><li><p><strong>二进制协议（Binary Protocol）</strong></p><ul><li>HTTP/1：基于文本的协议，使用可读性较强的 ASCII 字符进行通信。</li><li>HTTP/2：将 HTTP 消息封装为二进制帧进行传输，更高效地进行了编码和解析，提高了传输效率。</li></ul></li></ol><h2 id="https" tabindex="-1">HTTPS <a class="header-anchor" href="#https" aria-label="Permalink to &quot;HTTPS&quot;">​</a></h2><p>HTTPS 代表超文本传输安全协议（Hypertext Transfer Protocol Secure），是 HTTP 的安全版本。它通过使用 SSL（安全套接层）或 TLS（传输层安全）协议对通信数据进行加密和身份验证，以确保数据在客户端和服务器之间的安全传输。</p><p>HTTPS 的工作原理如下：</p><ol><li><p><strong>加密通信</strong>：</p><ul><li>当客户端（例如浏览器）尝试与服务器建立 HTTPS 连接时，它会发送一个请求以建立安全连接。</li><li>服务器会将其公钥发送给客户端，并使用公钥加密一个称为“预主密钥”的随机数据，然后将其发送回客户端。</li><li>客户端使用服务器的公钥解密“预主密钥”，然后使用其自己的私钥生成一个共享的“主密钥”，该主密钥用于加密通信。</li></ul></li><li><p><strong>数据加密</strong>：</p><ul><li>一旦建立了安全连接，客户端和服务器之间的所有数据都使用主密钥进行加密和解密。</li><li>通信过程中的所有 HTTP 消息（请求和响应）以及传输的数据都会被加密，使其对第三方攻击者不可读。</li></ul></li><li><p><strong>身份验证</strong>：</p><ul><li>除了加密通信外，HTTPS 还提供了对服务器身份的验证机制，以防止中间人攻击。</li><li>服务器通常会使用数字证书来证明其身份。数字证书由可信的第三方证书颁发机构（CA）签发，包含了服务器的公钥和其他相关信息。</li><li>客户端在与服务器建立连接时，会验证服务器的数字证书是否有效和可信。如果证书有效且受信任，客户端将与服务器建立安全连接。</li></ul></li></ol><p>总的来说，HTTPS 通过加密通信和身份验证，提供了更高级别的安全性，可以防止窃听、篡改和伪造数据的攻击，为用户和网站提供了更安全的通信环境。在现代网络中，HTTPS 已成为保护隐私和安全的标准。</p><h2 id="http-和-https-的区别" tabindex="-1">HTTP 和 HTTPS 的区别 <a class="header-anchor" href="#http-和-https-的区别" aria-label="Permalink to &quot;HTTP 和 HTTPS 的区别&quot;">​</a></h2><p>HTTP（超文本传输协议）和 HTTPS（超文本传输安全协议）之间存在几个关键区别，主要涉及安全性、数据传输方式和端口等方面：</p><ol><li><p><strong>安全性</strong>：</p><ul><li>HTTP：是一种明文传输协议，数据在传输过程中不进行加密，容易受到窃听、篡改和偷窥等安全威胁。</li><li>HTTPS：通过使用 SSL（安全套接层）或 TLS（传输层安全）协议对通信数据进行加密，确保数据在客户端和服务器之间的安全传输，防止中间人攻击和数据泄露。</li></ul></li><li><p><strong>数据传输方式</strong>：</p><ul><li>HTTP：使用 TCP（传输控制协议）作为传输层协议，数据以明文形式传输。</li><li>HTTPS：同样使用 TCP 作为传输层协议，但通过 SSL/TLS 对数据进行加密和解密，保证数据的机密性和完整性。</li></ul></li><li><p><strong>默认端口</strong>：</p><ul><li>HTTP：默认端口为 80。</li><li>HTTPS：默认端口为 443。</li></ul></li><li><p><strong>证书要求</strong>：</p><ul><li>HTTP：不需要使用数字证书。</li><li>HTTPS：服务器必须拥有有效的数字证书，证明其身份。数字证书通常由可信的第三方证书颁发机构（CA）签发，用于验证服务器的身份，确保连接的安全性。</li></ul></li><li><p><strong>SEO 和排名</strong>：</p><ul><li>搜索引擎通常会更喜欢和推荐使用 HTTPS 的网站，因为 HTTPS 能提供更高级别的安全性和保护用户隐私，所以使用 HTTPS 的网站可能会在搜索结果中获得更好的排名。</li></ul></li></ol><h2 id="websocket" tabindex="-1">WebSocket <a class="header-anchor" href="#websocket" aria-label="Permalink to &quot;WebSocket&quot;">​</a></h2><p>WebSocket 协议是一种在单个 TCP 连接上进行全双工通信的协议，它允许客户端和服务器之间进行实时的双向数据传输。相比传统的 HTTP 协议，WebSocket 更加高效，能够实现更低的延迟和更高的性能。</p><p>主要特点：</p><ol><li><p><strong>全双工通信</strong>：</p><ul><li>WebSocket 协议允许客户端和服务器之间建立持久连接，双方可以同时进行数据的发送和接收，而不像 HTTP 协议那样需要每次请求 - 响应的通信模式。</li></ul></li><li><p><strong>基于事件驱动</strong>：</p><ul><li>WebSocket 协议是基于事件驱动的，客户端和服务器可以通过事件来发送和接收数据，而不需要像 HTTP 那样每次都发起新的请求。</li></ul></li><li><p><strong>减少开销</strong>：</p><ul><li>WebSocket 协议通过在 HTTP 握手阶段升级协议，将 HTTP 连接升级为 WebSocket 连接，从而减少了握手和头部的开销，提高了通信的效率。</li></ul></li><li><p><strong>与 Web 原生集成</strong>：</p><ul><li>WebSocket 协议与 Web 原生技术（如 HTML5）集成良好，可以在 Web 浏览器中直接使用 JavaScript 等客户端语言进行 WebSocket 通信，实现实时的数据传输。</li></ul></li><li><p><strong>支持跨域通信</strong>：</p><ul><li>由于 WebSocket 协议在 HTTP 协议之上进行握手，因此它继承了 HTTP 的安全特性，包括同源策略、跨域通信等。</li></ul></li></ol><p>工作原理：</p><ol><li><p><strong>握手阶段</strong>：</p><ul><li>客户端发起 HTTP 请求，请求升级为 WebSocket 协议。</li><li>服务器接受请求，返回 HTTP 101 状态码表示升级成功，此时连接转换为 WebSocket 连接。</li></ul></li><li><p><strong>数据传输</strong>：</p><ul><li>客户端和服务器可以通过 WebSocket 连接发送和接收数据帧（Frame）。</li><li>数据帧可以是文本帧、二进制帧或控制帧，用于传输各种类型的数据。</li></ul></li><li><p><strong>保持连接</strong>：</p><ul><li>WebSocket 连接是持久连接，通常保持连接打开，直到客户端或服务器明确关闭连接。</li></ul></li></ol><p>WebSocket 协议在实时通信和 Web 应用中得到广泛应用，特别是对于需要实时更新和交互的应用，如在线游戏、聊天应用、实时监控等场景，WebSocket 能够提供更加高效和即时的数据传输方式。</p><h2 id="websocket-和-http-的区别" tabindex="-1">WebSocket 和 HTTP 的区别 <a class="header-anchor" href="#websocket-和-http-的区别" aria-label="Permalink to &quot;WebSocket 和 HTTP 的区别&quot;">​</a></h2><ol><li><p><strong>通信模式</strong></p><ul><li>HTTP 是一种请求 - 响应协议，客户端发送请求，服务器返回响应，然后连接就被关闭。</li><li>WebSocket 是一种全双工通信协议，客户端和服务器之间可以同时进行数据的发送和接收，而不像 HTTP 需要等待请求和响应之间的交互。</li></ul></li><li><p><strong>连接性质</strong></p><ul><li>HTTP 是一种无状态协议，每个请求和响应都是独立的，连接通常是临时性的，即完成一次请求后就关闭连接。</li><li>WebSocket 是一种持久连接协议，连接在客户端和服务器之间保持打开状态，可以用于长时间的实时通信。</li></ul></li><li><p><strong>数据格式</strong></p><ul><li>HTTP 的数据传输通常是基于文本的，使用明文的 HTTP 消息格式。</li><li>WebSocket 支持文本帧和二进制帧的传输，允许传输各种类型的数据，如文本、图片、音频、视频等。</li></ul></li><li><p><strong>端口和协议</strong></p><ul><li>HTTP 通常使用 TCP 的 80 端口（HTTP）和 443 端口（HTTPS）进行通信。</li><li>WebSocket 也基于 TCP 协议，但是通常使用不同的端口（如 80 或 443）并在 HTTP 握手之后升级为 WebSocket 连接。</li></ul></li><li><p><strong>头部开销</strong></p><ul><li>HTTP 的请求和响应中包含大量的头部信息，导致额外的开销。</li><li>WebSocket 在握手阶段会有一些 HTTP 头部信息，但一旦连接建立后，通信时的头部开销较小，相对于 HTTP 更加高效。</li></ul></li></ol><p>总的来说，WebSocket 适用于需要实时双向通信的场景，如在线聊天、实时数据更新等；而 HTTP 更适用于一次性请求 - 响应的场景，如网页浏览、资源请求等。WebSocket 可以作为 HTTP 的补充，用于增强 Web 应用的实时性和交互性。</p><h2 id="ftp" tabindex="-1">FTP <a class="header-anchor" href="#ftp" aria-label="Permalink to &quot;FTP&quot;">​</a></h2><p>FTP（File Transfer Protocol，文件传输协议）是一种用于在网络上进行文件传输的协议。它允许用户在客户端和服务器之间传输文件，并提供了一套用于文件管理的指令。FTP 协议使用客户端 - 服务器模型，客户端发起连接并发送命令，服务器接收并响应这些命令，以实现文件的上传、下载、删除、重命名等操作。</p><p>以下是 FTP 协议的工作原理：</p><ol><li><p><strong>建立连接</strong>：</p><ul><li>客户端向服务器发起 TCP 连接请求，通常使用默认端口 21。</li><li>一旦连接建立成功，客户端和服务器之间就可以进行通信。</li></ul></li><li><p><strong>用户认证</strong>：</p><ul><li>客户端在连接建立后，需要提供用户名和密码进行身份验证，以便服务器确认客户端的身份。</li><li>用户名和密码通过明文传输，因此建议在安全的网络环境中使用 FTP 或者使用 FTP 的加密协议（如 FTPS 或 SFTP）。</li></ul></li><li><p><strong>文件传输</strong>：</p><ul><li>一旦认证成功，客户端可以发送 FTP 命令来管理文件。常见的 FTP 命令包括： <ul><li><code>LIST</code>：列出服务器上的文件和目录。</li><li><code>RETR</code>：从服务器下载文件到客户端。</li><li><code>STOR</code>：将文件从客户端上传到服务器。</li><li><code>DELE</code>：删除服务器上的文件。</li><li><code>RNFR</code>和<code>RNTO</code>：重命名文件。</li></ul></li><li>客户端和服务器之间的文件传输通过数据连接进行，数据连接可以是主动模式（客户端向服务器发起连接）或被动模式（服务器向客户端发起连接）。</li></ul></li><li><p><strong>断开连接</strong>：</p><ul><li>文件传输完成后，客户端可以发送<code>QUIT</code>命令来关闭 FTP 连接，释放资源。</li><li>服务器收到<code>QUIT</code>命令后，关闭连接并释放资源，等待下一次连接。</li></ul></li></ol><p>FTP 协议简单且易于使用，因此在文件传输和共享方面得到了广泛的应用。然而，由于其传输的数据和凭证是以明文形式传输的，FTP 在安全性方面存在一些问题。因此，在对安全性有较高要求的环境中，建议使用 FTP 的加密版本，如 FTPS 或 SFTP，以保护数据的机密性和完整性。</p><h2 id="dns" tabindex="-1">DNS <a class="header-anchor" href="#dns" aria-label="Permalink to &quot;DNS&quot;">​</a></h2><p>DNS（Domain Name System，域名系统）是互联网中用于将域名（例如 example.com）解析为 IP 地址（例如 192.0.2.1）的分布式命名系统。它充当了互联网中的“电话簿”，通过将易于记忆的域名映射到对应的 IP 地址，使用户可以方便地访问互联网上的各种资源。</p><p>DNS 的工作原理：</p><ol><li><p><strong>域名解析请求</strong>：</p><ul><li>当用户在 Web 浏览器中输入一个域名（如 example.com）时，浏览器会向本地 DNS 解析器发送一个域名解析请求。</li></ul></li><li><p><strong>本地 DNS 解析器查询</strong>：</p><ul><li>本地 DNS 解析器首先会查询自身的缓存，看是否已经解析过该域名，如果有则直接返回解析结果。</li><li>如果本地 DNS 缓存中没有对应的解析记录，那么它会向根域名服务器发送一个查询请求，询问该域名的顶级域名服务器（例如.com 顶级域名服务器）的 IP 地址。</li></ul></li><li><p><strong>递归解析</strong>：</p><ul><li>根域名服务器返回顶级域名服务器的 IP 地址给本地 DNS 解析器。</li><li>本地 DNS 解析器接着向顶级域名服务器发送查询请求，询问二级域名服务器（如 example.com 的域名服务器）的 IP 地址。</li></ul></li><li><p><strong>迭代解析</strong>：</p><ul><li>顶级域名服务器将请求返回给本地 DNS 解析器，并提供下一级域名服务器（例如 example.com 的域名服务器）的 IP 地址。</li><li>本地 DNS 解析器接着向下一级域名服务器发送查询请求，直到找到最终的域名解析结果。</li></ul></li><li><p><strong>解析结果返回</strong>：</p><ul><li>当本地 DNS 解析器获得了域名对应的 IP 地址后，会将解析结果返回给浏览器。</li><li>浏览器收到解析结果后，可以向对应的 IP 地址发起 HTTP 请求，访问目标网站。</li></ul></li></ol><p>整个过程中，DNS 使用分布式的层级结构来管理域名和 IP 地址的映射关系，通过递归和迭代的查询过程，最终完成域名解析，使用户能够方便地访问互联网上的各种资源。</p><h2 id="cdn" tabindex="-1">CDN <a class="header-anchor" href="#cdn" aria-label="Permalink to &quot;CDN&quot;">​</a></h2><p>CDN（Content Delivery Network，内容分发网络）是一组分布在全球不同位置的服务器集群，用于提供高效的内容传递服务。CDN 的目标是将内容（如网页、图片、视频、音频等）快速、可靠地分发给用户，以提高网站的性能、可用性和安全性。</p><p>CDN 的工作原理：</p><ol><li><p><strong>内容缓存</strong></p><ul><li>CDN 会在其全球分布的服务器上缓存网站的静态和动态内容，如 HTML 页面、CSS 文件、JavaScript 脚本、图片、视频等。</li><li>当用户请求访问网站时，CDN 会根据用户的地理位置和其他因素，选择最接近用户的服务器来提供内容。</li></ul></li><li><p><strong>请求路由</strong></p><ul><li>用户的请求通过 Internet 路由到最近的 CDN 节点，而不是直接连接到原始服务器。</li><li>CDN 节点根据一系列的负载均衡和路由算法，将用户的请求转发到最佳的缓存服务器上。</li></ul></li><li><p><strong>内容传输</strong></p><ul><li>CDN 缓存服务器将请求的内容传输给用户，由于内容已经缓存在就近的服务器上，因此传输速度更快，响应时间更短。</li><li>CDN 还可以通过压缩、分块传输等技术优化传输过程，进一步提高网站性能。</li></ul></li><li><p><strong>动态内容缓存</strong></p><ul><li>CDN 不仅可以缓存静态内容，还可以缓存动态内容，如通过缓存 API 响应、动态页面等。</li><li>对于动态内容，CDN 服务器可以定期更新缓存，以确保用户获得最新的数据。</li></ul></li><li><p><strong>负载分担</strong></p><ul><li>CDN 可以有效分担原始服务器的负载压力，将请求分发到不同的缓存服务器上，减轻原始服务器的负载，提高网站的稳定性和可用性。</li></ul></li><li><p><strong>安全防护</strong></p><ul><li>CDN 可以提供安全防护功能，如 DDoS 攻击防护、Web 应用防火墙等，保护网站免受恶意攻击。</li></ul></li></ol><p>总的来说，CDN 通过将内容缓存分发到全球各地的节点上，使用户能够从就近的服务器获取内容，从而提高网站的访问速度、减少网络延迟，同时提供安全性和可用性保障。</p><h2 id="post-和-get-的区别" tabindex="-1">POST 和 GET 的区别 <a class="header-anchor" href="#post-和-get-的区别" aria-label="Permalink to &quot;POST 和 GET 的区别&quot;">​</a></h2><p>POST 和 GET 是 HTTP 协议中最常见的两种请求方法，它们在传输数据时有几个关键的区别：</p><ol><li><p><strong>数据传输方式</strong>：</p><ul><li>GET：通过 URL 的查询字符串传输数据，数据会附加在 URL 的末尾，并以键值对的形式出现，如<code>http://example.com/search?q=keyword</code>。</li><li>POST：通过 HTTP 请求的消息体传输数据，数据会包含在请求的消息体中，不会在 URL 中暴露，可以传输大量数据，并且不受 URL 长度限制。</li></ul></li><li><p><strong>安全性</strong>：</p><ul><li>GET：因为数据附加在 URL 上，所以对于敏感信息（如密码），不建议使用 GET 方法，因为数据会出现在 URL 中，容易被第三方窥视。</li><li>POST：数据不会直接暴露在 URL 中，而是包含在消息体中，相对来说更安全，适合传输敏感信息。</li></ul></li><li><p><strong>缓存</strong>：</p><ul><li>GET：可以被浏览器缓存下来，以便下次请求时直接从缓存中获取数据，适合获取静态资源等。</li><li>POST：默认情况下不会被缓存，每次请求都会向服务器发起新的请求，适合提交表单等可能会引起状态变化的操作。</li></ul></li><li><p><strong>参数长度限制</strong>：</p><ul><li>GET：由于数据附加在 URL 上，因此受到 URL 长度限制（通常为几千个字符），不能用于传输大量数据。</li><li>POST：由于数据包含在消息体中，因此不受 URL 长度限制，可以传输大量数据。</li></ul></li><li><p><strong>幂等性</strong>：</p><ul><li>GET：通常是幂等的，即对于相同的请求，多次执行不会产生不同的结果，不会对服务器状态产生影响。</li><li>POST：通常是非幂等的，即对于相同的请求，多次执行可能会产生不同的结果，例如向数据库中插入数据等操作。</li></ul></li></ol><p>综上所述，GET 适合用于获取资源或查询数据，而 POST 适合用于提交数据，尤其是涉及到敏感信息或大量数据的场景。</p><h2 id="options-请求" tabindex="-1">OPTIONS 请求 <a class="header-anchor" href="#options-请求" aria-label="Permalink to &quot;OPTIONS 请求&quot;">​</a></h2><p>OPTIONS 请求与 HEAD 类似，一般也是用于客户端查看服务器的性能。这个方法会请求服务器返回该资源所支持的所有 HTTP 请求方法，该方法会用 <code>*</code> 来代替资源名称，向服务器发送 OPTIONS 请求，可以测试服务器功能是否正常。JS 的 XMLHttpRequest 对象进行 CORS 跨域资源共享时，对于复杂请求，就是使用 OPTIONS 方法发送嗅探请求，以判断是否有对指定资源的访问权限。</p><h2 id="在浏览器中输入-google-com-并且按下回车之后发生了什么" tabindex="-1">在浏览器中输入 google.com 并且按下回车之后发生了什么 <a class="header-anchor" href="#在浏览器中输入-google-com-并且按下回车之后发生了什么" aria-label="Permalink to &quot;在浏览器中输入 google.com 并且按下回车之后发生了什么&quot;">​</a></h2><ol><li><p>首先会对 URL 进行解析，分析所需要使用的传输协议和请求的资源的路径。如果输入的 URL 中的协议或者主机名不合法，将会把地址栏中输入的内容传递给搜索引擎。如果没有问题，浏览器会检查 URL 中是否出现了非法字符，如果存在非法字符，则对非法字符进行转义后再进行下一过程。</p></li><li><p>浏览器会判断所请求的资源是否在缓存里，如果请求的资源在缓存里并且没有失效，那么就直接使用，否则向服务器发起新的请求。</p></li><li><p>下一步我们首先需要获取的是输入的 URL 中的域名的 IP 地址，首先会判断本地是否有该域名的 IP 地址的缓存，如果有则使用，如果没有则向本地 DNS 服务器发起请求。本地 DNS 服务器也会先检查是否存在缓存，如果没有就会先向根域名服务器发起请求，获得负责的顶级域名服务器的地址后，再向顶级域名服务器请求，然后获得负责的权威域名服务器的地址后，再向权威域名服务器发起请求，最终获得域名的 IP 地址后，本地 DNS 服务器再将这个 IP 地址返回给请求的用户。用户向本地 DNS 服务器发起请求属于递归请求，本地 DNS 服务器向各级域名服务器发起请求属于迭代请求。</p></li><li><p>当浏览器得到 IP 地址后，数据传输还需要知道目的主机 MAC 地址，因为应用层下发数据给传输层，TCP 协议会指定源端口号和目的端口号，然后下发给网络层。网络层会将本机地址作为源地址，获取的 IP 地址作为目的地址。然后将下发给数据链路层，数据链路层的发送需要加入通信双方的 MAC 地址，我们本机的 MAC 地址作为源 MAC 地址，目的 MAC 地址需要分情况处理，通过将 IP 地址与我们本机的子网掩码相与，我们可以判断我们是否与请求主机在同一个子网里，如果在同一个子网里，我们可以使用 APR 协议获取到目的主机的 MAC 地址，如果我们不在一个子网里，那么我们的请求应该转发给我们的网关，由它代为转发，此时同样可以通过 ARP 协议来获取网关的 MAC 地址，此时目的主机的 MAC 地址应该为网关的地址。</p></li><li><p>下面是 TCP 建立连接的三次握手的过程，首先客户端向服务器发送一个 SYN 连接请求报文段和一个随机序号，服务端接收到请求后向服务器端发送一个 SYN ACK 报文段，确认连接请求，并且也向客户端发送一个随机序号。客户端接收服务器的确认应答后，进入连接建立的状态，同时向服务器也发送一个 ACK 确认报文段，服务器端接收到确认后，也进入连接建立状态，此时双方的连接就建立起来了。</p></li><li><p>如果使用的是 HTTPS 协议，在通信前还存在 TLS 的一个四次握手的过程。首先由客户端向服务器端发送使用的协议的版本号、一个随机数和可以使用的加密方法。服务器端收到后，确认加密的方法，也向客户端发送一个随机数和自己的数字证书。客户端收到后，首先检查数字证书是否有效，如果有效，则再生成一个随机数，并使用证书中的公钥对随机数加密，然后发送给服务器端，并且还会提供一个前面所有内容的 hash 值供服务器端检验。服务器端接收后，使用自己的私钥对数据解密，同时向客户端发送一个前面所有内容的 hash 值供客户端检验。这个时候双方都有了三个随机数，按照之前所约定的加密方法，使用这三个随机数生成一把秘钥，以后双方通信前，就使用这个秘钥对数据进行加密后再传输。</p></li><li><p>当页面请求发送到服务器端后，服务器端会返回一个 html 文件作为响应，浏览器接收到响应后，开始对 html 文件进行解析，开始页面的渲染过程。</p></li><li><p>浏览器首先会根据 html 文件构建 DOM 树，根据解析到的 css 文件构建 CSSOM 树，如果遇到 script 标签，则判端是否含有 defer 或者 async 属性，要不然 script 的加载和执行会造成页面的渲染的阻塞。当 DOM 树和 CSSOM 树建立好后，根据它们来构建渲染树。渲染树构建好后，会根据渲染树来进行布局。布局完成后，最后使用浏览器的 UI 接口对页面进行绘制。这个时候整个页面就显示出来了。</p></li><li><p>最后一步是 TCP 断开连接的四次挥手过程。</p></li></ol><h2 id="正向代理和反向代理" tabindex="-1">正向代理和反向代理 <a class="header-anchor" href="#正向代理和反向代理" aria-label="Permalink to &quot;正向代理和反向代理&quot;">​</a></h2><p>正向代理和反向代理是两种常见的代理服务器架构，它们在网络中的作用不同，具有不同的工作方式和应用场景。</p><ol><li><p><strong>正向代理（Forward Proxy）</strong>：</p><ul><li>正向代理位于客户端和原始服务器之间，代表客户端向原始服务器发送请求。客户端向代理服务器发送请求，然后代理服务器将请求转发给原始服务器，并将原始服务器的响应返回给客户端。客户端必须配置为使用正向代理服务器，以便代理服务器能够转发请求。</li><li>正向代理通常用于绕过防火墙访问受限制的内容，提高访问速度和隐私保护。例如，在企业网络中，正向代理可以用于员工访问互联网，并提供内容过滤和访问控制功能。</li></ul></li><li><p><strong>反向代理（Reverse Proxy）</strong>：</p><ul><li>反向代理位于客户端和目标服务器之间，代表目标服务器向客户端提供服务。客户端向反向代理发送请求，然后反向代理根据一些策略将请求转发给目标服务器，并将目标服务器的响应返回给客户端。客户端通常不知道他们实际上正在与代理服务器通信。</li><li>反向代理通常用于负载均衡、缓存、SSL 终结和安全策略等方面。它可以隐藏真实的服务器结构，提高安全性和可扩展性。例如，Web 服务器集群中的反向代理可以根据负载情况将请求转发给最适合处理请求的服务器，从而提高性能和稳定性。</li></ul></li></ol><p>综上所述，正向代理是代表客户端向原始服务器发送请求，而反向代理是代表目标服务器向客户端提供服务。</p><h2 id="负载平衡的实现方式" tabindex="-1">负载平衡的实现方式 <a class="header-anchor" href="#负载平衡的实现方式" aria-label="Permalink to &quot;负载平衡的实现方式&quot;">​</a></h2><p>负载平衡是一种通过分配请求到多个服务器来均衡服务器负载的方法，以提高系统的性能、可靠性和可扩展性。实现负载平衡的方式有多种，包括以下几种常见的方式：</p><ol><li><p><strong>硬件负载均衡器</strong>：</p><ul><li>硬件负载均衡器是专门设计用于负载平衡的物理设备，通常位于客户端和服务器之间。它通过检测服务器的负载状况，并根据预定义的算法（如轮询、加权轮询、最少连接数等）将请求分发到不同的服务器上，从而实现负载平衡。</li><li>硬件负载均衡器具有高性能和可靠性，适用于大型网络环境和高流量负载的场景。</li></ul></li><li><p><strong>软件负载均衡器</strong>：</p><ul><li>软件负载均衡器是一种运行在普通服务器上的软件应用程序，通过网络层或应用层的方式来实现负载均衡。常见的软件负载均衡器包括 Nginx、HAProxy、Apache 等。</li><li>软件负载均衡器提供了灵活的配置选项和丰富的功能，可以根据实际需求选择不同的负载均衡算法，并支持动态的服务器健康检查和调度策略。</li></ul></li><li><p><strong>DNS 负载均衡</strong>：</p><ul><li>DNS 负载均衡通过 DNS 服务器来实现，将一个域名解析成多个 IP 地址，并且这些 IP 地址对应着不同的服务器。当客户端发起请求时，DNS 服务器返回一个 IP 地址列表，客户端会随机选择其中一个 IP 地址进行访问，从而实现负载均衡。</li><li>DNS 负载均衡简单易用，但是无法实现动态的负载调度，且可能会有缓存导致的负载不均衡问题。</li></ul></li><li><p><strong>基于软件的动态负载均衡</strong>：</p><ul><li>基于软件的动态负载均衡是一种动态调整服务器负载的方法，常见的实现方式包括自适应负载均衡算法和自动扩展策略。</li><li>自适应负载均衡算法可以根据服务器的负载情况动态调整负载均衡策略，以实现更加智能的负载均衡。自动扩展策略则可以根据负载情况自动添加或移除服务器，以应对不同负载情况下的需求。</li></ul></li></ol><h2 id="多个网站之间共享登录状态" tabindex="-1">多个网站之间共享登录状态 <a class="header-anchor" href="#多个网站之间共享登录状态" aria-label="Permalink to &quot;多个网站之间共享登录状态&quot;">​</a></h2><p>实现多个网站之间共享登录状态通常涉及使用单点登录（Single Sign-On，SSO）解决方案。单点登录允许用户在一次身份验证后，即可访问多个相互信任的网站或服务，而无需在每个站点都进行单独的登录。</p><p>以下是一种常见的实现方式：</p><ol><li><p><strong>使用统一的身份提供者（Identity Provider，IdP）</strong>：</p><ul><li>在系统中引入一个统一的身份提供者，负责处理用户的认证和身份验证。该身份提供者通常实现了一种或多种认证协议，如 OAuth、OpenID Connect 等。</li></ul></li><li><p><strong>实现 SSO 协议</strong>：</p><ul><li>在各个网站中集成 SSO 协议的客户端，使其能够与身份提供者进行通信。常见的 SSO 协议包括 OAuth 2.0、OpenID Connect 等。</li></ul></li><li><p><strong>用户登录过程</strong>：</p><ul><li>用户在其中一个网站上进行登录。</li><li>登录页面向用户提供一个链接或按钮，用户点击后被重定向到身份提供者进行身份验证。</li><li>用户提供有效的凭证后，身份提供者返回一个授权凭证给用户，或者直接向用户提供令牌。</li></ul></li><li><p><strong>共享登录状态</strong>：</p><ul><li>身份提供者在用户登录后，生成一个具有一定时效的令牌或会话标识，并将其存储在用户的浏览器中（如 Cookie 或 LocalStorage）。</li><li>用户访问其他网站时，网站将检查用户的登录状态。如果用户未登录，则网站将重定向用户到身份提供者，以获取用户的身份信息；如果用户已登录，则网站可以使用令牌或会话标识来验证用户的身份。</li></ul></li><li><p><strong>单点注销（Single Logout，SLO）</strong>（可选）：</p><ul><li>当用户在一个网站上注销时，系统需要通知其他网站也注销用户的会话，以确保用户在所有网站上的登录状态都被正确地注销。</li></ul></li></ol><p>通过上述步骤，用户可以在一次登录后即可访问多个网站，从而提高用户体验和便利性。同时，这种方式也有助于减少用户的密码管理负担，并增强系统的安全性。</p>',67),r=[p];function T(n,a,s,P,u,g){return o(),i("div",null,r)}const h=l(e,[["render",T]]);export{c as __pageData,h as default};
