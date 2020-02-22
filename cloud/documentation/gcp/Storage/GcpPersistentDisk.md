# GcpPersistentDisk
```text
elements/gcp/Storage/GcpPersistentDisk
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpPersistentDisk icon](../../../icons/gcp/Storage/GcpPersistentDisk.png) | ![GcpPersistentDisk element](GcpPersistentDisk.element.png) | ![GcpPersistentDisk card](GcpPersistentDisk.card.png) |
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

' loads the GcpPersistentDisk element
include('elements/gcp/Storage/GcpPersistentDisk')
GcpPersistentDisk('element', 'Persistent Disk', 'an optional tech field')
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

' loads the GcpPersistentDisk element
include('elements/gcp/Storage/GcpPersistentDisk')
GcpPersistentDisk('element', 'Persistent Disk', 'an optional tech field')
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

' loads the GcpPersistentDisk card
include('elements/gcp/Storage/GcpPersistentDisk')
GcpPersistentDiskCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpPersistentDisk card
include('elements/gcp/Storage/GcpPersistentDisk')
GcpPersistentDiskCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
