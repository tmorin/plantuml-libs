# Backblaze


```text
simpleicons/B/Backblaze
```

```text
include('simpleicons/B/Backblaze')
```



| Illustration | Backblaze |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Backblaze.png) | ![illustration for Backblaze](../../simpleicons/B/Backblaze.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BackblazeXs>`
- `<$BackblazeSm>`
- `<$BackblazeMd>`
- `<$BackblazeLg>`





## Backblaze

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Backblaze
include('simpleicons/B/Backblaze')

' renders the element
Backblaze('Backblaze', 'Backblaze', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Backblaze
include('simpleicons/B/Backblaze')

' renders the element
Backblaze('Backblaze', 'Backblaze', 'an optional tech label', 'an optional description')
@enduml
```

