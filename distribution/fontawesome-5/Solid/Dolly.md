# Dolly


```text
fontawesome-5/Solid/Dolly
```

```text
include('fontawesome-5/Solid/Dolly')
```



| Illustration | Dolly |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Dolly.png) | ![illustration for Dolly](../../fontawesome-5/Solid/Dolly.Local.png) |




## Dolly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Dolly
include('fontawesome-5/Solid/Dolly')

' renders the element
Dolly('Dolly', 'Dolly', 'an optional tech label')
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

' loads the Item which embeds the element Dolly
include('fontawesome-5/Solid/Dolly')

' renders the element
Dolly('Dolly', 'Dolly', 'an optional tech label')
@enduml
```

