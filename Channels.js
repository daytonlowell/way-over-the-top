var Channels = (function () { 'use strict';

var template = (function () {
  function getChannelLineup(channelLineup) {
    return channelLineup.channels.map(function(channel) {
      return Object.assign(channel, { shown: true })
    })
  }
  return {
    data () {
      return {
	    channels: getChannelLineup(channelLineup)
      }
    }
  };
}());

function add_css () {
	var style = createElement( 'style' );
	style.id = "svelte-2971202229-style";
	style.textContent = "\r\n\t[svelte-2971202229].green, [svelte-2971202229] .green {\r\n\t\tcolor: green;\r\n\t}\r\n\t[svelte-2971202229].red, [svelte-2971202229] .red {\r\n\t\tcolor: red;\r\n\t}\r\n\t[svelte-2971202229].white, [svelte-2971202229] .white {\r\n\t\tcolor: white;\r\n\t}\r\n\t[svelte-2971202229].sticky, [svelte-2971202229] .sticky {\r\n\t\tposition: -webkit-sticky;\r\n\t\tposition: -moz-sticky;\r\n\t\tposition: -ms-sticky;\r\n\t\tposition: -o-sticky;\r\n\t\tposition: sticky;\r\n\t\ttop: 0px;\r\n\t}\r\n\t[svelte-2971202229]#filter-channel-btn, [svelte-2971202229] #filter-channel-btn {\r\n\t\tposition: absolute;\r\n\t\tleft: 15px;\r\n\t\tbottom: 0;\r\n\t}\r\n";
	appendNode( style, document.head );
}

function create_main_fragment ( state, component ) {
	var div = createElement( 'div' );
	setAttribute( div, 'svelte-2971202229', '' );
	div.className = "container-fluid";
	var div_1 = createElement( 'div' );
	appendNode( div_1, div );
	div_1.className = "row";
	var div_2 = createElement( 'div' );
	appendNode( div_2, div_1 );
	div_2.className = "col-md-2 col-xs-12";
	div_2.style.cssText = "position: relative;";
	var button = createElement( 'button' );
	appendNode( button, div_2 );
	button.id = "filter-channel-btn";
	button.className = "btn btn-sm btn-primary";

	function click_handler ( event ) {
		var state = component.get();
		component.set({ channelPickMode: !state.channelPickMode });
	}

	addEventListener( button, 'click', click_handler );

	function get_block ( state ) {
		if ( state.channelPickMode ) return create_if_block;
		return create_if_block_1;
	}

	var current_block = get_block( state );
	var if_block = current_block( state, component );

	if_block.mount( button, null );
	appendNode( createText( "\r\n  \t" ), div_1 );
	var div_3 = createElement( 'div' );
	appendNode( div_3, div_1 );
	div_3.className = "col-md-8 hidden-sm-down";
	var h1 = createElement( 'h1' );
	appendNode( h1, div_3 );
	h1.className = "display-4 text-center";
	h1.style.cssText = "margin-bottom: 15px;";
	appendNode( createText( "Way " ), h1 );
	var a = createElement( 'a' );
	appendNode( a, h1 );
	a.style.cssText = "color: inherit";
	a.href = "https://en.wikipedia.org/wiki/Over-the-top_content";
	a.target = "_blank";
	appendNode( createText( "Over the Top" ), a );
	appendNode( createText( "\r\n  \t" ), div_1 );
	var div_4 = createElement( 'div' );
	appendNode( div_4, div_1 );
	div_4.className = "col-md-2";
	appendNode( createText( "\r\n  " ), div );
	var table = createElement( 'table' );
	appendNode( table, div );
	table.className = "table table-hover text-center table-bordered";
	var thead = createElement( 'thead' );
	appendNode( thead, table );
	thead.className = "thead-inverse";
	var tr = createElement( 'tr' );
	appendNode( tr, thead );

	var if_block_1 = (state.channelPickMode) && create_if_block_2( state, component );

	if ( if_block_1 ) if_block_1.mount( tr, null );
	var text_5 = createText( "\r\n        " );
	appendNode( text_5, tr );
	var th = createElement( 'th' );
	appendNode( th, tr );
	th.className = "sticky";
	th.style.cssText = "width: 15vw";
	appendNode( createText( "Channel" ), th );
	appendNode( createText( "\r\n        " ), tr );

	var if_block_2 = (!state.channelPickMode) && create_if_block_3( state, component );

	if ( if_block_2 ) if_block_2.mount( tr, null );
	appendNode( createText( "\r\n    " ), table );
	var tbody = createElement( 'tbody' );
	appendNode( tbody, table );
	var each_block_value = state.channels;

	var each_block_iterations = [];

	for ( var i = 0; i < each_block_value.length; i += 1 ) {
		each_block_iterations[i] = create_each_block( state, each_block_value, each_block_value[i], i, component );
		each_block_iterations[i].mount( tbody, null );
	}

	return {
		mount: function ( target, anchor ) {
			insertNode( div, target, anchor );
		},

		update: function ( changed, state ) {
			if ( current_block !== ( current_block = get_block( state ) ) ) {
				if_block.destroy( true );
				if_block = current_block( state, component );
				if_block.mount( button, null );
			}

			if ( state.channelPickMode ) {
				if ( !if_block_1 ) {
					if_block_1 = create_if_block_2( state, component );
					if_block_1.mount( tr, text_5 );
				}
			} else if ( if_block_1 ) {
				if_block_1.destroy( true );
				if_block_1 = null;
			}

			if ( !state.channelPickMode ) {
				if ( !if_block_2 ) {
					if_block_2 = create_if_block_3( state, component );
					if_block_2.mount( tr, null );
				}
			} else if ( if_block_2 ) {
				if_block_2.destroy( true );
				if_block_2 = null;
			}

			var each_block_value = state.channels;

			if ( 'channelPickMode' in changed || 'channels' in changed ) {
				for ( var i = 0; i < each_block_value.length; i += 1 ) {
					if ( each_block_iterations[i] ) {
						each_block_iterations[i].update( changed, state, each_block_value, each_block_value[i], i );
					} else {
						each_block_iterations[i] = create_each_block( state, each_block_value, each_block_value[i], i, component );
						each_block_iterations[i].mount( tbody, null );
					}
				}

				destroyEach( each_block_iterations, true, each_block_value.length );
				each_block_iterations.length = each_block_value.length;
			}
		},

		destroy: function ( detach ) {
			removeEventListener( button, 'click', click_handler );
			if_block.destroy( false );
			if ( if_block_1 ) if_block_1.destroy( false );
			if ( if_block_2 ) if_block_2.destroy( false );

			destroyEach( each_block_iterations, false, 0 );

			if ( detach ) {
				detachNode( div );
			}
		}
	};
}

function create_if_block ( state, component ) {
	var text = createText( "Done Picking Channels" );

	return {
		mount: function ( target, anchor ) {
			insertNode( text, target, anchor );
		},

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( text );
			}
		}
	};
}

