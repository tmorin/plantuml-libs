# Edgeimpulse


```text
simpleicons-14/E/Edgeimpulse
```

```text
include('simpleicons-14/E/Edgeimpulse')
```



| Illustration | Edgeimpulse |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Edgeimpulse.png) | ![illustration for Edgeimpulse](../../simpleicons-14/E/Edgeimpulse.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EdgeimpulseXs>`
- `<$EdgeimpulseSm>`
- `<$EdgeimpulseMd>`
- `<$EdgeimpulseLg>`





## Edgeimpulse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Edgeimpulse
include('simpleicons-14/E/Edgeimpulse')

' renders the element
Edgeimpulse('Edgeimpulse', 'Edgeimpulse', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Edgeimpulse
include('simpleicons-14/E/Edgeimpulse')

' renders the element
Edgeimpulse('Edgeimpulse', 'Edgeimpulse', 'an optional tech label', 'an optional description')
@enduml
```

