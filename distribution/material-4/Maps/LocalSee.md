# LocalSee


```text
material-4/Maps/LocalSee
```

```text
include('material-4/Maps/LocalSee')
```



| Illustration | LocalSee |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LocalSee.png) | ![illustration for LocalSee](../../material-4/Maps/LocalSee.Local.png) |




## LocalSee

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocalSee
include('material-4/Maps/LocalSee')

' renders the element
LocalSee('LocalSee', 'Local See', 'an optional tech label')
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

' loads the Item which embeds the element LocalSee
include('material-4/Maps/LocalSee')

' renders the element
LocalSee('LocalSee', 'Local See', 'an optional tech label')
@enduml
```

