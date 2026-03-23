# EllipsisH


```text
fontawesome/Solid/EllipsisH
```

```text
include('fontawesome/Solid/EllipsisH')
```



| Illustration | EllipsisH |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/EllipsisH.png) | ![illustration for EllipsisH](../../fontawesome/Solid/EllipsisH.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EllipsisHXs>`
- `<$EllipsisHSm>`
- `<$EllipsisHMd>`
- `<$EllipsisHLg>`





## EllipsisH

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element EllipsisH
include('fontawesome/Solid/EllipsisH')

' renders the element
EllipsisH('EllipsisH', 'Ellipsis H', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element EllipsisH
include('fontawesome/Solid/EllipsisH')

' renders the element
EllipsisH('EllipsisH', 'Ellipsis H', 'an optional tech label', 'an optional description')
@enduml
```

