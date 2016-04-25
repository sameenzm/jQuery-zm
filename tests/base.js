/**
 * Created by Sameen
 */
/**
 * extend
 */
var a = {x: {y: 1, z: 2}}; var b = {x: {y: 2}}; var r = $.extend(true, a, b); console.log(r);

var a = {x: {y: 1, z: 2}}; var b = {x: {y: 2}}; var r = $.extend(false, a, b); console.log(r);

var a = {x: {y: 1, z: 2}}; var b = {x: {y: 2}}; var r = $.extend(a, b); console.log(r);

var a = {x: {y: 1, z: 2}}; var b = {x: {y: 2}}; var r = $.extend(true, a, b, {a: 3}); console.log(r);