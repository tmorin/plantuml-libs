# PersonRemove


```text
material/Social/PersonRemove
```

```text
include('material/Social/PersonRemove')
```



| Illustration | PersonRemove |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/PersonRemove.png) | ![illustration for PersonRemove](../../material/Social/PersonRemove.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonRemoveXs>`
- `<$PersonRemoveSm>`
- `<$PersonRemoveMd>`
- `<$PersonRemoveLg>`





## PersonRemove

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PersonRemove
include('material/Social/PersonRemove')

' renders the element
PersonRemove('PersonRemove', 'Person Remove', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonRemove
include('material/Social/PersonRemove')

' renders the element
PersonRemove('PersonRemove', 'Person Remove', 'an optional tech label', 'an optional description')
@enduml
```

