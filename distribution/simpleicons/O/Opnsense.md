# Opnsense


```text
simpleicons/O/Opnsense
```

```text
include('simpleicons/O/Opnsense')
```



| Illustration | Opnsense |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Opnsense.png) | ![illustration for Opnsense](../../simpleicons/O/Opnsense.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpnsenseXs>`
- `<$OpnsenseSm>`
- `<$OpnsenseMd>`
- `<$OpnsenseLg>`





## Opnsense

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Opnsense
include('simpleicons/O/Opnsense')

' renders the element
Opnsense('Opnsense', 'Opnsense', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Opnsense
include('simpleicons/O/Opnsense')

' renders the element
Opnsense('Opnsense', 'Opnsense', 'an optional tech label', 'an optional description')
@enduml
```

