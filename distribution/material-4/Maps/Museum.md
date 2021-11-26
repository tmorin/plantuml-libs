# Museum


```text
material-4/Maps/Museum
```

```text
include('material-4/Maps/Museum')
```



| Illustration | Museum |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Museum.png) | ![illustration for Museum](../../material-4/Maps/Museum.Local.png) |




## Museum

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Museum
include('material-4/Maps/Museum')

' renders the element
Museum('Museum', 'Museum', 'an optional tech label')
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

' loads the Item which embeds the element Museum
include('material-4/Maps/Museum')

' renders the element
Museum('Museum', 'Museum', 'an optional tech label')
@enduml
```

