# Cog


```text
fontawesome-5/Solid/Cog
```

```text
include('fontawesome-5/Solid/Cog')
```



| Illustration | Cog |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Cog.png) | ![illustration for Cog](../../fontawesome-5/Solid/Cog.Local.png) |




## Cog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Cog
include('fontawesome-5/Solid/Cog')

' renders the element
Cog('Cog', 'Cog', 'an optional tech label')
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

' loads the Item which embeds the element Cog
include('fontawesome-5/Solid/Cog')

' renders the element
Cog('Cog', 'Cog', 'an optional tech label')
@enduml
```

