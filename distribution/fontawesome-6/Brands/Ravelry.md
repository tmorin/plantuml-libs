# Ravelry


```text
fontawesome-6/Brands/Ravelry
```

```text
include('fontawesome-6/Brands/Ravelry')
```



| Illustration | Ravelry |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Ravelry.png) | ![illustration for Ravelry](../../fontawesome-6/Brands/Ravelry.Local.png) |




## Ravelry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Ravelry
include('fontawesome-6/Brands/Ravelry')

' renders the element
Ravelry('Ravelry', 'Ravelry', 'an optional tech label')
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

' loads the Item which embeds the element Ravelry
include('fontawesome-6/Brands/Ravelry')

' renders the element
Ravelry('Ravelry', 'Ravelry', 'an optional tech label')
@enduml
```

