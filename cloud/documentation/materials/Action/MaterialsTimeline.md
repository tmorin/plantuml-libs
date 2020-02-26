# MaterialsTimeline
```text
elements/materials/Action/MaterialsTimeline
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsTimeline icon](../../../icons/materials/Action/MaterialsTimeline.png) | ![MaterialsTimeline element](MaterialsTimeline.element.png) | ![MaterialsTimeline card](MaterialsTimeline.card.png) |
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
include('styles/materials')

' loads the MaterialsTimeline element
include('elements/materials/Action/MaterialsTimeline')
MaterialsTimeline('element', 'Timeline', 'an optional tech field')
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

' loads the MaterialsTimeline element
include('elements/materials/Action/MaterialsTimeline')
MaterialsTimeline('element', 'Timeline', 'an optional tech field')
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
include('styles/materials')

' loads the MaterialsTimeline card
include('elements/materials/Action/MaterialsTimeline')
MaterialsTimelineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsTimeline card
include('elements/materials/Action/MaterialsTimeline')
MaterialsTimelineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
