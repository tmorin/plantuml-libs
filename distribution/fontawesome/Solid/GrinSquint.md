# GrinSquint


```text
fontawesome/Solid/GrinSquint
```

```text
include('fontawesome/Solid/GrinSquint')
```



| Illustration | GrinSquint |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/GrinSquint.png) | ![illustration for GrinSquint](../../fontawesome/Solid/GrinSquint.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GrinSquintXs>`
- `<$GrinSquintSm>`
- `<$GrinSquintMd>`
- `<$GrinSquintLg>`





## GrinSquint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GrinSquint
include('fontawesome/Solid/GrinSquint')

' renders the element
GrinSquint('GrinSquint', 'Grin Squint', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GrinSquint
include('fontawesome/Solid/GrinSquint')

' renders the element
GrinSquint('GrinSquint', 'Grin Squint', 'an optional tech label', 'an optional description')
@enduml
```

