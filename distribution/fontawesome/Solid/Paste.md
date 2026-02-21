# Paste


```text
fontawesome/Solid/Paste
```

```text
include('fontawesome/Solid/Paste')
```



| Illustration | Paste |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Paste.png) | ![illustration for Paste](../../fontawesome/Solid/Paste.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PasteXs>`
- `<$PasteSm>`
- `<$PasteMd>`
- `<$PasteLg>`





## Paste

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Paste
include('fontawesome/Solid/Paste')

' renders the element
Paste('Paste', 'Paste', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Paste
include('fontawesome/Solid/Paste')

' renders the element
Paste('Paste', 'Paste', 'an optional tech label', 'an optional description')
@enduml
```

