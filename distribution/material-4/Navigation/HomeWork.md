# HomeWork


```text
material-4/Navigation/HomeWork
```

```text
include('material-4/Navigation/HomeWork')
```



| Illustration | HomeWork |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/HomeWork.png) | ![illustration for HomeWork](../../material-4/Navigation/HomeWork.Local.png) |




## HomeWork

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element HomeWork
include('material-4/Navigation/HomeWork')

' renders the element
HomeWork('HomeWork', 'Home Work', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HomeWork
include('material-4/Navigation/HomeWork')

' renders the element
HomeWork('HomeWork', 'Home Work', 'an optional tech label', 'an optional description')
@enduml
```

