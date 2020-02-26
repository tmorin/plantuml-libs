# AwsIotAction
```text
elements/aws/InternetOfThings/AwsIotAction
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotAction icon](../../../icons/aws/InternetOfThings/AwsIotAction.png) | ![AwsIotAction element](AwsIotAction.element.png) | ![AwsIotAction card](AwsIotAction.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsIotAction element
include('elements/aws/InternetOfThings/AwsIotAction')
AwsIotAction('element', 'Iot Action', 'an optional tech field')
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

' loads the AwsIotAction element
include('elements/aws/InternetOfThings/AwsIotAction')
AwsIotAction('element', 'Iot Action', 'an optional tech field')
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

' loads the style
include('styles/aws')

' loads the AwsIotAction card
include('elements/aws/InternetOfThings/AwsIotAction')
AwsIotActionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotAction card
include('elements/aws/InternetOfThings/AwsIotAction')
AwsIotActionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
