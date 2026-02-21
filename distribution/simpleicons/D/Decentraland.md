# Decentraland


```text
simpleicons/D/Decentraland
```

```text
include('simpleicons/D/Decentraland')
```



| Illustration | Decentraland |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Decentraland.png) | ![illustration for Decentraland](../../simpleicons/D/Decentraland.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DecentralandXs>`
- `<$DecentralandSm>`
- `<$DecentralandMd>`
- `<$DecentralandLg>`





## Decentraland

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Decentraland
include('simpleicons/D/Decentraland')

' renders the element
Decentraland('Decentraland', 'Decentraland', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Decentraland
include('simpleicons/D/Decentraland')

' renders the element
Decentraland('Decentraland', 'Decentraland', 'an optional tech label', 'an optional description')
@enduml
```

