# AwsDetective
```text
elements/aws/SecurityIdentityCompliance/AwsDetective
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsDetective icon](../../../icons/aws/SecurityIdentityCompliance/AwsDetective.png) | ![AwsDetective element](AwsDetective.element.png) | ![AwsDetective card](AwsDetective.card.png) |
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

' loads the AwsDetective element
include('elements/aws/SecurityIdentityCompliance/AwsDetective')
AwsDetective('element', 'Detective', 'an optional tech field')
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

' loads the AwsDetective element
include('elements/aws/SecurityIdentityCompliance/AwsDetective')
AwsDetective('element', 'Detective', 'an optional tech field')
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

' loads the AwsDetective card
include('elements/aws/SecurityIdentityCompliance/AwsDetective')
AwsDetectiveCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsDetective card
include('elements/aws/SecurityIdentityCompliance/AwsDetective')
AwsDetectiveCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
