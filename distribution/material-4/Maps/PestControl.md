# PestControl


```text
material-4/Maps/PestControl
```

```text
include('material-4/Maps/PestControl')
```



| Illustration | PestControl |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/PestControl.png) | ![illustration for PestControl](../../material-4/Maps/PestControl.Local.png) |




## PestControl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PestControl
include('material-4/Maps/PestControl')

' renders the element
PestControl('PestControl', 'Pest Control', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PestControl
include('material-4/Maps/PestControl')

' renders the element
PestControl('PestControl', 'Pest Control', 'an optional tech label', 'an optional description')
@enduml
```

