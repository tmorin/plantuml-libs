# Citrix


```text
simpleicons-8/C/Citrix
```

```text
include('simpleicons-8/C/Citrix')
```



| Illustration | Citrix |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Citrix.png) | ![illustration for Citrix](../../simpleicons-8/C/Citrix.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CitrixXs>`
- `<$CitrixSm>`
- `<$CitrixMd>`
- `<$CitrixLg>`





## Citrix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Citrix
include('simpleicons-8/C/Citrix')

' renders the element
Citrix('Citrix', 'Citrix', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Citrix
include('simpleicons-8/C/Citrix')

' renders the element
Citrix('Citrix', 'Citrix', 'an optional tech label', 'an optional description')
@enduml
```

