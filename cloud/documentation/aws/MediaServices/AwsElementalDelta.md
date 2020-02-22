# AwsElementalDelta
```text
elements/aws/MediaServices/AwsElementalDelta
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsElementalDelta icon](../../../icons/aws/MediaServices/AwsElementalDelta.png) | ![AwsElementalDelta element](AwsElementalDelta.element.png) | ![AwsElementalDelta card](AwsElementalDelta.card.png) |
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

' loads the AwsElementalDelta element
include('elements/aws/MediaServices/AwsElementalDelta')
AwsElementalDelta('element', 'Elemental Delta', 'an optional tech field')
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

' loads the AwsElementalDelta element
include('elements/aws/MediaServices/AwsElementalDelta')
AwsElementalDelta('element', 'Elemental Delta', 'an optional tech field')
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

' loads the AwsElementalDelta card
include('elements/aws/MediaServices/AwsElementalDelta')
AwsElementalDeltaCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsElementalDelta card
include('elements/aws/MediaServices/AwsElementalDelta')
AwsElementalDeltaCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
