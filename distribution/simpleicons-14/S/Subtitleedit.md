# Subtitleedit


```text
simpleicons-14/S/Subtitleedit
```

```text
include('simpleicons-14/S/Subtitleedit')
```



| Illustration | Subtitleedit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Subtitleedit.png) | ![illustration for Subtitleedit](../../simpleicons-14/S/Subtitleedit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SubtitleeditXs>`
- `<$SubtitleeditSm>`
- `<$SubtitleeditMd>`
- `<$SubtitleeditLg>`





## Subtitleedit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Subtitleedit
include('simpleicons-14/S/Subtitleedit')

' renders the element
Subtitleedit('Subtitleedit', 'Subtitleedit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Subtitleedit
include('simpleicons-14/S/Subtitleedit')

' renders the element
Subtitleedit('Subtitleedit', 'Subtitleedit', 'an optional tech label', 'an optional description')
@enduml
```

