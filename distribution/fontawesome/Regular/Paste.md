# Paste


```text
fontawesome/Regular/Paste
```

```text
include('fontawesome/Regular/Paste')
```



| Illustration | Paste |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/Paste.png) | ![illustration for Paste](../../fontawesome/Regular/Paste.Local.png) |



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
include('fontawesome/Regular/Paste')

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
include('fontawesome/Regular/Paste')

' renders the element
Paste('Paste', 'Paste', 'an optional tech label', 'an optional description')
@enduml
```

