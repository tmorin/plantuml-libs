# Drafts


```text
material-4/Content/Drafts
```

```text
include('material-4/Content/Drafts')
```



| Illustration | Drafts |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/Drafts.png) | ![illustration for Drafts](../../material-4/Content/Drafts.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DraftsXs>`
- `<$DraftsSm>`
- `<$DraftsMd>`
- `<$DraftsLg>`





## Drafts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Drafts
include('material-4/Content/Drafts')

' renders the element
Drafts('Drafts', 'Drafts', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Drafts
include('material-4/Content/Drafts')

' renders the element
Drafts('Drafts', 'Drafts', 'an optional tech label', 'an optional description')
@enduml
```

