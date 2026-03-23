# LaughWink


```text
fontawesome/Solid/LaughWink
```

```text
include('fontawesome/Solid/LaughWink')
```



| Illustration | LaughWink |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/LaughWink.png) | ![illustration for LaughWink](../../fontawesome/Solid/LaughWink.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LaughWinkXs>`
- `<$LaughWinkSm>`
- `<$LaughWinkMd>`
- `<$LaughWinkLg>`





## LaughWink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LaughWink
include('fontawesome/Solid/LaughWink')

' renders the element
LaughWink('LaughWink', 'Laugh Wink', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LaughWink
include('fontawesome/Solid/LaughWink')

' renders the element
LaughWink('LaughWink', 'Laugh Wink', 'an optional tech label', 'an optional description')
@enduml
```

