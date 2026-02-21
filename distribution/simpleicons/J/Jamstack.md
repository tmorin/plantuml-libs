# Jamstack


```text
simpleicons/J/Jamstack
```

```text
include('simpleicons/J/Jamstack')
```



| Illustration | Jamstack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/J/Jamstack.png) | ![illustration for Jamstack](../../simpleicons/J/Jamstack.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JamstackXs>`
- `<$JamstackSm>`
- `<$JamstackMd>`
- `<$JamstackLg>`





## Jamstack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Jamstack
include('simpleicons/J/Jamstack')

' renders the element
Jamstack('Jamstack', 'Jamstack', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jamstack
include('simpleicons/J/Jamstack')

' renders the element
Jamstack('Jamstack', 'Jamstack', 'an optional tech label', 'an optional description')
@enduml
```

