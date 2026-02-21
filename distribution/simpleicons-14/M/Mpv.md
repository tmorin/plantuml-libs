# Mpv


```text
simpleicons-14/M/Mpv
```

```text
include('simpleicons-14/M/Mpv')
```



| Illustration | Mpv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mpv.png) | ![illustration for Mpv](../../simpleicons-14/M/Mpv.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MpvXs>`
- `<$MpvSm>`
- `<$MpvMd>`
- `<$MpvLg>`





## Mpv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mpv
include('simpleicons-14/M/Mpv')

' renders the element
Mpv('Mpv', 'Mpv', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mpv
include('simpleicons-14/M/Mpv')

' renders the element
Mpv('Mpv', 'Mpv', 'an optional tech label', 'an optional description')
@enduml
```

