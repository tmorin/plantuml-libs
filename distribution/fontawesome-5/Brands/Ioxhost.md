# Ioxhost


```text
fontawesome-5/Brands/Ioxhost
```

```text
include('fontawesome-5/Brands/Ioxhost')
```



| Illustration | Ioxhost |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Ioxhost.png) | ![illustration for Ioxhost](../../fontawesome-5/Brands/Ioxhost.Local.png) |




## Ioxhost

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Ioxhost
include('fontawesome-5/Brands/Ioxhost')

' renders the element
Ioxhost('Ioxhost', 'Ioxhost', 'an optional tech label')
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

' loads the Item which embeds the element Ioxhost
include('fontawesome-5/Brands/Ioxhost')

' renders the element
Ioxhost('Ioxhost', 'Ioxhost', 'an optional tech label')
@enduml
```

