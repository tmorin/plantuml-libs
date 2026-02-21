# Bluesky


```text
simpleicons/B/Bluesky
```

```text
include('simpleicons/B/Bluesky')
```



| Illustration | Bluesky |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Bluesky.png) | ![illustration for Bluesky](../../simpleicons/B/Bluesky.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BlueskyXs>`
- `<$BlueskySm>`
- `<$BlueskyMd>`
- `<$BlueskyLg>`





## Bluesky

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Bluesky
include('simpleicons/B/Bluesky')

' renders the element
Bluesky('Bluesky', 'Bluesky', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Bluesky
include('simpleicons/B/Bluesky')

' renders the element
Bluesky('Bluesky', 'Bluesky', 'an optional tech label', 'an optional description')
@enduml
```

