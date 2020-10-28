# GcpCloudCodeForIntellij
```text
elements/gcp/DeveloperTools/GcpCloudCodeForIntellij
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudCodeForIntellij icon](../../../icons/gcp/DeveloperTools/GcpCloudCodeForIntellij.png) | ![GcpCloudCodeForIntellij element](GcpCloudCodeForIntellij.element.png) | ![GcpCloudCodeForIntellij card](GcpCloudCodeForIntellij.card.png) |
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
include('styles/gcp')

' loads the GcpCloudCodeForIntellij element
include('elements/gcp/DeveloperTools/GcpCloudCodeForIntellij')
GcpCloudCodeForIntellij('element', 'Cloud Code For Intellij', 'an optional tech field')
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

' loads the GcpCloudCodeForIntellij element
include('elements/gcp/DeveloperTools/GcpCloudCodeForIntellij')
GcpCloudCodeForIntellij('element', 'Cloud Code For Intellij', 'an optional tech field')
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
include('styles/gcp')

' loads the GcpCloudCodeForIntellij card
include('elements/gcp/DeveloperTools/GcpCloudCodeForIntellij')
GcpCloudCodeForIntellijCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudCodeForIntellij card
include('elements/gcp/DeveloperTools/GcpCloudCodeForIntellij')
GcpCloudCodeForIntellijCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
