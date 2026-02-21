# Kodak


```text
simpleicons/K/Kodak
```

```text
include('simpleicons/K/Kodak')
```



| Illustration | Kodak |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Kodak.png) | ![illustration for Kodak](../../simpleicons/K/Kodak.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KodakXs>`
- `<$KodakSm>`
- `<$KodakMd>`
- `<$KodakLg>`





## Kodak

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Kodak
include('simpleicons/K/Kodak')

' renders the element
Kodak('Kodak', 'Kodak', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kodak
include('simpleicons/K/Kodak')

' renders the element
Kodak('Kodak', 'Kodak', 'an optional tech label', 'an optional description')
@enduml
```

