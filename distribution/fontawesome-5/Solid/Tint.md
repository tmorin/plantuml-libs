# Tint


```text
fontawesome-5/Solid/Tint
```

```text
include('fontawesome-5/Solid/Tint')
```



| Illustration | Tint |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Tint.png) | ![illustration for Tint](../../fontawesome-5/Solid/Tint.Local.png) |




## Tint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Tint
include('fontawesome-5/Solid/Tint')

' renders the element
Tint('Tint', 'Tint', 'an optional tech label')
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

' loads the Item which embeds the element Tint
include('fontawesome-5/Solid/Tint')

' renders the element
Tint('Tint', 'Tint', 'an optional tech label')
@enduml
```

