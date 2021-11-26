# Aviato


```text
fontawesome-5/Brands/Aviato
```

```text
include('fontawesome-5/Brands/Aviato')
```



| Illustration | Aviato |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Aviato.png) | ![illustration for Aviato](../../fontawesome-5/Brands/Aviato.Local.png) |




## Aviato

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Aviato
include('fontawesome-5/Brands/Aviato')

' renders the element
Aviato('Aviato', 'Aviato', 'an optional tech label')
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

' loads the Item which embeds the element Aviato
include('fontawesome-5/Brands/Aviato')

' renders the element
Aviato('Aviato', 'Aviato', 'an optional tech label')
@enduml
```

