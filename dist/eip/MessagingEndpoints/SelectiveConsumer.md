# Selective Consumer

```text
eip/MessagingEndpoints/SelectiveConsumer
```

```text
include('eip/MessagingEndpoints/SelectiveConsumer')
```

|icon|element|
|---|---|
|![](SelectiveConsumer.png)|![](SelectiveConsumer.element.png)|



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
' loads the SelectiveConsumer element
include('eip/MessagingEndpoints/SelectiveConsumer')
SelectiveConsumer('selective_consumer', 'Selective Consumer', 'an optional tech field')
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
' loads the SelectiveConsumer element
include('eip/MessagingEndpoints/SelectiveConsumer')
SelectiveConsumer('selective_consumer', 'Selective Consumer', 'an optional tech field')
@enduml
```

