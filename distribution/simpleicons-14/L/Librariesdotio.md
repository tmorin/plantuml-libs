# Librariesdotio


```text
simpleicons-14/L/Librariesdotio
```

```text
include('simpleicons-14/L/Librariesdotio')
```



| Illustration | Librariesdotio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Librariesdotio.png) | ![illustration for Librariesdotio](../../simpleicons-14/L/Librariesdotio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LibrariesdotioXs>`
- `<$LibrariesdotioSm>`
- `<$LibrariesdotioMd>`
- `<$LibrariesdotioLg>`





## Librariesdotio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Librariesdotio
include('simpleicons-14/L/Librariesdotio')

' renders the element
Librariesdotio('Librariesdotio', 'Librariesdotio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Librariesdotio
include('simpleicons-14/L/Librariesdotio')

' renders the element
Librariesdotio('Librariesdotio', 'Librariesdotio', 'an optional tech label', 'an optional description')
@enduml
```

