# BorderVertical


```text
material-4/Editor/BorderVertical
```

```text
include('material-4/Editor/BorderVertical')
```



| Illustration | BorderVertical |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/BorderVertical.png) | ![illustration for BorderVertical](../../material-4/Editor/BorderVertical.Local.png) |




## BorderVertical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BorderVertical
include('material-4/Editor/BorderVertical')

' renders the element
BorderVertical('BorderVertical', 'Border Vertical', 'an optional tech label')
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

' loads the Item which embeds the element BorderVertical
include('material-4/Editor/BorderVertical')

' renders the element
BorderVertical('BorderVertical', 'Border Vertical', 'an optional tech label')
@enduml
```

