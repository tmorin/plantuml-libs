# Nextbike


```text
simpleicons/N/Nextbike
```

```text
include('simpleicons/N/Nextbike')
```



| Illustration | Nextbike |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Nextbike.png) | ![illustration for Nextbike](../../simpleicons/N/Nextbike.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Nextbike
include('simpleicons/N/Nextbike')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Nextbike
include('simpleicons/N/Nextbike')

' renders the element
Nextbike('Nextbike', 'Nextbike', 'an optional tech label', 'an optional description')
@enduml
```

