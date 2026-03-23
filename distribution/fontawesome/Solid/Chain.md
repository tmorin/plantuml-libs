# Chain


```text
fontawesome/Solid/Chain
```

```text
include('fontawesome/Solid/Chain')
```



| Illustration | Chain |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Chain.png) | ![illustration for Chain](../../fontawesome/Solid/Chain.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChainXs>`
- `<$ChainSm>`
- `<$ChainMd>`
- `<$ChainLg>`





## Chain

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Chain
include('fontawesome/Solid/Chain')

' renders the element
Chain('Chain', 'Chain', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Chain
include('fontawesome/Solid/Chain')

' renders the element
Chain('Chain', 'Chain', 'an optional tech label', 'an optional description')
@enduml
```

