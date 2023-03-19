# FolderMinus


```text
fontawesome-6/Solid/FolderMinus
```

```text
include('fontawesome-6/Solid/FolderMinus')
```



| Illustration | FolderMinus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FolderMinus.png) | ![illustration for FolderMinus](../../fontawesome-6/Solid/FolderMinus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FolderMinusXs>`
- `<$FolderMinusSm>`
- `<$FolderMinusMd>`
- `<$FolderMinusLg>`





## FolderMinus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FolderMinus
include('fontawesome-6/Solid/FolderMinus')

' renders the element
FolderMinus('FolderMinus', 'Folder Minus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FolderMinus
include('fontawesome-6/Solid/FolderMinus')

' renders the element
FolderMinus('FolderMinus', 'Folder Minus', 'an optional tech label', 'an optional description')
@enduml
```

