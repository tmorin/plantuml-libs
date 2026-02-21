# ArrowRightLong


```text
fontawesome/Solid/ArrowRightLong
```

```text
include('fontawesome/Solid/ArrowRightLong')
```



| Illustration | ArrowRightLong |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ArrowRightLong.png) | ![illustration for ArrowRightLong](../../fontawesome/Solid/ArrowRightLong.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArrowRightLongXs>`
- `<$ArrowRightLongSm>`
- `<$ArrowRightLongMd>`
- `<$ArrowRightLongLg>`





## ArrowRightLong

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ArrowRightLong
include('fontawesome/Solid/ArrowRightLong')

' renders the element
ArrowRightLong('ArrowRightLong', 'Arrow Right Long', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowRightLong
include('fontawesome/Solid/ArrowRightLong')

' renders the element
ArrowRightLong('ArrowRightLong', 'Arrow Right Long', 'an optional tech label', 'an optional description')
@enduml
```

