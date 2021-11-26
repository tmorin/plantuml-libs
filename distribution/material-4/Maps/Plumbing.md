# Plumbing


```text
material-4/Maps/Plumbing
```

```text
include('material-4/Maps/Plumbing')
```



| Illustration | Plumbing |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Plumbing.png) | ![illustration for Plumbing](../../material-4/Maps/Plumbing.Local.png) |




## Plumbing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Plumbing
include('material-4/Maps/Plumbing')

' renders the element
Plumbing('Plumbing', 'Plumbing', 'an optional tech label')
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

' loads the Item which embeds the element Plumbing
include('material-4/Maps/Plumbing')

' renders the element
Plumbing('Plumbing', 'Plumbing', 'an optional tech label')
@enduml
```

