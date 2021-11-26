# Hotdog


```text
fontawesome-5/Solid/Hotdog
```

```text
include('fontawesome-5/Solid/Hotdog')
```



| Illustration | Hotdog |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Hotdog.png) | ![illustration for Hotdog](../../fontawesome-5/Solid/Hotdog.Local.png) |




## Hotdog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Hotdog
include('fontawesome-5/Solid/Hotdog')

' renders the element
Hotdog('Hotdog', 'Hotdog', 'an optional tech label')
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

' loads the Item which embeds the element Hotdog
include('fontawesome-5/Solid/Hotdog')

' renders the element
Hotdog('Hotdog', 'Hotdog', 'an optional tech label')
@enduml
```

