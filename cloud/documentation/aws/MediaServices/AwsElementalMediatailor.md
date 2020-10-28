# AwsElementalMediatailor
```text
elements/aws/MediaServices/AwsElementalMediatailor
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsElementalMediatailor icon](../../../icons/aws/MediaServices/AwsElementalMediatailor.png) | ![AwsElementalMediatailor element](AwsElementalMediatailor.element.png) | ![AwsElementalMediatailor card](AwsElementalMediatailor.card.png) |
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

' loads the AwsElementalMediatailor element
include('elements/aws/MediaServices/AwsElementalMediatailor')
AwsElementalMediatailor('element', 'Elemental Mediatailor', 'an optional tech field')
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

' loads the AwsElementalMediatailor element
include('elements/aws/MediaServices/AwsElementalMediatailor')
AwsElementalMediatailor('element', 'Elemental Mediatailor', 'an optional tech field')
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

' loads the AwsElementalMediatailor card
include('elements/aws/MediaServices/AwsElementalMediatailor')
AwsElementalMediatailorCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsElementalMediatailor card
include('elements/aws/MediaServices/AwsElementalMediatailor')
AwsElementalMediatailorCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
