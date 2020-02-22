# MaterialsBrightness3
```text
elements/materials/Image/MaterialsBrightness3
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBrightness3 icon](../../../icons/materials/Image/MaterialsBrightness3.png) | ![MaterialsBrightness3 element](MaterialsBrightness3.element.png) | ![MaterialsBrightness3 card](MaterialsBrightness3.card.png) |
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

' loads the MaterialsBrightness3 element
include('elements/materials/Image/MaterialsBrightness3')
MaterialsBrightness3('element', 'Brightness3', 'an optional tech field')
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

' loads the MaterialsBrightness3 element
include('elements/materials/Image/MaterialsBrightness3')
MaterialsBrightness3('element', 'Brightness3', 'an optional tech field')
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

' loads the MaterialsBrightness3 card
include('elements/materials/Image/MaterialsBrightness3')
MaterialsBrightness3Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBrightness3 card
include('elements/materials/Image/MaterialsBrightness3')
MaterialsBrightness3Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
