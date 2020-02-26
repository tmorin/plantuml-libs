# GcpCloudIotCore
```text
elements/gcp/InternetOfThings/GcpCloudIotCore
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudIotCore icon](../../../icons/gcp/InternetOfThings/GcpCloudIotCore.png) | ![GcpCloudIotCore element](GcpCloudIotCore.element.png) | ![GcpCloudIotCore card](GcpCloudIotCore.card.png) |
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

' loads the GcpCloudIotCore element
include('elements/gcp/InternetOfThings/GcpCloudIotCore')
GcpCloudIotCore('element', 'Cloud Iot Core', 'an optional tech field')
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

' loads the GcpCloudIotCore element
include('elements/gcp/InternetOfThings/GcpCloudIotCore')
GcpCloudIotCore('element', 'Cloud Iot Core', 'an optional tech field')
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

' loads the GcpCloudIotCore card
include('elements/gcp/InternetOfThings/GcpCloudIotCore')
GcpCloudIotCoreCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudIotCore card
include('elements/gcp/InternetOfThings/GcpCloudIotCore')
GcpCloudIotCoreCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
