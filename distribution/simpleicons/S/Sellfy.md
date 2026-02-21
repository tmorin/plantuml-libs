# Sellfy


```text
simpleicons/S/Sellfy
```

```text
include('simpleicons/S/Sellfy')
```



| Illustration | Sellfy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Sellfy.png) | ![illustration for Sellfy](../../simpleicons/S/Sellfy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SellfyXs>`
- `<$SellfySm>`
- `<$SellfyMd>`
- `<$SellfyLg>`





## Sellfy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Sellfy
include('simpleicons/S/Sellfy')

' renders the element
Sellfy('Sellfy', 'Sellfy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sellfy
include('simpleicons/S/Sellfy')

' renders the element
Sellfy('Sellfy', 'Sellfy', 'an optional tech label', 'an optional description')
@enduml
```

