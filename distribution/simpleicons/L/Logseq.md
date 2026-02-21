# Logseq


```text
simpleicons/L/Logseq
```

```text
include('simpleicons/L/Logseq')
```



| Illustration | Logseq |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Logseq.png) | ![illustration for Logseq](../../simpleicons/L/Logseq.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LogseqXs>`
- `<$LogseqSm>`
- `<$LogseqMd>`
- `<$LogseqLg>`





## Logseq

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Logseq
include('simpleicons/L/Logseq')

' renders the element
Logseq('Logseq', 'Logseq', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Logseq
include('simpleicons/L/Logseq')

' renders the element
Logseq('Logseq', 'Logseq', 'an optional tech label', 'an optional description')
@enduml
```

