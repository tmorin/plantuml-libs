# Z


```text
fontawesome-6/Solid/Z
```

```text
include('fontawesome-6/Solid/Z')
```



| Illustration | Z |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Z.png) | ![illustration for Z](../../fontawesome-6/Solid/Z.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Z
include('fontawesome-6/Solid/Z')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Z
include('fontawesome-6/Solid/Z')

' renders the element
Z('Z', 'Z', 'an optional tech label', 'an optional description')
@enduml
```

