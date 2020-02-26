# AwsElementalMediapackage
```text
elements/aws/MediaServices/AwsElementalMediapackage
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsElementalMediapackage icon](../../../icons/aws/MediaServices/AwsElementalMediapackage.png) | ![AwsElementalMediapackage element](AwsElementalMediapackage.element.png) | ![AwsElementalMediapackage card](AwsElementalMediapackage.card.png) |
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

' loads the AwsElementalMediapackage element
include('elements/aws/MediaServices/AwsElementalMediapackage')
AwsElementalMediapackage('element', 'Elemental Mediapackage', 'an optional tech field')
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

' loads the AwsElementalMediapackage element
include('elements/aws/MediaServices/AwsElementalMediapackage')
AwsElementalMediapackage('element', 'Elemental Mediapackage', 'an optional tech field')
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

' loads the AwsElementalMediapackage card
include('elements/aws/MediaServices/AwsElementalMediapackage')
AwsElementalMediapackageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsElementalMediapackage card
include('elements/aws/MediaServices/AwsElementalMediapackage')
AwsElementalMediapackageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
