# VoteYea


```text
fontawesome-5/Solid/VoteYea
```

```text
include('fontawesome-5/Solid/VoteYea')
```



| Illustration | VoteYea |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/VoteYea.png) | ![illustration for VoteYea](../../fontawesome-5/Solid/VoteYea.Local.png) |




## VoteYea

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element VoteYea
include('fontawesome-5/Solid/VoteYea')

' renders the element
VoteYea('VoteYea', 'Vote Yea', 'an optional tech label')
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

' loads the Item which embeds the element VoteYea
include('fontawesome-5/Solid/VoteYea')

' renders the element
VoteYea('VoteYea', 'Vote Yea', 'an optional tech label')
@enduml
```

