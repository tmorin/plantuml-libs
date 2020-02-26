# MaterialsWbIncandescent
```text
elements/materials/Image/MaterialsWbIncandescent
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsWbIncandescent icon](../../../icons/materials/Image/MaterialsWbIncandescent.png) | ![MaterialsWbIncandescent element](MaterialsWbIncandescent.element.png) | ![MaterialsWbIncandescent card](MaterialsWbIncandescent.card.png) |
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

' loads the MaterialsWbIncandescent element
include('elements/materials/Image/MaterialsWbIncandescent')
MaterialsWbIncandescent('element', 'Wb Incandescent', 'an optional tech field')
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

' loads the MaterialsWbIncandescent element
include('elements/materials/Image/MaterialsWbIncandescent')
MaterialsWbIncandescent('element', 'Wb Incandescent', 'an optional tech field')
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

' loads the MaterialsWbIncandescent card
include('elements/materials/Image/MaterialsWbIncandescent')
MaterialsWbIncandescentCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsWbIncandescent card
include('elements/materials/Image/MaterialsWbIncandescent')
MaterialsWbIncandescentCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
