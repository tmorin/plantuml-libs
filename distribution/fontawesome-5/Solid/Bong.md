# Bong


```text
fontawesome-5/Solid/Bong
```

```text
include('fontawesome-5/Solid/Bong')
```



| Illustration | Bong |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Bong.png) | ![illustration for Bong](../../fontawesome-5/Solid/Bong.Local.png) |




## Bong

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Bong
include('fontawesome-5/Solid/Bong')

' renders the element
Bong('Bong', 'Bong', 'an optional tech label')
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

' loads the Item which embeds the element Bong
include('fontawesome-5/Solid/Bong')

' renders the element
Bong('Bong', 'Bong', 'an optional tech label')
@enduml
```

