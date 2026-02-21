# Appmanager


```text
simpleicons-14/A/Appmanager
```

```text
include('simpleicons-14/A/Appmanager')
```



| Illustration | Appmanager |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Appmanager.png) | ![illustration for Appmanager](../../simpleicons-14/A/Appmanager.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AppmanagerXs>`
- `<$AppmanagerSm>`
- `<$AppmanagerMd>`
- `<$AppmanagerLg>`





## Appmanager

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Appmanager
include('simpleicons-14/A/Appmanager')

' renders the element
Appmanager('Appmanager', 'Appmanager', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Appmanager
include('simpleicons-14/A/Appmanager')

' renders the element
Appmanager('Appmanager', 'Appmanager', 'an optional tech label', 'an optional description')
@enduml
```

