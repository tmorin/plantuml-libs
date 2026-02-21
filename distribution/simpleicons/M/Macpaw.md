# Macpaw


```text
simpleicons/M/Macpaw
```

```text
include('simpleicons/M/Macpaw')
```



| Illustration | Macpaw |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Macpaw.png) | ![illustration for Macpaw](../../simpleicons/M/Macpaw.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MacpawXs>`
- `<$MacpawSm>`
- `<$MacpawMd>`
- `<$MacpawLg>`





## Macpaw

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Macpaw
include('simpleicons/M/Macpaw')

' renders the element
Macpaw('Macpaw', 'Macpaw', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Macpaw
include('simpleicons/M/Macpaw')

' renders the element
Macpaw('Macpaw', 'Macpaw', 'an optional tech label', 'an optional description')
@enduml
```

