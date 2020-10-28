# AwsManagedServices
```text
elements/aws/CustomerEnablement/AwsManagedServices
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsManagedServices icon](../../../icons/aws/CustomerEnablement/AwsManagedServices.png) | ![AwsManagedServices element](AwsManagedServices.element.png) | ![AwsManagedServices card](AwsManagedServices.card.png) |
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

' loads the AwsManagedServices element
include('elements/aws/CustomerEnablement/AwsManagedServices')
AwsManagedServices('element', 'Managed Services', 'an optional tech field')
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

' loads the AwsManagedServices element
include('elements/aws/CustomerEnablement/AwsManagedServices')
AwsManagedServices('element', 'Managed Services', 'an optional tech field')
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

' loads the AwsManagedServices card
include('elements/aws/CustomerEnablement/AwsManagedServices')
AwsManagedServicesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsManagedServices card
include('elements/aws/CustomerEnablement/AwsManagedServices')
AwsManagedServicesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
