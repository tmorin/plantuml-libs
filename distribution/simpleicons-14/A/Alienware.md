# Alienware


```text
simpleicons-14/A/Alienware
```

```text
include('simpleicons-14/A/Alienware')
```



| Illustration | Alienware |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Alienware.png) | ![illustration for Alienware](../../simpleicons-14/A/Alienware.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AlienwareXs>`
- `<$AlienwareSm>`
- `<$AlienwareMd>`
- `<$AlienwareLg>`





## Alienware

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Alienware
include('simpleicons-14/A/Alienware')

' renders the element
Alienware('Alienware', 'Alienware', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Alienware
include('simpleicons-14/A/Alienware')

' renders the element
Alienware('Alienware', 'Alienware', 'an optional tech label', 'an optional description')
@enduml
```

