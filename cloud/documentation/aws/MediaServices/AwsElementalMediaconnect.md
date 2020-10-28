# AwsElementalMediaconnect
```text
elements/aws/MediaServices/AwsElementalMediaconnect
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsElementalMediaconnect icon](../../../icons/aws/MediaServices/AwsElementalMediaconnect.png) | ![AwsElementalMediaconnect element](AwsElementalMediaconnect.element.png) | ![AwsElementalMediaconnect card](AwsElementalMediaconnect.card.png) |
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

' loads the AwsElementalMediaconnect element
include('elements/aws/MediaServices/AwsElementalMediaconnect')
AwsElementalMediaconnect('element', 'Elemental Mediaconnect', 'an optional tech field')
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

' loads the AwsElementalMediaconnect element
include('elements/aws/MediaServices/AwsElementalMediaconnect')
AwsElementalMediaconnect('element', 'Elemental Mediaconnect', 'an optional tech field')
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

' loads the AwsElementalMediaconnect card
include('elements/aws/MediaServices/AwsElementalMediaconnect')
AwsElementalMediaconnectCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsElementalMediaconnect card
include('elements/aws/MediaServices/AwsElementalMediaconnect')
AwsElementalMediaconnectCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
