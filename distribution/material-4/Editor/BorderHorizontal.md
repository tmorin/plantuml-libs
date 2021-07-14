# BorderHorizontal


```text
material-4/Editor/BorderHorizontal
```

```text
include('material-4/Editor/BorderHorizontal')
```



| Illustration | BorderHorizontal |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/BorderHorizontal.png) | ![illustration for BorderHorizontal](../../material-4/Editor/BorderHorizontal.Local.png) |




## BorderHorizontal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BorderHorizontal
include('material-4/Editor/BorderHorizontal')

' renders the element
BorderHorizontal('BorderHorizontal', 'Border Horizontal', 'an optional tech label')
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

' loads the Item which embeds the element BorderHorizontal
include('material-4/Editor/BorderHorizontal')

' renders the element
BorderHorizontal('BorderHorizontal', 'Border Horizontal', 'an optional tech label')
@enduml
```

