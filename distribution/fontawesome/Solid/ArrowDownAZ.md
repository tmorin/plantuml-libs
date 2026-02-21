# ArrowDownAZ


```text
fontawesome/Solid/ArrowDownAZ
```

```text
include('fontawesome/Solid/ArrowDownAZ')
```



| Illustration | ArrowDownAZ |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ArrowDownAZ.png) | ![illustration for ArrowDownAZ](../../fontawesome/Solid/ArrowDownAZ.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArrowDownAZXs>`
- `<$ArrowDownAZSm>`
- `<$ArrowDownAZMd>`
- `<$ArrowDownAZLg>`





## ArrowDownAZ

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ArrowDownAZ
include('fontawesome/Solid/ArrowDownAZ')

' renders the element
ArrowDownAZ('ArrowDownAz', 'Arrow Down Az', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowDownAZ
include('fontawesome/Solid/ArrowDownAZ')

' renders the element
ArrowDownAZ('ArrowDownAz', 'Arrow Down Az', 'an optional tech label', 'an optional description')
@enduml
```

