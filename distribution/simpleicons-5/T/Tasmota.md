# Tasmota


```text
simpleicons-5/T/Tasmota
```

```text
include('simpleicons-5/T/Tasmota')
```



| Illustration | Tasmota |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Tasmota.png) | ![illustration for Tasmota](../../simpleicons-5/T/Tasmota.Local.png) |




## Tasmota

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Tasmota
include('simpleicons-5/T/Tasmota')

' renders the element
Tasmota('Tasmota', 'Tasmota', 'an optional tech label')
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

' loads the Item which embeds the element Tasmota
include('simpleicons-5/T/Tasmota')

' renders the element
Tasmota('Tasmota', 'Tasmota', 'an optional tech label')
@enduml
```

