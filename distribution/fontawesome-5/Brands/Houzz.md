# Houzz


```text
fontawesome-5/Brands/Houzz
```

```text
include('fontawesome-5/Brands/Houzz')
```



| Illustration | Houzz |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Houzz.png) | ![illustration for Houzz](../../fontawesome-5/Brands/Houzz.Local.png) |




## Houzz

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Houzz
include('fontawesome-5/Brands/Houzz')

' renders the element
Houzz('Houzz', 'Houzz', 'an optional tech label')
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

' loads the Item which embeds the element Houzz
include('fontawesome-5/Brands/Houzz')

' renders the element
Houzz('Houzz', 'Houzz', 'an optional tech label')
@enduml
```

