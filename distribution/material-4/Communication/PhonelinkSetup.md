# PhonelinkSetup


```text
material-4/Communication/PhonelinkSetup
```

```text
include('material-4/Communication/PhonelinkSetup')
```



| Illustration | PhonelinkSetup |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/PhonelinkSetup.png) | ![illustration for PhonelinkSetup](../../material-4/Communication/PhonelinkSetup.Local.png) |




## PhonelinkSetup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PhonelinkSetup
include('material-4/Communication/PhonelinkSetup')

' renders the element
PhonelinkSetup('PhonelinkSetup', 'Phonelink Setup', 'an optional tech label')
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

' loads the Item which embeds the element PhonelinkSetup
include('material-4/Communication/PhonelinkSetup')

' renders the element
PhonelinkSetup('PhonelinkSetup', 'Phonelink Setup', 'an optional tech label')
@enduml
```

