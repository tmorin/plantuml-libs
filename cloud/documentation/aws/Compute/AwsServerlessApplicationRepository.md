# AwsServerlessApplicationRepository
```text
elements/aws/Compute/AwsServerlessApplicationRepository
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsServerlessApplicationRepository icon](../../../icons/aws/Compute/AwsServerlessApplicationRepository.png) | ![AwsServerlessApplicationRepository element](AwsServerlessApplicationRepository.element.png) | ![AwsServerlessApplicationRepository card](AwsServerlessApplicationRepository.card.png) |
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

' loads the AwsServerlessApplicationRepository element
include('elements/aws/Compute/AwsServerlessApplicationRepository')
AwsServerlessApplicationRepository('element', 'Serverless Application Repository', 'an optional tech field')
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

' loads the AwsServerlessApplicationRepository element
include('elements/aws/Compute/AwsServerlessApplicationRepository')
AwsServerlessApplicationRepository('element', 'Serverless Application Repository', 'an optional tech field')
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

' loads the AwsServerlessApplicationRepository card
include('elements/aws/Compute/AwsServerlessApplicationRepository')
AwsServerlessApplicationRepositoryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsServerlessApplicationRepository card
include('elements/aws/Compute/AwsServerlessApplicationRepository')
AwsServerlessApplicationRepositoryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
