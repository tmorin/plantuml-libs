# TransitEnterexit


```text
material-4/Maps/TransitEnterexit
```

```text
include('material-4/Maps/TransitEnterexit')
```



| Illustration | TransitEnterexit |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/TransitEnterexit.png) | ![illustration for TransitEnterexit](../../material-4/Maps/TransitEnterexit.Local.png) |




## TransitEnterexit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element TransitEnterexit
include('material-4/Maps/TransitEnterexit')

' renders the element
TransitEnterexit('TransitEnterexit', 'Transit Enterexit', 'an optional tech label')
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

' loads the Item which embeds the element TransitEnterexit
include('material-4/Maps/TransitEnterexit')

' renders the element
TransitEnterexit('TransitEnterexit', 'Transit Enterexit', 'an optional tech label')
@enduml
```

