# Rider


```text
simpleicons-8/R/Rider
```

```text
include('simpleicons-8/R/Rider')
```



| Illustration | Rider |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/R/Rider.png) | ![illustration for Rider](../../simpleicons-8/R/Rider.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RiderXs>`
- `<$RiderSm>`
- `<$RiderMd>`
- `<$RiderLg>`





## Rider

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Rider
include('simpleicons-8/R/Rider')

' renders the element
Rider('Rider', 'Rider', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rider
include('simpleicons-8/R/Rider')

' renders the element
Rider('Rider', 'Rider', 'an optional tech label', 'an optional description')
@enduml
```

