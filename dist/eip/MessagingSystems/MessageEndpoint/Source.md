# Source

```text
eip/MessagingSystems/MessageEndpoint/Source
```

```text
include('eip/MessagingSystems/MessageEndpoint/Source')
```

|icon|element|
|---|---|
|![](Source.png)|![](Source.element.png)|



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
' loads the Source element
include('eip/MessagingSystems/MessageEndpoint/Source')
Source('source', 'Source', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the eip bootstrap
include('eip/bootstrap')
' loads the Source element
include('eip/MessagingSystems/MessageEndpoint/Source')
Source('source', 'Source', 'an optional tech field')
@enduml
```

