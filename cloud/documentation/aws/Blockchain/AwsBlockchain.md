# AwsBlockchain
```text
elements/aws/Blockchain/AwsBlockchain
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsBlockchain icon](../../../icons/aws/Blockchain/AwsBlockchain.png) | ![AwsBlockchain element](AwsBlockchain.element.png) | ![AwsBlockchain card](AwsBlockchain.card.png) |
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

' loads the AwsBlockchain element
include('elements/aws/Blockchain/AwsBlockchain')
AwsBlockchain('element', 'Blockchain', 'an optional tech field')
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

' loads the AwsBlockchain element
include('elements/aws/Blockchain/AwsBlockchain')
AwsBlockchain('element', 'Blockchain', 'an optional tech field')
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

' loads the AwsBlockchain card
include('elements/aws/Blockchain/AwsBlockchain')
AwsBlockchainCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsBlockchain card
include('elements/aws/Blockchain/AwsBlockchain')
AwsBlockchainCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
