# Mastodon


```text
simpleicons-5/M/Mastodon
```

```text
include('simpleicons-5/M/Mastodon')
```



| Illustration | Mastodon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Mastodon.png) | ![illustration for Mastodon](../../simpleicons-5/M/Mastodon.Local.png) |




## Mastodon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mastodon
include('simpleicons-5/M/Mastodon')

' renders the element
Mastodon('Mastodon', 'Mastodon', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mastodon
include('simpleicons-5/M/Mastodon')

' renders the element
Mastodon('Mastodon', 'Mastodon', 'an optional tech label')
@enduml
```