function create_if_block_1 ( state, component ) {
	var text = createText( "Pick Channels" );

	return {
		mount: function ( target, anchor ) {
			insertNode( text, target, anchor );
		},

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( text );
			}
		}
	};
}

function create_if_block_2 ( state, component ) {
	var th = createElement( 'th' );
	th.className = "sticky";
	th.style.cssText = "width: 1%";
	appendNode( createText( "Show" ), th );

	return {
		mount: function ( target, anchor ) {
			insertNode( th, target, anchor );
		},

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( th );
			}
		}
	};
}

function create_if_block_3 ( state, component ) {
	var th = createElement( 'th' );
	th.className = "sticky text-center";
	var a = createElement( 'a' );
	appendNode( a, th );
	a.className = "white";
	a.href = "https://www.hulu.com/live-tv";
	a.target = "_blank";
	appendNode( createText( "Hulu " ), a );
	var span = createElement( 'span' );
	appendNode( span, a );
	span.className = "hidden-xs-down";
	appendNode( createText( "Live TV" ), span );
	var text_2 = createText( "\r\n        " );
	var th_1 = createElement( 'th' );
	th_1.className = "sticky text-center";
	var a_1 = createElement( 'a' );
	appendNode( a_1, th_1 );
	a_1.className = "white";
	a_1.href = "https://tv.youtube.com/welcome/";
	a_1.target = "_blank";
	appendNode( createText( "YouTube TV" ), a_1 );
	var text_4 = createText( "\r\n        " );
	var th_2 = createElement( 'th' );
	th_2.className = "sticky text-center";
	var a_2 = createElement( 'a' );
	appendNode( a_2, th_2 );
	a_2.className = "white";
	a_2.href = "https://www.sling.com/service";
	a_2.target = "_blank";
	appendNode( createText( "Sling TV" ), a_2 );
	var text_6 = createText( "\r\n        " );
	var th_3 = createElement( 'th' );
	th_3.className = "sticky text-center";
	var a_3 = createElement( 'a' );
	appendNode( a_3, th_3 );
	a_3.className = "white";
	a_3.href = "http://cdn.directv.com/content/dam/dtv/gmott/html/compare-packages-account.html";
	a_3.target = "_blank";
	appendNode( createText( "DirecTV Now" ), a_3 );
	var text_8 = createText( "\r\n        " );
	var th_4 = createElement( 'th' );
	th_4.className = "sticky text-center";
	var a_4 = createElement( 'a' );
	appendNode( a_4, th_4 );
	a_4.className = "white";
	a_4.href = "https://www.playstation.com/en-us/network/vue/channels/";
	a_4.target = "_blank";
	appendNode( createText( "PlayStation Vue" ), a_4 );

	return {
		mount: function ( target, anchor ) {
			insertNode( th, target, anchor );
			insertNode( text_2, target, anchor );
			insertNode( th_1, target, anchor );
			insertNode( text_4, target, anchor );
			insertNode( th_2, target, anchor );
			insertNode( text_6, target, anchor );
			insertNode( th_3, target, anchor );
			insertNode( text_8, target, anchor );
			insertNode( th_4, target, anchor );
		},

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( th );
				detachNode( text_2 );
				detachNode( th_1 );
				detachNode( text_4 );
				detachNode( th_2 );
				detachNode( text_6 );
				detachNode( th_3 );
				detachNode( text_8 );
				detachNode( th_4 );
			}
		}
	};
}

function create_each_block ( state, each_block_value, channel, i, component ) {
	var if_block_3 = (state.channelPickMode || (!state.channelPickMode && channel.shown)) && create_if_block_4( state, each_block_value, channel, i, component );

	var if_block_3_anchor = createComment();

	return {
		mount: function ( target, anchor ) {
			if ( if_block_3 ) if_block_3.mount( target, anchor );
			insertNode( if_block_3_anchor, target, anchor );
		},

		update: function ( changed, state, each_block_value, channel, i ) {
			if ( state.channelPickMode || (!state.channelPickMode && channel.shown) ) {
				if ( if_block_3 ) {
					if_block_3.update( changed, state, each_block_value, channel, i );
				} else {
					if_block_3 = create_if_block_4( state, each_block_value, channel, i, component );
					if_block_3.mount( if_block_3_anchor.parentNode, if_block_3_anchor );
				}
			} else if ( if_block_3 ) {
				if_block_3.destroy( true );
				if_block_3 = null;
			}
		},

		destroy: function ( detach ) {
			if ( if_block_3 ) if_block_3.destroy( detach );

			if ( detach ) {
				detachNode( if_block_3_anchor );
			}
		}
	};
}

