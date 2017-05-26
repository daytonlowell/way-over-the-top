var Channels = (function () { 'use strict';

function add_css () {
	var style = createElement( 'style' );
	style.id = "svelte-2897029127-style";
	style.textContent = "\r\n\t[svelte-2897029127].green, [svelte-2897029127] .green {\r\n\t\tcolor: green;\r\n\t}\r\n\t[svelte-2897029127].red, [svelte-2897029127] .red {\r\n\t\tcolor: red;\r\n\t}\r\n\t[svelte-2897029127].sticky, [svelte-2897029127] .sticky {\r\n\t\tposition: -webkit-sticky;\r\n\t\tposition: -moz-sticky;\r\n\t\tposition: -ms-sticky;\r\n\t\tposition: -o-sticky;\r\n\t\tposition: sticky;\r\n\t\ttop: 0px;\r\n\t}\r\n\ta[svelte-2897029127], [svelte-2897029127] a {\r\n\t\tcolor: white;\r\n\t}\r\n";
	appendNode( style, document.head );
}

function create_main_fragment ( state, component ) {
	var div = createElement( 'div' );
	setAttribute( div, 'svelte-2897029127', '' );
	div.className = "container-fluid";
	var h1 = createElement( 'h1' );
	appendNode( h1, div );
	h1.className = "display-4";
	h1.style.cssText = "margin-bottom: 15px;";
	appendNode( createText( "Way Over The Top" ), h1 );
	appendNode( createText( "\r\n  \r\n  " ), div );
	var table = createElement( 'table' );
	appendNode( table, div );
	table.className = "table table-hover text-center table-bordered";
	var thead = createElement( 'thead' );
	appendNode( thead, table );
	thead.className = "thead-inverse";
	var tr = createElement( 'tr' );
	appendNode( tr, thead );
	var th = createElement( 'th' );
	appendNode( th, tr );
	th.className = "sticky";
	th.style.cssText = "width: 15vw";
	appendNode( createText( "Channel" ), th );
	appendNode( createText( "\r\n        " ), tr );
	var th_1 = createElement( 'th' );
	appendNode( th_1, tr );
	th_1.className = "sticky text-center";
	var a = createElement( 'a' );
	appendNode( a, th_1 );
	a.href = "https://www.hulu.com/live-tv";
	a.target = "_blank";
	appendNode( createText( "Hulu " ), a );
	var span = createElement( 'span' );
	appendNode( span, a );
	span.className = "hidden-xs-down";
	appendNode( createText( "Live TV" ), span );
	appendNode( createText( "\r\n        " ), tr );
	var th_2 = createElement( 'th' );
	appendNode( th_2, tr );
	th_2.className = "sticky text-center";
	var a_1 = createElement( 'a' );
	appendNode( a_1, th_2 );
	a_1.href = "https://tv.youtube.com/welcome/";
	a_1.target = "_blank";
	appendNode( createText( "YouTube TV" ), a_1 );
	appendNode( createText( "\r\n        " ), tr );
	var th_3 = createElement( 'th' );
	appendNode( th_3, tr );
	th_3.className = "sticky text-center";
	var a_2 = createElement( 'a' );
	appendNode( a_2, th_3 );
	a_2.href = "https://www.sling.com/service";
	a_2.target = "_blank";
	appendNode( createText( "Sling TV" ), a_2 );
	appendNode( createText( "\r\n        " ), tr );
	var th_4 = createElement( 'th' );
	appendNode( th_4, tr );
	th_4.className = "sticky text-center";
	var a_3 = createElement( 'a' );
	appendNode( a_3, th_4 );
	a_3.href = "http://cdn.directv.com/content/dam/dtv/gmott/html/compare-packages-account.html";
	a_3.target = "_blank";
	appendNode( createText( "DirecTV Now" ), a_3 );
	appendNode( createText( "\r\n        " ), tr );
	var th_5 = createElement( 'th' );
	appendNode( th_5, tr );
	th_5.className = "sticky text-center";
	var a_4 = createElement( 'a' );
	appendNode( a_4, th_5 );
	a_4.href = "https://www.playstation.com/en-us/network/vue/channels/";
	a_4.target = "_blank";
	appendNode( createText( "PlayStation Vue" ), a_4 );
	appendNode( createText( "\r\n    " ), table );
	var tbody = createElement( 'tbody' );
	appendNode( tbody, table );
	var each_block_value = state.channelLineup.channels;

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
			var each_block_value = state.channelLineup.channels;

			if ( 'channelLineup' in changed ) {
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
			destroyEach( each_block_iterations, false, 0 );

			if ( detach ) {
				detachNode( div );
			}
		}
	};
}

function create_each_block ( state, each_block_value, channel, channel_index, component ) {
	var text_value;

	var tr = createElement( 'tr' );
	var th = createElement( 'th' );
	appendNode( th, tr );
	th.scope = "row";
	var text = createText( text_value = channel.Name );
	appendNode( text, th );
	appendNode( createText( "\r\n        " ), tr );
	var td = createElement( 'td' );
	appendNode( td, tr );

	function get_block ( state, each_block_value, channel, channel_index ) {
		if ( channel.Providers['Hulu Live TV'] ) return create_if_block;
		return create_if_block_1;
	}

	var current_block = get_block( state, each_block_value, channel, channel_index );
	var if_block = current_block( state, each_block_value, channel, channel_index, component );

	if_block.mount( td, null );
	appendNode( createText( "\r\n        " ), tr );
	var td_1 = createElement( 'td' );
	appendNode( td_1, tr );

	function get_block_1 ( state, each_block_value, channel, channel_index ) {
		if ( channel.Providers['YouTube TV'] ) return create_if_block_2;
		return create_if_block_3;
	}

	var current_block_1 = get_block_1( state, each_block_value, channel, channel_index );
	var if_block_1 = current_block_1( state, each_block_value, channel, channel_index, component );

	if_block_1.mount( td_1, null );
	appendNode( createText( "\r\n        " ), tr );
	var td_2 = createElement( 'td' );
	appendNode( td_2, tr );

	function get_block_2 ( state, each_block_value, channel, channel_index ) {
		if ( channel.Providers['Sling TV'] ) return create_if_block_4;
		return create_if_block_10;
	}

	var current_block_2 = get_block_2( state, each_block_value, channel, channel_index );
	var if_block_2 = current_block_2( state, each_block_value, channel, channel_index, component );

	if_block_2.mount( td_2, null );
	appendNode( createText( "\r\n        " ), tr );
	var td_3 = createElement( 'td' );
	appendNode( td_3, tr );

	function get_block_3 ( state, each_block_value, channel, channel_index ) {
		if ( channel.Providers['DirecTV Now'] ) return create_if_block_11;
		return create_if_block_19;
	}

	var current_block_3 = get_block_3( state, each_block_value, channel, channel_index );
	var if_block_6 = current_block_3( state, each_block_value, channel, channel_index, component );

	if_block_6.mount( td_3, null );
	appendNode( createText( "\r\n        " ), tr );
	var td_4 = createElement( 'td' );
	appendNode( td_4, tr );

	function get_block_4 ( state, each_block_value, channel, channel_index ) {
		if ( channel.Providers['PlayStation Vue'] ) return create_if_block_20;
		return create_if_block_28;
	}

	var current_block_4 = get_block_4( state, each_block_value, channel, channel_index );
	var if_block_12 = current_block_4( state, each_block_value, channel, channel_index, component );

	if_block_12.mount( td_4, null );

	return {
		mount: function ( target, anchor ) {
			insertNode( tr, target, anchor );
		},

		update: function ( changed, state, each_block_value, channel, channel_index ) {
			if ( text_value !== ( text_value = channel.Name ) ) {
				text.data = text_value;
			}

			if ( current_block !== ( current_block = get_block( state, each_block_value, channel, channel_index ) ) ) {
				if_block.destroy( true );
				if_block = current_block( state, each_block_value, channel, channel_index, component );
				if_block.mount( td, null );
			}

			if ( current_block_1 !== ( current_block_1 = get_block_1( state, each_block_value, channel, channel_index ) ) ) {
				if_block_1.destroy( true );
				if_block_1 = current_block_1( state, each_block_value, channel, channel_index, component );
				if_block_1.mount( td_1, null );
			}

			if ( current_block_2 === ( current_block_2 = get_block_2( state, each_block_value, channel, channel_index ) ) && if_block_2 ) {
				if_block_2.update( changed, state, each_block_value, channel, channel_index );
			} else {
				if_block_2.destroy( true );
				if_block_2 = current_block_2( state, each_block_value, channel, channel_index, component );
				if_block_2.mount( td_2, null );
			}

			if ( current_block_3 === ( current_block_3 = get_block_3( state, each_block_value, channel, channel_index ) ) && if_block_6 ) {
				if_block_6.update( changed, state, each_block_value, channel, channel_index );
			} else {
				if_block_6.destroy( true );
				if_block_6 = current_block_3( state, each_block_value, channel, channel_index, component );
				if_block_6.mount( td_3, null );
			}

			if ( current_block_4 === ( current_block_4 = get_block_4( state, each_block_value, channel, channel_index ) ) && if_block_12 ) {
				if_block_12.update( changed, state, each_block_value, channel, channel_index );
			} else {
				if_block_12.destroy( true );
				if_block_12 = current_block_4( state, each_block_value, channel, channel_index, component );
				if_block_12.mount( td_4, null );
			}
		},

		destroy: function ( detach ) {
			if_block.destroy( false );
			if_block_1.destroy( false );
			if_block_2.destroy( false );
			if_block_6.destroy( false );
			if_block_12.destroy( false );

			if ( detach ) {
				detachNode( tr );
			}
		}
	};
}

function create_if_block ( state, each_block_value, channel, channel_index, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-success";
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

function create_if_block_1 ( state, each_block_value, channel, channel_index, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-danger";
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

function create_if_block_2 ( state, each_block_value, channel, channel_index, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-success";
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

function create_if_block_3 ( state, each_block_value, channel, channel_index, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-danger";
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

function create_if_block_8 ( state, each_block_value, channel, channel_index, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-default";
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

function create_if_block_9 ( state, each_block_value, channel, channel_index, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-primary";
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

function create_if_block_5 ( state, each_block_value, channel, channel_index, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-success";
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

function create_if_block_6 ( state, each_block_value, channel, channel_index, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-warning";
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

function create_if_block_7 ( state, each_block_value, channel, channel_index, component ) {
	var if_block_4 = (channel.Providers['Sling TV']['20']) && create_if_block_8( state, each_block_value, channel, channel_index, component );

	var text = createText( "\r\n\t\t\t  " );

	var if_block_5 = (channel.Providers['Sling TV']['25']) && create_if_block_9( state, each_block_value, channel, channel_index, component );

	var if_block_5_anchor = createComment();

	return {
		mount: function ( target, anchor ) {
			if ( if_block_4 ) if_block_4.mount( target, anchor );
			insertNode( text, target, anchor );
			if ( if_block_5 ) if_block_5.mount( target, anchor );
			insertNode( if_block_5_anchor, target, anchor );
		},

		update: function ( changed, state, each_block_value, channel, channel_index ) {
			if ( channel.Providers['Sling TV']['20'] ) {
				if ( !if_block_4 ) {
					if_block_4 = create_if_block_8( state, each_block_value, channel, channel_index, component );
					if_block_4.mount( text.parentNode, text );
				}
			} else if ( if_block_4 ) {
				if_block_4.destroy( true );
				if_block_4 = null;
			}

			if ( channel.Providers['Sling TV']['25'] ) {
				if ( !if_block_5 ) {
					if_block_5 = create_if_block_9( state, each_block_value, channel, channel_index, component );
					if_block_5.mount( if_block_5_anchor.parentNode, if_block_5_anchor );
				}
			} else if ( if_block_5 ) {
				if_block_5.destroy( true );
				if_block_5 = null;
			}
		},

		destroy: function ( detach ) {
			if ( if_block_4 ) if_block_4.destroy( detach );
			if ( if_block_5 ) if_block_5.destroy( detach );

			if ( detach ) {
				detachNode( text );
				detachNode( if_block_5_anchor );
			}
		}
	};
}

function create_if_block_4 ( state, each_block_value, channel, channel_index, component ) {
	function get_block ( state, each_block_value, channel, channel_index ) {
		if ( channel.Providers['Sling TV'] === true ) return create_if_block_5;
		if ( channel.Providers['Sling TV'] === 'Add-on' ) return create_if_block_6;
		if ( typeof channel.Providers['Sling TV'] === 'object' ) return create_if_block_7;
		return null;
	}

	var current_block = get_block( state, each_block_value, channel, channel_index );
	var if_block_3 = current_block && current_block( state, each_block_value, channel, channel_index, component );

	var if_block_3_anchor = createComment();

	return {
		mount: function ( target, anchor ) {
			if ( if_block_3 ) if_block_3.mount( target, anchor );
			insertNode( if_block_3_anchor, target, anchor );
		},

		update: function ( changed, state, each_block_value, channel, channel_index ) {
			if ( current_block === ( current_block = get_block( state, each_block_value, channel, channel_index ) ) && if_block_3 ) {
				if_block_3.update( changed, state, each_block_value, channel, channel_index );
			} else {
				if ( if_block_3 ) if_block_3.destroy( true );
				if_block_3 = current_block && current_block( state, each_block_value, channel, channel_index, component );
				if ( if_block_3 ) if_block_3.mount( if_block_3_anchor.parentNode, if_block_3_anchor );
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

function create_if_block_10 ( state, each_block_value, channel, channel_index, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-danger";
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

function create_if_block_15 ( state, each_block_value, channel, channel_index, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-default";
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

function create_if_block_16 ( state, each_block_value, channel, channel_index, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-primary";
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

function create_if_block_17 ( state, each_block_value, channel, channel_index, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-info";
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

function create_if_block_18 ( state, each_block_value, channel, channel_index, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-success";
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

function create_if_block_12 ( state, each_block_value, channel, channel_index, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-success";
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

function create_if_block_13 ( state, each_block_value, channel, channel_index, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-warning";
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

function create_if_block_14 ( state, each_block_value, channel, channel_index, component ) {
	var if_block_8 = (channel.Providers['DirecTV Now']['35']) && create_if_block_15( state, each_block_value, channel, channel_index, component );

	var text = createText( "\r\n\t\t\t  " );

	var if_block_9 = (channel.Providers['DirecTV Now']['50']) && create_if_block_16( state, each_block_value, channel, channel_index, component );

	var text_1 = createText( "\r\n\t\t\t  " );

	var if_block_10 = (channel.Providers['DirecTV Now']['60']) && create_if_block_17( state, each_block_value, channel, channel_index, component );

	var text_2 = createText( "\r\n\t\t\t  " );

	var if_block_11 = (channel.Providers['DirecTV Now']['70']) && create_if_block_18( state, each_block_value, channel, channel_index, component );

	var if_block_11_anchor = createComment();

	return {
		mount: function ( target, anchor ) {
			if ( if_block_8 ) if_block_8.mount( target, anchor );
			insertNode( text, target, anchor );
			if ( if_block_9 ) if_block_9.mount( target, anchor );
			insertNode( text_1, target, anchor );
			if ( if_block_10 ) if_block_10.mount( target, anchor );
			insertNode( text_2, target, anchor );
			if ( if_block_11 ) if_block_11.mount( target, anchor );
			insertNode( if_block_11_anchor, target, anchor );
		},

		update: function ( changed, state, each_block_value, channel, channel_index ) {
			if ( channel.Providers['DirecTV Now']['35'] ) {
				if ( !if_block_8 ) {
					if_block_8 = create_if_block_15( state, each_block_value, channel, channel_index, component );
					if_block_8.mount( text.parentNode, text );
				}
			} else if ( if_block_8 ) {
				if_block_8.destroy( true );
				if_block_8 = null;
			}

			if ( channel.Providers['DirecTV Now']['50'] ) {
				if ( !if_block_9 ) {
					if_block_9 = create_if_block_16( state, each_block_value, channel, channel_index, component );
					if_block_9.mount( text_1.parentNode, text_1 );
				}
			} else if ( if_block_9 ) {
				if_block_9.destroy( true );
				if_block_9 = null;
			}

			if ( channel.Providers['DirecTV Now']['60'] ) {
				if ( !if_block_10 ) {
					if_block_10 = create_if_block_17( state, each_block_value, channel, channel_index, component );
					if_block_10.mount( text_2.parentNode, text_2 );
				}
			} else if ( if_block_10 ) {
				if_block_10.destroy( true );
				if_block_10 = null;
			}

			if ( channel.Providers['DirecTV Now']['70'] ) {
				if ( !if_block_11 ) {
					if_block_11 = create_if_block_18( state, each_block_value, channel, channel_index, component );
					if_block_11.mount( if_block_11_anchor.parentNode, if_block_11_anchor );
				}
			} else if ( if_block_11 ) {
				if_block_11.destroy( true );
				if_block_11 = null;
			}
		},

		destroy: function ( detach ) {
			if ( if_block_8 ) if_block_8.destroy( detach );
			if ( if_block_9 ) if_block_9.destroy( detach );
			if ( if_block_10 ) if_block_10.destroy( detach );
			if ( if_block_11 ) if_block_11.destroy( detach );

			if ( detach ) {
				detachNode( text );
				detachNode( text_1 );
				detachNode( text_2 );
				detachNode( if_block_11_anchor );
			}
		}
	};
}

function create_if_block_11 ( state, each_block_value, channel, channel_index, component ) {
	function get_block ( state, each_block_value, channel, channel_index ) {
		if ( channel.Providers['DirecTV Now'] === true ) return create_if_block_12;
		if ( channel.Providers['DirecTV Now'] === 'Add-on' ) return create_if_block_13;
		if ( typeof channel.Providers['DirecTV Now'] === 'object' ) return create_if_block_14;
		return null;
	}

	var current_block = get_block( state, each_block_value, channel, channel_index );
	var if_block_7 = current_block && current_block( state, each_block_value, channel, channel_index, component );

	var if_block_7_anchor = createComment();

	return {
		mount: function ( target, anchor ) {
			if ( if_block_7 ) if_block_7.mount( target, anchor );
			insertNode( if_block_7_anchor, target, anchor );
		},

		update: function ( changed, state, each_block_value, channel, channel_index ) {
			if ( current_block === ( current_block = get_block( state, each_block_value, channel, channel_index ) ) && if_block_7 ) {
				if_block_7.update( changed, state, each_block_value, channel, channel_index );
			} else {
				if ( if_block_7 ) if_block_7.destroy( true );
				if_block_7 = current_block && current_block( state, each_block_value, channel, channel_index, component );
				if ( if_block_7 ) if_block_7.mount( if_block_7_anchor.parentNode, if_block_7_anchor );
			}
		},

		destroy: function ( detach ) {
			if ( if_block_7 ) if_block_7.destroy( detach );

			if ( detach ) {
				detachNode( if_block_7_anchor );
			}
		}
	};
}

function create_if_block_19 ( state, each_block_value, channel, channel_index, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-danger";
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

function create_if_block_24 ( state, each_block_value, channel, channel_index, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-default";
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

function create_if_block_25 ( state, each_block_value, channel, channel_index, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-primary";
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

function create_if_block_26 ( state, each_block_value, channel, channel_index, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-info";
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

function create_if_block_27 ( state, each_block_value, channel, channel_index, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-success";
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

function create_if_block_21 ( state, each_block_value, channel, channel_index, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-success";
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

function create_if_block_22 ( state, each_block_value, channel, channel_index, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-warning";
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

function create_if_block_23 ( state, each_block_value, channel, channel_index, component ) {
	var if_block_14 = (channel.Providers['PlayStation Vue']['30']) && create_if_block_24( state, each_block_value, channel, channel_index, component );

	var text = createText( "\r\n\t\t\t  " );

	var if_block_15 = (channel.Providers['PlayStation Vue']['35']) && create_if_block_25( state, each_block_value, channel, channel_index, component );

	var text_1 = createText( "\r\n\t\t\t  " );

	var if_block_16 = (channel.Providers['PlayStation Vue']['45']) && create_if_block_26( state, each_block_value, channel, channel_index, component );

	var text_2 = createText( "\r\n\t\t\t  " );

	var if_block_17 = (channel.Providers['PlayStation Vue']['65']) && create_if_block_27( state, each_block_value, channel, channel_index, component );

	var if_block_17_anchor = createComment();

	return {
		mount: function ( target, anchor ) {
			if ( if_block_14 ) if_block_14.mount( target, anchor );
			insertNode( text, target, anchor );
			if ( if_block_15 ) if_block_15.mount( target, anchor );
			insertNode( text_1, target, anchor );
			if ( if_block_16 ) if_block_16.mount( target, anchor );
			insertNode( text_2, target, anchor );
			if ( if_block_17 ) if_block_17.mount( target, anchor );
			insertNode( if_block_17_anchor, target, anchor );
		},

		update: function ( changed, state, each_block_value, channel, channel_index ) {
			if ( channel.Providers['PlayStation Vue']['30'] ) {
				if ( !if_block_14 ) {
					if_block_14 = create_if_block_24( state, each_block_value, channel, channel_index, component );
					if_block_14.mount( text.parentNode, text );
				}
			} else if ( if_block_14 ) {
				if_block_14.destroy( true );
				if_block_14 = null;
			}

			if ( channel.Providers['PlayStation Vue']['35'] ) {
				if ( !if_block_15 ) {
					if_block_15 = create_if_block_25( state, each_block_value, channel, channel_index, component );
					if_block_15.mount( text_1.parentNode, text_1 );
				}
			} else if ( if_block_15 ) {
				if_block_15.destroy( true );
				if_block_15 = null;
			}

			if ( channel.Providers['PlayStation Vue']['45'] ) {
				if ( !if_block_16 ) {
					if_block_16 = create_if_block_26( state, each_block_value, channel, channel_index, component );
					if_block_16.mount( text_2.parentNode, text_2 );
				}
			} else if ( if_block_16 ) {
				if_block_16.destroy( true );
				if_block_16 = null;
			}

			if ( channel.Providers['PlayStation Vue']['65'] ) {
				if ( !if_block_17 ) {
					if_block_17 = create_if_block_27( state, each_block_value, channel, channel_index, component );
					if_block_17.mount( if_block_17_anchor.parentNode, if_block_17_anchor );
				}
			} else if ( if_block_17 ) {
				if_block_17.destroy( true );
				if_block_17 = null;
			}
		},

		destroy: function ( detach ) {
			if ( if_block_14 ) if_block_14.destroy( detach );
			if ( if_block_15 ) if_block_15.destroy( detach );
			if ( if_block_16 ) if_block_16.destroy( detach );
			if ( if_block_17 ) if_block_17.destroy( detach );

			if ( detach ) {
				detachNode( text );
				detachNode( text_1 );
				detachNode( text_2 );
				detachNode( if_block_17_anchor );
			}
		}
	};
}

function create_if_block_20 ( state, each_block_value, channel, channel_index, component ) {
	function get_block ( state, each_block_value, channel, channel_index ) {
		if ( channel.Providers['PlayStation Vue'] === true ) return create_if_block_21;
		if ( channel.Providers['PlayStation Vue'] === 'Add-on' ) return create_if_block_22;
		if ( typeof channel.Providers['PlayStation Vue'] === 'object' ) return create_if_block_23;
		return null;
	}

	var current_block = get_block( state, each_block_value, channel, channel_index );
	var if_block_13 = current_block && current_block( state, each_block_value, channel, channel_index, component );

	var if_block_13_anchor = createComment();

	return {
		mount: function ( target, anchor ) {
			if ( if_block_13 ) if_block_13.mount( target, anchor );
			insertNode( if_block_13_anchor, target, anchor );
		},

		update: function ( changed, state, each_block_value, channel, channel_index ) {
			if ( current_block === ( current_block = get_block( state, each_block_value, channel, channel_index ) ) && if_block_13 ) {
				if_block_13.update( changed, state, each_block_value, channel, channel_index );
			} else {
				if ( if_block_13 ) if_block_13.destroy( true );
				if_block_13 = current_block && current_block( state, each_block_value, channel, channel_index, component );
				if ( if_block_13 ) if_block_13.mount( if_block_13_anchor.parentNode, if_block_13_anchor );
			}
		},

		destroy: function ( detach ) {
			if ( if_block_13 ) if_block_13.destroy( detach );

			if ( detach ) {
				detachNode( if_block_13_anchor );
			}
		}
	};
}

function create_if_block_28 ( state, each_block_value, channel, channel_index, component ) {
	var span = createElement( 'span' );
	span.className = "badge badge-danger";
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

function Channels ( options ) {
	options = options || {};
	this._state = options.data || {};

	this._observers = {
		pre: Object.create( null ),
		post: Object.create( null )
	};

	this._handlers = Object.create( null );

	this._root = options._root || this;
	this._yield = options._yield;

	this._torndown = false;
	if ( !document.getElementById( "svelte-2897029127-style" ) ) add_css();

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