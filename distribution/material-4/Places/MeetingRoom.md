# MeetingRoom


```text
material-4/Places/MeetingRoom
```

```text
include('material-4/Places/MeetingRoom')
```



| Illustration | MeetingRoom |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/MeetingRoom.png) | ![illustration for MeetingRoom](../../material-4/Places/MeetingRoom.Local.png) |




## MeetingRoom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MeetingRoom
include('material-4/Places/MeetingRoom')

' renders the element
MeetingRoom('MeetingRoom', 'Meeting Room', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element MeetingRoom
include('material-4/Places/MeetingRoom')

' renders the element
MeetingRoom('MeetingRoom', 'Meeting Room', 'an optional tech label')
@enduml
```