function create_if_block_6 ( state, each_block_value, channel, i, component ) {
	var input = createElement( 'input' );
	input.type = "checkbox";
	input.checked = "checked";

	return {
		mount: function ( target, anchor ) {
			insertNode( input, target, anchor );
		},

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( input );
			}
		}
	};
}

function create_if_block_7 ( state, each_block_value, channel, i, component ) {
	var input = createElement( 'input' );
	input.type = "checkbox";

	return {
		mount: function ( target, anchor ) {
			insertNode( input, target, anchor );
		},

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( input );
			}
		}
	};
}

function create_if_block_5 ( state, each_block_value, channel, i, component ) {
	var td = createElement( 'td' );
	var div = createElement( 'div' );
	appendNode( div, td );
	div.className = "checkbox";
	var label = createElement( 'label' );
	appendNode( label, div );

	function get_block ( state, each_block_value, channel, i ) {
		if ( channel.shown ) return create_if_block_6;
		return create_if_block_7;
	}

	var current_block = get_block( state, each_block_value, channel, i );
	var if_block_5 = current_block( state, each_block_value, channel, i, component );

	if_block_5.mount( label, null );

	return {
		mount: function ( target, anchor ) {
			insertNode( td, target, anchor );
		},

		update: function ( changed, state, each_block_value, channel, i ) {
			if ( current_block !== ( current_block = get_block( state, each_block_value, channel, i ) ) ) {
				if_block_5.destroy( true );
				if_block_5 = current_block( state, each_block_value, channel, i, component );
				if_block_5.mount( label, null );
			}
		},

		destroy: function ( detach ) {
			if_block_5.destroy( false );

			if ( detach ) {
				detachNode( td );
			}
		}
	};
}

function create_if_block_9 ( state, each_block_value, channel, i, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-pill badge-success";
	appendNode( createText( "Yes" ), span );

	return {
		mount: function ( target, anchor ) {
			insertNode( span, target, anchor );
		},

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( span );
			}
		}
	};
}

function create_if_block_10 ( state, each_block_value, channel, i, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-pill badge-danger";
	appendNode( createText( "No" ), span );

	return {
		mount: function ( target, anchor ) {
			insertNode( span, target, anchor );
		},

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( span );
			}
		}
	};
}

function create_if_block_11 ( state, each_block_value, channel, i, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-pill badge-success";
	appendNode( createText( "Yes" ), span );

	return {
		mount: function ( target, anchor ) {
			insertNode( span, target, anchor );
		},

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( span );
			}
		}
	};
}

function create_if_block_12 ( state, each_block_value, channel, i, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-pill badge-danger";
	appendNode( createText( "No" ), span );

	return {
		mount: function ( target, anchor ) {
			insertNode( span, target, anchor );
		},

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( span );
			}
		}
	};
}

function create_if_block_17 ( state, each_block_value, channel, i, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-pill badge-default";
	appendNode( createText( "$20" ), span );

	return {
		mount: function ( target, anchor ) {
			insertNode( span, target, anchor );
		},

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( span );
			}
		}
	};
}

function create_if_block_18 ( state, each_block_value, channel, i, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-pill badge-primary";
	appendNode( createText( "$25" ), span );

	return {
		mount: function ( target, anchor ) {
			insertNode( span, target, anchor );
		},

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( span );
			}
		}
	};
}

function create_if_block_14 ( state, each_block_value, channel, i, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-pill badge-success";
	appendNode( createText( "Yes" ), span );

	return {
		mount: function ( target, anchor ) {
			insertNode( span, target, anchor );
		},

		update: noop,

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( span );
			}
		}
	};
}

function create_if_block_15 ( state, each_block_value, channel, i, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-pill badge-warning";
	appendNode( createText( "Add-on" ), span );

	return {
		mount: function ( target, anchor ) {
			insertNode( span, target, anchor );
		},

		update: noop,

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( span );
			}
		}
	};
}

function create_if_block_16 ( state, each_block_value, channel, i, component ) {
	var if_block_11 = (channel.Providers['Sling TV']['20']) && create_if_block_17( state, each_block_value, channel, i, component );

	var text = createText( "\r\n\t\t\t  " );

	var if_block_12 = (channel.Providers['Sling TV']['25']) && create_if_block_18( state, each_block_value, channel, i, component );

	var if_block_12_anchor = createComment();

	return {
		mount: function ( target, anchor ) {
			if ( if_block_11 ) if_block_11.mount( target, anchor );
			insertNode( text, target, anchor );
			if ( if_block_12 ) if_block_12.mount( target, anchor );
			insertNode( if_block_12_anchor, target, anchor );
		},

		update: function ( changed, state, each_block_value, channel, i ) {
			if ( channel.Providers['Sling TV']['20'] ) {
				if ( !if_block_11 ) {
					if_block_11 = create_if_block_17( state, each_block_value, channel, i, component );
					if_block_11.mount( text.parentNode, text );
				}
			} else if ( if_block_11 ) {
				if_block_11.destroy( true );
				if_block_11 = null;
			}

			if ( channel.Providers['Sling TV']['25'] ) {
				if ( !if_block_12 ) {
					if_block_12 = create_if_block_18( state, each_block_value, channel, i, component );
					if_block_12.mount( if_block_12_anchor.parentNode, if_block_12_anchor );
				}
			} else if ( if_block_12 ) {
				if_block_12.destroy( true );
				if_block_12 = null;
			}
		},

		destroy: function ( detach ) {
			if ( if_block_11 ) if_block_11.destroy( detach );
			if ( if_block_12 ) if_block_12.destroy( detach );

			if ( detach ) {
				detachNode( text );
				detachNode( if_block_12_anchor );
			}
		}
	};
}

