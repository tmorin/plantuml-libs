# RightLong


```text
fontawesome/Solid/RightLong
```

```text
include('fontawesome/Solid/RightLong')
```



| Illustration | RightLong |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/RightLong.png) | ![illustration for RightLong](../../fontawesome/Solid/RightLong.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RightLongXs>`
- `<$RightLongSm>`
- `<$RightLongMd>`
- `<$RightLongLg>`





## RightLong

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element RightLong
include('fontawesome/Solid/RightLong')

' renders the element
RightLong('RightLong', 'Right Long', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RightLong
include('fontawesome/Solid/RightLong')

' renders the element
RightLong('RightLong', 'Right Long', 'an optional tech label', 'an optional description')
@enduml
```

