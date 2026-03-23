# HeartBroken


```text
fontawesome/Solid/HeartBroken
```

```text
include('fontawesome/Solid/HeartBroken')
```



| Illustration | HeartBroken |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HeartBroken.png) | ![illustration for HeartBroken](../../fontawesome/Solid/HeartBroken.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HeartBrokenXs>`
- `<$HeartBrokenSm>`
- `<$HeartBrokenMd>`
- `<$HeartBrokenLg>`





## HeartBroken

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HeartBroken
include('fontawesome/Solid/HeartBroken')

' renders the element
HeartBroken('HeartBroken', 'Heart Broken', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HeartBroken
include('fontawesome/Solid/HeartBroken')

' renders the element
HeartBroken('HeartBroken', 'Heart Broken', 'an optional tech label', 'an optional description')
@enduml
```

