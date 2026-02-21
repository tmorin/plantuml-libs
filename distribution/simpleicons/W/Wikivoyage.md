# Wikivoyage


```text
simpleicons/W/Wikivoyage
```

```text
include('simpleicons/W/Wikivoyage')
```



| Illustration | Wikivoyage |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Wikivoyage.png) | ![illustration for Wikivoyage](../../simpleicons/W/Wikivoyage.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WikivoyageXs>`
- `<$WikivoyageSm>`
- `<$WikivoyageMd>`
- `<$WikivoyageLg>`





## Wikivoyage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Wikivoyage
include('simpleicons/W/Wikivoyage')

' renders the element
Wikivoyage('Wikivoyage', 'Wikivoyage', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Wikivoyage
include('simpleicons/W/Wikivoyage')

' renders the element
Wikivoyage('Wikivoyage', 'Wikivoyage', 'an optional tech label', 'an optional description')
@enduml
```

