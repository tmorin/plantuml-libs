# MaterialsMarkunreadMailbox
```text
elements/materials/Action/MaterialsMarkunreadMailbox
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsMarkunreadMailbox icon](../../../icons/materials/Action/MaterialsMarkunreadMailbox.png) | ![MaterialsMarkunreadMailbox element](MaterialsMarkunreadMailbox.element.png) | ![MaterialsMarkunreadMailbox card](MaterialsMarkunreadMailbox.card.png) |
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

' loads the MaterialsMarkunreadMailbox element
include('elements/materials/Action/MaterialsMarkunreadMailbox')
MaterialsMarkunreadMailbox('element', 'Markunread Mailbox', 'an optional tech field')
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

' loads the MaterialsMarkunreadMailbox element
include('elements/materials/Action/MaterialsMarkunreadMailbox')
MaterialsMarkunreadMailbox('element', 'Markunread Mailbox', 'an optional tech field')
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

' loads the MaterialsMarkunreadMailbox card
include('elements/materials/Action/MaterialsMarkunreadMailbox')
MaterialsMarkunreadMailboxCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsMarkunreadMailbox card
include('elements/materials/Action/MaterialsMarkunreadMailbox')
MaterialsMarkunreadMailboxCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
