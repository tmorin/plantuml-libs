# Tiktok


```text
fontawesome-5/Brands/Tiktok
```

```text
include('fontawesome-5/Brands/Tiktok')
```



| Illustration | Tiktok |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Tiktok.png) | ![illustration for Tiktok](../../fontawesome-5/Brands/Tiktok.Local.png) |




## Tiktok

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Tiktok
include('fontawesome-5/Brands/Tiktok')

' renders the element
Tiktok('Tiktok', 'Tiktok', 'an optional tech label')
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

' loads the Item which embeds the element Tiktok
include('fontawesome-5/Brands/Tiktok')

' renders the element
Tiktok('Tiktok', 'Tiktok', 'an optional tech label')
@enduml
```

