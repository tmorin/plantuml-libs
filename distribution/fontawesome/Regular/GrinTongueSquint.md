# GrinTongueSquint


```text
fontawesome/Regular/GrinTongueSquint
```

```text
include('fontawesome/Regular/GrinTongueSquint')
```



| Illustration | GrinTongueSquint |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/GrinTongueSquint.png) | ![illustration for GrinTongueSquint](../../fontawesome/Regular/GrinTongueSquint.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GrinTongueSquintXs>`
- `<$GrinTongueSquintSm>`
- `<$GrinTongueSquintMd>`
- `<$GrinTongueSquintLg>`





## GrinTongueSquint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GrinTongueSquint
include('fontawesome/Regular/GrinTongueSquint')

' renders the element
GrinTongueSquint('GrinTongueSquint', 'Grin Tongue Squint', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GrinTongueSquint
include('fontawesome/Regular/GrinTongueSquint')

' renders the element
GrinTongueSquint('GrinTongueSquint', 'Grin Tongue Squint', 'an optional tech label', 'an optional description')
@enduml
```

