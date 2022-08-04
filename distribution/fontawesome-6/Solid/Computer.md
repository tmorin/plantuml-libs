# Computer


```text
fontawesome-6/Solid/Computer
```

```text
include('fontawesome-6/Solid/Computer')
```



| Illustration | Computer |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Computer.png) | ![illustration for Computer](../../fontawesome-6/Solid/Computer.Local.png) |




## Computer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Computer
include('fontawesome-6/Solid/Computer')

' renders the element
Computer('Computer', 'Computer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Computer
include('fontawesome-6/Solid/Computer')

' renders the element
Computer('Computer', 'Computer', 'an optional tech label', 'an optional description')
@enduml
```

