<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'strickm742' );

/** Database username */
define( 'DB_USER', 'strickm742' );

/** Database password */
define( 'DB_PASSWORD', 'vqbmQ9DNHKqd' );

/** Database hostname */
define( 'DB_HOST', 'strickm742.mysql.db:3306' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Kh73ku0fMoQsJw3k5/vprLXt5cm2Nhy/SdYBm8CmrudbYcOqHE9TGPpQmYWE' );
define( 'SECURE_AUTH_KEY',  'h97zhhX7BPGPfANU5jZntmUKg1QccfxUkSvaAmM0/TdUtA83UHUlvrpOcaYh' );
define( 'LOGGED_IN_KEY',    'eGspUNwm4mFEyyxb1Hz/EvYXMIimnYhD+NUp4HqEAwixKxC3uIILc0jqAWUG' );
define( 'NONCE_KEY',        'lvWMlG0Ko7tD9GGaZMl/UB+IJhgyxwPy3at1/wGVnon3ejBHOjFZqlhZ2vCK' );
define( 'AUTH_SALT',        'C5rh/f5KLmd6nkO1G9mQA+Zvhj6pkEdc93d8W4TZ5WekiUPrTETY1YcJBCAi' );
define( 'SECURE_AUTH_SALT', 'BK5BCVn1V+F8CBSX6Bsahs8ZxePNBDNY6wEtsL4GZAEMxzpxqqMxokdMIuls' );
define( 'LOGGED_IN_SALT',   'FAG/gJB1Myb+MPbMq2HU9SSxjnndyeIi+Ltk+gLv9ryhhvWOC1Jbw+I95a6j' );
define( 'NONCE_SALT',       'dMG2rBjPTgkG+vOQps3GM63ORNbX3H0SkwiGmINANrAvuTZficqxD3B2jnbR' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'mod847_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
