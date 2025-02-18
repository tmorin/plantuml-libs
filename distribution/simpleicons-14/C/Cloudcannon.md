# Cloudcannon


```text
simpleicons-14/C/Cloudcannon
```

```text
include('simpleicons-14/C/Cloudcannon')
```



| Illustration | Cloudcannon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cloudcannon.png) | ![illustration for Cloudcannon](../../simpleicons-14/C/Cloudcannon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudcannonXs>`
- `<$CloudcannonSm>`
- `<$CloudcannonMd>`
- `<$CloudcannonLg>`





## Cloudcannon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cloudcannon
include('simpleicons-14/C/Cloudcannon')

' renders the element
Cloudcannon('Cloudcannon', 'Cloudcannon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cloudcannon
include('simpleicons-14/C/Cloudcannon')

' renders the element
Cloudcannon('Cloudcannon', 'Cloudcannon', 'an optional tech label', 'an optional description')
@enduml
```

