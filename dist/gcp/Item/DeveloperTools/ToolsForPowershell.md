# Tools For Powershell

```text
gcp/Item/DeveloperTools/ToolsForPowershell
```

```text
include('gcp/Item/DeveloperTools/ToolsForPowershell')
```

|icon|card|element|group|
|---|---|---|---|
|![](ToolsForPowershell.png)|![](ToolsForPowershell.card.png)|![](ToolsForPowershell.element.png)|![](ToolsForPowershell.group.png)|



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
' loads the ToolsForPowershell element
include('gcp/Item/DeveloperTools/ToolsForPowershell')
ToolsForPowershellCard('tools_for_powershell', 'Tools For Powershell', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ToolsForPowershell element
include('gcp/Item/DeveloperTools/ToolsForPowershell')
ToolsForPowershellCard('tools_for_powershell', 'Tools For Powershell', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ToolsForPowershell element
include('gcp/Item/DeveloperTools/ToolsForPowershell')
ToolsForPowershell('tools_for_powershell', 'Tools For Powershell', 'an optional tech field')
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
' loads the ToolsForPowershell element
include('gcp/Item/DeveloperTools/ToolsForPowershell')
ToolsForPowershell('tools_for_powershell', 'Tools For Powershell', 'an optional tech field')
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
' loads the ToolsForPowershell element
include('gcp/Item/DeveloperTools/ToolsForPowershell')
ToolsForPowershellGroup('tools_for_powershell', 'Tools For Powershell', 'an optional tech field'){
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
' loads the ToolsForPowershell element
include('gcp/Item/DeveloperTools/ToolsForPowershell')
ToolsForPowershellGroup('tools_for_powershell', 'Tools For Powershell', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

