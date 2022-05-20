import{e}from"./app.35d26aa5.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const n={},o=e(`<h1 id="managing-custom-emoji" tabindex="-1"><a class="header-anchor" href="#managing-custom-emoji" aria-hidden="true">#</a> Managing Custom Emoji</h1><p>Custom emoji can be managed by administrators or moderators by going to the instance settings and then the custom emoji submenu. By default you will see a list of the current locally installed emoji. At the start this list will be empty, but you can add custom emoji in different ways.</p><h2 id="copying-emoji-from-another-instance" tabindex="-1"><a class="header-anchor" href="#copying-emoji-from-another-instance" aria-hidden="true">#</a> Copying Emoji from another Instance</h2><p>Emoji can be easily copied from another instance. To do this, switch to the &quot;remote&quot; tab in the custom emoji settings. You can search emoji by name and/or host they are from.</p><p>When you have found an emoji you want, click it to open a small menu which will allow you to import the emoji.</p><p>Please note that Emoji may be subject to copyright and you are responsible for checking whether you may legally use another emoji.</p><h2 id="individual-emoji-import" tabindex="-1"><a class="header-anchor" href="#individual-emoji-import" aria-hidden="true">#</a> Individual Emoji Import</h2><p>If you have an image file that you would like to turn into a custom emoji you can import the image as an emoji. This works just like attaching files to a note: You can choose to upload a new file, pick a file from your Misskey drive or upload a file from another URL.</p><div class="custom-container danger"><i class="fas fa-times"></i><p>When you import emoji from your drive, the file will remain inside your drive. Misskey does not make a copy of this file so if you delete it, the emoji will be broken.</p></div><p>The emoji will be added to the instance and you will then be able to edit or delete it as usual.</p><h2 id="bulk-emoji-import" tabindex="-1"><a class="header-anchor" href="#bulk-emoji-import" aria-hidden="true">#</a> Bulk Emoji import</h2><p>Emojis can be imported in bulk as packed ZIP files with a special format. This ability can be found in the three dots menu in the top right corner of the custom emoji menu.</p><h3 id="packed-emoji-format" tabindex="-1"><a class="header-anchor" href="#packed-emoji-format" aria-hidden="true">#</a> Packed emoji format</h3><p>At the top level is a file called <code>meta.json</code> which contains information about the emoji contained in the packed file. A type definition for this file would look like this, where <code>Meta</code> is the structure of the whole file.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Meta</span> <span class="token punctuation">{</span>
	metaVersion<span class="token operator">:</span> integer<span class="token punctuation">;</span>
	host<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
	<span class="token doc-comment comment">/**
	 * Date and time representation returned by ECMAScript \`Date.prototype.toString\`.
	 */</span>
	exportedAt<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
	emojis<span class="token operator">:</span> Emoji<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Emoji</span> <span class="token punctuation">{</span>
	downloaded<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
	emoji<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
	fileName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>The fields of <code>Meta</code> are currently not used or checked when importing emoji, except for the <code>emojis</code> field.</p><p>For each <code>Emoji</code>:</p><ul><li><code>downloaded</code>: should always be true. If the field is missing or not truthy, the emoji will not be imported.</li><li><code>emoji</code>: name of the emoji for the user, e.g. <code>blobfox</code> if a user should type in <code>:blobfox:</code> to get the emoji. If a previous emoji with the same name exists, it will be overwritten.</li><li><code>fileName</code>: name of the image file inside the packed file.</li></ul><h2 id="editing-and-deleting-emoji" tabindex="-1"><a class="header-anchor" href="#editing-and-deleting-emoji" aria-hidden="true">#</a> Editing and Deleting Emoji</h2><p>The properties of an emoji can be edited by clicking it in the list of local emoji. When you click on a custom emoji, a dialog for editing the properties will open. This dialog will also allow you to delete an emoji.</p><div class="custom-container danger"><i class="fas fa-times"></i><p>When you delete a custom emoji, old notes that contain it will still have the text name of the emoji in it. The emoji will no longer be rendered correctly.</p></div><p>Note that remote emoji can not be edited or deleted.</p><p>Each emoji can have a name and a category and several tags. The category is used for structuring the emoji picker. Meanwhile the tags can be used as alternate names by which the emoji can be found when searching in the emoji picker.</p><p>When you are done editing, save your changes by clicking the check mark in the top right corner of the dialog.</p><h3 id="bulk-editing" tabindex="-1"><a class="header-anchor" href="#bulk-editing" aria-hidden="true">#</a> Bulk Editing</h3><p>Emoji can be edited in bulk by checking the box below the search field. With this enabled, clicking on an emoji will select it instead of opening the editing dialog.</p><p>The Editing options will be displayed as buttons below the checkbox. To return to the normal behaviour just uncheck the box again.</p>`,27);function i(t,s){return o}var c=a(n,[["render",i]]);export{c as default};
