# AwsIotLightbulb
```text
elements/aws/InternetOfThings/AwsIotLightbulb
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotLightbulb icon](../../../icons/aws/InternetOfThings/AwsIotLightbulb.png) | ![AwsIotLightbulb element](AwsIotLightbulb.element.png) | ![AwsIotLightbulb card](AwsIotLightbulb.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsIotLightbulb element
include('elements/aws/InternetOfThings/AwsIotLightbulb')
AwsIotLightbulb('element', 'Iot Lightbulb', 'an optional tech field')
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

' loads the style
include('styles/aws')

' loads the AwsIotLightbulb element
include('elements/aws/InternetOfThings/AwsIotLightbulb')
AwsIotLightbulb('element', 'Iot Lightbulb', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsIotLightbulb card
include('elements/aws/InternetOfThings/AwsIotLightbulb')
AwsIotLightbulbCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the style
include('styles/aws')

' loads the AwsIotLightbulb card
include('elements/aws/InternetOfThings/AwsIotLightbulb')
AwsIotLightbulbCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
