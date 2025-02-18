# Codeigniter


```text
simpleicons-14/C/Codeigniter
```

```text
include('simpleicons-14/C/Codeigniter')
```



| Illustration | Codeigniter |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Codeigniter.png) | ![illustration for Codeigniter](../../simpleicons-14/C/Codeigniter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CodeigniterXs>`
- `<$CodeigniterSm>`
- `<$CodeigniterMd>`
- `<$CodeigniterLg>`





## Codeigniter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Codeigniter
include('simpleicons-14/C/Codeigniter')

' renders the element
Codeigniter('Codeigniter', 'Codeigniter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Codeigniter
include('simpleicons-14/C/Codeigniter')

' renders the element
Codeigniter('Codeigniter', 'Codeigniter', 'an optional tech label', 'an optional description')
@enduml
```

