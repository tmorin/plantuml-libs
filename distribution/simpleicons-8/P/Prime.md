# Prime


```text
simpleicons-8/P/Prime
```

```text
include('simpleicons-8/P/Prime')
```



| Illustration | Prime |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Prime.png) | ![illustration for Prime](../../simpleicons-8/P/Prime.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PrimeXs>`
- `<$PrimeSm>`
- `<$PrimeMd>`
- `<$PrimeLg>`





## Prime

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Prime
include('simpleicons-8/P/Prime')

' renders the element
Prime('Prime', 'Prime', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Prime
include('simpleicons-8/P/Prime')

' renders the element
Prime('Prime', 'Prime', 'an optional tech label', 'an optional description')
@enduml
```

