# Mars


```text
fontawesome-6/Solid/Mars
```

```text
include('fontawesome-6/Solid/Mars')
```



| Illustration | Mars |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Mars.png) | ![illustration for Mars](../../fontawesome-6/Solid/Mars.Local.png) |




## Mars

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Mars
include('fontawesome-6/Solid/Mars')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Mars
include('fontawesome-6/Solid/Mars')

' renders the element
Mars('Mars', 'Mars', 'an optional tech label')
@enduml
```

