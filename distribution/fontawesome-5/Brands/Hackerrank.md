# Hackerrank


```text
fontawesome-5/Brands/Hackerrank
```

```text
include('fontawesome-5/Brands/Hackerrank')
```



| Illustration | Hackerrank |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Hackerrank.png) | ![illustration for Hackerrank](../../fontawesome-5/Brands/Hackerrank.Local.png) |




## Hackerrank

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Hackerrank
include('fontawesome-5/Brands/Hackerrank')

' renders the element
Hackerrank('Hackerrank', 'Hackerrank', 'an optional tech label')
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

' loads the Item which embeds the element Hackerrank
include('fontawesome-5/Brands/Hackerrank')

' renders the element
Hackerrank('Hackerrank', 'Hackerrank', 'an optional tech label')
@enduml
```

