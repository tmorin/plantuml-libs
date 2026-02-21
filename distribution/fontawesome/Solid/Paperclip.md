# Paperclip


```text
fontawesome/Solid/Paperclip
```

```text
include('fontawesome/Solid/Paperclip')
```



| Illustration | Paperclip |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Paperclip.png) | ![illustration for Paperclip](../../fontawesome/Solid/Paperclip.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PaperclipXs>`
- `<$PaperclipSm>`
- `<$PaperclipMd>`
- `<$PaperclipLg>`





## Paperclip

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Paperclip
include('fontawesome/Solid/Paperclip')

' renders the element
Paperclip('Paperclip', 'Paperclip', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Paperclip
include('fontawesome/Solid/Paperclip')

' renders the element
Paperclip('Paperclip', 'Paperclip', 'an optional tech label', 'an optional description')
@enduml
```

