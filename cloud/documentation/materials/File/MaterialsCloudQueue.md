# MaterialsCloudQueue
```text
elements/materials/File/MaterialsCloudQueue
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCloudQueue icon](../../../icons/materials/File/MaterialsCloudQueue.png) | ![MaterialsCloudQueue element](MaterialsCloudQueue.element.png) | ![MaterialsCloudQueue card](MaterialsCloudQueue.card.png) |
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
include('styles/materials')

' loads the MaterialsCloudQueue element
include('elements/materials/File/MaterialsCloudQueue')
MaterialsCloudQueue('element', 'Cloud Queue', 'an optional tech field')
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
include('styles/materials')

' loads the MaterialsCloudQueue element
include('elements/materials/File/MaterialsCloudQueue')
MaterialsCloudQueue('element', 'Cloud Queue', 'an optional tech field')
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
include('styles/materials')

' loads the MaterialsCloudQueue card
include('elements/materials/File/MaterialsCloudQueue')
MaterialsCloudQueueCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/materials')

' loads the MaterialsCloudQueue card
include('elements/materials/File/MaterialsCloudQueue')
MaterialsCloudQueueCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
