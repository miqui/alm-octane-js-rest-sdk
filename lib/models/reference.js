/*!
 * (c) Copyright 2016 Hewlett Packard Enterprise Development LP
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

'use strict'

/** @module octane/models/reference */

var assert = require('assert')

/**
* @class
*
* @param {Number} id - the referenced entity id
* @param {String} type - the referenced entity type
*/
var Reference = function reference (id, type) {
  assert(typeof id === 'number')
  assert(typeof type === 'string')
  this.id = id
  this.type = type
}

Reference.prototype.toJSON = function () {
  return {
    id: this.id,
    type: this.type
  }
}

Reference.parse = function (val) {
  if (val instanceof Reference) {
    return new Reference(val.id, val.type)
  }

  if (typeof val === 'object' && 'id' in val && 'type' in val) {
    var id = val.id
    if (typeof id === 'string') {
      id = parseInt(id, 10)
    }
    return new Reference(id, val.type)
  }

  return null
}

module.exports = Reference
