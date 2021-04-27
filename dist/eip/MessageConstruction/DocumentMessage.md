# Document Message

```text
eip/MessageConstruction/DocumentMessage
```

```text
include('eip/MessageConstruction/DocumentMessage')
```

|icon|element|
|---|---|
|![](DocumentMessage.png)|![](DocumentMessage.element.png)|



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
' loads the DocumentMessage element
include('eip/MessageConstruction/DocumentMessage')
DocumentMessage('document_message', 'Document Message', 'an optional tech field')
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
' loads the DocumentMessage element
include('eip/MessageConstruction/DocumentMessage')
DocumentMessage('document_message', 'Document Message', 'an optional tech field')
@enduml
```

