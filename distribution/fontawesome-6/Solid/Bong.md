# Bong


```text
fontawesome-6/Solid/Bong
```

```text
include('fontawesome-6/Solid/Bong')
```



| Illustration | Bong |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Bong.png) | ![illustration for Bong](../../fontawesome-6/Solid/Bong.Local.png) |




## Bong

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Bong
include('fontawesome-6/Solid/Bong')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Bong
include('fontawesome-6/Solid/Bong')

' renders the element
Bong('Bong', 'Bong', 'an optional tech label')
@enduml
```

