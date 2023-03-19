# Arkecosystem


```text
simpleicons-8/A/Arkecosystem
```

```text
include('simpleicons-8/A/Arkecosystem')
```



| Illustration | Arkecosystem |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Arkecosystem.png) | ![illustration for Arkecosystem](../../simpleicons-8/A/Arkecosystem.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Arkecosystem
include('simpleicons-8/A/Arkecosystem')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Arkecosystem
include('simpleicons-8/A/Arkecosystem')

' renders the element
Arkecosystem('Arkecosystem', 'Arkecosystem', 'an optional tech label', 'an optional description')
@enduml
```

