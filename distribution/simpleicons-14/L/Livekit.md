# Livekit


```text
simpleicons-14/L/Livekit
```

```text
include('simpleicons-14/L/Livekit')
```



| Illustration | Livekit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Livekit.png) | ![illustration for Livekit](../../simpleicons-14/L/Livekit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LivekitXs>`
- `<$LivekitSm>`
- `<$LivekitMd>`
- `<$LivekitLg>`





## Livekit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Livekit
include('simpleicons-14/L/Livekit')

' renders the element
Livekit('Livekit', 'Livekit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Livekit
include('simpleicons-14/L/Livekit')

' renders the element
Livekit('Livekit', 'Livekit', 'an optional tech label', 'an optional description')
@enduml
```

