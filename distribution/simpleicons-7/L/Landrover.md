# Landrover


```text
simpleicons-7/L/Landrover
```

```text
include('simpleicons-7/L/Landrover')
```



| Illustration | Landrover |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/L/Landrover.png) | ![illustration for Landrover](../../simpleicons-7/L/Landrover.Local.png) |




## Landrover

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Landrover
include('simpleicons-7/L/Landrover')

' renders the element
Landrover('Landrover', 'Landrover', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Landrover
include('simpleicons-7/L/Landrover')

' renders the element
Landrover('Landrover', 'Landrover', 'an optional tech label', 'an optional description')
@enduml
```

