# East


```text
material-4/Navigation/East
```

```text
include('material-4/Navigation/East')
```



| Illustration | East |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/East.png) | ![illustration for East](../../material-4/Navigation/East.Local.png) |




## East

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element East
include('material-4/Navigation/East')

' renders the element
East('East', 'East', 'an optional tech label')
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

' loads the Item which embeds the element East
include('material-4/Navigation/East')

' renders the element
East('East', 'East', 'an optional tech label')
@enduml
```

