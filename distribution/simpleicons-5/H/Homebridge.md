# Homebridge


```text
simpleicons-5/H/Homebridge
```

```text
include('simpleicons-5/H/Homebridge')
```



| Illustration | Homebridge |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Homebridge.png) | ![illustration for Homebridge](../../simpleicons-5/H/Homebridge.Local.png) |




## Homebridge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Homebridge
include('simpleicons-5/H/Homebridge')

' renders the element
Homebridge('Homebridge', 'Homebridge', 'an optional tech label')
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

' loads the Item which embeds the element Homebridge
include('simpleicons-5/H/Homebridge')

' renders the element
Homebridge('Homebridge', 'Homebridge', 'an optional tech label')
@enduml
```

