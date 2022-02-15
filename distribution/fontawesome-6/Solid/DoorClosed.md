# DoorClosed


```text
fontawesome-6/Solid/DoorClosed
```

```text
include('fontawesome-6/Solid/DoorClosed')
```



| Illustration | DoorClosed |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/DoorClosed.png) | ![illustration for DoorClosed](../../fontawesome-6/Solid/DoorClosed.Local.png) |




## DoorClosed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element DoorClosed
include('fontawesome-6/Solid/DoorClosed')

' renders the element
DoorClosed('DoorClosed', 'Door Closed', 'an optional tech label')
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

' loads the Item which embeds the element DoorClosed
include('fontawesome-6/Solid/DoorClosed')

' renders the element
DoorClosed('DoorClosed', 'Door Closed', 'an optional tech label')
@enduml
```

