# Studiovinari


```text
fontawesome-6/Brands/Studiovinari
```

```text
include('fontawesome-6/Brands/Studiovinari')
```



| Illustration | Studiovinari |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Studiovinari.png) | ![illustration for Studiovinari](../../fontawesome-6/Brands/Studiovinari.Local.png) |




## Studiovinari

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Studiovinari
include('fontawesome-6/Brands/Studiovinari')

' renders the element
Studiovinari('Studiovinari', 'Studiovinari', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Studiovinari
include('fontawesome-6/Brands/Studiovinari')

' renders the element
Studiovinari('Studiovinari', 'Studiovinari', 'an optional tech label', 'an optional description')
@enduml
```

