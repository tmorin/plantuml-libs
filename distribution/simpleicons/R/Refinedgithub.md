# Refinedgithub


```text
simpleicons/R/Refinedgithub
```

```text
include('simpleicons/R/Refinedgithub')
```



| Illustration | Refinedgithub |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Refinedgithub.png) | ![illustration for Refinedgithub](../../simpleicons/R/Refinedgithub.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RefinedgithubXs>`
- `<$RefinedgithubSm>`
- `<$RefinedgithubMd>`
- `<$RefinedgithubLg>`





## Refinedgithub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Refinedgithub
include('simpleicons/R/Refinedgithub')

' renders the element
Refinedgithub('Refinedgithub', 'Refinedgithub', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Refinedgithub
include('simpleicons/R/Refinedgithub')

' renders the element
Refinedgithub('Refinedgithub', 'Refinedgithub', 'an optional tech label', 'an optional description')
@enduml
```

