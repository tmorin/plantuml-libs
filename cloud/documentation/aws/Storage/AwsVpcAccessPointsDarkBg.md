# AwsVpcAccessPointsDarkBg
```text
elements/aws/Storage/AwsVpcAccessPointsDarkBg
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsVpcAccessPointsDarkBg icon](../../../icons/aws/Storage/AwsVpcAccessPointsDarkBg.png) | ![AwsVpcAccessPointsDarkBg element](AwsVpcAccessPointsDarkBg.element.png) | ![AwsVpcAccessPointsDarkBg card](AwsVpcAccessPointsDarkBg.card.png) |
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

' loads the AwsVpcAccessPointsDarkBg element
include('elements/aws/Storage/AwsVpcAccessPointsDarkBg')
AwsVpcAccessPointsDarkBg('element', 'Vpc Access Points Dark Bg', 'an optional tech field')
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

' loads the AwsVpcAccessPointsDarkBg element
include('elements/aws/Storage/AwsVpcAccessPointsDarkBg')
AwsVpcAccessPointsDarkBg('element', 'Vpc Access Points Dark Bg', 'an optional tech field')
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

' loads the AwsVpcAccessPointsDarkBg card
include('elements/aws/Storage/AwsVpcAccessPointsDarkBg')
AwsVpcAccessPointsDarkBgCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsVpcAccessPointsDarkBg card
include('elements/aws/Storage/AwsVpcAccessPointsDarkBg')
AwsVpcAccessPointsDarkBgCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
