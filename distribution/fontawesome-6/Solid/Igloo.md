# Igloo


```text
fontawesome-6/Solid/Igloo
```

```text
include('fontawesome-6/Solid/Igloo')
```



| Illustration | Igloo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Igloo.png) | ![illustration for Igloo](../../fontawesome-6/Solid/Igloo.Local.png) |




## Igloo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Igloo
include('fontawesome-6/Solid/Igloo')

' renders the element
Igloo('Igloo', 'Igloo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Igloo
include('fontawesome-6/Solid/Igloo')

' renders the element
Igloo('Igloo', 'Igloo', 'an optional tech label', 'an optional description')
@enduml
```

