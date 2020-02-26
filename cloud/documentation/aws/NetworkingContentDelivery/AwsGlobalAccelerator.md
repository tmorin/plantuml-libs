# AwsGlobalAccelerator
```text
elements/aws/NetworkingContentDelivery/AwsGlobalAccelerator
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsGlobalAccelerator icon](../../../icons/aws/NetworkingContentDelivery/AwsGlobalAccelerator.png) | ![AwsGlobalAccelerator element](AwsGlobalAccelerator.element.png) | ![AwsGlobalAccelerator card](AwsGlobalAccelerator.card.png) |
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

' loads the AwsGlobalAccelerator element
include('elements/aws/NetworkingContentDelivery/AwsGlobalAccelerator')
AwsGlobalAccelerator('element', 'Global Accelerator', 'an optional tech field')
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

' loads the AwsGlobalAccelerator element
include('elements/aws/NetworkingContentDelivery/AwsGlobalAccelerator')
AwsGlobalAccelerator('element', 'Global Accelerator', 'an optional tech field')
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

' loads the AwsGlobalAccelerator card
include('elements/aws/NetworkingContentDelivery/AwsGlobalAccelerator')
AwsGlobalAcceleratorCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsGlobalAccelerator card
include('elements/aws/NetworkingContentDelivery/AwsGlobalAccelerator')
AwsGlobalAcceleratorCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
