# Loopback


```text
simpleicons/L/Loopback
```

```text
include('simpleicons/L/Loopback')
```



| Illustration | Loopback |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Loopback.png) | ![illustration for Loopback](../../simpleicons/L/Loopback.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LoopbackXs>`
- `<$LoopbackSm>`
- `<$LoopbackMd>`
- `<$LoopbackLg>`





## Loopback

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Loopback
include('simpleicons/L/Loopback')

' renders the element
Loopback('Loopback', 'Loopback', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Loopback
include('simpleicons/L/Loopback')

' renders the element
Loopback('Loopback', 'Loopback', 'an optional tech label', 'an optional description')
@enduml
```

