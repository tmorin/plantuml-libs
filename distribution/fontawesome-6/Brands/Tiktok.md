# Tiktok


```text
fontawesome-6/Brands/Tiktok
```

```text
include('fontawesome-6/Brands/Tiktok')
```



| Illustration | Tiktok |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Tiktok.png) | ![illustration for Tiktok](../../fontawesome-6/Brands/Tiktok.Local.png) |




## Tiktok

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Tiktok
include('fontawesome-6/Brands/Tiktok')

' renders the element
Tiktok('Tiktok', 'Tiktok', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tiktok
include('fontawesome-6/Brands/Tiktok')

' renders the element
Tiktok('Tiktok', 'Tiktok', 'an optional tech label', 'an optional description')
@enduml
```

