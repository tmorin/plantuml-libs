# NearMe


```text
material-4/Maps/NearMe
```

```text
include('material-4/Maps/NearMe')
```



| Illustration | NearMe |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/NearMe.png) | ![illustration for NearMe](../../material-4/Maps/NearMe.Local.png) |




## NearMe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NearMe
include('material-4/Maps/NearMe')

' renders the element
NearMe('NearMe', 'Near Me', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NearMe
include('material-4/Maps/NearMe')

' renders the element
NearMe('NearMe', 'Near Me', 'an optional tech label', 'an optional description')
@enduml
```

