# Ellipsis


```text
fontawesome/Solid/Ellipsis
```

```text
include('fontawesome/Solid/Ellipsis')
```



| Illustration | Ellipsis |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Ellipsis.png) | ![illustration for Ellipsis](../../fontawesome/Solid/Ellipsis.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EllipsisXs>`
- `<$EllipsisSm>`
- `<$EllipsisMd>`
- `<$EllipsisLg>`





## Ellipsis

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Ellipsis
include('fontawesome/Solid/Ellipsis')

' renders the element
Ellipsis('Ellipsis', 'Ellipsis', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ellipsis
include('fontawesome/Solid/Ellipsis')

' renders the element
Ellipsis('Ellipsis', 'Ellipsis', 'an optional tech label', 'an optional description')
@enduml
```

