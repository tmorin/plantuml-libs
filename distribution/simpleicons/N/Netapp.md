# Netapp


```text
simpleicons/N/Netapp
```

```text
include('simpleicons/N/Netapp')
```



| Illustration | Netapp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Netapp.png) | ![illustration for Netapp](../../simpleicons/N/Netapp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NetappXs>`
- `<$NetappSm>`
- `<$NetappMd>`
- `<$NetappLg>`





## Netapp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Netapp
include('simpleicons/N/Netapp')

' renders the element
Netapp('Netapp', 'Netapp', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Netapp
include('simpleicons/N/Netapp')

' renders the element
Netapp('Netapp', 'Netapp', 'an optional tech label', 'an optional description')
@enduml
```

