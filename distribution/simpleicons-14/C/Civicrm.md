# Civicrm


```text
simpleicons-14/C/Civicrm
```

```text
include('simpleicons-14/C/Civicrm')
```



| Illustration | Civicrm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Civicrm.png) | ![illustration for Civicrm](../../simpleicons-14/C/Civicrm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CivicrmXs>`
- `<$CivicrmSm>`
- `<$CivicrmMd>`
- `<$CivicrmLg>`





## Civicrm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Civicrm
include('simpleicons-14/C/Civicrm')

' renders the element
Civicrm('Civicrm', 'Civicrm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Civicrm
include('simpleicons-14/C/Civicrm')

' renders the element
Civicrm('Civicrm', 'Civicrm', 'an optional tech label', 'an optional description')
@enduml
```

