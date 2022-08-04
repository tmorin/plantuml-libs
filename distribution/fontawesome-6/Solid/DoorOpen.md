# DoorOpen


```text
fontawesome-6/Solid/DoorOpen
```

```text
include('fontawesome-6/Solid/DoorOpen')
```



| Illustration | DoorOpen |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/DoorOpen.png) | ![illustration for DoorOpen](../../fontawesome-6/Solid/DoorOpen.Local.png) |




## DoorOpen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element DoorOpen
include('fontawesome-6/Solid/DoorOpen')

' renders the element
DoorOpen('DoorOpen', 'Door Open', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element DoorOpen
include('fontawesome-6/Solid/DoorOpen')

' renders the element
DoorOpen('DoorOpen', 'Door Open', 'an optional tech label', 'an optional description')
@enduml
```

