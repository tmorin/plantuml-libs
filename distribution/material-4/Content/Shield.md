# Shield


```text
material-4/Content/Shield
```

```text
include('material-4/Content/Shield')
```



| Illustration | Shield |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/Shield.png) | ![illustration for Shield](../../material-4/Content/Shield.Local.png) |




## Shield

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Shield
include('material-4/Content/Shield')

' renders the element
Shield('Shield', 'Shield', 'an optional tech label')
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

' loads the Item which embeds the element Shield
include('material-4/Content/Shield')

' renders the element
Shield('Shield', 'Shield', 'an optional tech label')
@enduml
```

