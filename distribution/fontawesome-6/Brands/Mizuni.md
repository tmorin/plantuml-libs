# Mizuni


```text
fontawesome-6/Brands/Mizuni
```

```text
include('fontawesome-6/Brands/Mizuni')
```



| Illustration | Mizuni |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Mizuni.png) | ![illustration for Mizuni](../../fontawesome-6/Brands/Mizuni.Local.png) |




## Mizuni

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Mizuni
include('fontawesome-6/Brands/Mizuni')

' renders the element
Mizuni('Mizuni', 'Mizuni', 'an optional tech label')
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

' loads the Item which embeds the element Mizuni
include('fontawesome-6/Brands/Mizuni')

' renders the element
Mizuni('Mizuni', 'Mizuni', 'an optional tech label')
@enduml
```

