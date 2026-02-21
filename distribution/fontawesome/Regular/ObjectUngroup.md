# ObjectUngroup


```text
fontawesome/Regular/ObjectUngroup
```

```text
include('fontawesome/Regular/ObjectUngroup')
```



| Illustration | ObjectUngroup |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/ObjectUngroup.png) | ![illustration for ObjectUngroup](../../fontawesome/Regular/ObjectUngroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ObjectUngroupXs>`
- `<$ObjectUngroupSm>`
- `<$ObjectUngroupMd>`
- `<$ObjectUngroupLg>`





## ObjectUngroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ObjectUngroup
include('fontawesome/Regular/ObjectUngroup')

' renders the element
ObjectUngroup('ObjectUngroup', 'Object Ungroup', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ObjectUngroup
include('fontawesome/Regular/ObjectUngroup')

' renders the element
ObjectUngroup('ObjectUngroup', 'Object Ungroup', 'an optional tech label', 'an optional description')
@enduml
```

