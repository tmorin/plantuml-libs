# Gem


```text
fontawesome/Regular/Gem
```

```text
include('fontawesome/Regular/Gem')
```



| Illustration | Gem |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/Gem.png) | ![illustration for Gem](../../fontawesome/Regular/Gem.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GemXs>`
- `<$GemSm>`
- `<$GemMd>`
- `<$GemLg>`





## Gem

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Gem
include('fontawesome/Regular/Gem')

' renders the element
Gem('Gem', 'Gem', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gem
include('fontawesome/Regular/Gem')

' renders the element
Gem('Gem', 'Gem', 'an optional tech label', 'an optional description')
@enduml
```

