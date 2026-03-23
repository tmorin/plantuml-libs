# ThumbTackSlash


```text
fontawesome/Solid/ThumbTackSlash
```

```text
include('fontawesome/Solid/ThumbTackSlash')
```



| Illustration | ThumbTackSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ThumbTackSlash.png) | ![illustration for ThumbTackSlash](../../fontawesome/Solid/ThumbTackSlash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThumbTackSlashXs>`
- `<$ThumbTackSlashSm>`
- `<$ThumbTackSlashMd>`
- `<$ThumbTackSlashLg>`





## ThumbTackSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ThumbTackSlash
include('fontawesome/Solid/ThumbTackSlash')

' renders the element
ThumbTackSlash('ThumbTackSlash', 'Thumb Tack Slash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ThumbTackSlash
include('fontawesome/Solid/ThumbTackSlash')

' renders the element
ThumbTackSlash('ThumbTackSlash', 'Thumb Tack Slash', 'an optional tech label', 'an optional description')
@enduml
```

