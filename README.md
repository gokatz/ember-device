ember-device 📱
==============================================================================

[![Build Status](https://travis-ci.org/gokatz/ember-device.svg?branch=master)](https://travis-ci.org/gokatz/ember-device)

Web apps are built with **rich content and powerful web experiences** these days utilizing the possible device resources. These rich features will lead to better user experiences in high-end devices with sophisticated network bandwidth. However, in mid and low range devices like feature phones, **the resource might not be sufficient to drive** all the content of our website. Thus it'll be smart to target the low-end device with a minimal and usable feature set and progressively add rich experience as the device and the related metrics become sophisticated.

This package will expose properties to target feature based on the user's device and enhance or gracefully degrade as the device and network constraints change. This will **ensure best experience for all of our users** irrespective of their device. 

There is a well structured [blog post](https://siva.dev/adaptive-fetching) by [@astronomersiva](https://github.com/astronomersiva) that explains the implementation of such adaptive fetching techniques in Ember apps. I'd recommend giving it a read to know about the actual implementation. This add-on aims to bring those techniques/utils one more step near to your app so that it'll be one less thing you'd worry about and you can start to optimize your apps right away.

**NOTE:** Most of the native features utilized in this package is still **Experimental** with **limited browser support.** Hence, it is recommended to use it with proper fallbacks.

**Here is the [Documentation site](https://ember-device.netlify.com/)**

Credits
------------------------------------------------------------------------------

This package was inspired by [react-adaptive-hooks](https://github.com/GoogleChromeLabs/react-adaptive-hooks/) by 
[Google Chrome Labs Team](https://github.com/GoogleChromeLabs) and it's the wrapper around the bare JS libs to be more operable with Ember ecosystem.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
