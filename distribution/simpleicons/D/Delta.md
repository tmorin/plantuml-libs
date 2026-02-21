# Delta


```text
simpleicons/D/Delta
```

```text
include('simpleicons/D/Delta')
```



| Illustration | Delta |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Delta.png) | ![illustration for Delta](../../simpleicons/D/Delta.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DeltaXs>`
- `<$DeltaSm>`
- `<$DeltaMd>`
- `<$DeltaLg>`





## Delta

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Delta
include('simpleicons/D/Delta')

' renders the element
Delta('Delta', 'Delta', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Delta
include('simpleicons/D/Delta')

' renders the element
Delta('Delta', 'Delta', 'an optional tech label', 'an optional description')
@enduml
```

