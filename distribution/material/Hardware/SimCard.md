# SimCard


```text
material/Hardware/SimCard
```

```text
include('material/Hardware/SimCard')
```



| Illustration | SimCard |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/SimCard.png) | ![illustration for SimCard](../../material/Hardware/SimCard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SimCardXs>`
- `<$SimCardSm>`
- `<$SimCardMd>`
- `<$SimCardLg>`





## SimCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SimCard
include('material/Hardware/SimCard')

' renders the element
SimCard('SimCard', 'Sim Card', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SimCard
include('material/Hardware/SimCard')

' renders the element
SimCard('SimCard', 'Sim Card', 'an optional tech label', 'an optional description')
@enduml
```

