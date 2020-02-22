# MaterialsFolderSpecial
```text
elements/materials/Notification/MaterialsFolderSpecial
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFolderSpecial icon](../../../icons/materials/Notification/MaterialsFolderSpecial.png) | ![MaterialsFolderSpecial element](MaterialsFolderSpecial.element.png) | ![MaterialsFolderSpecial card](MaterialsFolderSpecial.card.png) |
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

' loads the MaterialsFolderSpecial element
include('elements/materials/Notification/MaterialsFolderSpecial')
MaterialsFolderSpecial('element', 'Folder Special', 'an optional tech field')
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

' loads the MaterialsFolderSpecial element
include('elements/materials/Notification/MaterialsFolderSpecial')
MaterialsFolderSpecial('element', 'Folder Special', 'an optional tech field')
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

' loads the MaterialsFolderSpecial card
include('elements/materials/Notification/MaterialsFolderSpecial')
MaterialsFolderSpecialCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFolderSpecial card
include('elements/materials/Notification/MaterialsFolderSpecial')
MaterialsFolderSpecialCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
