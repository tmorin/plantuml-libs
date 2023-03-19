# ContentPaste


```text
material-4/Content/ContentPaste
```

```text
include('material-4/Content/ContentPaste')
```



| Illustration | ContentPaste |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/ContentPaste.png) | ![illustration for ContentPaste](../../material-4/Content/ContentPaste.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ContentPasteXs>`
- `<$ContentPasteSm>`
- `<$ContentPasteMd>`
- `<$ContentPasteLg>`





## ContentPaste

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ContentPaste
include('material-4/Content/ContentPaste')

' renders the element
ContentPaste('ContentPaste', 'Content Paste', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element ContentPaste
include('material-4/Content/ContentPaste')

' renders the element
ContentPaste('ContentPaste', 'Content Paste', 'an optional tech label', 'an optional description')
@enduml
```

