# AwsIotPolicy
```text
elements/aws/InternetOfThings/AwsIotPolicy
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotPolicy icon](../../../icons/aws/InternetOfThings/AwsIotPolicy.png) | ![AwsIotPolicy element](AwsIotPolicy.element.png) | ![AwsIotPolicy card](AwsIotPolicy.card.png) |
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

' loads the AwsIotPolicy element
include('elements/aws/InternetOfThings/AwsIotPolicy')
AwsIotPolicy('element', 'Iot Policy', 'an optional tech field')
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

' loads the AwsIotPolicy element
include('elements/aws/InternetOfThings/AwsIotPolicy')
AwsIotPolicy('element', 'Iot Policy', 'an optional tech field')
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

' loads the AwsIotPolicy card
include('elements/aws/InternetOfThings/AwsIotPolicy')
AwsIotPolicyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotPolicy card
include('elements/aws/InternetOfThings/AwsIotPolicy')
AwsIotPolicyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