function create_if_block_13 ( state, each_block_value, channel, i, component ) {
	function get_block ( state, each_block_value, channel, i ) {
		if ( channel.Providers['Sling TV'] === true ) return create_if_block_14;
		if ( channel.Providers['Sling TV'] === 'Add-on' ) return create_if_block_15;
		if ( typeof channel.Providers['Sling TV'] === 'object' ) return create_if_block_16;
		return null;
	}

	var current_block = get_block( state, each_block_value, channel, i );
	var if_block_10 = current_block && current_block( state, each_block_value, channel, i, component );

	var if_block_10_anchor = createComment();

	return {
		mount: function ( target, anchor ) {
			if ( if_block_10 ) if_block_10.mount( target, anchor );
			insertNode( if_block_10_anchor, target, anchor );
		},

		update: function ( changed, state, each_block_value, channel, i ) {
			if ( current_block === ( current_block = get_block( state, each_block_value, channel, i ) ) && if_block_10 ) {
				if_block_10.update( changed, state, each_block_value, channel, i );
			} else {
				if ( if_block_10 ) if_block_10.destroy( true );
				if_block_10 = current_block && current_block( state, each_block_value, channel, i, component );
				if ( if_block_10 ) if_block_10.mount( if_block_10_anchor.parentNode, if_block_10_anchor );
			}
		},

		destroy: function ( detach ) {
			if ( if_block_10 ) if_block_10.destroy( detach );

			if ( detach ) {
				detachNode( if_block_10_anchor );
			}
		}
	};
}

function create_if_block_19 ( state, each_block_value, channel, i, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-pill badge-danger";
	appendNode( createText( "No" ), span );

	return {
		mount: function ( target, anchor ) {
			insertNode( span, target, anchor );
		},

		update: noop,

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( span );
			}
		}
	};
}

function create_if_block_24 ( state, each_block_value, channel, i, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-pill badge-default";
	appendNode( createText( "$35" ), span );

	return {
		mount: function ( target, anchor ) {
			insertNode( span, target, anchor );
		},

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( span );
			}
		}
	};
}

function create_if_block_25 ( state, each_block_value, channel, i, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-pill badge-primary";
	appendNode( createText( "$50" ), span );

	return {
		mount: function ( target, anchor ) {
			insertNode( span, target, anchor );
		},

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( span );
			}
		}
	};
}

function create_if_block_26 ( state, each_block_value, channel, i, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-pill badge-info";
	appendNode( createText( "$60" ), span );

	return {
		mount: function ( target, anchor ) {
			insertNode( span, target, anchor );
		},

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( span );
			}
		}
	};
}

function create_if_block_27 ( state, each_block_value, channel, i, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-pill badge-success";
	appendNode( createText( "$70" ), span );

	return {
		mount: function ( target, anchor ) {
			insertNode( span, target, anchor );
		},

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( span );
			}
		}
	};
}

function create_if_block_21 ( state, each_block_value, channel, i, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-pill badge-success";
	appendNode( createText( "Yes" ), span );

	return {
		mount: function ( target, anchor ) {
			insertNode( span, target, anchor );
		},

		update: noop,

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( span );
			}
		}
	};
}

function create_if_block_22 ( state, each_block_value, channel, i, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-pill badge-warning";
	appendNode( createText( "Add-on" ), span );

	return {
		mount: function ( target, anchor ) {
			insertNode( span, target, anchor );
		},

		update: noop,

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( span );
			}
		}
	};
}

function create_if_block_23 ( state, each_block_value, channel, i, component ) {
	var if_block_15 = (channel.Providers['DirecTV Now']['35']) && create_if_block_24( state, each_block_value, channel, i, component );

	var text = createText( "\r\n\t\t\t  " );

	var if_block_16 = (channel.Providers['DirecTV Now']['50']) && create_if_block_25( state, each_block_value, channel, i, component );

	var text_1 = createText( "\r\n\t\t\t  " );

	var if_block_17 = (channel.Providers['DirecTV Now']['60']) && create_if_block_26( state, each_block_value, channel, i, component );

	var text_2 = createText( "\r\n\t\t\t  " );

	var if_block_18 = (channel.Providers['DirecTV Now']['70']) && create_if_block_27( state, each_block_value, channel, i, component );

	var if_block_18_anchor = createComment();

	return {
		mount: function ( target, anchor ) {
			if ( if_block_15 ) if_block_15.mount( target, anchor );
			insertNode( text, target, anchor );
			if ( if_block_16 ) if_block_16.mount( target, anchor );
			insertNode( text_1, target, anchor );
			if ( if_block_17 ) if_block_17.mount( target, anchor );
			insertNode( text_2, target, anchor );
			if ( if_block_18 ) if_block_18.mount( target, anchor );
			insertNode( if_block_18_anchor, target, anchor );
		},

		update: function ( changed, state, each_block_value, channel, i ) {
			if ( channel.Providers['DirecTV Now']['35'] ) {
				if ( !if_block_15 ) {
					if_block_15 = create_if_block_24( state, each_block_value, channel, i, component );
					if_block_15.mount( text.parentNode, text );
				}
			} else if ( if_block_15 ) {
				if_block_15.destroy( true );
				if_block_15 = null;
			}

			if ( channel.Providers['DirecTV Now']['50'] ) {
				if ( !if_block_16 ) {
					if_block_16 = create_if_block_25( state, each_block_value, channel, i, component );
					if_block_16.mount( text_1.parentNode, text_1 );
				}
			} else if ( if_block_16 ) {
				if_block_16.destroy( true );
				if_block_16 = null;
			}

			if ( channel.Providers['DirecTV Now']['60'] ) {
				if ( !if_block_17 ) {
					if_block_17 = create_if_block_26( state, each_block_value, channel, i, component );
					if_block_17.mount( text_2.parentNode, text_2 );
				}
			} else if ( if_block_17 ) {
				if_block_17.destroy( true );
				if_block_17 = null;
			}

			if ( channel.Providers['DirecTV Now']['70'] ) {
				if ( !if_block_18 ) {
					if_block_18 = create_if_block_27( state, each_block_value, channel, i, component );
					if_block_18.mount( if_block_18_anchor.parentNode, if_block_18_anchor );
				}
			} else if ( if_block_18 ) {
				if_block_18.destroy( true );
				if_block_18 = null;
			}
		},

		destroy: function ( detach ) {
			if ( if_block_15 ) if_block_15.destroy( detach );
			if ( if_block_16 ) if_block_16.destroy( detach );
			if ( if_block_17 ) if_block_17.destroy( detach );
			if ( if_block_18 ) if_block_18.destroy( detach );

			if ( detach ) {
				detachNode( text );
				detachNode( text_1 );
				detachNode( text_2 );
				detachNode( if_block_18_anchor );
			}
		}
	};
}

