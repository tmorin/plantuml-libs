# Gem


```text
fontawesome-6/Solid/Gem
```

```text
include('fontawesome-6/Solid/Gem')
```



| Illustration | Gem |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Gem.png) | ![illustration for Gem](../../fontawesome-6/Solid/Gem.Local.png) |




## Gem

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Gem
include('fontawesome-6/Solid/Gem')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Gem
include('fontawesome-6/Solid/Gem')

' renders the element
Gem('Gem', 'Gem', 'an optional tech label', 'an optional description')
@enduml
```

