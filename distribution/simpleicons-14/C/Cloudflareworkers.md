# Cloudflareworkers


```text
simpleicons-14/C/Cloudflareworkers
```

```text
include('simpleicons-14/C/Cloudflareworkers')
```



| Illustration | Cloudflareworkers |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cloudflareworkers.png) | ![illustration for Cloudflareworkers](../../simpleicons-14/C/Cloudflareworkers.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudflareworkersXs>`
- `<$CloudflareworkersSm>`
- `<$CloudflareworkersMd>`
- `<$CloudflareworkersLg>`





## Cloudflareworkers

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cloudflareworkers
include('simpleicons-14/C/Cloudflareworkers')

' renders the element
Cloudflareworkers('Cloudflareworkers', 'Cloudflareworkers', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cloudflareworkers
include('simpleicons-14/C/Cloudflareworkers')

' renders the element
Cloudflareworkers('Cloudflareworkers', 'Cloudflareworkers', 'an optional tech label', 'an optional description')
@enduml
```

