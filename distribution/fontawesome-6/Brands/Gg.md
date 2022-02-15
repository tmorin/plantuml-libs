# Gg


```text
fontawesome-6/Brands/Gg
```

```text
include('fontawesome-6/Brands/Gg')
```



| Illustration | Gg |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Gg.png) | ![illustration for Gg](../../fontawesome-6/Brands/Gg.Local.png) |




## Gg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Gg
include('fontawesome-6/Brands/Gg')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Gg
include('fontawesome-6/Brands/Gg')

' renders the element
Gg('Gg', 'Gg', 'an optional tech label')
@enduml
```

