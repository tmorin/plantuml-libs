# Perbyte


```text
fontawesome-6/Brands/Perbyte
```

```text
include('fontawesome-6/Brands/Perbyte')
```



| Illustration | Perbyte |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Perbyte.png) | ![illustration for Perbyte](../../fontawesome-6/Brands/Perbyte.Local.png) |




## Perbyte

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Perbyte
include('fontawesome-6/Brands/Perbyte')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Perbyte
include('fontawesome-6/Brands/Perbyte')

' renders the element
Perbyte('Perbyte', 'Perbyte', 'an optional tech label')
@enduml
```

