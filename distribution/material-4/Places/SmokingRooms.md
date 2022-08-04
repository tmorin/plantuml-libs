# SmokingRooms


```text
material-4/Places/SmokingRooms
```

```text
include('material-4/Places/SmokingRooms')
```



| Illustration | SmokingRooms |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/SmokingRooms.png) | ![illustration for SmokingRooms](../../material-4/Places/SmokingRooms.Local.png) |




## SmokingRooms

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SmokingRooms
include('material-4/Places/SmokingRooms')

' renders the element
SmokingRooms('SmokingRooms', 'Smoking Rooms', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SmokingRooms
include('material-4/Places/SmokingRooms')

' renders the element
SmokingRooms('SmokingRooms', 'Smoking Rooms', 'an optional tech label', 'an optional description')
@enduml
```

