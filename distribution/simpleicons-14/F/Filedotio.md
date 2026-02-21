# Filedotio


```text
simpleicons-14/F/Filedotio
```

```text
include('simpleicons-14/F/Filedotio')
```



| Illustration | Filedotio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Filedotio.png) | ![illustration for Filedotio](../../simpleicons-14/F/Filedotio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FiledotioXs>`
- `<$FiledotioSm>`
- `<$FiledotioMd>`
- `<$FiledotioLg>`





## Filedotio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Filedotio
include('simpleicons-14/F/Filedotio')

' renders the element
Filedotio('Filedotio', 'Filedotio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Filedotio
include('simpleicons-14/F/Filedotio')

' renders the element
Filedotio('Filedotio', 'Filedotio', 'an optional tech label', 'an optional description')
@enduml
```

