# Message Expiration

```text
eip/MessageConstruction/MessageExpiration
```

```text
include('eip/MessageConstruction/MessageExpiration')
```

|icon|element|
|---|---|
|![](MessageExpiration.png)|![](MessageExpiration.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the eip bootstrap
include('eip/bootstrap')
' loads the MessageExpiration element
include('eip/MessageConstruction/MessageExpiration')
MessageExpiration('message_expiration', 'Message Expiration', 'an optional tech field')
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
' loads the eip bootstrap
include('eip/bootstrap')
' loads the MessageExpiration element
include('eip/MessageConstruction/MessageExpiration')
MessageExpiration('message_expiration', 'Message Expiration', 'an optional tech field')
@enduml
```
