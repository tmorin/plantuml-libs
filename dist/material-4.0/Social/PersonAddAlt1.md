# Person Add Alt1

```text
material-4.0/Social/PersonAddAlt1
```

```text
include('material-4.0/Social/PersonAddAlt1')
```

|icon|element|
|---|---|
|![](PersonAddAlt1.png)|![](PersonAddAlt1.element.png)|



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
' loads the PersonAddAlt1 element
include('material-4.0/Social/PersonAddAlt1')
PersonAddAlt1('person_add_alt_1', 'Person Add Alt1', 'an optional tech field')
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
' loads the PersonAddAlt1 element
include('material-4.0/Social/PersonAddAlt1')
PersonAddAlt1('person_add_alt_1', 'Person Add Alt1', 'an optional tech field')
@enduml
```

