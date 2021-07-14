# LocalDining


```text
material-4/Maps/LocalDining
```

```text
include('material-4/Maps/LocalDining')
```



| Illustration | LocalDining |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LocalDining.png) | ![illustration for LocalDining](../../material-4/Maps/LocalDining.Local.png) |




## LocalDining

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocalDining
include('material-4/Maps/LocalDining')

' renders the element
LocalDining('LocalDining', 'Local Dining', 'an optional tech label')
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

' loads the Item which embeds the element LocalDining
include('material-4/Maps/LocalDining')

' renders the element
LocalDining('LocalDining', 'Local Dining', 'an optional tech label')
@enduml
```

