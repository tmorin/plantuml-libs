# Transactional Client

```text
eip/MessagingEndpoints/TransactionalClient
```

```text
include('eip/MessagingEndpoints/TransactionalClient')
```

|icon|element|
|---|---|
|![](TransactionalClient.png)|![](TransactionalClient.element.png)|



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
' loads the TransactionalClient element
include('eip/MessagingEndpoints/TransactionalClient')
TransactionalClient('transactional_client', 'Transactional Client', 'an optional tech field')
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
' loads the TransactionalClient element
include('eip/MessagingEndpoints/TransactionalClient')
TransactionalClient('transactional_client', 'Transactional Client', 'an optional tech field')
@enduml
```

