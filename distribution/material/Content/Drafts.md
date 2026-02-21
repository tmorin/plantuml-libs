# Drafts


```text
material/Content/Drafts
```

```text
include('material/Content/Drafts')
```



| Illustration | Drafts |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/Drafts.png) | ![illustration for Drafts](../../material/Content/Drafts.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element Drafts
include('material/Content/Drafts')

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
include('material/bootstrap')

' loads the Item which embeds the element Drafts
include('material/Content/Drafts')

' renders the element
Drafts('Drafts', 'Drafts', 'an optional tech label', 'an optional description')
@enduml
```

