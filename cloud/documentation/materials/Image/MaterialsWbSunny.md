# MaterialsWbSunny
```text
elements/materials/Image/MaterialsWbSunny
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsWbSunny icon](../../../icons/materials/Image/MaterialsWbSunny.png) | ![MaterialsWbSunny element](MaterialsWbSunny.element.png) | ![MaterialsWbSunny card](MaterialsWbSunny.card.png) |
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

' loads the MaterialsWbSunny element
include('elements/materials/Image/MaterialsWbSunny')
MaterialsWbSunny('element', 'Wb Sunny', 'an optional tech field')
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

' loads the MaterialsWbSunny element
include('elements/materials/Image/MaterialsWbSunny')
MaterialsWbSunny('element', 'Wb Sunny', 'an optional tech field')
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

' loads the MaterialsWbSunny card
include('elements/materials/Image/MaterialsWbSunny')
MaterialsWbSunnyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsWbSunny card
include('elements/materials/Image/MaterialsWbSunny')
MaterialsWbSunnyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
