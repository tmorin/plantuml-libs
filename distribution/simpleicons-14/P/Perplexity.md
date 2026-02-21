# Perplexity


```text
simpleicons-14/P/Perplexity
```

```text
include('simpleicons-14/P/Perplexity')
```



| Illustration | Perplexity |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Perplexity.png) | ![illustration for Perplexity](../../simpleicons-14/P/Perplexity.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Perplexity
include('simpleicons-14/P/Perplexity')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Perplexity
include('simpleicons-14/P/Perplexity')

' renders the element
Perplexity('Perplexity', 'Perplexity', 'an optional tech label', 'an optional description')
@enduml
```

