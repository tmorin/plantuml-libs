# MaterialsCrop32
```text
elements/materials/Image/MaterialsCrop32
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCrop32 icon](../../../icons/materials/Image/MaterialsCrop32.png) | ![MaterialsCrop32 element](MaterialsCrop32.element.png) | ![MaterialsCrop32 card](MaterialsCrop32.card.png) |
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

' loads the MaterialsCrop32 element
include('elements/materials/Image/MaterialsCrop32')
MaterialsCrop32('element', 'Crop32', 'an optional tech field')
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

' loads the MaterialsCrop32 element
include('elements/materials/Image/MaterialsCrop32')
MaterialsCrop32('element', 'Crop32', 'an optional tech field')
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

' loads the MaterialsCrop32 card
include('elements/materials/Image/MaterialsCrop32')
MaterialsCrop32Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsCrop32 card
include('elements/materials/Image/MaterialsCrop32')
MaterialsCrop32Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
