# Thunderstore


```text
simpleicons-14/T/Thunderstore
```

```text
include('simpleicons-14/T/Thunderstore')
```



| Illustration | Thunderstore |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Thunderstore.png) | ![illustration for Thunderstore](../../simpleicons-14/T/Thunderstore.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThunderstoreXs>`
- `<$ThunderstoreSm>`
- `<$ThunderstoreMd>`
- `<$ThunderstoreLg>`





## Thunderstore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Thunderstore
include('simpleicons-14/T/Thunderstore')

' renders the element
Thunderstore('Thunderstore', 'Thunderstore', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Thunderstore
include('simpleicons-14/T/Thunderstore')

' renders the element
Thunderstore('Thunderstore', 'Thunderstore', 'an optional tech label', 'an optional description')
@enduml
```

