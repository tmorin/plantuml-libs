# Erpnext


```text
simpleicons-14/E/Erpnext
```

```text
include('simpleicons-14/E/Erpnext')
```



| Illustration | Erpnext |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Erpnext.png) | ![illustration for Erpnext](../../simpleicons-14/E/Erpnext.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ErpnextXs>`
- `<$ErpnextSm>`
- `<$ErpnextMd>`
- `<$ErpnextLg>`





## Erpnext

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Erpnext
include('simpleicons-14/E/Erpnext')

' renders the element
Erpnext('Erpnext', 'Erpnext', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Erpnext
include('simpleicons-14/E/Erpnext')

' renders the element
Erpnext('Erpnext', 'Erpnext', 'an optional tech label', 'an optional description')
@enduml
```

