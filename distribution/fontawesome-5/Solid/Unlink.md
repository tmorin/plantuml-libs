# Unlink


```text
fontawesome-5/Solid/Unlink
```

```text
include('fontawesome-5/Solid/Unlink')
```



| Illustration | Unlink |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Unlink.png) | ![illustration for Unlink](../../fontawesome-5/Solid/Unlink.Local.png) |




## Unlink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Unlink
include('fontawesome-5/Solid/Unlink')

' renders the element
Unlink('Unlink', 'Unlink', 'an optional tech label')
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

' loads the Item which embeds the element Unlink
include('fontawesome-5/Solid/Unlink')

' renders the element
Unlink('Unlink', 'Unlink', 'an optional tech label')
@enduml
```

