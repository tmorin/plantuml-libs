# ExpandLess


```text
material-4/Navigation/ExpandLess
```

```text
include('material-4/Navigation/ExpandLess')
```



| Illustration | ExpandLess |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/ExpandLess.png) | ![illustration for ExpandLess](../../material-4/Navigation/ExpandLess.Local.png) |




## ExpandLess

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ExpandLess
include('material-4/Navigation/ExpandLess')

' renders the element
ExpandLess('ExpandLess', 'Expand Less', 'an optional tech label')
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

' loads the Item which embeds the element ExpandLess
include('material-4/Navigation/ExpandLess')

' renders the element
ExpandLess('ExpandLess', 'Expand Less', 'an optional tech label')
@enduml
```

