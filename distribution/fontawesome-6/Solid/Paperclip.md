# Paperclip


```text
fontawesome-6/Solid/Paperclip
```

```text
include('fontawesome-6/Solid/Paperclip')
```



| Illustration | Paperclip |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Paperclip.png) | ![illustration for Paperclip](../../fontawesome-6/Solid/Paperclip.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Paperclip
include('fontawesome-6/Solid/Paperclip')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Paperclip
include('fontawesome-6/Solid/Paperclip')

' renders the element
Paperclip('Paperclip', 'Paperclip', 'an optional tech label', 'an optional description')
@enduml
```

