# Reverbnation


```text
simpleicons/R/Reverbnation
```

```text
include('simpleicons/R/Reverbnation')
```



| Illustration | Reverbnation |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Reverbnation.png) | ![illustration for Reverbnation](../../simpleicons/R/Reverbnation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ReverbnationXs>`
- `<$ReverbnationSm>`
- `<$ReverbnationMd>`
- `<$ReverbnationLg>`





## Reverbnation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Reverbnation
include('simpleicons/R/Reverbnation')

' renders the element
Reverbnation('Reverbnation', 'Reverbnation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Reverbnation
include('simpleicons/R/Reverbnation')

' renders the element
Reverbnation('Reverbnation', 'Reverbnation', 'an optional tech label', 'an optional description')
@enduml
```

