# MaterialsFiberManualRecord
```text
elements/materials/Av/MaterialsFiberManualRecord
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFiberManualRecord icon](../../../icons/materials/Av/MaterialsFiberManualRecord.png) | ![MaterialsFiberManualRecord element](MaterialsFiberManualRecord.element.png) | ![MaterialsFiberManualRecord card](MaterialsFiberManualRecord.card.png) |
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

' loads the MaterialsFiberManualRecord element
include('elements/materials/Av/MaterialsFiberManualRecord')
MaterialsFiberManualRecord('element', 'Fiber Manual Record', 'an optional tech field')
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

' loads the MaterialsFiberManualRecord element
include('elements/materials/Av/MaterialsFiberManualRecord')
MaterialsFiberManualRecord('element', 'Fiber Manual Record', 'an optional tech field')
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

' loads the MaterialsFiberManualRecord card
include('elements/materials/Av/MaterialsFiberManualRecord')
MaterialsFiberManualRecordCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFiberManualRecord card
include('elements/materials/Av/MaterialsFiberManualRecord')
MaterialsFiberManualRecordCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
