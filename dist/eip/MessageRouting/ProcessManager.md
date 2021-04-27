# Process Manager

```text
eip/MessageRouting/ProcessManager
```

```text
include('eip/MessageRouting/ProcessManager')
```

|icon|element|
|---|---|
|![](ProcessManager.png)|![](ProcessManager.element.png)|



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
' loads the ProcessManager element
include('eip/MessageRouting/ProcessManager')
ProcessManager('process_manager', 'Process Manager', 'an optional tech field')
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
' loads the ProcessManager element
include('eip/MessageRouting/ProcessManager')
ProcessManager('process_manager', 'Process Manager', 'an optional tech field')
@enduml
```

