# AwsProfessionalServices
```text
elements/aws/CustomerEnablement/AwsProfessionalServices
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsProfessionalServices icon](../../../icons/aws/CustomerEnablement/AwsProfessionalServices.png) | ![AwsProfessionalServices element](AwsProfessionalServices.element.png) | ![AwsProfessionalServices card](AwsProfessionalServices.card.png) |
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

' loads the AwsProfessionalServices element
include('elements/aws/CustomerEnablement/AwsProfessionalServices')
AwsProfessionalServices('element', 'Professional Services', 'an optional tech field')
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

' loads the AwsProfessionalServices element
include('elements/aws/CustomerEnablement/AwsProfessionalServices')
AwsProfessionalServices('element', 'Professional Services', 'an optional tech field')
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

' loads the AwsProfessionalServices card
include('elements/aws/CustomerEnablement/AwsProfessionalServices')
AwsProfessionalServicesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsProfessionalServices card
include('elements/aws/CustomerEnablement/AwsProfessionalServices')
AwsProfessionalServicesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
