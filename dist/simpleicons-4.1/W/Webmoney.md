# Webmoney

```text
simpleicons-4.1/W/Webmoney
```

```text
include('simpleicons-4.1/W/Webmoney')
```

|icon|element|
|---|---|
|![](Webmoney.png)|![](Webmoney.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the simpleicons-4.1 bootstrap
include('simpleicons-4.1/bootstrap')
' loads the Webmoney element
include('simpleicons-4.1/W/Webmoney')
Webmoney('webmoney', 'Webmoney', 'an optional tech field')
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
' loads the simpleicons-4.1 bootstrap
include('simpleicons-4.1/bootstrap')
' loads the Webmoney element
include('simpleicons-4.1/W/Webmoney')
Webmoney('webmoney', 'Webmoney', 'an optional tech field')
@enduml
```

