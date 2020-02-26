# GcpAdvancedSolutionsLab
```text
elements/gcp/AiAndMachineLearning/GcpAdvancedSolutionsLab
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpAdvancedSolutionsLab icon](../../../icons/gcp/AiAndMachineLearning/GcpAdvancedSolutionsLab.png) | ![GcpAdvancedSolutionsLab element](GcpAdvancedSolutionsLab.element.png) | ![GcpAdvancedSolutionsLab card](GcpAdvancedSolutionsLab.card.png) |
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
include('styles/gcp')

' loads the GcpAdvancedSolutionsLab element
include('elements/gcp/AiAndMachineLearning/GcpAdvancedSolutionsLab')
GcpAdvancedSolutionsLab('element', 'Advanced Solutions Lab', 'an optional tech field')
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
include('styles/gcp')

' loads the GcpAdvancedSolutionsLab element
include('elements/gcp/AiAndMachineLearning/GcpAdvancedSolutionsLab')
GcpAdvancedSolutionsLab('element', 'Advanced Solutions Lab', 'an optional tech field')
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
include('styles/gcp')

' loads the GcpAdvancedSolutionsLab card
include('elements/gcp/AiAndMachineLearning/GcpAdvancedSolutionsLab')
GcpAdvancedSolutionsLabCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/gcp')

' loads the GcpAdvancedSolutionsLab card
include('elements/gcp/AiAndMachineLearning/GcpAdvancedSolutionsLab')
GcpAdvancedSolutionsLabCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
