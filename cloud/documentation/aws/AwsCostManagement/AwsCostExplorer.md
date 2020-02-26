# AwsCostExplorer
```text
elements/aws/AwsCostManagement/AwsCostExplorer
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCostExplorer icon](../../../icons/aws/AwsCostManagement/AwsCostExplorer.png) | ![AwsCostExplorer element](AwsCostExplorer.element.png) | ![AwsCostExplorer card](AwsCostExplorer.card.png) |
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
include('styles/aws')

' loads the AwsCostExplorer element
include('elements/aws/AwsCostManagement/AwsCostExplorer')
AwsCostExplorer('element', 'Cost Explorer', 'an optional tech field')
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
include('styles/aws')

' loads the AwsCostExplorer element
include('elements/aws/AwsCostManagement/AwsCostExplorer')
AwsCostExplorer('element', 'Cost Explorer', 'an optional tech field')
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
include('styles/aws')

' loads the AwsCostExplorer card
include('elements/aws/AwsCostManagement/AwsCostExplorer')
AwsCostExplorerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/aws')

' loads the AwsCostExplorer card
include('elements/aws/AwsCostManagement/AwsCostExplorer')
AwsCostExplorerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
