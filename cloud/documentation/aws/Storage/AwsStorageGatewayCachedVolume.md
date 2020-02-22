# AwsStorageGatewayCachedVolume
```text
elements/aws/Storage/AwsStorageGatewayCachedVolume
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsStorageGatewayCachedVolume icon](../../../icons/aws/Storage/AwsStorageGatewayCachedVolume.png) | ![AwsStorageGatewayCachedVolume element](AwsStorageGatewayCachedVolume.element.png) | ![AwsStorageGatewayCachedVolume card](AwsStorageGatewayCachedVolume.card.png) |
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

' loads the AwsStorageGatewayCachedVolume element
include('elements/aws/Storage/AwsStorageGatewayCachedVolume')
AwsStorageGatewayCachedVolume('element', 'Storage Gateway Cached Volume', 'an optional tech field')
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

' loads the AwsStorageGatewayCachedVolume element
include('elements/aws/Storage/AwsStorageGatewayCachedVolume')
AwsStorageGatewayCachedVolume('element', 'Storage Gateway Cached Volume', 'an optional tech field')
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

' loads the AwsStorageGatewayCachedVolume card
include('elements/aws/Storage/AwsStorageGatewayCachedVolume')
AwsStorageGatewayCachedVolumeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsStorageGatewayCachedVolume card
include('elements/aws/Storage/AwsStorageGatewayCachedVolume')
AwsStorageGatewayCachedVolumeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
