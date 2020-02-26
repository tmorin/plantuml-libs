# MaterialsPhonelinkOff
```text
elements/materials/Hardware/MaterialsPhonelinkOff
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPhonelinkOff icon](../../../icons/materials/Hardware/MaterialsPhonelinkOff.png) | ![MaterialsPhonelinkOff element](MaterialsPhonelinkOff.element.png) | ![MaterialsPhonelinkOff card](MaterialsPhonelinkOff.card.png) |
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

' loads the MaterialsPhonelinkOff element
include('elements/materials/Hardware/MaterialsPhonelinkOff')
MaterialsPhonelinkOff('element', 'Phonelink Off', 'an optional tech field')
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

' loads the MaterialsPhonelinkOff element
include('elements/materials/Hardware/MaterialsPhonelinkOff')
MaterialsPhonelinkOff('element', 'Phonelink Off', 'an optional tech field')
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

' loads the MaterialsPhonelinkOff card
include('elements/materials/Hardware/MaterialsPhonelinkOff')
MaterialsPhonelinkOffCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPhonelinkOff card
include('elements/materials/Hardware/MaterialsPhonelinkOff')
MaterialsPhonelinkOffCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
