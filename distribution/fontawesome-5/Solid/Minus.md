# Minus


```text
fontawesome-5/Solid/Minus
```

```text
include('fontawesome-5/Solid/Minus')
```



| Illustration | Minus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Minus.png) | ![illustration for Minus](../../fontawesome-5/Solid/Minus.Local.png) |




## Minus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Minus
include('fontawesome-5/Solid/Minus')

' renders the element
Minus('Minus', 'Minus', 'an optional tech label')
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

' loads the Item which embeds the element Minus
include('fontawesome-5/Solid/Minus')

' renders the element
Minus('Minus', 'Minus', 'an optional tech label')
@enduml
```

