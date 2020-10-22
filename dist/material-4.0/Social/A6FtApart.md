# A6 Ft Apart

```text
material-4.0/Social/A6FtApart
```

```text
include('material-4.0/Social/A6FtApart')
```

|icon|element|
|---|---|
|![](A6FtApart.png)|![](A6FtApart.element.png)|



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
' loads the A6FtApart element
include('material-4.0/Social/A6FtApart')
A6FtApart('a_6_ft_apart', 'A6 Ft Apart', 'an optional tech field')
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
' loads the A6FtApart element
include('material-4.0/Social/A6FtApart')
A6FtApart('a_6_ft_apart', 'A6 Ft Apart', 'an optional tech field')
@enduml
```

