# MaterialsCallSplit
```text
elements/materials/Communication/MaterialsCallSplit
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCallSplit icon](../../../icons/materials/Communication/MaterialsCallSplit.png) | ![MaterialsCallSplit element](MaterialsCallSplit.element.png) | ![MaterialsCallSplit card](MaterialsCallSplit.card.png) |
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

' loads the MaterialsCallSplit element
include('elements/materials/Communication/MaterialsCallSplit')
MaterialsCallSplit('element', 'Call Split', 'an optional tech field')
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

' loads the MaterialsCallSplit element
include('elements/materials/Communication/MaterialsCallSplit')
MaterialsCallSplit('element', 'Call Split', 'an optional tech field')
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

' loads the MaterialsCallSplit card
include('elements/materials/Communication/MaterialsCallSplit')
MaterialsCallSplitCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsCallSplit card
include('elements/materials/Communication/MaterialsCallSplit')
MaterialsCallSplitCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
