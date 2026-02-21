# Abdownloadmanager


```text
simpleicons-14/A/Abdownloadmanager
```

```text
include('simpleicons-14/A/Abdownloadmanager')
```



| Illustration | Abdownloadmanager |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Abdownloadmanager.png) | ![illustration for Abdownloadmanager](../../simpleicons-14/A/Abdownloadmanager.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AbdownloadmanagerXs>`
- `<$AbdownloadmanagerSm>`
- `<$AbdownloadmanagerMd>`
- `<$AbdownloadmanagerLg>`





## Abdownloadmanager

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Abdownloadmanager
include('simpleicons-14/A/Abdownloadmanager')

' renders the element
Abdownloadmanager('Abdownloadmanager', 'Abdownloadmanager', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Abdownloadmanager
include('simpleicons-14/A/Abdownloadmanager')

' renders the element
Abdownloadmanager('Abdownloadmanager', 'Abdownloadmanager', 'an optional tech label', 'an optional description')
@enduml
```

