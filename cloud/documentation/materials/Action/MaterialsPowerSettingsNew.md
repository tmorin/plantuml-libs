# MaterialsPowerSettingsNew
```text
elements/materials/Action/MaterialsPowerSettingsNew
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPowerSettingsNew icon](../../../icons/materials/Action/MaterialsPowerSettingsNew.png) | ![MaterialsPowerSettingsNew element](MaterialsPowerSettingsNew.element.png) | ![MaterialsPowerSettingsNew card](MaterialsPowerSettingsNew.card.png) |
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

' loads the MaterialsPowerSettingsNew element
include('elements/materials/Action/MaterialsPowerSettingsNew')
MaterialsPowerSettingsNew('element', 'Power Settings New', 'an optional tech field')
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

' loads the MaterialsPowerSettingsNew element
include('elements/materials/Action/MaterialsPowerSettingsNew')
MaterialsPowerSettingsNew('element', 'Power Settings New', 'an optional tech field')
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

' loads the MaterialsPowerSettingsNew card
include('elements/materials/Action/MaterialsPowerSettingsNew')
MaterialsPowerSettingsNewCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPowerSettingsNew card
include('elements/materials/Action/MaterialsPowerSettingsNew')
MaterialsPowerSettingsNewCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
