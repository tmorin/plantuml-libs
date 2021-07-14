# NoMeetingRoom


```text
material-4/Places/NoMeetingRoom
```

```text
include('material-4/Places/NoMeetingRoom')
```



| Illustration | NoMeetingRoom |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/NoMeetingRoom.png) | ![illustration for NoMeetingRoom](../../material-4/Places/NoMeetingRoom.Local.png) |




## NoMeetingRoom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NoMeetingRoom
include('material-4/Places/NoMeetingRoom')

' renders the element
NoMeetingRoom('NoMeetingRoom', 'No Meeting Room', 'an optional tech label')
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

' loads the Item which embeds the element NoMeetingRoom
include('material-4/Places/NoMeetingRoom')

' renders the element
NoMeetingRoom('NoMeetingRoom', 'No Meeting Room', 'an optional tech label')
@enduml
```

