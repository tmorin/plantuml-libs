# EllipsisV


```text
fontawesome/Solid/EllipsisV
```

```text
include('fontawesome/Solid/EllipsisV')
```



| Illustration | EllipsisV |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/EllipsisV.png) | ![illustration for EllipsisV](../../fontawesome/Solid/EllipsisV.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EllipsisVXs>`
- `<$EllipsisVSm>`
- `<$EllipsisVMd>`
- `<$EllipsisVLg>`





## EllipsisV

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element EllipsisV
include('fontawesome/Solid/EllipsisV')

' renders the element
EllipsisV('EllipsisV', 'Ellipsis V', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element EllipsisV
include('fontawesome/Solid/EllipsisV')

' renders the element
EllipsisV('EllipsisV', 'Ellipsis V', 'an optional tech label', 'an optional description')
@enduml
```

