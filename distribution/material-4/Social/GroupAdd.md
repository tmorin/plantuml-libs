# GroupAdd


```text
material-4/Social/GroupAdd
```

```text
include('material-4/Social/GroupAdd')
```



| Illustration | GroupAdd |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/GroupAdd.png) | ![illustration for GroupAdd](../../material-4/Social/GroupAdd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GroupAddXs>`
- `<$GroupAddSm>`
- `<$GroupAddMd>`
- `<$GroupAddLg>`





## GroupAdd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element GroupAdd
include('material-4/Social/GroupAdd')

' renders the element
GroupAdd('GroupAdd', 'Group Add', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element GroupAdd
include('material-4/Social/GroupAdd')

' renders the element
GroupAdd('GroupAdd', 'Group Add', 'an optional tech label', 'an optional description')
@enduml
```

