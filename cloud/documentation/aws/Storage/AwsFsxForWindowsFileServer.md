# AwsFsxForWindowsFileServer
```text
elements/aws/Storage/AwsFsxForWindowsFileServer
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsFsxForWindowsFileServer icon](../../../icons/aws/Storage/AwsFsxForWindowsFileServer.png) | ![AwsFsxForWindowsFileServer element](AwsFsxForWindowsFileServer.element.png) | ![AwsFsxForWindowsFileServer card](AwsFsxForWindowsFileServer.card.png) |
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

' loads the AwsFsxForWindowsFileServer element
include('elements/aws/Storage/AwsFsxForWindowsFileServer')
AwsFsxForWindowsFileServer('element', 'Fsx For Windows File Server', 'an optional tech field')
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

' loads the AwsFsxForWindowsFileServer element
include('elements/aws/Storage/AwsFsxForWindowsFileServer')
AwsFsxForWindowsFileServer('element', 'Fsx For Windows File Server', 'an optional tech field')
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

' loads the AwsFsxForWindowsFileServer card
include('elements/aws/Storage/AwsFsxForWindowsFileServer')
AwsFsxForWindowsFileServerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsFsxForWindowsFileServer card
include('elements/aws/Storage/AwsFsxForWindowsFileServer')
AwsFsxForWindowsFileServerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
