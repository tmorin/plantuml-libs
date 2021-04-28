# Message Return Address

```text
eip/MessageConstruction/MessageReturnAddress
```

```text
include('eip/MessageConstruction/MessageReturnAddress')
```

|icon|element|
|---|---|
|![](MessageReturnAddress.png)|![](MessageReturnAddress.element.png)|



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
' loads the MessageReturnAddress element
include('eip/MessageConstruction/MessageReturnAddress')
MessageReturnAddress('message_return_address', 'Message Return Address', 'an optional tech field')
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
' loads the MessageReturnAddress element
include('eip/MessageConstruction/MessageReturnAddress')
MessageReturnAddress('message_return_address', 'Message Return Address', 'an optional tech field')
@enduml
```

