# PhonelinkOff


```text
material-4/Hardware/PhonelinkOff
```

```text
include('material-4/Hardware/PhonelinkOff')
```



| Illustration | PhonelinkOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/PhonelinkOff.png) | ![illustration for PhonelinkOff](../../material-4/Hardware/PhonelinkOff.Local.png) |




## PhonelinkOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PhonelinkOff
include('material-4/Hardware/PhonelinkOff')

' renders the element
PhonelinkOff('PhonelinkOff', 'Phonelink Off', 'an optional tech label')
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

' loads the Item which embeds the element PhonelinkOff
include('material-4/Hardware/PhonelinkOff')

' renders the element
PhonelinkOff('PhonelinkOff', 'Phonelink Off', 'an optional tech label')
@enduml
```

