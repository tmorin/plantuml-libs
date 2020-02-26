# MaterialsOpenInBrowser
```text
elements/materials/Action/MaterialsOpenInBrowser
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsOpenInBrowser icon](../../../icons/materials/Action/MaterialsOpenInBrowser.png) | ![MaterialsOpenInBrowser element](MaterialsOpenInBrowser.element.png) | ![MaterialsOpenInBrowser card](MaterialsOpenInBrowser.card.png) |
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

' loads the MaterialsOpenInBrowser element
include('elements/materials/Action/MaterialsOpenInBrowser')
MaterialsOpenInBrowser('element', 'Open In Browser', 'an optional tech field')
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

' loads the MaterialsOpenInBrowser element
include('elements/materials/Action/MaterialsOpenInBrowser')
MaterialsOpenInBrowser('element', 'Open In Browser', 'an optional tech field')
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

' loads the MaterialsOpenInBrowser card
include('elements/materials/Action/MaterialsOpenInBrowser')
MaterialsOpenInBrowserCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsOpenInBrowser card
include('elements/materials/Action/MaterialsOpenInBrowser')
MaterialsOpenInBrowserCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
