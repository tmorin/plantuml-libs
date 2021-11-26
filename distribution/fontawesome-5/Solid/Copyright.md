# Copyright


```text
fontawesome-5/Solid/Copyright
```

```text
include('fontawesome-5/Solid/Copyright')
```



| Illustration | Copyright |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Copyright.png) | ![illustration for Copyright](../../fontawesome-5/Solid/Copyright.Local.png) |




## Copyright

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Copyright
include('fontawesome-5/Solid/Copyright')

' renders the element
Copyright('Copyright', 'Copyright', 'an optional tech label')
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

' loads the Item which embeds the element Copyright
include('fontawesome-5/Solid/Copyright')

' renders the element
Copyright('Copyright', 'Copyright', 'an optional tech label')
@enduml
```

