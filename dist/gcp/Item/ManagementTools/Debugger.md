# Debugger

```text
gcp/Item/ManagementTools/Debugger
```

```text
include('gcp/Item/ManagementTools/Debugger')
```

|icon|card|element|group|
|---|---|---|---|
|![](Debugger.png)|![](Debugger.card.png)|![](Debugger.element.png)|![](Debugger.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the Debugger element
include('gcp/Item/ManagementTools/Debugger')
DebuggerCard('debugger', 'Debugger', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the Debugger element
include('gcp/Item/ManagementTools/Debugger')
DebuggerCard('debugger', 'Debugger', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the Debugger element
include('gcp/Item/ManagementTools/Debugger')
Debugger('debugger', 'Debugger', 'an optional tech field')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the Debugger element
include('gcp/Item/ManagementTools/Debugger')
Debugger('debugger', 'Debugger', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the Debugger element
include('gcp/Item/ManagementTools/Debugger')
DebuggerGroup('debugger', 'Debugger', 'an optional tech field'){
note as note
the content of the group
end note
}
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the Debugger element
include('gcp/Item/ManagementTools/Debugger')
DebuggerGroup('debugger', 'Debugger', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

