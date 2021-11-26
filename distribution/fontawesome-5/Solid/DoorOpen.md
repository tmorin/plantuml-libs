# DoorOpen


```text
fontawesome-5/Solid/DoorOpen
```

```text
include('fontawesome-5/Solid/DoorOpen')
```



| Illustration | DoorOpen |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/DoorOpen.png) | ![illustration for DoorOpen](../../fontawesome-5/Solid/DoorOpen.Local.png) |




## DoorOpen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element DoorOpen
include('fontawesome-5/Solid/DoorOpen')

' renders the element
DoorOpen('DoorOpen', 'Door Open', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element DoorOpen
include('fontawesome-5/Solid/DoorOpen')

' renders the element
DoorOpen('DoorOpen', 'Door Open', 'an optional tech label')
@enduml
```

