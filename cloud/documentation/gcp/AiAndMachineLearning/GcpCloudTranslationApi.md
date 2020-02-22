# GcpCloudTranslationApi
```text
elements/gcp/AiAndMachineLearning/GcpCloudTranslationApi
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudTranslationApi icon](../../../icons/gcp/AiAndMachineLearning/GcpCloudTranslationApi.png) | ![GcpCloudTranslationApi element](GcpCloudTranslationApi.element.png) | ![GcpCloudTranslationApi card](GcpCloudTranslationApi.card.png) |
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

' loads the GcpCloudTranslationApi element
include('elements/gcp/AiAndMachineLearning/GcpCloudTranslationApi')
GcpCloudTranslationApi('element', 'Cloud Translation Api', 'an optional tech field')
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

' loads the GcpCloudTranslationApi element
include('elements/gcp/AiAndMachineLearning/GcpCloudTranslationApi')
GcpCloudTranslationApi('element', 'Cloud Translation Api', 'an optional tech field')
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

' loads the GcpCloudTranslationApi card
include('elements/gcp/AiAndMachineLearning/GcpCloudTranslationApi')
GcpCloudTranslationApiCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudTranslationApi card
include('elements/gcp/AiAndMachineLearning/GcpCloudTranslationApi')
GcpCloudTranslationApiCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
