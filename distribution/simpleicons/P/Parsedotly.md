# Parsedotly


```text
simpleicons/P/Parsedotly
```

```text
include('simpleicons/P/Parsedotly')
```



| Illustration | Parsedotly |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Parsedotly.png) | ![illustration for Parsedotly](../../simpleicons/P/Parsedotly.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ParsedotlyXs>`
- `<$ParsedotlySm>`
- `<$ParsedotlyMd>`
- `<$ParsedotlyLg>`





## Parsedotly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Parsedotly
include('simpleicons/P/Parsedotly')

' renders the element
Parsedotly('Parsedotly', 'Parsedotly', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Parsedotly
include('simpleicons/P/Parsedotly')

' renders the element
Parsedotly('Parsedotly', 'Parsedotly', 'an optional tech label', 'an optional description')
@enduml
```

