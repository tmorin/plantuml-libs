# MaterialsBrightness6
```text
elements/materials/Image/MaterialsBrightness6
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBrightness6 icon](../../../icons/materials/Image/MaterialsBrightness6.png) | ![MaterialsBrightness6 element](MaterialsBrightness6.element.png) | ![MaterialsBrightness6 card](MaterialsBrightness6.card.png) |
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

' loads the MaterialsBrightness6 element
include('elements/materials/Image/MaterialsBrightness6')
MaterialsBrightness6('element', 'Brightness6', 'an optional tech field')
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

' loads the MaterialsBrightness6 element
include('elements/materials/Image/MaterialsBrightness6')
MaterialsBrightness6('element', 'Brightness6', 'an optional tech field')
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

' loads the MaterialsBrightness6 card
include('elements/materials/Image/MaterialsBrightness6')
MaterialsBrightness6Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBrightness6 card
include('elements/materials/Image/MaterialsBrightness6')
MaterialsBrightness6Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
