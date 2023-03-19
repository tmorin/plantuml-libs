# Eventstore


```text
simpleicons-8/E/Eventstore
```

```text
include('simpleicons-8/E/Eventstore')
```



| Illustration | Eventstore |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/E/Eventstore.png) | ![illustration for Eventstore](../../simpleicons-8/E/Eventstore.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EventstoreXs>`
- `<$EventstoreSm>`
- `<$EventstoreMd>`
- `<$EventstoreLg>`





## Eventstore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Eventstore
include('simpleicons-8/E/Eventstore')

' renders the element
Eventstore('Eventstore', 'Eventstore', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Eventstore
include('simpleicons-8/E/Eventstore')

' renders the element
Eventstore('Eventstore', 'Eventstore', 'an optional tech label', 'an optional description')
@enduml
```

