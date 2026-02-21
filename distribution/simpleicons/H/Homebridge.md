# Homebridge


```text
simpleicons/H/Homebridge
```

```text
include('simpleicons/H/Homebridge')
```



| Illustration | Homebridge |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Homebridge.png) | ![illustration for Homebridge](../../simpleicons/H/Homebridge.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HomebridgeXs>`
- `<$HomebridgeSm>`
- `<$HomebridgeMd>`
- `<$HomebridgeLg>`





## Homebridge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Homebridge
include('simpleicons/H/Homebridge')

' renders the element
Homebridge('Homebridge', 'Homebridge', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Homebridge
include('simpleicons/H/Homebridge')

' renders the element
Homebridge('Homebridge', 'Homebridge', 'an optional tech label', 'an optional description')
@enduml
```

