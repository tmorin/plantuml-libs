# Nextbike


```text
simpleicons-14/N/Nextbike
```

```text
include('simpleicons-14/N/Nextbike')
```



| Illustration | Nextbike |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Nextbike.png) | ![illustration for Nextbike](../../simpleicons-14/N/Nextbike.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NextbikeXs>`
- `<$NextbikeSm>`
- `<$NextbikeMd>`
- `<$NextbikeLg>`





## Nextbike

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nextbike
include('simpleicons-14/N/Nextbike')

' renders the element
Nextbike('Nextbike', 'Nextbike', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nextbike
include('simpleicons-14/N/Nextbike')

' renders the element
Nextbike('Nextbike', 'Nextbike', 'an optional tech label', 'an optional description')
@enduml
```

