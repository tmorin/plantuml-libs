# Comma


```text
simpleicons-14/C/Comma
```

```text
include('simpleicons-14/C/Comma')
```



| Illustration | Comma |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Comma.png) | ![illustration for Comma](../../simpleicons-14/C/Comma.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CommaXs>`
- `<$CommaSm>`
- `<$CommaMd>`
- `<$CommaLg>`





## Comma

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Comma
include('simpleicons-14/C/Comma')

' renders the element
Comma('Comma', 'Comma', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Comma
include('simpleicons-14/C/Comma')

' renders the element
Comma('Comma', 'Comma', 'an optional tech label', 'an optional description')
@enduml
```

