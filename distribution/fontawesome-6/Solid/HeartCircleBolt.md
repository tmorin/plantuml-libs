# HeartCircleBolt


```text
fontawesome-6/Solid/HeartCircleBolt
```

```text
include('fontawesome-6/Solid/HeartCircleBolt')
```



| Illustration | HeartCircleBolt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HeartCircleBolt.png) | ![illustration for HeartCircleBolt](../../fontawesome-6/Solid/HeartCircleBolt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HeartCircleBoltXs>`
- `<$HeartCircleBoltSm>`
- `<$HeartCircleBoltMd>`
- `<$HeartCircleBoltLg>`





## HeartCircleBolt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HeartCircleBolt
include('fontawesome-6/Solid/HeartCircleBolt')

' renders the element
HeartCircleBolt('HeartCircleBolt', 'Heart Circle Bolt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HeartCircleBolt
include('fontawesome-6/Solid/HeartCircleBolt')

' renders the element
HeartCircleBolt('HeartCircleBolt', 'Heart Circle Bolt', 'an optional tech label', 'an optional description')
@enduml
```

