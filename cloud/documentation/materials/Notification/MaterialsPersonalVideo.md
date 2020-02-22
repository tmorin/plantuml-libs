# MaterialsPersonalVideo
```text
elements/materials/Notification/MaterialsPersonalVideo
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPersonalVideo icon](../../../icons/materials/Notification/MaterialsPersonalVideo.png) | ![MaterialsPersonalVideo element](MaterialsPersonalVideo.element.png) | ![MaterialsPersonalVideo card](MaterialsPersonalVideo.card.png) |
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

' loads the MaterialsPersonalVideo element
include('elements/materials/Notification/MaterialsPersonalVideo')
MaterialsPersonalVideo('element', 'Personal Video', 'an optional tech field')
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

' loads the MaterialsPersonalVideo element
include('elements/materials/Notification/MaterialsPersonalVideo')
MaterialsPersonalVideo('element', 'Personal Video', 'an optional tech field')
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

' loads the MaterialsPersonalVideo card
include('elements/materials/Notification/MaterialsPersonalVideo')
MaterialsPersonalVideoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPersonalVideo card
include('elements/materials/Notification/MaterialsPersonalVideo')
MaterialsPersonalVideoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
