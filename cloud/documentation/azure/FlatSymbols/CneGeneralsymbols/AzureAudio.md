# AzureAudio
```text
elements/azure/FlatSymbols/CneGeneralsymbols/AzureAudio
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureAudio icon](../../../../icons/azure/FlatSymbols/CneGeneralsymbols/AzureAudio.png) | ![AzureAudio element](AzureAudio.element.png) | ![AzureAudio card](AzureAudio.card.png) |
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
include('styles/azure')

' loads the AzureAudio element
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureAudio')
AzureAudio('element', 'Audio', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the style
include('styles/azure')

' loads the AzureAudio element
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureAudio')
AzureAudio('element', 'Audio', 'an optional tech field')
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
include('styles/azure')

' loads the AzureAudio card
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureAudio')
AzureAudioCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the style
include('styles/azure')

' loads the AzureAudio card
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureAudio')
AzureAudioCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
