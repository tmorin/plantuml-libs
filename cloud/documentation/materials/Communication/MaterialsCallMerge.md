# MaterialsCallMerge
```text
elements/materials/Communication/MaterialsCallMerge
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCallMerge icon](../../../icons/materials/Communication/MaterialsCallMerge.png) | ![MaterialsCallMerge element](MaterialsCallMerge.element.png) | ![MaterialsCallMerge card](MaterialsCallMerge.card.png) |
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

' loads the MaterialsCallMerge element
include('elements/materials/Communication/MaterialsCallMerge')
MaterialsCallMerge('element', 'Call Merge', 'an optional tech field')
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

' loads the MaterialsCallMerge element
include('elements/materials/Communication/MaterialsCallMerge')
MaterialsCallMerge('element', 'Call Merge', 'an optional tech field')
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

' loads the MaterialsCallMerge card
include('elements/materials/Communication/MaterialsCallMerge')
MaterialsCallMergeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsCallMerge card
include('elements/materials/Communication/MaterialsCallMerge')
MaterialsCallMergeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
