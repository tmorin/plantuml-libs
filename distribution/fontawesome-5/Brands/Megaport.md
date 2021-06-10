# Megaport


```text
fontawesome-5/Brands/Megaport
```

```text
include('fontawesome-5/Brands/Megaport')
```



| Illustration | Megaport |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Megaport.png) | ![illustration for Megaport](../../fontawesome-5/Brands/Megaport.Local.png) |




## Megaport

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Megaport
include('fontawesome-5/Brands/Megaport')

' renders the element
Megaport('Megaport', 'Megaport', 'an optional tech label')
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

' loads the Item which embeds the element Megaport
include('fontawesome-5/Brands/Megaport')

' renders the element
Megaport('Megaport', 'Megaport', 'an optional tech label')
@enduml
```

