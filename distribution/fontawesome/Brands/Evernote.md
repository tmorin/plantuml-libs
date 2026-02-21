# Evernote


```text
fontawesome/Brands/Evernote
```

```text
include('fontawesome/Brands/Evernote')
```



| Illustration | Evernote |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Evernote.png) | ![illustration for Evernote](../../fontawesome/Brands/Evernote.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EvernoteXs>`
- `<$EvernoteSm>`
- `<$EvernoteMd>`
- `<$EvernoteLg>`





## Evernote

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Evernote
include('fontawesome/Brands/Evernote')

' renders the element
Evernote('Evernote', 'Evernote', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Evernote
include('fontawesome/Brands/Evernote')

' renders the element
Evernote('Evernote', 'Evernote', 'an optional tech label', 'an optional description')
@enduml
```

