# LocationPin


```text
material-4/Maps/LocationPin
```

```text
include('material-4/Maps/LocationPin')
```



| Illustration | LocationPin |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LocationPin.png) | ![illustration for LocationPin](../../material-4/Maps/LocationPin.Local.png) |




## LocationPin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocationPin
include('material-4/Maps/LocationPin')

' renders the element
LocationPin('LocationPin', 'Location Pin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LocationPin
include('material-4/Maps/LocationPin')

' renders the element
LocationPin('LocationPin', 'Location Pin', 'an optional tech label', 'an optional description')
@enduml
```

