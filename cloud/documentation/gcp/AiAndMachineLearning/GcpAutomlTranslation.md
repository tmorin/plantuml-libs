# GcpAutomlTranslation
```text
elements/gcp/AiAndMachineLearning/GcpAutomlTranslation
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpAutomlTranslation icon](../../../icons/gcp/AiAndMachineLearning/GcpAutomlTranslation.png) | ![GcpAutomlTranslation element](GcpAutomlTranslation.element.png) | ![GcpAutomlTranslation card](GcpAutomlTranslation.card.png) |
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

' loads the GcpAutomlTranslation element
include('elements/gcp/AiAndMachineLearning/GcpAutomlTranslation')
GcpAutomlTranslation('element', 'Automl Translation', 'an optional tech field')
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

' loads the GcpAutomlTranslation element
include('elements/gcp/AiAndMachineLearning/GcpAutomlTranslation')
GcpAutomlTranslation('element', 'Automl Translation', 'an optional tech field')
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

' loads the GcpAutomlTranslation card
include('elements/gcp/AiAndMachineLearning/GcpAutomlTranslation')
GcpAutomlTranslationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpAutomlTranslation card
include('elements/gcp/AiAndMachineLearning/GcpAutomlTranslation')
GcpAutomlTranslationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
