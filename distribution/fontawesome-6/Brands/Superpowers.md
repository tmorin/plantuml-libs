# Superpowers


```text
fontawesome-6/Brands/Superpowers
```

```text
include('fontawesome-6/Brands/Superpowers')
```



| Illustration | Superpowers |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Superpowers.png) | ![illustration for Superpowers](../../fontawesome-6/Brands/Superpowers.Local.png) |




## Superpowers

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Superpowers
include('fontawesome-6/Brands/Superpowers')

' renders the element
Superpowers('Superpowers', 'Superpowers', 'an optional tech label')
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

' loads the Item which embeds the element Superpowers
include('fontawesome-6/Brands/Superpowers')

' renders the element
Superpowers('Superpowers', 'Superpowers', 'an optional tech label')
@enduml
```

