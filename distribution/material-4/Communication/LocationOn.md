# LocationOn


```text
material-4/Communication/LocationOn
```

```text
include('material-4/Communication/LocationOn')
```



| Illustration | LocationOn |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/LocationOn.png) | ![illustration for LocationOn](../../material-4/Communication/LocationOn.Local.png) |




## LocationOn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocationOn
include('material-4/Communication/LocationOn')

' renders the element
LocationOn('LocationOn', 'Location On', 'an optional tech label')
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

' loads the Item which embeds the element LocationOn
include('material-4/Communication/LocationOn')

' renders the element
LocationOn('LocationOn', 'Location On', 'an optional tech label')
@enduml
```

