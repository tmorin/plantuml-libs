# Scroll


```text
fontawesome-6/Solid/Scroll
```

```text
include('fontawesome-6/Solid/Scroll')
```



| Illustration | Scroll |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Scroll.png) | ![illustration for Scroll](../../fontawesome-6/Solid/Scroll.Local.png) |




## Scroll

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Scroll
include('fontawesome-6/Solid/Scroll')

' renders the element
Scroll('Scroll', 'Scroll', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Scroll
include('fontawesome-6/Solid/Scroll')

' renders the element
Scroll('Scroll', 'Scroll', 'an optional tech label', 'an optional description')
@enduml
```

