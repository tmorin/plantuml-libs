# LocalPlay


```text
material-4/Maps/LocalPlay
```

```text
include('material-4/Maps/LocalPlay')
```



| Illustration | LocalPlay |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LocalPlay.png) | ![illustration for LocalPlay](../../material-4/Maps/LocalPlay.Local.png) |




## LocalPlay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocalPlay
include('material-4/Maps/LocalPlay')

' renders the element
LocalPlay('LocalPlay', 'Local Play', 'an optional tech label')
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

' loads the Item which embeds the element LocalPlay
include('material-4/Maps/LocalPlay')

' renders the element
LocalPlay('LocalPlay', 'Local Play', 'an optional tech label')
@enduml
```

