# EyeSlash


```text
fontawesome-6/Solid/EyeSlash
```

```text
include('fontawesome-6/Solid/EyeSlash')
```



| Illustration | EyeSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/EyeSlash.png) | ![illustration for EyeSlash](../../fontawesome-6/Solid/EyeSlash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EyeSlashXs>`
- `<$EyeSlashSm>`
- `<$EyeSlashMd>`
- `<$EyeSlashLg>`





## EyeSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element EyeSlash
include('fontawesome-6/Solid/EyeSlash')

' renders the element
EyeSlash('EyeSlash', 'Eye Slash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element EyeSlash
include('fontawesome-6/Solid/EyeSlash')

' renders the element
EyeSlash('EyeSlash', 'Eye Slash', 'an optional tech label', 'an optional description')
@enduml
```