function create_if_block_20 ( state, each_block_value, channel, i, component ) {
	function get_block ( state, each_block_value, channel, i ) {
		if ( channel.Providers['DirecTV Now'] === true ) return create_if_block_21;
		if ( channel.Providers['DirecTV Now'] === 'Add-on' ) return create_if_block_22;
		if ( typeof channel.Providers['DirecTV Now'] === 'object' ) return create_if_block_23;
		return null;
	}

	var current_block = get_block( state, each_block_value, channel, i );
	var if_block_14 = current_block && current_block( state, each_block_value, channel, i, component );

	var if_block_14_anchor = createComment();

	return {
		mount: function ( target, anchor ) {
			if ( if_block_14 ) if_block_14.mount( target, anchor );
			insertNode( if_block_14_anchor, target, anchor );
		},

		update: function ( changed, state, each_block_value, channel, i ) {
			if ( current_block === ( current_block = get_block( state, each_block_value, channel, i ) ) && if_block_14 ) {
				if_block_14.update( changed, state, each_block_value, channel, i );
			} else {
				if ( if_block_14 ) if_block_14.destroy( true );
				if_block_14 = current_block && current_block( state, each_block_value, channel, i, component );
				if ( if_block_14 ) if_block_14.mount( if_block_14_anchor.parentNode, if_block_14_anchor );
			}
		},

		destroy: function ( detach ) {
			if ( if_block_14 ) if_block_14.destroy( detach );

			if ( detach ) {
				detachNode( if_block_14_anchor );
			}
		}
	};
}

function create_if_block_28 ( state, each_block_value, channel, i, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-pill badge-danger";
	appendNode( createText( "No" ), span );

	return {
		mount: function ( target, anchor ) {
			insertNode( span, target, anchor );
		},

		update: noop,

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( span );
			}
		}
	};
}

function create_if_block_33 ( state, each_block_value, channel, i, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-pill badge-default";
	appendNode( createText( "$30" ), span );

	return {
		mount: function ( target, anchor ) {
			insertNode( span, target, anchor );
		},

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( span );
			}
		}
	};
}

function create_if_block_34 ( state, each_block_value, channel, i, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-pill badge-primary";
	appendNode( createText( "$35" ), span );

	return {
		mount: function ( target, anchor ) {
			insertNode( span, target, anchor );
		},

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( span );
			}
		}
	};
}

function create_if_block_35 ( state, each_block_value, channel, i, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-pill badge-info";
	appendNode( createText( "$45" ), span );

	return {
		mount: function ( target, anchor ) {
			insertNode( span, target, anchor );
		},

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( span );
			}
		}
	};
}

function create_if_block_36 ( state, each_block_value, channel, i, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-pill badge-success";
	appendNode( createText( "$65" ), span );

	return {
		mount: function ( target, anchor ) {
			insertNode( span, target, anchor );
		},

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( span );
			}
		}
	};
}

function create_if_block_30 ( state, each_block_value, channel, i, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-pill badge-success";
	appendNode( createText( "Yes" ), span );

	return {
		mount: function ( target, anchor ) {
			insertNode( span, target, anchor );
		},

		update: noop,

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( span );
			}
		}
	};
}

function create_if_block_31 ( state, each_block_value, channel, i, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-pill badge-warning";
	appendNode( createText( "Add-on" ), span );

	return {
		mount: function ( target, anchor ) {
			insertNode( span, target, anchor );
		},

		update: noop,

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( span );
			}
		}
	};
}

