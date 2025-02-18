# Googlenearby


```text
simpleicons-14/G/Googlenearby
```

```text
include('simpleicons-14/G/Googlenearby')
```



| Illustration | Googlenearby |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Googlenearby.png) | ![illustration for Googlenearby](../../simpleicons-14/G/Googlenearby.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GooglenearbyXs>`
- `<$GooglenearbySm>`
- `<$GooglenearbyMd>`
- `<$GooglenearbyLg>`





## Googlenearby

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Googlenearby
include('simpleicons-14/G/Googlenearby')

' renders the element
Googlenearby('Googlenearby', 'Googlenearby', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googlenearby
include('simpleicons-14/G/Googlenearby')

' renders the element
Googlenearby('Googlenearby', 'Googlenearby', 'an optional tech label', 'an optional description')
@enduml
```

