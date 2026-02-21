# Z


```text
fontawesome/Solid/Z
```

```text
include('fontawesome/Solid/Z')
```



| Illustration | Z |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Z.png) | ![illustration for Z](../../fontawesome/Solid/Z.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZXs>`
- `<$ZSm>`
- `<$ZMd>`
- `<$ZLg>`





## Z

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Z
include('fontawesome/Solid/Z')

' renders the element
Z('Z', 'Z', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Z
include('fontawesome/Solid/Z')

' renders the element
Z('Z', 'Z', 'an optional tech label', 'an optional description')
@enduml
```

