# PersonAdd


```text
material/Social/PersonAdd
```

```text
include('material/Social/PersonAdd')
```



| Illustration | PersonAdd |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/PersonAdd.png) | ![illustration for PersonAdd](../../material/Social/PersonAdd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonAddXs>`
- `<$PersonAddSm>`
- `<$PersonAddMd>`
- `<$PersonAddLg>`





## PersonAdd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PersonAdd
include('material/Social/PersonAdd')

' renders the element
PersonAdd('PersonAdd', 'Person Add', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element PersonAdd
include('material/Social/PersonAdd')

' renders the element
PersonAdd('PersonAdd', 'Person Add', 'an optional tech label', 'an optional description')
@enduml
```

