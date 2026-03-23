# VoteYea


```text
fontawesome/Solid/VoteYea
```

```text
include('fontawesome/Solid/VoteYea')
```



| Illustration | VoteYea |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/VoteYea.png) | ![illustration for VoteYea](../../fontawesome/Solid/VoteYea.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VoteYeaXs>`
- `<$VoteYeaSm>`
- `<$VoteYeaMd>`
- `<$VoteYeaLg>`





## VoteYea

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element VoteYea
include('fontawesome/Solid/VoteYea')

' renders the element
VoteYea('VoteYea', 'Vote Yea', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element VoteYea
include('fontawesome/Solid/VoteYea')

' renders the element
VoteYea('VoteYea', 'Vote Yea', 'an optional tech label', 'an optional description')
@enduml
```

