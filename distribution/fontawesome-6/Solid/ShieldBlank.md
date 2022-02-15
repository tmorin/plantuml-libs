# ShieldBlank


```text
fontawesome-6/Solid/ShieldBlank
```

```text
include('fontawesome-6/Solid/ShieldBlank')
```



| Illustration | ShieldBlank |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ShieldBlank.png) | ![illustration for ShieldBlank](../../fontawesome-6/Solid/ShieldBlank.Local.png) |




## ShieldBlank

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ShieldBlank
include('fontawesome-6/Solid/ShieldBlank')

' renders the element
ShieldBlank('ShieldBlank', 'Shield Blank', 'an optional tech label')
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

' loads the Item which embeds the element ShieldBlank
include('fontawesome-6/Solid/ShieldBlank')

' renders the element
ShieldBlank('ShieldBlank', 'Shield Blank', 'an optional tech label')
@enduml
```

