# Phonelink Erase

```text
material-4.0/Communication/PhonelinkErase
```

```text
include('material-4.0/Communication/PhonelinkErase')
```

|icon|element|
|---|---|
|![](PhonelinkErase.png)|![](PhonelinkErase.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the PhonelinkErase element
include('material-4.0/Communication/PhonelinkErase')
PhonelinkErase('phonelink_erase', 'Phonelink Erase', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the PhonelinkErase element
include('material-4.0/Communication/PhonelinkErase')
PhonelinkErase('phonelink_erase', 'Phonelink Erase', 'an optional tech field')
@enduml
```

