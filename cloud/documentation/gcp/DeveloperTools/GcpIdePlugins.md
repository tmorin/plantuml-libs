# GcpIdePlugins
```text
elements/gcp/DeveloperTools/GcpIdePlugins
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpIdePlugins icon](../../../icons/gcp/DeveloperTools/GcpIdePlugins.png) | ![GcpIdePlugins element](GcpIdePlugins.element.png) | ![GcpIdePlugins card](GcpIdePlugins.card.png) |
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

' loads the GcpIdePlugins element
include('elements/gcp/DeveloperTools/GcpIdePlugins')
GcpIdePlugins('element', 'Ide Plugins', 'an optional tech field')
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

' loads the GcpIdePlugins element
include('elements/gcp/DeveloperTools/GcpIdePlugins')
GcpIdePlugins('element', 'Ide Plugins', 'an optional tech field')
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

' loads the GcpIdePlugins card
include('elements/gcp/DeveloperTools/GcpIdePlugins')
GcpIdePluginsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpIdePlugins card
include('elements/gcp/DeveloperTools/GcpIdePlugins')
GcpIdePluginsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
