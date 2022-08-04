# LocationCity


```text
material-4/Social/LocationCity
```

```text
include('material-4/Social/LocationCity')
```



| Illustration | LocationCity |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/LocationCity.png) | ![illustration for LocationCity](../../material-4/Social/LocationCity.Local.png) |




## LocationCity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocationCity
include('material-4/Social/LocationCity')

' renders the element
LocationCity('LocationCity', 'Location City', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LocationCity
include('material-4/Social/LocationCity')

' renders the element
LocationCity('LocationCity', 'Location City', 'an optional tech label', 'an optional description')
@enduml
```

