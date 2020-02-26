# MaterialsLanguage
```text
elements/materials/Action/MaterialsLanguage
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLanguage icon](../../../icons/materials/Action/MaterialsLanguage.png) | ![MaterialsLanguage element](MaterialsLanguage.element.png) | ![MaterialsLanguage card](MaterialsLanguage.card.png) |
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

' loads the MaterialsLanguage element
include('elements/materials/Action/MaterialsLanguage')
MaterialsLanguage('element', 'Language', 'an optional tech field')
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

' loads the MaterialsLanguage element
include('elements/materials/Action/MaterialsLanguage')
MaterialsLanguage('element', 'Language', 'an optional tech field')
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

' loads the MaterialsLanguage card
include('elements/materials/Action/MaterialsLanguage')
MaterialsLanguageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLanguage card
include('elements/materials/Action/MaterialsLanguage')
MaterialsLanguageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
