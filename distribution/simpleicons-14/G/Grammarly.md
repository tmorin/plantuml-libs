# Grammarly


```text
simpleicons-14/G/Grammarly
```

```text
include('simpleicons-14/G/Grammarly')
```



| Illustration | Grammarly |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Grammarly.png) | ![illustration for Grammarly](../../simpleicons-14/G/Grammarly.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GrammarlyXs>`
- `<$GrammarlySm>`
- `<$GrammarlyMd>`
- `<$GrammarlyLg>`





## Grammarly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Grammarly
include('simpleicons-14/G/Grammarly')

' renders the element
Grammarly('Grammarly', 'Grammarly', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Grammarly
include('simpleicons-14/G/Grammarly')

' renders the element
Grammarly('Grammarly', 'Grammarly', 'an optional tech label', 'an optional description')
@enduml
```

