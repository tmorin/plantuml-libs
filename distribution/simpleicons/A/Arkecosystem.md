# Arkecosystem


```text
simpleicons/A/Arkecosystem
```

```text
include('simpleicons/A/Arkecosystem')
```



| Illustration | Arkecosystem |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Arkecosystem.png) | ![illustration for Arkecosystem](../../simpleicons/A/Arkecosystem.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArkecosystemXs>`
- `<$ArkecosystemSm>`
- `<$ArkecosystemMd>`
- `<$ArkecosystemLg>`





## Arkecosystem

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Arkecosystem
include('simpleicons/A/Arkecosystem')

' renders the element
Arkecosystem('Arkecosystem', 'Arkecosystem', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Arkecosystem
include('simpleicons/A/Arkecosystem')

' renders the element
Arkecosystem('Arkecosystem', 'Arkecosystem', 'an optional tech label', 'an optional description')
@enduml
```

