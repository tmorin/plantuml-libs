# Replicate


```text
simpleicons/R/Replicate
```

```text
include('simpleicons/R/Replicate')
```



| Illustration | Replicate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Replicate.png) | ![illustration for Replicate](../../simpleicons/R/Replicate.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ReplicateXs>`
- `<$ReplicateSm>`
- `<$ReplicateMd>`
- `<$ReplicateLg>`





## Replicate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Replicate
include('simpleicons/R/Replicate')

' renders the element
Replicate('Replicate', 'Replicate', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Replicate
include('simpleicons/R/Replicate')

' renders the element
Replicate('Replicate', 'Replicate', 'an optional tech label', 'an optional description')
@enduml
```

