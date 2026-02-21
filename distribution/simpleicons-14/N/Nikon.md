# Nikon


```text
simpleicons-14/N/Nikon
```

```text
include('simpleicons-14/N/Nikon')
```



| Illustration | Nikon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Nikon.png) | ![illustration for Nikon](../../simpleicons-14/N/Nikon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NikonXs>`
- `<$NikonSm>`
- `<$NikonMd>`
- `<$NikonLg>`





## Nikon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nikon
include('simpleicons-14/N/Nikon')

' renders the element
Nikon('Nikon', 'Nikon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nikon
include('simpleicons-14/N/Nikon')

' renders the element
Nikon('Nikon', 'Nikon', 'an optional tech label', 'an optional description')
@enduml
```

