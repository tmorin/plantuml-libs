# Navigation


```text
material-4/Maps/Navigation
```

```text
include('material-4/Maps/Navigation')
```



| Illustration | Navigation |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Navigation.png) | ![illustration for Navigation](../../material-4/Maps/Navigation.Local.png) |




## Navigation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Navigation
include('material-4/Maps/Navigation')

' renders the element
Navigation('Navigation', 'Navigation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Navigation
include('material-4/Maps/Navigation')

' renders the element
Navigation('Navigation', 'Navigation', 'an optional tech label', 'an optional description')
@enduml
```

