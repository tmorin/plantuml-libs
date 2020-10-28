# AwsMobileClient
```text
elements/aws/General/AwsMobileClient
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsMobileClient icon](../../../icons/aws/General/AwsMobileClient.png) | ![AwsMobileClient element](AwsMobileClient.element.png) | ![AwsMobileClient card](AwsMobileClient.card.png) |
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

' loads the AwsMobileClient element
include('elements/aws/General/AwsMobileClient')
AwsMobileClient('element', 'Mobile Client', 'an optional tech field')
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

' loads the AwsMobileClient element
include('elements/aws/General/AwsMobileClient')
AwsMobileClient('element', 'Mobile Client', 'an optional tech field')
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

' loads the AwsMobileClient card
include('elements/aws/General/AwsMobileClient')
AwsMobileClientCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsMobileClient card
include('elements/aws/General/AwsMobileClient')
AwsMobileClientCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
