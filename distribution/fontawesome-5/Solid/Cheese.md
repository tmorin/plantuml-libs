# Cheese


```text
fontawesome-5/Solid/Cheese
```

```text
include('fontawesome-5/Solid/Cheese')
```



| Illustration | Cheese |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Cheese.png) | ![illustration for Cheese](../../fontawesome-5/Solid/Cheese.Local.png) |




## Cheese

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Cheese
include('fontawesome-5/Solid/Cheese')

' renders the element
Cheese('Cheese', 'Cheese', 'an optional tech label')
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

' loads the Item which embeds the element Cheese
include('fontawesome-5/Solid/Cheese')

' renders the element
Cheese('Cheese', 'Cheese', 'an optional tech label')
@enduml
```

