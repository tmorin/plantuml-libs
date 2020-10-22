# Person Remove Alt1

```text
material-4.0/Social/PersonRemoveAlt1
```

```text
include('material-4.0/Social/PersonRemoveAlt1')
```

|icon|element|
|---|---|
|![](PersonRemoveAlt1.png)|![](PersonRemoveAlt1.element.png)|



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
' loads the PersonRemoveAlt1 element
include('material-4.0/Social/PersonRemoveAlt1')
PersonRemoveAlt1('person_remove_alt_1', 'Person Remove Alt1', 'an optional tech field')
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
' loads the PersonRemoveAlt1 element
include('material-4.0/Social/PersonRemoveAlt1')
PersonRemoveAlt1('person_remove_alt_1', 'Person Remove Alt1', 'an optional tech field')
@enduml
```

