# Perbyte


```text
fontawesome-5/Brands/Perbyte
```

```text
include('fontawesome-5/Brands/Perbyte')
```



| Illustration | Perbyte |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Perbyte.png) | ![illustration for Perbyte](../../fontawesome-5/Brands/Perbyte.Local.png) |




## Perbyte

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Perbyte
include('fontawesome-5/Brands/Perbyte')

' renders the element
Perbyte('Perbyte', 'Perbyte', 'an optional tech label')
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

' loads the Item which embeds the element Perbyte
include('fontawesome-5/Brands/Perbyte')

' renders the element
Perbyte('Perbyte', 'Perbyte', 'an optional tech label')
@enduml
```

