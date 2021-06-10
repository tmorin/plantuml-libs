# Meh


```text
fontawesome-5/Solid/Meh
```

```text
include('fontawesome-5/Solid/Meh')
```



| Illustration | Meh |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Meh.png) | ![illustration for Meh](../../fontawesome-5/Solid/Meh.Local.png) |




## Meh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Meh
include('fontawesome-5/Solid/Meh')

' renders the element
Meh('Meh', 'Meh', 'an optional tech label')
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

' loads the Item which embeds the element Meh
include('fontawesome-5/Solid/Meh')

' renders the element
Meh('Meh', 'Meh', 'an optional tech label')
@enduml
```

