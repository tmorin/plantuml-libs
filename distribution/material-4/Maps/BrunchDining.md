# BrunchDining


```text
material-4/Maps/BrunchDining
```

```text
include('material-4/Maps/BrunchDining')
```



| Illustration | BrunchDining |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/BrunchDining.png) | ![illustration for BrunchDining](../../material-4/Maps/BrunchDining.Local.png) |




## BrunchDining

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BrunchDining
include('material-4/Maps/BrunchDining')

' renders the element
BrunchDining('BrunchDining', 'Brunch Dining', 'an optional tech label')
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

' loads the Item which embeds the element BrunchDining
include('material-4/Maps/BrunchDining')

' renders the element
BrunchDining('BrunchDining', 'Brunch Dining', 'an optional tech label')
@enduml
```

