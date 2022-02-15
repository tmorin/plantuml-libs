# Audible


```text
fontawesome-6/Brands/Audible
```

```text
include('fontawesome-6/Brands/Audible')
```



| Illustration | Audible |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Audible.png) | ![illustration for Audible](../../fontawesome-6/Brands/Audible.Local.png) |




## Audible

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Audible
include('fontawesome-6/Brands/Audible')

' renders the element
Audible('Audible', 'Audible', 'an optional tech label')
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

' loads the Item which embeds the element Audible
include('fontawesome-6/Brands/Audible')

' renders the element
Audible('Audible', 'Audible', 'an optional tech label')
@enduml
```

