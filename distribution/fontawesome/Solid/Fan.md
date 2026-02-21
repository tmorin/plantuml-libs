# Fan


```text
fontawesome/Solid/Fan
```

```text
include('fontawesome/Solid/Fan')
```



| Illustration | Fan |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Fan.png) | ![illustration for Fan](../../fontawesome/Solid/Fan.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FanXs>`
- `<$FanSm>`
- `<$FanMd>`
- `<$FanLg>`





## Fan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Fan
include('fontawesome/Solid/Fan')

' renders the element
Fan('Fan', 'Fan', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fan
include('fontawesome/Solid/Fan')

' renders the element
Fan('Fan', 'Fan', 'an optional tech label', 'an optional description')
@enduml
```

