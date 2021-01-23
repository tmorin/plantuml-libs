# Ai Platform

```text
gcp/Item/CloudAi/AiPlatform
```

```text
include('gcp/Item/CloudAi/AiPlatform')
```

|icon|card|element|group|
|---|---|---|---|
|![](AiPlatform.png)|![](AiPlatform.card.png)|![](AiPlatform.element.png)|![](AiPlatform.group.png)|



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
' loads the AiPlatform element
include('gcp/Item/CloudAi/AiPlatform')
AiPlatformCard('ai_platform', 'Ai Platform', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AiPlatform element
include('gcp/Item/CloudAi/AiPlatform')
AiPlatformCard('ai_platform', 'Ai Platform', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AiPlatform element
include('gcp/Item/CloudAi/AiPlatform')
AiPlatform('ai_platform', 'Ai Platform', 'an optional tech field')
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
' loads the AiPlatform element
include('gcp/Item/CloudAi/AiPlatform')
AiPlatform('ai_platform', 'Ai Platform', 'an optional tech field')
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
' loads the AiPlatform element
include('gcp/Item/CloudAi/AiPlatform')
AiPlatformGroup('ai_platform', 'Ai Platform', 'an optional tech field'){
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
' loads the AiPlatform element
include('gcp/Item/CloudAi/AiPlatform')
AiPlatformGroup('ai_platform', 'Ai Platform', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

