# Build


```text
material-4/Action/Build
```

```text
include('material-4/Action/Build')
```



| Illustration | Build |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Build.png) | ![illustration for Build](../../material-4/Action/Build.Local.png) |




## Build

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Build
include('material-4/Action/Build')

' renders the element
Build('Build', 'Build', 'an optional tech label')
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

' loads the Item which embeds the element Build
include('material-4/Action/Build')

' renders the element
Build('Build', 'Build', 'an optional tech label')
@enduml
```

