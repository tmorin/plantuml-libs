# Palfed


```text
fontawesome-5/Brands/Palfed
```

```text
include('fontawesome-5/Brands/Palfed')
```



| Illustration | Palfed |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Palfed.png) | ![illustration for Palfed](../../fontawesome-5/Brands/Palfed.Local.png) |




## Palfed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Palfed
include('fontawesome-5/Brands/Palfed')

' renders the element
Palfed('Palfed', 'Palfed', 'an optional tech label')
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

' loads the Item which embeds the element Palfed
include('fontawesome-5/Brands/Palfed')

' renders the element
Palfed('Palfed', 'Palfed', 'an optional tech label')
@enduml
```

