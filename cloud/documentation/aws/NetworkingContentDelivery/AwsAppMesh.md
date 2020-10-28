# AwsAppMesh
```text
elements/aws/NetworkingContentDelivery/AwsAppMesh
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsAppMesh icon](../../../icons/aws/NetworkingContentDelivery/AwsAppMesh.png) | ![AwsAppMesh element](AwsAppMesh.element.png) | ![AwsAppMesh card](AwsAppMesh.card.png) |
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

' loads the AwsAppMesh element
include('elements/aws/NetworkingContentDelivery/AwsAppMesh')
AwsAppMesh('element', 'App Mesh', 'an optional tech field')
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

' loads the AwsAppMesh element
include('elements/aws/NetworkingContentDelivery/AwsAppMesh')
AwsAppMesh('element', 'App Mesh', 'an optional tech field')
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

' loads the AwsAppMesh card
include('elements/aws/NetworkingContentDelivery/AwsAppMesh')
AwsAppMeshCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsAppMesh card
include('elements/aws/NetworkingContentDelivery/AwsAppMesh')
AwsAppMeshCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
