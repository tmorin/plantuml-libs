# Gem


```text
fontawesome-5/Solid/Gem
```

```text
include('fontawesome-5/Solid/Gem')
```



| Illustration | Gem |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Gem.png) | ![illustration for Gem](../../fontawesome-5/Solid/Gem.Local.png) |




## Gem

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Gem
include('fontawesome-5/Solid/Gem')

' renders the element
Gem('Gem', 'Gem', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Gem
include('fontawesome-5/Solid/Gem')

' renders the element
Gem('Gem', 'Gem', 'an optional tech label')
@enduml
```

