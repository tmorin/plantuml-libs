# Gift


```text
fontawesome-5/Solid/Gift
```

```text
include('fontawesome-5/Solid/Gift')
```



| Illustration | Gift |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Gift.png) | ![illustration for Gift](../../fontawesome-5/Solid/Gift.Local.png) |




## Gift

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Gift
include('fontawesome-5/Solid/Gift')

' renders the element
Gift('Gift', 'Gift', 'an optional tech label')
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

' loads the Item which embeds the element Gift
include('fontawesome-5/Solid/Gift')

' renders the element
Gift('Gift', 'Gift', 'an optional tech label')
@enduml
```

