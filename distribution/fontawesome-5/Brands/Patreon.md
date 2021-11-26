# Patreon


```text
fontawesome-5/Brands/Patreon
```

```text
include('fontawesome-5/Brands/Patreon')
```



| Illustration | Patreon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Patreon.png) | ![illustration for Patreon](../../fontawesome-5/Brands/Patreon.Local.png) |




## Patreon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Patreon
include('fontawesome-5/Brands/Patreon')

' renders the element
Patreon('Patreon', 'Patreon', 'an optional tech label')
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

' loads the Item which embeds the element Patreon
include('fontawesome-5/Brands/Patreon')

' renders the element
Patreon('Patreon', 'Patreon', 'an optional tech label')
@enduml
```

