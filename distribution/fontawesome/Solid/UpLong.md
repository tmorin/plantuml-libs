# UpLong


```text
fontawesome/Solid/UpLong
```

```text
include('fontawesome/Solid/UpLong')
```



| Illustration | UpLong |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UpLong.png) | ![illustration for UpLong](../../fontawesome/Solid/UpLong.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UpLongXs>`
- `<$UpLongSm>`
- `<$UpLongMd>`
- `<$UpLongLg>`





## UpLong

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UpLong
include('fontawesome/Solid/UpLong')

' renders the element
UpLong('UpLong', 'Up Long', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UpLong
include('fontawesome/Solid/UpLong')

' renders the element
UpLong('UpLong', 'Up Long', 'an optional tech label', 'an optional description')
@enduml
```

