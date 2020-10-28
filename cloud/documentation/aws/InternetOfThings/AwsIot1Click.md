# AwsIot1Click
```text
elements/aws/InternetOfThings/AwsIot1Click
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIot1Click icon](../../../icons/aws/InternetOfThings/AwsIot1Click.png) | ![AwsIot1Click element](AwsIot1Click.element.png) | ![AwsIot1Click card](AwsIot1Click.card.png) |
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

' loads the AwsIot1Click element
include('elements/aws/InternetOfThings/AwsIot1Click')
AwsIot1Click('element', 'Iot1 Click', 'an optional tech field')
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

' loads the AwsIot1Click element
include('elements/aws/InternetOfThings/AwsIot1Click')
AwsIot1Click('element', 'Iot1 Click', 'an optional tech field')
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

' loads the AwsIot1Click card
include('elements/aws/InternetOfThings/AwsIot1Click')
AwsIot1ClickCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIot1Click card
include('elements/aws/InternetOfThings/AwsIot1Click')
AwsIot1ClickCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
