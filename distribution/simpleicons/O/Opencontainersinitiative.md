# Opencontainersinitiative


```text
simpleicons/O/Opencontainersinitiative
```

```text
include('simpleicons/O/Opencontainersinitiative')
```



| Illustration | Opencontainersinitiative |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Opencontainersinitiative.png) | ![illustration for Opencontainersinitiative](../../simpleicons/O/Opencontainersinitiative.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpencontainersinitiativeXs>`
- `<$OpencontainersinitiativeSm>`
- `<$OpencontainersinitiativeMd>`
- `<$OpencontainersinitiativeLg>`





## Opencontainersinitiative

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Opencontainersinitiative
include('simpleicons/O/Opencontainersinitiative')

' renders the element
Opencontainersinitiative('Opencontainersinitiative', 'Opencontainersinitiative', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Opencontainersinitiative
include('simpleicons/O/Opencontainersinitiative')

' renders the element
Opencontainersinitiative('Opencontainersinitiative', 'Opencontainersinitiative', 'an optional tech label', 'an optional description')
@enduml
```

