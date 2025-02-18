# Mastodon


```text
simpleicons-14/M/Mastodon
```

```text
include('simpleicons-14/M/Mastodon')
```



| Illustration | Mastodon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mastodon.png) | ![illustration for Mastodon](../../simpleicons-14/M/Mastodon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MastodonXs>`
- `<$MastodonSm>`
- `<$MastodonMd>`
- `<$MastodonLg>`





## Mastodon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mastodon
include('simpleicons-14/M/Mastodon')

' renders the element
Mastodon('Mastodon', 'Mastodon', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mastodon
include('simpleicons-14/M/Mastodon')

' renders the element
Mastodon('Mastodon', 'Mastodon', 'an optional tech label', 'an optional description')
@enduml
```

