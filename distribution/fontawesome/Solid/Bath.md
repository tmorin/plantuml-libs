# Bath


```text
fontawesome/Solid/Bath
```

```text
include('fontawesome/Solid/Bath')
```



| Illustration | Bath |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Bath.png) | ![illustration for Bath](../../fontawesome/Solid/Bath.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BathXs>`
- `<$BathSm>`
- `<$BathMd>`
- `<$BathLg>`





## Bath

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Bath
include('fontawesome/Solid/Bath')

' renders the element
Bath('Bath', 'Bath', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bath
include('fontawesome/Solid/Bath')

' renders the element
Bath('Bath', 'Bath', 'an optional tech label', 'an optional description')
@enduml
```

