# _42Group


```text
fontawesome/Brands/_42Group
```

```text
include('fontawesome/Brands/_42Group')
```



| Illustration | _42Group |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/_42Group.png) | ![illustration for _42Group](../../fontawesome/Brands/_42Group.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$_42GroupXs>`
- `<$_42GroupSm>`
- `<$_42GroupMd>`
- `<$_42GroupLg>`





## _42Group

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element _42Group
include('fontawesome/Brands/_42Group')

' renders the element
_42Group('42group', '42group', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element _42Group
include('fontawesome/Brands/_42Group')

' renders the element
_42Group('42group', '42group', 'an optional tech label', 'an optional description')
@enduml
```

