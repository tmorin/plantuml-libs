# TheRedYeti


```text
fontawesome/Brands/TheRedYeti
```

```text
include('fontawesome/Brands/TheRedYeti')
```



| Illustration | TheRedYeti |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/TheRedYeti.png) | ![illustration for TheRedYeti](../../fontawesome/Brands/TheRedYeti.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TheRedYetiXs>`
- `<$TheRedYetiSm>`
- `<$TheRedYetiMd>`
- `<$TheRedYetiLg>`





## TheRedYeti

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TheRedYeti
include('fontawesome/Brands/TheRedYeti')

' renders the element
TheRedYeti('TheRedYeti', 'The Red Yeti', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TheRedYeti
include('fontawesome/Brands/TheRedYeti')

' renders the element
TheRedYeti('TheRedYeti', 'The Red Yeti', 'an optional tech label', 'an optional description')
@enduml
```

