# LocalLibrary


```text
material-4/Maps/LocalLibrary
```

```text
include('material-4/Maps/LocalLibrary')
```



| Illustration | LocalLibrary |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LocalLibrary.png) | ![illustration for LocalLibrary](../../material-4/Maps/LocalLibrary.Local.png) |




## LocalLibrary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocalLibrary
include('material-4/Maps/LocalLibrary')

' renders the element
LocalLibrary('LocalLibrary', 'Local Library', 'an optional tech label')
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

' loads the Item which embeds the element LocalLibrary
include('material-4/Maps/LocalLibrary')

' renders the element
LocalLibrary('LocalLibrary', 'Local Library', 'an optional tech label')
@enduml
```

