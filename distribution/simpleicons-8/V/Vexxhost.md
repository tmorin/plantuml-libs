# Vexxhost


```text
simpleicons-8/V/Vexxhost
```

```text
include('simpleicons-8/V/Vexxhost')
```



| Illustration | Vexxhost |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/V/Vexxhost.png) | ![illustration for Vexxhost](../../simpleicons-8/V/Vexxhost.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VexxhostXs>`
- `<$VexxhostSm>`
- `<$VexxhostMd>`
- `<$VexxhostLg>`





## Vexxhost

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Vexxhost
include('simpleicons-8/V/Vexxhost')

' renders the element
Vexxhost('Vexxhost', 'Vexxhost', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Vexxhost
include('simpleicons-8/V/Vexxhost')

' renders the element
Vexxhost('Vexxhost', 'Vexxhost', 'an optional tech label', 'an optional description')
@enduml
```

