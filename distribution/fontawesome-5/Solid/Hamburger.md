# Hamburger


```text
fontawesome-5/Solid/Hamburger
```

```text
include('fontawesome-5/Solid/Hamburger')
```



| Illustration | Hamburger |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Hamburger.png) | ![illustration for Hamburger](../../fontawesome-5/Solid/Hamburger.Local.png) |




## Hamburger

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Hamburger
include('fontawesome-5/Solid/Hamburger')

' renders the element
Hamburger('Hamburger', 'Hamburger', 'an optional tech label')
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

' loads the Item which embeds the element Hamburger
include('fontawesome-5/Solid/Hamburger')

' renders the element
Hamburger('Hamburger', 'Hamburger', 'an optional tech label')
@enduml
```

