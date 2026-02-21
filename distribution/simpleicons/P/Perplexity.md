# Perplexity


```text
simpleicons/P/Perplexity
```

```text
include('simpleicons/P/Perplexity')
```



| Illustration | Perplexity |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Perplexity.png) | ![illustration for Perplexity](../../simpleicons/P/Perplexity.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PerplexityXs>`
- `<$PerplexitySm>`
- `<$PerplexityMd>`
- `<$PerplexityLg>`





## Perplexity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Perplexity
include('simpleicons/P/Perplexity')

' renders the element
Perplexity('Perplexity', 'Perplexity', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Perplexity
include('simpleicons/P/Perplexity')

' renders the element
Perplexity('Perplexity', 'Perplexity', 'an optional tech label', 'an optional description')
@enduml
```