function create_if_block_32 ( state, each_block_value, channel, i, component ) {
	var if_block_21 = (channel.Providers['PlayStation Vue']['30']) && create_if_block_33( state, each_block_value, channel, i, component );

	var text = createText( "\r\n\t\t\t  " );

	var if_block_22 = (channel.Providers['PlayStation Vue']['35']) && create_if_block_34( state, each_block_value, channel, i, component );

	var text_1 = createText( "\r\n\t\t\t  " );

	var if_block_23 = (channel.Providers['PlayStation Vue']['45']) && create_if_block_35( state, each_block_value, channel, i, component );

	var text_2 = createText( "\r\n\t\t\t  " );

	var if_block_24 = (channel.Providers['PlayStation Vue']['65']) && create_if_block_36( state, each_block_value, channel, i, component );

	var if_block_24_anchor = createComment();

	return {
		mount: function ( target, anchor ) {
			if ( if_block_21 ) if_block_21.mount( target, anchor );
			insertNode( text, target, anchor );
			if ( if_block_22 ) if_block_22.mount( target, anchor );
			insertNode( text_1, target, anchor );
			if ( if_block_23 ) if_block_23.mount( target, anchor );
			insertNode( text_2, target, anchor );
			if ( if_block_24 ) if_block_24.mount( target, anchor );
			insertNode( if_block_24_anchor, target, anchor );
		},

		update: function ( changed, state, each_block_value, channel, i ) {
			if ( channel.Providers['PlayStation Vue']['30'] ) {
				if ( !if_block_21 ) {
					if_block_21 = create_if_block_33( state, each_block_value, channel, i, component );
					if_block_21.mount( text.parentNode, text );
				}
			} else if ( if_block_21 ) {
				if_block_21.destroy( true );
				if_block_21 = null;
			}

			if ( channel.Providers['PlayStation Vue']['35'] ) {
				if ( !if_block_22 ) {
					if_block_22 = create_if_block_34( state, each_block_value, channel, i, component );
					if_block_22.mount( text_1.parentNode, text_1 );
				}
			} else if ( if_block_22 ) {
				if_block_22.destroy( true );
				if_block_22 = null;
			}

			if ( channel.Providers['PlayStation Vue']['45'] ) {
				if ( !if_block_23 ) {
					if_block_23 = create_if_block_35( state, each_block_value, channel, i, component );
					if_block_23.mount( text_2.parentNode, text_2 );
				}
			} else if ( if_block_23 ) {
				if_block_23.destroy( true );
				if_block_23 = null;
			}

			if ( channel.Providers['PlayStation Vue']['65'] ) {
				if ( !if_block_24 ) {
					if_block_24 = create_if_block_36( state, each_block_value, channel, i, component );
					if_block_24.mount( if_block_24_anchor.parentNode, if_block_24_anchor );
				}
			} else if ( if_block_24 ) {
				if_block_24.destroy( true );
				if_block_24 = null;
			}
		},

		destroy: function ( detach ) {
			if ( if_block_21 ) if_block_21.destroy( detach );
			if ( if_block_22 ) if_block_22.destroy( detach );
			if ( if_block_23 ) if_block_23.destroy( detach );
			if ( if_block_24 ) if_block_24.destroy( detach );

			if ( detach ) {
				detachNode( text );
				detachNode( text_1 );
				detachNode( text_2 );
				detachNode( if_block_24_anchor );
			}
		}
	};
}

function create_if_block_29 ( state, each_block_value, channel, i, component ) {
	function get_block ( state, each_block_value, channel, i ) {
		if ( channel.Providers['PlayStation Vue'] === true ) return create_if_block_30;
		if ( channel.Providers['PlayStation Vue'] === 'Add-on' ) return create_if_block_31;
		if ( typeof channel.Providers['PlayStation Vue'] === 'object' ) return create_if_block_32;
		return null;
	}

	var current_block = get_block( state, each_block_value, channel, i );
	var if_block_20 = current_block && current_block( state, each_block_value, channel, i, component );

	var if_block_20_anchor = createComment();

	return {
		mount: function ( target, anchor ) {
			if ( if_block_20 ) if_block_20.mount( target, anchor );
			insertNode( if_block_20_anchor, target, anchor );
		},

		update: function ( changed, state, each_block_value, channel, i ) {
			if ( current_block === ( current_block = get_block( state, each_block_value, channel, i ) ) && if_block_20 ) {
				if_block_20.update( changed, state, each_block_value, channel, i );
			} else {
				if ( if_block_20 ) if_block_20.destroy( true );
				if_block_20 = current_block && current_block( state, each_block_value, channel, i, component );
				if ( if_block_20 ) if_block_20.mount( if_block_20_anchor.parentNode, if_block_20_anchor );
			}
		},

		destroy: function ( detach ) {
			if ( if_block_20 ) if_block_20.destroy( detach );

			if ( detach ) {
				detachNode( if_block_20_anchor );
			}
		}
	};
}

function create_if_block_37 ( state, each_block_value, channel, i, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-pill badge-danger";
	appendNode( createText( "No" ), span );

	return {
		mount: function ( target, anchor ) {
			insertNode( span, target, anchor );
		},

		update: noop,

		destroy: function ( detach ) {
			if ( detach ) {
				detachNode( span );
			}
		}
	};
}

