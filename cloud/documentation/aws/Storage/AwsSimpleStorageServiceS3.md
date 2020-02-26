# AwsSimpleStorageServiceS3
```text
elements/aws/Storage/AwsSimpleStorageServiceS3
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsSimpleStorageServiceS3 icon](../../../icons/aws/Storage/AwsSimpleStorageServiceS3.png) | ![AwsSimpleStorageServiceS3 element](AwsSimpleStorageServiceS3.element.png) | ![AwsSimpleStorageServiceS3 card](AwsSimpleStorageServiceS3.card.png) |
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

' loads the AwsSimpleStorageServiceS3 element
include('elements/aws/Storage/AwsSimpleStorageServiceS3')
AwsSimpleStorageServiceS3('element', 'Simple Storage Service S3', 'an optional tech field')
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

' loads the AwsSimpleStorageServiceS3 element
include('elements/aws/Storage/AwsSimpleStorageServiceS3')
AwsSimpleStorageServiceS3('element', 'Simple Storage Service S3', 'an optional tech field')
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

' loads the AwsSimpleStorageServiceS3 card
include('elements/aws/Storage/AwsSimpleStorageServiceS3')
AwsSimpleStorageServiceS3Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsSimpleStorageServiceS3 card
include('elements/aws/Storage/AwsSimpleStorageServiceS3')
AwsSimpleStorageServiceS3Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
