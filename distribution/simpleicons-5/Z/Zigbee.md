# Zigbee


```text
simpleicons-5/Z/Zigbee
```

```text
include('simpleicons-5/Z/Zigbee')
```



| Illustration | Zigbee |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/Z/Zigbee.png) | ![illustration for Zigbee](../../simpleicons-5/Z/Zigbee.Local.png) |




## Zigbee

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Zigbee
include('simpleicons-5/Z/Zigbee')

' renders the element
Zigbee('Zigbee', 'Zigbee', 'an optional tech label')
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

' loads the Item which embeds the element Zigbee
include('simpleicons-5/Z/Zigbee')

' renders the element
Zigbee('Zigbee', 'Zigbee', 'an optional tech label')
@enduml
```

