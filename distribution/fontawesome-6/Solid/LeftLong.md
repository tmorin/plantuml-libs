# LeftLong


```text
fontawesome-6/Solid/LeftLong
```

```text
include('fontawesome-6/Solid/LeftLong')
```



| Illustration | LeftLong |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/LeftLong.png) | ![illustration for LeftLong](../../fontawesome-6/Solid/LeftLong.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LeftLongXs>`
- `<$LeftLongSm>`
- `<$LeftLongMd>`
- `<$LeftLongLg>`





## LeftLong

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element LeftLong
include('fontawesome-6/Solid/LeftLong')

' renders the element
LeftLong('LeftLong', 'Left Long', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LeftLong
include('fontawesome-6/Solid/LeftLong')

' renders the element
LeftLong('LeftLong', 'Left Long', 'an optional tech label', 'an optional description')
@enduml
```