function create_if_block_8 ( state, each_block_value, channel, i, component ) {
	var td = createElement( 'td' );

	function get_block ( state, each_block_value, channel, i ) {
		if ( channel.Providers['Hulu Live TV'] ) return create_if_block_9;
		return create_if_block_10;
	}

	var current_block = get_block( state, each_block_value, channel, i );
	var if_block_7 = current_block( state, each_block_value, channel, i, component );

	if_block_7.mount( td, null );
	var text = createText( "\r\n        " );
	var td_1 = createElement( 'td' );

	function get_block_1 ( state, each_block_value, channel, i ) {
		if ( channel.Providers['YouTube TV'] ) return create_if_block_11;
		return create_if_block_12;
	}

	var current_block_1 = get_block_1( state, each_block_value, channel, i );
	var if_block_8 = current_block_1( state, each_block_value, channel, i, component );

	if_block_8.mount( td_1, null );
	var text_1 = createText( "\r\n        " );
	var td_2 = createElement( 'td' );

	function get_block_2 ( state, each_block_value, channel, i ) {
		if ( channel.Providers['Sling TV'] ) return create_if_block_13;
		return create_if_block_19;
	}

	var current_block_2 = get_block_2( state, each_block_value, channel, i );
	var if_block_9 = current_block_2( state, each_block_value, channel, i, component );

	if_block_9.mount( td_2, null );
	var text_2 = createText( "\r\n        " );
	var td_3 = createElement( 'td' );

	function get_block_3 ( state, each_block_value, channel, i ) {
		if ( channel.Providers['DirecTV Now'] ) return create_if_block_20;
		return create_if_block_28;
	}

	var current_block_3 = get_block_3( state, each_block_value, channel, i );
	var if_block_13 = current_block_3( state, each_block_value, channel, i, component );

	if_block_13.mount( td_3, null );
	var text_3 = createText( "\r\n        " );
	var td_4 = createElement( 'td' );

	function get_block_4 ( state, each_block_value, channel, i ) {
		if ( channel.Providers['PlayStation Vue'] ) return create_if_block_29;
		return create_if_block_37;
	}

	var current_block_4 = get_block_4( state, each_block_value, channel, i );
	var if_block_19 = current_block_4( state, each_block_value, channel, i, component );

	if_block_19.mount( td_4, null );

	return {
		mount: function ( target, anchor ) {
			insertNode( td, target, anchor );
			insertNode( text, target, anchor );
			insertNode( td_1, target, anchor );
			insertNode( text_1, target, anchor );
			insertNode( td_2, target, anchor );
			insertNode( text_2, target, anchor );
			insertNode( td_3, target, anchor );
			insertNode( text_3, target, anchor );
			insertNode( td_4, target, anchor );
		},

		update: function ( changed, state, each_block_value, channel, i ) {
			if ( current_block !== ( current_block = get_block( state, each_block_value, channel, i ) ) ) {
				if_block_7.destroy( true );
				if_block_7 = current_block( state, each_block_value, channel, i, component );
				if_block_7.mount( td, null );
			}

			if ( current_block_1 !== ( current_block_1 = get_block_1( state, each_block_value, channel, i ) ) ) {
				if_block_8.destroy( true );
				if_block_8 = current_block_1( state, each_block_value, channel, i, component );
				if_block_8.mount( td_1, null );
			}

			if ( current_block_2 === ( current_block_2 = get_block_2( state, each_block_value, channel, i ) ) && if_block_9 ) {
				if_block_9.update( changed, state, each_block_value, channel, i );
			} else {
				if_block_9.destroy( true );
				if_block_9 = current_block_2( state, each_block_value, channel, i, component );
				if_block_9.mount( td_2, null );
			}

			if ( current_block_3 === ( current_block_3 = get_block_3( state, each_block_value, channel, i ) ) && if_block_13 ) {
				if_block_13.update( changed, state, each_block_value, channel, i );
			} else {
				if_block_13.destroy( true );
				if_block_13 = current_block_3( state, each_block_value, channel, i, component );
				if_block_13.mount( td_3, null );
			}

			if ( current_block_4 === ( current_block_4 = get_block_4( state, each_block_value, channel, i ) ) && if_block_19 ) {
				if_block_19.update( changed, state, each_block_value, channel, i );
			} else {
				if_block_19.destroy( true );
				if_block_19 = current_block_4( state, each_block_value, channel, i, component );
				if_block_19.mount( td_4, null );
			}
		},

		destroy: function ( detach ) {
			if_block_7.destroy( false );
			if_block_8.destroy( false );
			if_block_9.destroy( false );
			if_block_13.destroy( false );
			if_block_19.destroy( false );

			if ( detach ) {
				detachNode( td );
				detachNode( text );
				detachNode( td_1 );
				detachNode( text_1 );
				detachNode( td_2 );
				detachNode( text_2 );
				detachNode( td_3 );
				detachNode( text_3 );
				detachNode( td_4 );
			}
		}
	};
}

function create_if_block_4 ( state, each_block_value, channel, i, component ) {
	var text_1_value;

	var tr = createElement( 'tr' );
	addEventListener( tr, 'click', click_handler );

	tr._svelte = {
		component: component,
		each_block_value: each_block_value,
		i: i
	};

	var if_block_4 = (state.channelPickMode) && create_if_block_5( state, each_block_value, channel, i, component );

	if ( if_block_4 ) if_block_4.mount( tr, null );
	var text = createText( "\r\n        " );
	appendNode( text, tr );
	var th = createElement( 'th' );
	appendNode( th, tr );
	th.scope = "row";
	var text_1 = createText( text_1_value = channel.Name );
	appendNode( text_1, th );
	appendNode( createText( "\r\n        " ), tr );

	var if_block_6 = (!state.channelPickMode) && create_if_block_8( state, each_block_value, channel, i, component );

	if ( if_block_6 ) if_block_6.mount( tr, null );

	return {
		mount: function ( target, anchor ) {
			insertNode( tr, target, anchor );
		},

		update: function ( changed, state, each_block_value, channel, i ) {
			tr._svelte.each_block_value = each_block_value;
			tr._svelte.i = i;

			if ( state.channelPickMode ) {
				if ( if_block_4 ) {
					if_block_4.update( changed, state, each_block_value, channel, i );
				} else {
					if_block_4 = create_if_block_5( state, each_block_value, channel, i, component );
					if_block_4.mount( tr, text );
				}
			} else if ( if_block_4 ) {
				if_block_4.destroy( true );
				if_block_4 = null;
			}

			if ( text_1_value !== ( text_1_value = channel.Name ) ) {
				text_1.data = text_1_value;
			}

			if ( !state.channelPickMode ) {
				if ( if_block_6 ) {
					if_block_6.update( changed, state, each_block_value, channel, i );
				} else {
					if_block_6 = create_if_block_8( state, each_block_value, channel, i, component );
					if_block_6.mount( tr, null );
				}
			} else if ( if_block_6 ) {
				if_block_6.destroy( true );
				if_block_6 = null;
			}
		},

		destroy: function ( detach ) {
			removeEventListener( tr, 'click', click_handler );
			if ( if_block_4 ) if_block_4.destroy( false );
			if ( if_block_6 ) if_block_6.destroy( false );

			if ( detach ) {
				detachNode( tr );
			}
		}
	};
}

