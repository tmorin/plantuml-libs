# Britishairways


```text
simpleicons-8/B/Britishairways
```

```text
include('simpleicons-8/B/Britishairways')
```



| Illustration | Britishairways |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Britishairways.png) | ![illustration for Britishairways](../../simpleicons-8/B/Britishairways.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BritishairwaysXs>`
- `<$BritishairwaysSm>`
- `<$BritishairwaysMd>`
- `<$BritishairwaysLg>`





## Britishairways

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Britishairways
include('simpleicons-8/B/Britishairways')

' renders the element
Britishairways('Britishairways', 'Britishairways', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Britishairways
include('simpleicons-8/B/Britishairways')

' renders the element
Britishairways('Britishairways', 'Britishairways', 'an optional tech label', 'an optional description')
@enduml
```

