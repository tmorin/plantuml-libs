# CircleUp


```text
fontawesome-6/Regular/CircleUp
```

```text
include('fontawesome-6/Regular/CircleUp')
```



| Illustration | CircleUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/CircleUp.png) | ![illustration for CircleUp](../../fontawesome-6/Regular/CircleUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CircleUpXs>`
- `<$CircleUpSm>`
- `<$CircleUpMd>`
- `<$CircleUpLg>`





## CircleUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CircleUp
include('fontawesome-6/Regular/CircleUp')

' renders the element
CircleUp('CircleUp', 'Circle Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CircleUp
include('fontawesome-6/Regular/CircleUp')

' renders the element
CircleUp('CircleUp', 'Circle Up', 'an optional tech label', 'an optional description')
@enduml
```

