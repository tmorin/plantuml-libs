# Myob


```text
simpleicons-14/M/Myob
```

```text
include('simpleicons-14/M/Myob')
```



| Illustration | Myob |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Myob.png) | ![illustration for Myob](../../simpleicons-14/M/Myob.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MyobXs>`
- `<$MyobSm>`
- `<$MyobMd>`
- `<$MyobLg>`





## Myob

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Myob
include('simpleicons-14/M/Myob')

' renders the element
Myob('Myob', 'Myob', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Myob
include('simpleicons-14/M/Myob')

' renders the element
Myob('Myob', 'Myob', 'an optional tech label', 'an optional description')
@enduml
```

