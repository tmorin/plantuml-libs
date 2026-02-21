# Dbeaver


```text
simpleicons-14/D/Dbeaver
```

```text
include('simpleicons-14/D/Dbeaver')
```



| Illustration | Dbeaver |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Dbeaver.png) | ![illustration for Dbeaver](../../simpleicons-14/D/Dbeaver.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DbeaverXs>`
- `<$DbeaverSm>`
- `<$DbeaverMd>`
- `<$DbeaverLg>`





## Dbeaver

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dbeaver
include('simpleicons-14/D/Dbeaver')

' renders the element
Dbeaver('Dbeaver', 'Dbeaver', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dbeaver
include('simpleicons-14/D/Dbeaver')

' renders the element
Dbeaver('Dbeaver', 'Dbeaver', 'an optional tech label', 'an optional description')
@enduml
```

