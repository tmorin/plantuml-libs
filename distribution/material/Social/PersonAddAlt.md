# PersonAddAlt


```text
material/Social/PersonAddAlt
```

```text
include('material/Social/PersonAddAlt')
```



| Illustration | PersonAddAlt |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/PersonAddAlt.png) | ![illustration for PersonAddAlt](../../material/Social/PersonAddAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonAddAltXs>`
- `<$PersonAddAltSm>`
- `<$PersonAddAltMd>`
- `<$PersonAddAltLg>`





## PersonAddAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PersonAddAlt
include('material/Social/PersonAddAlt')

' renders the element
PersonAddAlt('PersonAddAlt', 'Person Add Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonAddAlt
include('material/Social/PersonAddAlt')

' renders the element
PersonAddAlt('PersonAddAlt', 'Person Add Alt', 'an optional tech label', 'an optional description')
@enduml
```

