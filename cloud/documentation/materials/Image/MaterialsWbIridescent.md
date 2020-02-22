# MaterialsWbIridescent
```text
elements/materials/Image/MaterialsWbIridescent
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsWbIridescent icon](../../../icons/materials/Image/MaterialsWbIridescent.png) | ![MaterialsWbIridescent element](MaterialsWbIridescent.element.png) | ![MaterialsWbIridescent card](MaterialsWbIridescent.card.png) |
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

' loads the MaterialsWbIridescent element
include('elements/materials/Image/MaterialsWbIridescent')
MaterialsWbIridescent('element', 'Wb Iridescent', 'an optional tech field')
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

' loads the MaterialsWbIridescent element
include('elements/materials/Image/MaterialsWbIridescent')
MaterialsWbIridescent('element', 'Wb Iridescent', 'an optional tech field')
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

' loads the MaterialsWbIridescent card
include('elements/materials/Image/MaterialsWbIridescent')
MaterialsWbIridescentCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsWbIridescent card
include('elements/materials/Image/MaterialsWbIridescent')
MaterialsWbIridescentCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
