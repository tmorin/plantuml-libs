# Cannabis


```text
fontawesome-5/Solid/Cannabis
```

```text
include('fontawesome-5/Solid/Cannabis')
```



| Illustration | Cannabis |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Cannabis.png) | ![illustration for Cannabis](../../fontawesome-5/Solid/Cannabis.Local.png) |




## Cannabis

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Cannabis
include('fontawesome-5/Solid/Cannabis')

' renders the element
Cannabis('Cannabis', 'Cannabis', 'an optional tech label')
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

' loads the Item which embeds the element Cannabis
include('fontawesome-5/Solid/Cannabis')

' renders the element
Cannabis('Cannabis', 'Cannabis', 'an optional tech label')
@enduml
```

