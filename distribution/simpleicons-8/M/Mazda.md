# Mazda


```text
simpleicons-8/M/Mazda
```

```text
include('simpleicons-8/M/Mazda')
```



| Illustration | Mazda |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/M/Mazda.png) | ![illustration for Mazda](../../simpleicons-8/M/Mazda.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MazdaXs>`
- `<$MazdaSm>`
- `<$MazdaMd>`
- `<$MazdaLg>`





## Mazda

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Mazda
include('simpleicons-8/M/Mazda')

' renders the element
Mazda('Mazda', 'Mazda', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mazda
include('simpleicons-8/M/Mazda')

' renders the element
Mazda('Mazda', 'Mazda', 'an optional tech label', 'an optional description')
@enduml
```

