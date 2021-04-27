# Test Message

```text
eip/SystemManagement/TestMessage
```

```text
include('eip/SystemManagement/TestMessage')
```

|icon|element|
|---|---|
|![](TestMessage.png)|![](TestMessage.element.png)|



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
' loads the TestMessage element
include('eip/SystemManagement/TestMessage')
TestMessage('test_message', 'Test Message', 'an optional tech field')
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
' loads the TestMessage element
include('eip/SystemManagement/TestMessage')
TestMessage('test_message', 'Test Message', 'an optional tech field')
@enduml
```

