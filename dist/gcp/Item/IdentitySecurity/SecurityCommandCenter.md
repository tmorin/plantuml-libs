# Security Command Center

```text
gcp/Item/IdentitySecurity/SecurityCommandCenter
```

```text
include('gcp/Item/IdentitySecurity/SecurityCommandCenter')
```

|icon|card|element|group|
|---|---|---|---|
|![](SecurityCommandCenter.png)|![](SecurityCommandCenter.card.png)|![](SecurityCommandCenter.element.png)|![](SecurityCommandCenter.group.png)|



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
' loads the SecurityCommandCenter element
include('gcp/Item/IdentitySecurity/SecurityCommandCenter')
SecurityCommandCenterCard('security_command_center', 'Security Command Center', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the SecurityCommandCenter element
include('gcp/Item/IdentitySecurity/SecurityCommandCenter')
SecurityCommandCenterCard('security_command_center', 'Security Command Center', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the SecurityCommandCenter element
include('gcp/Item/IdentitySecurity/SecurityCommandCenter')
SecurityCommandCenter('security_command_center', 'Security Command Center', 'an optional tech field')
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
' loads the SecurityCommandCenter element
include('gcp/Item/IdentitySecurity/SecurityCommandCenter')
SecurityCommandCenter('security_command_center', 'Security Command Center', 'an optional tech field')
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
' loads the SecurityCommandCenter element
include('gcp/Item/IdentitySecurity/SecurityCommandCenter')
SecurityCommandCenterGroup('security_command_center', 'Security Command Center', 'an optional tech field'){
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
' loads the SecurityCommandCenter element
include('gcp/Item/IdentitySecurity/SecurityCommandCenter')
SecurityCommandCenterGroup('security_command_center', 'Security Command Center', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

