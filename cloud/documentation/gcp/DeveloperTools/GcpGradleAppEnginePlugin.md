# GcpGradleAppEnginePlugin
```text
elements/gcp/DeveloperTools/GcpGradleAppEnginePlugin
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpGradleAppEnginePlugin icon](../../../icons/gcp/DeveloperTools/GcpGradleAppEnginePlugin.png) | ![GcpGradleAppEnginePlugin element](GcpGradleAppEnginePlugin.element.png) | ![GcpGradleAppEnginePlugin card](GcpGradleAppEnginePlugin.card.png) |
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

' loads the GcpGradleAppEnginePlugin element
include('elements/gcp/DeveloperTools/GcpGradleAppEnginePlugin')
GcpGradleAppEnginePlugin('element', 'Gradle App Engine Plugin', 'an optional tech field')
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

' loads the GcpGradleAppEnginePlugin element
include('elements/gcp/DeveloperTools/GcpGradleAppEnginePlugin')
GcpGradleAppEnginePlugin('element', 'Gradle App Engine Plugin', 'an optional tech field')
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

' loads the GcpGradleAppEnginePlugin card
include('elements/gcp/DeveloperTools/GcpGradleAppEnginePlugin')
GcpGradleAppEnginePluginCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpGradleAppEnginePlugin card
include('elements/gcp/DeveloperTools/GcpGradleAppEnginePlugin')
GcpGradleAppEnginePluginCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
