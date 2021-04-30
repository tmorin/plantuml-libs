# Io T Alexa Skill

```text
aws-20210131/Resource/LoT/IoTAlexaSkill
```

```text
include('aws-20210131/Resource/LoT/IoTAlexaSkill')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTAlexaSkill.png)|![](IoTAlexaSkill.card.png)|![](IoTAlexaSkill.element.png)|![](IoTAlexaSkill.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the IoTAlexaSkill element
include('aws-20210131/Resource/LoT/IoTAlexaSkill')
IoTAlexaSkillCard('io_t_alexa_skill', 'Io T Alexa Skill', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the IoTAlexaSkill element
include('aws-20210131/Resource/LoT/IoTAlexaSkill')
IoTAlexaSkillCard('io_t_alexa_skill', 'Io T Alexa Skill', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the IoTAlexaSkill element
include('aws-20210131/Resource/LoT/IoTAlexaSkill')
IoTAlexaSkill('io_t_alexa_skill', 'Io T Alexa Skill', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the IoTAlexaSkill element
include('aws-20210131/Resource/LoT/IoTAlexaSkill')
IoTAlexaSkill('io_t_alexa_skill', 'Io T Alexa Skill', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the IoTAlexaSkill element
include('aws-20210131/Resource/LoT/IoTAlexaSkill')
IoTAlexaSkillGroup('io_t_alexa_skill', 'Io T Alexa Skill', 'an optional tech field'){
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the IoTAlexaSkill element
include('aws-20210131/Resource/LoT/IoTAlexaSkill')
IoTAlexaSkillGroup('io_t_alexa_skill', 'Io T Alexa Skill', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

