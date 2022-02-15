# FireFlameSimple


```text
fontawesome-6/Solid/FireFlameSimple
```

```text
include('fontawesome-6/Solid/FireFlameSimple')
```



| Illustration | FireFlameSimple |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FireFlameSimple.png) | ![illustration for FireFlameSimple](../../fontawesome-6/Solid/FireFlameSimple.Local.png) |




## FireFlameSimple

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FireFlameSimple
include('fontawesome-6/Solid/FireFlameSimple')

' renders the element
FireFlameSimple('FireFlameSimple', 'Fire Flame Simple', 'an optional tech label')
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

' loads the Item which embeds the element FireFlameSimple
include('fontawesome-6/Solid/FireFlameSimple')

' renders the element
FireFlameSimple('FireFlameSimple', 'Fire Flame Simple', 'an optional tech label')
@enduml
```

