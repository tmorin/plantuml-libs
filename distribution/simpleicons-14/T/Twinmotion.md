# Twinmotion


```text
simpleicons-14/T/Twinmotion
```

```text
include('simpleicons-14/T/Twinmotion')
```



| Illustration | Twinmotion |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Twinmotion.png) | ![illustration for Twinmotion](../../simpleicons-14/T/Twinmotion.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TwinmotionXs>`
- `<$TwinmotionSm>`
- `<$TwinmotionMd>`
- `<$TwinmotionLg>`





## Twinmotion

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Twinmotion
include('simpleicons-14/T/Twinmotion')

' renders the element
Twinmotion('Twinmotion', 'Twinmotion', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Twinmotion
include('simpleicons-14/T/Twinmotion')

' renders the element
Twinmotion('Twinmotion', 'Twinmotion', 'an optional tech label', 'an optional description')
@enduml
```

