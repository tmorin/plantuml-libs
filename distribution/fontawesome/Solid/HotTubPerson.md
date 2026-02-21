# HotTubPerson


```text
fontawesome/Solid/HotTubPerson
```

```text
include('fontawesome/Solid/HotTubPerson')
```



| Illustration | HotTubPerson |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HotTubPerson.png) | ![illustration for HotTubPerson](../../fontawesome/Solid/HotTubPerson.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HotTubPersonXs>`
- `<$HotTubPersonSm>`
- `<$HotTubPersonMd>`
- `<$HotTubPersonLg>`





## HotTubPerson

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HotTubPerson
include('fontawesome/Solid/HotTubPerson')

' renders the element
HotTubPerson('HotTubPerson', 'Hot Tub Person', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HotTubPerson
include('fontawesome/Solid/HotTubPerson')

' renders the element
HotTubPerson('HotTubPerson', 'Hot Tub Person', 'an optional tech label', 'an optional description')
@enduml
```

