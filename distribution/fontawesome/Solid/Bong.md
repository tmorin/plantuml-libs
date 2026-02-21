# Bong


```text
fontawesome/Solid/Bong
```

```text
include('fontawesome/Solid/Bong')
```



| Illustration | Bong |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Bong.png) | ![illustration for Bong](../../fontawesome/Solid/Bong.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BongXs>`
- `<$BongSm>`
- `<$BongMd>`
- `<$BongLg>`





## Bong

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Bong
include('fontawesome/Solid/Bong')

' renders the element
Bong('Bong', 'Bong', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bong
include('fontawesome/Solid/Bong')

' renders the element
Bong('Bong', 'Bong', 'an optional tech label', 'an optional description')
@enduml
```

