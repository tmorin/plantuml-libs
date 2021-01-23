# Libreoffice

```text
simpleicons-4/L/Libreoffice
```

```text
include('simpleicons-4/L/Libreoffice')
```

|icon|element|
|---|---|
|![](Libreoffice.png)|![](Libreoffice.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the simpleicons-4 bootstrap
include('simpleicons-4/bootstrap')
' loads the Libreoffice element
include('simpleicons-4/L/Libreoffice')
Libreoffice('libreoffice', 'Libreoffice', 'an optional tech field')
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
' loads the simpleicons-4 bootstrap
include('simpleicons-4/bootstrap')
' loads the Libreoffice element
include('simpleicons-4/L/Libreoffice')
Libreoffice('libreoffice', 'Libreoffice', 'an optional tech field')
@enduml
```

