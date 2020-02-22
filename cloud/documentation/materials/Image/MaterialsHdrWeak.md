# MaterialsHdrWeak
```text
elements/materials/Image/MaterialsHdrWeak
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsHdrWeak icon](../../../icons/materials/Image/MaterialsHdrWeak.png) | ![MaterialsHdrWeak element](MaterialsHdrWeak.element.png) | ![MaterialsHdrWeak card](MaterialsHdrWeak.card.png) |
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

' loads the MaterialsHdrWeak element
include('elements/materials/Image/MaterialsHdrWeak')
MaterialsHdrWeak('element', 'Hdr Weak', 'an optional tech field')
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

' loads the MaterialsHdrWeak element
include('elements/materials/Image/MaterialsHdrWeak')
MaterialsHdrWeak('element', 'Hdr Weak', 'an optional tech field')
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

' loads the MaterialsHdrWeak card
include('elements/materials/Image/MaterialsHdrWeak')
MaterialsHdrWeakCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsHdrWeak card
include('elements/materials/Image/MaterialsHdrWeak')
MaterialsHdrWeakCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
