# CircleDot


```text
fontawesome/Regular/CircleDot
```

```text
include('fontawesome/Regular/CircleDot')
```



| Illustration | CircleDot |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/CircleDot.png) | ![illustration for CircleDot](../../fontawesome/Regular/CircleDot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CircleDotXs>`
- `<$CircleDotSm>`
- `<$CircleDotMd>`
- `<$CircleDotLg>`





## CircleDot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CircleDot
include('fontawesome/Regular/CircleDot')

' renders the element
CircleDot('CircleDot', 'Circle Dot', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CircleDot
include('fontawesome/Regular/CircleDot')

' renders the element
CircleDot('CircleDot', 'Circle Dot', 'an optional tech label', 'an optional description')
@enduml
```

