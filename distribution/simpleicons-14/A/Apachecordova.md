# Apachecordova


```text
simpleicons-14/A/Apachecordova
```

```text
include('simpleicons-14/A/Apachecordova')
```



| Illustration | Apachecordova |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Apachecordova.png) | ![illustration for Apachecordova](../../simpleicons-14/A/Apachecordova.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApachecordovaXs>`
- `<$ApachecordovaSm>`
- `<$ApachecordovaMd>`
- `<$ApachecordovaLg>`





## Apachecordova

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Apachecordova
include('simpleicons-14/A/Apachecordova')

' renders the element
Apachecordova('Apachecordova', 'Apachecordova', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Apachecordova
include('simpleicons-14/A/Apachecordova')

' renders the element
Apachecordova('Apachecordova', 'Apachecordova', 'an optional tech label', 'an optional description')
@enduml
```

