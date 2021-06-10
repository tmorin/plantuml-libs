# Spider


```text
fontawesome-5/Solid/Spider
```

```text
include('fontawesome-5/Solid/Spider')
```



| Illustration | Spider |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Spider.png) | ![illustration for Spider](../../fontawesome-5/Solid/Spider.Local.png) |




## Spider

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Spider
include('fontawesome-5/Solid/Spider')

' renders the element
Spider('Spider', 'Spider', 'an optional tech label')
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

' loads the Item which embeds the element Spider
include('fontawesome-5/Solid/Spider')

' renders the element
Spider('Spider', 'Spider', 'an optional tech label')
@enduml
```

