# Viber


```text
fontawesome-5/Brands/Viber
```

```text
include('fontawesome-5/Brands/Viber')
```



| Illustration | Viber |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Viber.png) | ![illustration for Viber](../../fontawesome-5/Brands/Viber.Local.png) |




## Viber

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Viber
include('fontawesome-5/Brands/Viber')

' renders the element
Viber('Viber', 'Viber', 'an optional tech label')
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

' loads the Item which embeds the element Viber
include('fontawesome-5/Brands/Viber')

' renders the element
Viber('Viber', 'Viber', 'an optional tech label')
@enduml
```

