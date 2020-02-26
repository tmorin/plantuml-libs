# MaterialsChromeReaderMode
```text
elements/materials/Action/MaterialsChromeReaderMode
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsChromeReaderMode icon](../../../icons/materials/Action/MaterialsChromeReaderMode.png) | ![MaterialsChromeReaderMode element](MaterialsChromeReaderMode.element.png) | ![MaterialsChromeReaderMode card](MaterialsChromeReaderMode.card.png) |
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

' loads the MaterialsChromeReaderMode element
include('elements/materials/Action/MaterialsChromeReaderMode')
MaterialsChromeReaderMode('element', 'Chrome Reader Mode', 'an optional tech field')
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

' loads the MaterialsChromeReaderMode element
include('elements/materials/Action/MaterialsChromeReaderMode')
MaterialsChromeReaderMode('element', 'Chrome Reader Mode', 'an optional tech field')
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

' loads the MaterialsChromeReaderMode card
include('elements/materials/Action/MaterialsChromeReaderMode')
MaterialsChromeReaderModeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsChromeReaderMode card
include('elements/materials/Action/MaterialsChromeReaderMode')
MaterialsChromeReaderModeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
