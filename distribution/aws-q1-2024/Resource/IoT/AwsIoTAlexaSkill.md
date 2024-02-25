# AwsIoTAlexaSkill


```text
aws-q1-2024/Resource/IoT/AwsIoTAlexaSkill
```

```text
include('aws-q1-2024/Resource/IoT/AwsIoTAlexaSkill')
```



| Illustration | AwsIoTAlexaSkill | AwsIoTAlexaSkillCard | AwsIoTAlexaSkillGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2024/Resource/IoT/AwsIoTAlexaSkill.png) | ![illustration for AwsIoTAlexaSkill](../../../aws-q1-2024/Resource/IoT/AwsIoTAlexaSkill.Local.png) | ![illustration for AwsIoTAlexaSkillCard](../../../aws-q1-2024/Resource/IoT/AwsIoTAlexaSkillCard.Local.png) | ![illustration for AwsIoTAlexaSkillGroup](../../../aws-q1-2024/Resource/IoT/AwsIoTAlexaSkillGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTAlexaSkillXs>`
- `<$AwsIoTAlexaSkillSm>`
- `<$AwsIoTAlexaSkillMd>`
- `<$AwsIoTAlexaSkillLg>`





## AwsIoTAlexaSkill

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsIoTAlexaSkill
include('aws-q1-2024/Resource/IoT/AwsIoTAlexaSkill')

' renders the element
AwsIoTAlexaSkill('AwsIoTAlexaSkill', 'Aws Io T Alexa Skill', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsIoTAlexaSkill
include('aws-q1-2024/Resource/IoT/AwsIoTAlexaSkill')

' renders the element
AwsIoTAlexaSkill('AwsIoTAlexaSkill', 'Aws Io T Alexa Skill', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTAlexaSkillCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsIoTAlexaSkillCard
include('aws-q1-2024/Resource/IoT/AwsIoTAlexaSkill')

' renders the element
AwsIoTAlexaSkillCard('AwsIoTAlexaSkillCard', 'Aws Io T Alexa Skill Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsIoTAlexaSkillCard
include('aws-q1-2024/Resource/IoT/AwsIoTAlexaSkill')

' renders the element
AwsIoTAlexaSkillCard('AwsIoTAlexaSkillCard', 'Aws Io T Alexa Skill Card', 'an optional description')
@enduml
```

## AwsIoTAlexaSkillGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsIoTAlexaSkillGroup
include('aws-q1-2024/Resource/IoT/AwsIoTAlexaSkill')

' renders the element
AwsIoTAlexaSkillGroup('AwsIoTAlexaSkillGroup', 'Aws Io T Alexa Skill Group', 'an optional tech label') {
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

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsIoTAlexaSkillGroup
include('aws-q1-2024/Resource/IoT/AwsIoTAlexaSkill')

' renders the element
AwsIoTAlexaSkillGroup('AwsIoTAlexaSkillGroup', 'Aws Io T Alexa Skill Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

