# Repeat


```text
fontawesome-6/Solid/Repeat
```

```text
include('fontawesome-6/Solid/Repeat')
```



| Illustration | Repeat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Repeat.png) | ![illustration for Repeat](../../fontawesome-6/Solid/Repeat.Local.png) |




## Repeat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Repeat
include('fontawesome-6/Solid/Repeat')

' renders the element
Repeat('Repeat', 'Repeat', 'an optional tech label')
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

' loads the Item which embeds the element Repeat
include('fontawesome-6/Solid/Repeat')

' renders the element
Repeat('Repeat', 'Repeat', 'an optional tech label')
@enduml
```