function click_handler ( event ) {
	var component = this._svelte.component;
	var each_block_value = this._svelte.each_block_value, i = this._svelte.i, channel = each_block_value[i];
	component.fire("shown-clicked", { i } );
}

function Channels ( options ) {
	options = options || {};
	this._state = assign( template.data(), options.data );

	this._observers = {
		pre: Object.create( null ),
		post: Object.create( null )
	};

	this._handlers = Object.create( null );

	this._root = options._root || this;
	this._yield = options._yield;

	this._torndown = false;
	if ( !document.getElementById( "svelte-2971202229-style" ) ) add_css();

	this._fragment = create_main_fragment( this._state, this );
	if ( options.target ) this._fragment.mount( options.target, null );
}

assign( Channels.prototype, {
 	get: get,
 	fire: fire,
 	observe: observe,
 	on: on,
 	set: set,
 	_flush: _flush
 });

Channels.prototype._set = function _set ( newState ) {
	var oldState = this._state;
	this._state = assign( {}, oldState, newState );
	dispatchObservers( this, this._observers.pre, newState, oldState );
	this._fragment.update( newState, this._state );
	dispatchObservers( this, this._observers.post, newState, oldState );
};

Channels.prototype.teardown = Channels.prototype.destroy = function destroy ( detach ) {
	this.fire( 'destroy' );

	this._fragment.destroy( detach !== false );
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

function createElement ( name ) {
	return document.createElement( name );
}

function insertNode ( node, target, anchor ) {
	target.insertBefore( node, anchor );
}

function setAttribute ( node, attribute, value ) {
	node.setAttribute( attribute, value );
}

function detachNode ( node ) {
	node.parentNode.removeChild( node );
}

function appendNode ( node, target ) {
	target.appendChild( node );
}

function addEventListener ( node, event, handler ) {
	node.addEventListener( event, handler, false );
}

function removeEventListener ( node, event, handler ) {
	node.removeEventListener( event, handler, false );
}

function createText ( data ) {
	return document.createTextNode( data );
}

function destroyEach ( iterations, detach, start ) {
	for ( var i = start; i < iterations.length; i += 1 ) {
		if ( iterations[i] ) iterations[i].destroy( detach );
	}
}

function createComment () {
	return document.createComment( '' );
}

function assign ( target ) {
	for ( var i = 1; i < arguments.length; i += 1 ) {
		var source = arguments[i];
		for ( var k in source ) target[k] = source[k];
	}

	return target;
}

function dispatchObservers ( component, group, newState, oldState ) {
	for ( var key in group ) {
		if ( !( key in newState ) ) continue;

		var newValue = newState[ key ];
		var oldValue = oldState[ key ];

		if ( differs( newValue, oldValue ) ) {
			var callbacks = group[ key ];
			if ( !callbacks ) continue;

			for ( var i = 0; i < callbacks.length; i += 1 ) {
				var callback = callbacks[i];
				if ( callback.__calling ) continue;

				callback.__calling = true;
				callback.call( component, newValue, oldValue );
				callback.__calling = false;
			}
		}
	}
}

function noop () {}

function get ( key ) {
	return key ? this._state[ key ] : this._state;
}

function fire ( eventName, data ) {
	var handlers = eventName in this._handlers && this._handlers[ eventName ].slice();
	if ( !handlers ) return;

	for ( var i = 0; i < handlers.length; i += 1 ) {
		handlers[i].call( this, data );
	}
}

function observe ( key, callback, options ) {
	var group = ( options && options.defer ) ? this._observers.post : this._observers.pre;

	( group[ key ] || ( group[ key ] = [] ) ).push( callback );

	if ( !options || options.init !== false ) {
		callback.__calling = true;
		callback.call( this, this._state[ key ] );
		callback.__calling = false;
	}

	return {
		cancel: function () {
			var index = group[ key ].indexOf( callback );
			if ( ~index ) group[ key ].splice( index, 1 );
		}
	};
}

function on ( eventName, handler ) {
	if ( eventName === 'teardown' ) return this.on( 'destroy', handler );

	var handlers = this._handlers[ eventName ] || ( this._handlers[ eventName ] = [] );
	handlers.push( handler );

	return {
		cancel: function () {
			var index = handlers.indexOf( handler );
			if ( ~index ) handlers.splice( index, 1 );
		}
	};
}

function set ( newState ) {
	this._set( assign( {}, newState ) );
	this._root._flush();
}

function _flush () {
	if ( !this._renderHooks ) return;

	while ( this._renderHooks.length ) {
		this._renderHooks.pop()();
	}
}

function differs ( a, b ) {
	return ( a !== b ) || ( a && ( typeof a === 'object' ) || ( typeof a === 'function' ) );
}

return Channels;

}());