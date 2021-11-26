# ViewList


```text
material-4/Action/ViewList
```

```text
include('material-4/Action/ViewList')
```



| Illustration | ViewList |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ViewList.png) | ![illustration for ViewList](../../material-4/Action/ViewList.Local.png) |




## ViewList

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ViewList
include('material-4/Action/ViewList')

' renders the element
ViewList('ViewList', 'View List', 'an optional tech label')
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

' loads the Item which embeds the element ViewList
include('material-4/Action/ViewList')

' renders the element
ViewList('ViewList', 'View List', 'an optional tech label')
@enduml
```

