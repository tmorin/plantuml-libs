# Mars


```text
fontawesome-5/Solid/Mars
```

```text
include('fontawesome-5/Solid/Mars')
```



| Illustration | Mars |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Mars.png) | ![illustration for Mars](../../fontawesome-5/Solid/Mars.Local.png) |




## Mars

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Mars
include('fontawesome-5/Solid/Mars')

' renders the element
Mars('Mars', 'Mars', 'an optional tech label')
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

' loads the Item which embeds the element Mars
include('fontawesome-5/Solid/Mars')

' renders the element
Mars('Mars', 'Mars', 'an optional tech label')
@enduml
```

