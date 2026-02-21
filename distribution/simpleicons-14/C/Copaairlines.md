# Copaairlines


```text
simpleicons-14/C/Copaairlines
```

```text
include('simpleicons-14/C/Copaairlines')
```



| Illustration | Copaairlines |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Copaairlines.png) | ![illustration for Copaairlines](../../simpleicons-14/C/Copaairlines.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CopaairlinesXs>`
- `<$CopaairlinesSm>`
- `<$CopaairlinesMd>`
- `<$CopaairlinesLg>`





## Copaairlines

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Copaairlines
include('simpleicons-14/C/Copaairlines')

' renders the element
Copaairlines('Copaairlines', 'Copaairlines', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Copaairlines
include('simpleicons-14/C/Copaairlines')

' renders the element
Copaairlines('Copaairlines', 'Copaairlines', 'an optional tech label', 'an optional description')
@enduml
```

