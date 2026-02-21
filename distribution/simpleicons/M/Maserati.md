# Maserati


```text
simpleicons/M/Maserati
```

```text
include('simpleicons/M/Maserati')
```



| Illustration | Maserati |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Maserati.png) | ![illustration for Maserati](../../simpleicons/M/Maserati.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MaseratiXs>`
- `<$MaseratiSm>`
- `<$MaseratiMd>`
- `<$MaseratiLg>`





## Maserati

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Maserati
include('simpleicons/M/Maserati')

' renders the element
Maserati('Maserati', 'Maserati', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Maserati
include('simpleicons/M/Maserati')

' renders the element
Maserati('Maserati', 'Maserati', 'an optional tech label', 'an optional description')
@enduml
```

