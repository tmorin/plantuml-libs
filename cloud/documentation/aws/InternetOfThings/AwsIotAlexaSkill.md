# AwsIotAlexaSkill
```text
elements/aws/InternetOfThings/AwsIotAlexaSkill
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotAlexaSkill icon](../../../icons/aws/InternetOfThings/AwsIotAlexaSkill.png) | ![AwsIotAlexaSkill element](AwsIotAlexaSkill.element.png) | ![AwsIotAlexaSkill card](AwsIotAlexaSkill.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/aws')

' loads the AwsIotAlexaSkill element
include('elements/aws/InternetOfThings/AwsIotAlexaSkill')
AwsIotAlexaSkill('element', 'Iot Alexa Skill', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml

' loads the AWS style
include('styles/aws')

' loads the AwsIotAlexaSkill element
include('elements/aws/InternetOfThings/AwsIotAlexaSkill')
AwsIotAlexaSkill('element', 'Iot Alexa Skill', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/gcp')

' loads the AwsIotAlexaSkill card
include('elements/aws/InternetOfThings/AwsIotAlexaSkill')
AwsIotAlexaSkillCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml

' loads the GCP style
include('styles/gcp')

' loads the AwsIotAlexaSkill card
include('elements/aws/InternetOfThings/AwsIotAlexaSkill')
AwsIotAlexaSkillCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
