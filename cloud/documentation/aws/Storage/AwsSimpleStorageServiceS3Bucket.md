# AwsSimpleStorageServiceS3Bucket
```text
elements/aws/Storage/AwsSimpleStorageServiceS3Bucket
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsSimpleStorageServiceS3Bucket icon](../../../icons/aws/Storage/AwsSimpleStorageServiceS3Bucket.png) | ![AwsSimpleStorageServiceS3Bucket element](AwsSimpleStorageServiceS3Bucket.element.png) | ![AwsSimpleStorageServiceS3Bucket card](AwsSimpleStorageServiceS3Bucket.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsSimpleStorageServiceS3Bucket element
include('elements/aws/Storage/AwsSimpleStorageServiceS3Bucket')
AwsSimpleStorageServiceS3Bucket('element', 'Simple Storage Service S3 Bucket', 'an optional tech field')
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

' loads the AwsSimpleStorageServiceS3Bucket element
include('elements/aws/Storage/AwsSimpleStorageServiceS3Bucket')
AwsSimpleStorageServiceS3Bucket('element', 'Simple Storage Service S3 Bucket', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsSimpleStorageServiceS3Bucket card
include('elements/aws/Storage/AwsSimpleStorageServiceS3Bucket')
AwsSimpleStorageServiceS3BucketCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsSimpleStorageServiceS3Bucket card
include('elements/aws/Storage/AwsSimpleStorageServiceS3Bucket')
AwsSimpleStorageServiceS3BucketCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
