# Scroll


```text
fontawesome-5/Solid/Scroll
```

```text
include('fontawesome-5/Solid/Scroll')
```



| Illustration | Scroll |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Scroll.png) | ![illustration for Scroll](../../fontawesome-5/Solid/Scroll.Local.png) |




## Scroll

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Scroll
include('fontawesome-5/Solid/Scroll')

' renders the element
Scroll('Scroll', 'Scroll', 'an optional tech label')
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

' loads the Item which embeds the element Scroll
include('fontawesome-5/Solid/Scroll')

' renders the element
Scroll('Scroll', 'Scroll', 'an optional tech label')
@enduml
```

