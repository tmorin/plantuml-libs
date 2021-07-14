# Launch


```text
material-4/Action/Launch
```

```text
include('material-4/Action/Launch')
```



| Illustration | Launch |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Launch.png) | ![illustration for Launch](../../material-4/Action/Launch.Local.png) |




## Launch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Launch
include('material-4/Action/Launch')

' renders the element
Launch('Launch', 'Launch', 'an optional tech label')
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

' loads the Item which embeds the element Launch
include('material-4/Action/Launch')

' renders the element
Launch('Launch', 'Launch', 'an optional tech label')
@enduml
```

