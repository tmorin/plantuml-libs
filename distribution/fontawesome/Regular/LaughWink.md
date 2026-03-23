# LaughWink


```text
fontawesome/Regular/LaughWink
```

```text
include('fontawesome/Regular/LaughWink')
```



| Illustration | LaughWink |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/LaughWink.png) | ![illustration for LaughWink](../../fontawesome/Regular/LaughWink.Local.png) |



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
include('fontawesome/Regular/LaughWink')

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
include('fontawesome/Regular/LaughWink')

' renders the element
LaughWink('LaughWink', 'Laugh Wink', 'an optional tech label', 'an optional description')
@enduml
```

