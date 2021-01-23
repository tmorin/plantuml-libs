# Dialogflow

```text
gcp/Item/CloudAi/Dialogflow
```

```text
include('gcp/Item/CloudAi/Dialogflow')
```

|icon|card|element|group|
|---|---|---|---|
|![](Dialogflow.png)|![](Dialogflow.card.png)|![](Dialogflow.element.png)|![](Dialogflow.group.png)|



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
' loads the Dialogflow element
include('gcp/Item/CloudAi/Dialogflow')
DialogflowCard('dialogflow', 'Dialogflow', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Dialogflow element
include('gcp/Item/CloudAi/Dialogflow')
DialogflowCard('dialogflow', 'Dialogflow', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Dialogflow element
include('gcp/Item/CloudAi/Dialogflow')
Dialogflow('dialogflow', 'Dialogflow', 'an optional tech field')
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
' loads the Dialogflow element
include('gcp/Item/CloudAi/Dialogflow')
Dialogflow('dialogflow', 'Dialogflow', 'an optional tech field')
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
' loads the Dialogflow element
include('gcp/Item/CloudAi/Dialogflow')
DialogflowGroup('dialogflow', 'Dialogflow', 'an optional tech field'){
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
' loads the Dialogflow element
include('gcp/Item/CloudAi/Dialogflow')
DialogflowGroup('dialogflow', 'Dialogflow', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

