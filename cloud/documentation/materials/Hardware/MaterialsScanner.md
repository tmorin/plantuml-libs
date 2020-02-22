# MaterialsScanner
```text
elements/materials/Hardware/MaterialsScanner
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsScanner icon](../../../icons/materials/Hardware/MaterialsScanner.png) | ![MaterialsScanner element](MaterialsScanner.element.png) | ![MaterialsScanner card](MaterialsScanner.card.png) |
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

' loads the MaterialsScanner element
include('elements/materials/Hardware/MaterialsScanner')
MaterialsScanner('element', 'Scanner', 'an optional tech field')
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

' loads the MaterialsScanner element
include('elements/materials/Hardware/MaterialsScanner')
MaterialsScanner('element', 'Scanner', 'an optional tech field')
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

' loads the MaterialsScanner card
include('elements/materials/Hardware/MaterialsScanner')
MaterialsScannerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsScanner card
include('elements/materials/Hardware/MaterialsScanner')
MaterialsScannerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
