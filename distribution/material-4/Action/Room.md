# Room


```text
material-4/Action/Room
```

```text
include('material-4/Action/Room')
```



| Illustration | Room |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Room.png) | ![illustration for Room](../../material-4/Action/Room.Local.png) |




## Room

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Room
include('material-4/Action/Room')

' renders the element
Room('Room', 'Room', 'an optional tech label')
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

' loads the Item which embeds the element Room
include('material-4/Action/Room')

' renders the element
Room('Room', 'Room', 'an optional tech label')
@enduml
```

