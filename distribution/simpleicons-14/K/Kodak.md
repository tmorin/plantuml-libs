# Kodak


```text
simpleicons-14/K/Kodak
```

```text
include('simpleicons-14/K/Kodak')
```



| Illustration | Kodak |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Kodak.png) | ![illustration for Kodak](../../simpleicons-14/K/Kodak.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Kodak
include('simpleicons-14/K/Kodak')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Kodak
include('simpleicons-14/K/Kodak')

' renders the element
Kodak('Kodak', 'Kodak', 'an optional tech label', 'an optional description')
@enduml
```

