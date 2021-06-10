# Gg


```text
fontawesome-5/Brands/Gg
```

```text
include('fontawesome-5/Brands/Gg')
```



| Illustration | Gg |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Gg.png) | ![illustration for Gg](../../fontawesome-5/Brands/Gg.Local.png) |




## Gg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Gg
include('fontawesome-5/Brands/Gg')

' renders the element
Gg('Gg', 'Gg', 'an optional tech label')
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

' loads the Item which embeds the element Gg
include('fontawesome-5/Brands/Gg')

' renders the element
Gg('Gg', 'Gg', 'an optional tech label')
@enduml
```

