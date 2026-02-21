# Refinedgithub


```text
simpleicons-14/R/Refinedgithub
```

```text
include('simpleicons-14/R/Refinedgithub')
```



| Illustration | Refinedgithub |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Refinedgithub.png) | ![illustration for Refinedgithub](../../simpleicons-14/R/Refinedgithub.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Refinedgithub
include('simpleicons-14/R/Refinedgithub')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Refinedgithub
include('simpleicons-14/R/Refinedgithub')

' renders the element
Refinedgithub('Refinedgithub', 'Refinedgithub', 'an optional tech label', 'an optional description')
@enduml
```

