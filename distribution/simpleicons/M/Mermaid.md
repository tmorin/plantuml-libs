# Mermaid


```text
simpleicons/M/Mermaid
```

```text
include('simpleicons/M/Mermaid')
```



| Illustration | Mermaid |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Mermaid.png) | ![illustration for Mermaid](../../simpleicons/M/Mermaid.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MermaidXs>`
- `<$MermaidSm>`
- `<$MermaidMd>`
- `<$MermaidLg>`





## Mermaid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mermaid
include('simpleicons/M/Mermaid')

' renders the element
Mermaid('Mermaid', 'Mermaid', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mermaid
include('simpleicons/M/Mermaid')

' renders the element
Mermaid('Mermaid', 'Mermaid', 'an optional tech label', 'an optional description')
@enduml
```

