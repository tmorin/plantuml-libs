# Near


```text
simpleicons/N/Near
```

```text
include('simpleicons/N/Near')
```



| Illustration | Near |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Near.png) | ![illustration for Near](../../simpleicons/N/Near.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NearXs>`
- `<$NearSm>`
- `<$NearMd>`
- `<$NearLg>`





## Near

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Near
include('simpleicons/N/Near')

' renders the element
Near('Near', 'Near', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Near
include('simpleicons/N/Near')

' renders the element
Near('Near', 'Near', 'an optional tech label', 'an optional description')
@enduml
```

