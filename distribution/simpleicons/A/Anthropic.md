# Anthropic


```text
simpleicons/A/Anthropic
```

```text
include('simpleicons/A/Anthropic')
```



| Illustration | Anthropic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Anthropic.png) | ![illustration for Anthropic](../../simpleicons/A/Anthropic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AnthropicXs>`
- `<$AnthropicSm>`
- `<$AnthropicMd>`
- `<$AnthropicLg>`





## Anthropic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Anthropic
include('simpleicons/A/Anthropic')

' renders the element
Anthropic('Anthropic', 'Anthropic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Anthropic
include('simpleicons/A/Anthropic')

' renders the element
Anthropic('Anthropic', 'Anthropic', 'an optional tech label', 'an optional description')
@enduml
```

