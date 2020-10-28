# AwsGeneralAccessPointsDarkBg
```text
elements/aws/Storage/AwsGeneralAccessPointsDarkBg
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsGeneralAccessPointsDarkBg icon](../../../icons/aws/Storage/AwsGeneralAccessPointsDarkBg.png) | ![AwsGeneralAccessPointsDarkBg element](AwsGeneralAccessPointsDarkBg.element.png) | ![AwsGeneralAccessPointsDarkBg card](AwsGeneralAccessPointsDarkBg.card.png) |
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

' loads the AwsGeneralAccessPointsDarkBg element
include('elements/aws/Storage/AwsGeneralAccessPointsDarkBg')
AwsGeneralAccessPointsDarkBg('element', 'General Access Points Dark Bg', 'an optional tech field')
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

' loads the AwsGeneralAccessPointsDarkBg element
include('elements/aws/Storage/AwsGeneralAccessPointsDarkBg')
AwsGeneralAccessPointsDarkBg('element', 'General Access Points Dark Bg', 'an optional tech field')
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

' loads the AwsGeneralAccessPointsDarkBg card
include('elements/aws/Storage/AwsGeneralAccessPointsDarkBg')
AwsGeneralAccessPointsDarkBgCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsGeneralAccessPointsDarkBg card
include('elements/aws/Storage/AwsGeneralAccessPointsDarkBg')
AwsGeneralAccessPointsDarkBgCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
