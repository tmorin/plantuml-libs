# AwsIotDesiredState
```text
elements/aws/InternetOfThings/AwsIotDesiredState
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotDesiredState icon](../../../icons/aws/InternetOfThings/AwsIotDesiredState.png) | ![AwsIotDesiredState element](AwsIotDesiredState.element.png) | ![AwsIotDesiredState card](AwsIotDesiredState.card.png) |
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

' loads the AwsIotDesiredState element
include('elements/aws/InternetOfThings/AwsIotDesiredState')
AwsIotDesiredState('element', 'Iot Desired State', 'an optional tech field')
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

' loads the AwsIotDesiredState element
include('elements/aws/InternetOfThings/AwsIotDesiredState')
AwsIotDesiredState('element', 'Iot Desired State', 'an optional tech field')
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

' loads the AwsIotDesiredState card
include('elements/aws/InternetOfThings/AwsIotDesiredState')
AwsIotDesiredStateCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotDesiredState card
include('elements/aws/InternetOfThings/AwsIotDesiredState')
AwsIotDesiredStateCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
