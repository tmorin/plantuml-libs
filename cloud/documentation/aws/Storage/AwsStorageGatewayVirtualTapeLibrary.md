# AwsStorageGatewayVirtualTapeLibrary
```text
elements/aws/Storage/AwsStorageGatewayVirtualTapeLibrary
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsStorageGatewayVirtualTapeLibrary icon](../../../icons/aws/Storage/AwsStorageGatewayVirtualTapeLibrary.png) | ![AwsStorageGatewayVirtualTapeLibrary element](AwsStorageGatewayVirtualTapeLibrary.element.png) | ![AwsStorageGatewayVirtualTapeLibrary card](AwsStorageGatewayVirtualTapeLibrary.card.png) |
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

' loads the AwsStorageGatewayVirtualTapeLibrary element
include('elements/aws/Storage/AwsStorageGatewayVirtualTapeLibrary')
AwsStorageGatewayVirtualTapeLibrary('element', 'Storage Gateway Virtual Tape Library', 'an optional tech field')
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

' loads the AwsStorageGatewayVirtualTapeLibrary element
include('elements/aws/Storage/AwsStorageGatewayVirtualTapeLibrary')
AwsStorageGatewayVirtualTapeLibrary('element', 'Storage Gateway Virtual Tape Library', 'an optional tech field')
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

' loads the AwsStorageGatewayVirtualTapeLibrary card
include('elements/aws/Storage/AwsStorageGatewayVirtualTapeLibrary')
AwsStorageGatewayVirtualTapeLibraryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsStorageGatewayVirtualTapeLibrary card
include('elements/aws/Storage/AwsStorageGatewayVirtualTapeLibrary')
AwsStorageGatewayVirtualTapeLibraryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
