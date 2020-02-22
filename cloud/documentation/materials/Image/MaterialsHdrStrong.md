# MaterialsHdrStrong
```text
elements/materials/Image/MaterialsHdrStrong
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsHdrStrong icon](../../../icons/materials/Image/MaterialsHdrStrong.png) | ![MaterialsHdrStrong element](MaterialsHdrStrong.element.png) | ![MaterialsHdrStrong card](MaterialsHdrStrong.card.png) |
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

' loads the MaterialsHdrStrong element
include('elements/materials/Image/MaterialsHdrStrong')
MaterialsHdrStrong('element', 'Hdr Strong', 'an optional tech field')
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

' loads the MaterialsHdrStrong element
include('elements/materials/Image/MaterialsHdrStrong')
MaterialsHdrStrong('element', 'Hdr Strong', 'an optional tech field')
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

' loads the MaterialsHdrStrong card
include('elements/materials/Image/MaterialsHdrStrong')
MaterialsHdrStrongCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsHdrStrong card
include('elements/materials/Image/MaterialsHdrStrong')
MaterialsHdrStrongCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
