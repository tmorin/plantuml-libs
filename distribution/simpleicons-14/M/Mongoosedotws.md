# Mongoosedotws


```text
simpleicons-14/M/Mongoosedotws
```

```text
include('simpleicons-14/M/Mongoosedotws')
```



| Illustration | Mongoosedotws |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mongoosedotws.png) | ![illustration for Mongoosedotws](../../simpleicons-14/M/Mongoosedotws.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MongoosedotwsXs>`
- `<$MongoosedotwsSm>`
- `<$MongoosedotwsMd>`
- `<$MongoosedotwsLg>`





## Mongoosedotws

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mongoosedotws
include('simpleicons-14/M/Mongoosedotws')

' renders the element
Mongoosedotws('Mongoosedotws', 'Mongoosedotws', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mongoosedotws
include('simpleicons-14/M/Mongoosedotws')

' renders the element
Mongoosedotws('Mongoosedotws', 'Mongoosedotws', 'an optional tech label', 'an optional description')
@enduml
```

