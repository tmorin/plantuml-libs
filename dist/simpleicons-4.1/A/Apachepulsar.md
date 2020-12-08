# Apachepulsar

```text
simpleicons-4.1/A/Apachepulsar
```

```text
include('simpleicons-4.1/A/Apachepulsar')
```

|icon|element|
|---|---|
|![](Apachepulsar.png)|![](Apachepulsar.element.png)|



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
' loads the Apachepulsar element
include('simpleicons-4.1/A/Apachepulsar')
Apachepulsar('apachepulsar', 'Apachepulsar', 'an optional tech field')
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
' loads the Apachepulsar element
include('simpleicons-4.1/A/Apachepulsar')
Apachepulsar('apachepulsar', 'Apachepulsar', 'an optional tech field')
@enduml
```

