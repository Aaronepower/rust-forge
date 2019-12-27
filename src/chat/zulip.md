## Zulip

[Rust's Zulip](rust-lang.zulipchat.com) is used by a number of teams, notably the compiler and language
teams, along with their working groups.

Zulip can be an unintuitive platform to get started with. The UI is divided into
two areas: a list of streams on the left, and the main chat in the middle.

## Streams

These are similar to "channels" on other platforms (i.e., there should not be
too many).  On the other hand, you can choose which streams you subscribe to, so
there can be more than channels on other platforms.

Streams are appropriate for any Rust official group. For example, working
groups, project groups, teams are all examples of official groups. These should
ideally also be represented in the [team repository](../infra/team-maintenance.md).

A stream should be named such as `#t-{team}/{group name}`. For example,
`#t-compiler/wg-parallel-rustc`.

If no top-level team exists, or the group spans multiple teams (e.g.,
project-ffi-unwind), then the top level team should be omitted.

It is not generally appropriate to have groups that do not correspond to a set
of people. For example, `#t-compiler/help` would not be appropriate, as such
discussion should go into `#t-compiler` (the catch-all compiler stream).

When a new stream is started, you should announce it in `#announce`. This is
generally done automatically by Zulip.

## Topics

One of these is attached to every message within a given stream (these are the
subdivisions within streams). Topics are generally transient, and live for as
long as there is active discussion on a topic.

New conversation in a given stream should almost always start in a new topic,
not a preexisting one. Unlike (for example) GitHub issues, you should not
attempt to search for a past topic on the same subject. Do not spend too long on
the name of the topic, either, beyond trying to make it short. It is similar in
nature to the subject line of an email, but should generally be no longer than
20 characters (loosely two to three words), to make sure it is visible to users.

You should eagerly fork new discussion topics into fresh topics. Note that this
can be done with the tail of another topic (if accidentally you diverge into
another area of discussion). To fork from an existing topic, find the first
message that should go into the new topic. All subsequent messages will be sent
to the new topic. Choose the down arrow in the upper right of the message box,
and click "View source / Edit topic". Then, edit the topic message inline and
choose "Change later messages to this topic".

## Messages

Zulip is a unique platform which combines synchronous and
asynchronous communication in one location. You should not generally expect that
your messages will receive a response quickly, and unlike (for example) Discord,
there is likely not much reason to "reping" on a particular issue every few
hours as your message is unlikely to vanish into history, being isolated to a
specific topic.

Unless in a synchronous discussion (e.g. meetings), consider making messages
long-form. Zulip has fairly good support for paragraph and multi-line messages
(indeed, this is the default).

## Read-only view

Zulip by default requires an account for interaction, though this "bug" is being
actively worked on by the Zulip developers. We currently maintain a read-only
view of the Zulip at <https://zulip-archive.rust-lang.org>; this has relatively
up to date information (we update every 5 minutes). If you're linking to Zulip
from a GitHub comment with the intent to leave a permanent link, this is a good
place to link to. There is not currently good tooling for generating the links.
