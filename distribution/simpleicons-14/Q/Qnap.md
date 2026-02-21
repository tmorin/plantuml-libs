# Qnap


```text
simpleicons-14/Q/Qnap
```

```text
include('simpleicons-14/Q/Qnap')
```



| Illustration | Qnap |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Q/Qnap.png) | ![illustration for Qnap](../../simpleicons-14/Q/Qnap.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QnapXs>`
- `<$QnapSm>`
- `<$QnapMd>`
- `<$QnapLg>`





## Qnap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Qnap
include('simpleicons-14/Q/Qnap')

' renders the element
Qnap('Qnap', 'Qnap', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Qnap
include('simpleicons-14/Q/Qnap')

' renders the element
Qnap('Qnap', 'Qnap', 'an optional tech label', 'an optional description')
@enduml
```

