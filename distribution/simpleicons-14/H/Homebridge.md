# Homebridge


```text
simpleicons-14/H/Homebridge
```

```text
include('simpleicons-14/H/Homebridge')
```



| Illustration | Homebridge |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Homebridge.png) | ![illustration for Homebridge](../../simpleicons-14/H/Homebridge.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Homebridge
include('simpleicons-14/H/Homebridge')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Homebridge
include('simpleicons-14/H/Homebridge')

' renders the element
Homebridge('Homebridge', 'Homebridge', 'an optional tech label', 'an optional description')
@enduml
```

