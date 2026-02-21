# Pegasusairlines


```text
simpleicons/P/Pegasusairlines
```

```text
include('simpleicons/P/Pegasusairlines')
```



| Illustration | Pegasusairlines |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Pegasusairlines.png) | ![illustration for Pegasusairlines](../../simpleicons/P/Pegasusairlines.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PegasusairlinesXs>`
- `<$PegasusairlinesSm>`
- `<$PegasusairlinesMd>`
- `<$PegasusairlinesLg>`





## Pegasusairlines

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pegasusairlines
include('simpleicons/P/Pegasusairlines')

' renders the element
Pegasusairlines('Pegasusairlines', 'Pegasusairlines', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pegasusairlines
include('simpleicons/P/Pegasusairlines')

' renders the element
Pegasusairlines('Pegasusairlines', 'Pegasusairlines', 'an optional tech label', 'an optional description')
@enduml
```

