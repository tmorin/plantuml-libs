# BorderAll


```text
material-4/Editor/BorderAll
```

```text
include('material-4/Editor/BorderAll')
```



| Illustration | BorderAll |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/BorderAll.png) | ![illustration for BorderAll](../../material-4/Editor/BorderAll.Local.png) |




## BorderAll

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BorderAll
include('material-4/Editor/BorderAll')

' renders the element
BorderAll('BorderAll', 'Border All', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BorderAll
include('material-4/Editor/BorderAll')

' renders the element
BorderAll('BorderAll', 'Border All', 'an optional tech label', 'an optional description')
@enduml
```

