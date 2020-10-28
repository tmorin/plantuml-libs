# AwsElementalMedialive
```text
elements/aws/MediaServices/AwsElementalMedialive
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsElementalMedialive icon](../../../icons/aws/MediaServices/AwsElementalMedialive.png) | ![AwsElementalMedialive element](AwsElementalMedialive.element.png) | ![AwsElementalMedialive card](AwsElementalMedialive.card.png) |
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

' loads the AwsElementalMedialive element
include('elements/aws/MediaServices/AwsElementalMedialive')
AwsElementalMedialive('element', 'Elemental Medialive', 'an optional tech field')
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

' loads the AwsElementalMedialive element
include('elements/aws/MediaServices/AwsElementalMedialive')
AwsElementalMedialive('element', 'Elemental Medialive', 'an optional tech field')
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

' loads the AwsElementalMedialive card
include('elements/aws/MediaServices/AwsElementalMedialive')
AwsElementalMedialiveCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsElementalMedialive card
include('elements/aws/MediaServices/AwsElementalMedialive')
AwsElementalMedialiveCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
